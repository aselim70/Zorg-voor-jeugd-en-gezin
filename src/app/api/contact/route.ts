import nodemailer from "nodemailer";
import { createHash } from "node:crypto";
import { SITE } from "@/lib/site";

export const runtime = "nodejs";
const topics = new Set(["Kennismaken", "Jeugdzorg", "Gezinsbegeleiding", "Overige begeleiding", "Verwijzing of samenwerking", "Privacy"]);
// Best-effort protection per server instance; no message content is retained.
const attempts = new Map<string, number>();
const reply = (error: string, status: number) => Response.json({ error }, { status });

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
