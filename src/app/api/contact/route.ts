import nodemailer from "nodemailer";
import { createHash } from "node:crypto";
import { SITE } from "@/lib/site";

export const runtime = "nodejs";
const topics = new Set(["Kennismaken", "Jeugdzorg", "Gezinsbegeleiding", "Overige begeleiding", "Verwijzing of samenwerking", "Privacy"]);
// Best-effort protection per server instance; no message content is retained.
const attempts = new Map<string, number>();
const reply = (error: string, status: number) => Response.json({ error }, { status });

function contactEmail(name: string, email: string, phone: string, topic: string, message: string) {
  // All visitor-provided content must remain text, never HTML or attributes.
  const escape = (text: string) => text.replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]!);
  const labelStyle = "padding:0 0 5px;color:#697068;font-size:12px;font-weight:bold;letter-spacing:0.5px;";
  const valueStyle = "padding:0 0 20px;color:#283d32;font-size:16px;line-height:1.6;word-break:break-word;overflow-wrap:anywhere;";
  return `<!doctype html>
<html lang="nl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Nieuwe contactaanvraag</title></head>
<body style="margin:0;padding:0;background-color:#f8f7f2;font-family:Arial,Helvetica,sans-serif;color:#283d32;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#f8f7f2"><tr><td align="center" style="padding:24px 12px;">
    <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="width:100%;max-width:600px;border:1px solid #dfe3d9;border-radius:12px;overflow:hidden;background-color:#fffefa;">
      <tr><td bgcolor="#294c3c" style="padding:30px 28px;background-color:#294c3c;">
        <p style="margin:0 0 16px;color:#dce7d6;font-size:13px;line-height:1.5;">${escape(SITE.name)}</p>
        <h1 style="margin:0 0 12px;color:#ffffff;font-family:Georgia,'Times New Roman',serif;font-size:30px;font-weight:normal;line-height:1.25;">Nieuwe contactaanvraag</h1>
        <p style="margin:0;color:#eaf0e7;font-size:15px;line-height:1.6;">Onderwerp: <strong>${escape(topic)}</strong></p>
      </td></tr>
      <tr><td style="padding:28px 28px 8px;">
        <h2 style="margin:0 0 20px;color:#294c3c;font-size:18px;line-height:1.4;">Contactgegevens</h2>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="table-layout:fixed;">
          <tr><td style="${labelStyle}">Naam</td></tr>
          <tr><td style="${valueStyle}">${escape(name)}</td></tr>
          <tr><td style="${labelStyle}">E-mailadres</td></tr>
          <tr><td style="${valueStyle}"><a href="mailto:${escape(encodeURIComponent(email))}" style="color:#294c3c;text-decoration:underline;">${escape(email)}</a></td></tr>
          <tr><td style="${labelStyle}">Telefoonnummer</td></tr>
          <tr><td style="${valueStyle}">${escape(phone || "Niet opgegeven")}</td></tr>
        </table>
      </td></tr>
      <tr><td style="padding:0 28px 28px;">
        <h2 style="margin:0 0 14px;color:#294c3c;font-size:18px;line-height:1.4;">Bericht</h2>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="table-layout:fixed;"><tr>
          <td bgcolor="#eaf0e7" style="padding:20px;background-color:#eaf0e7;border-left:3px solid #71806a;color:#283d32;font-size:16px;line-height:1.8;word-break:break-word;overflow-wrap:anywhere;">${escape(message).replace(/\r\n|\r|\n/g, "<br>")}</td>
        </tr></table>
      </td></tr>
      <tr><td style="padding:20px 28px;border-top:1px solid #dfe3d9;">
        <p style="margin:0 0 7px;color:#294c3c;font-size:14px;font-weight:bold;line-height:1.6;">Wil je reageren?</p>
        <p style="margin:0;color:#697068;font-size:13px;line-height:1.7;">Klik op Beantwoorden in je mailprogramma. Je antwoord gaat rechtstreeks naar ${escape(name)}.</p>
      </td></tr>
    </table>
    <p style="max-width:540px;margin:16px 0 0;color:#697068;font-size:12px;line-height:1.7;">Ontvangen via het contactformulier van ${escape(SITE.name)}.</p>
  </td></tr></table>
</body></html>`;
}

export async function POST(request: Request) {
  if (request.headers.get("origin") !== new URL(request.url).origin) return reply("Verstuur je bericht via het formulier op deze website.", 403);
  if (!request.headers.get("content-type")?.startsWith("application/json")) return reply("Ongeldig bericht.", 415);
  let data: Record<string, unknown>;
  try {
    const reader = request.body?.getReader();
    if (!reader) return reply("Vul het formulier in.", 400);
    const chunks: Uint8Array[] = [];
    let size = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 12000) {
        await reader.cancel();
        return reply("Je bericht is te lang.", 413);
      }
      chunks.push(value);
    }
    data = JSON.parse(Buffer.concat(chunks).toString("utf8"));
    if (!data || typeof data !== "object" || Array.isArray(data)) throw new Error("Invalid data");
  } catch {
    return reply("Ongeldig bericht. Probeer het opnieuw.", 400);
  }
  if (data.website) return reply("Je bericht kon niet worden verstuurd.", 400);
  const value = (key: string) => typeof data[key] === "string" ? data[key].trim() : "";
  const name = value("name"), email = value("email"), phone = value("phone");
  const topic = value("topic"), message = value("message");
  if (!name || name.length > 100 || /[\r\n]/.test(name) || email.length > 160 ||
      !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email) || phone.length > 30 ||
      /[\r\n]/.test(phone) || !topics.has(topic) || message.length < 10 || message.length > 1500) {
    return reply("Controleer je naam, e-mailadres en bericht (10 tot 1500 tekens).", 400);
  }
  const host = process.env.SMTP_HOST, user = process.env.SMTP_USER, pass = process.env.SMTP_PASS;
  const port = Number(process.env.SMTP_PORT || 465);
  if (!host || !user || !pass || ![465, 587].includes(port)) {
    return reply(`Verzenden via het formulier is tijdelijk niet beschikbaar. Mail rechtstreeks naar ${SITE.email}.`, 503);
  }
  const now = Date.now();
  for (const [key, time] of attempts) if (now - time >= 60000) attempts.delete(key);
  const key = createHash("sha256").update(email.toLowerCase()).digest("hex");
  if (attempts.has(key) || attempts.size >= 30) return reply("Wacht een minuut voordat je opnieuw een bericht verstuurt.", 429);
  attempts.set(key, now);
  const transporter = nodemailer.createTransport({
    host, port, secure: port === 465, requireTLS: true, auth: { user, pass },
    connectionTimeout: 10000, greetingTimeout: 10000, socketTimeout: 20000,
  });
  try {
    const result = await transporter.sendMail({
      from: { name: SITE.name, address: user }, to: SITE.email,
      replyTo: { name, address: email }, subject: `Contact website — ${topic}`,
      text: `Naam: ${name}\nE-mailadres: ${email}\nTelefoon: ${phone || "Niet opgegeven"}\nOnderwerp: ${topic}\n\n${message}`,
      html: contactEmail(name, email, phone, topic, message),
      disableFileAccess: true, disableUrlAccess: true,
    });
    if (!result.accepted?.length) throw new Error("Message not accepted");
    return Response.json({ success: true });
  } catch {
    return reply(`Versturen is niet gelukt. Probeer het later opnieuw of mail rechtstreeks naar ${SITE.email}.`, 502);
  } finally {
    transporter.close();
  }
}
