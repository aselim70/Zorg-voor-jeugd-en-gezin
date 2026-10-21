"use client";
import Link from "next/link";
import { useRef, useState, type FormEvent } from "react";
import { SITE } from "@/lib/site";
import { IconArrowRight } from "./Icons";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const sending = useRef(false);
  async function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;
    const element = event.currentTarget;
    const form = new FormData(element);
    const messageField = element.elements.namedItem("message") as HTMLTextAreaElement;
    if (String(form.get("message")).trim().length < 10) {
      messageField.setCustomValidity("Omschrijf je vraag in minimaal 10 tekens, zonder alleen spaties te gebruiken.");
      messageField.reportValidity();
      return;
    }
    sending.current = true;
    setStatus("sending");
    setError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(form)), signal: AbortSignal.timeout(45000),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.error || "Versturen is niet gelukt. Probeer het later opnieuw.");
      element.reset();
      setStatus("success");
    } catch (cause) {
      setError(cause instanceof Error && cause.name === "Error" ? cause.message : "We konden de verzending niet bevestigen. Je ingevulde bericht is bewaard in het formulier. Probeer het later opnieuw of mail ons rechtstreeks.");
      setStatus("error");
    } finally { sending.current = false; }
  }
  return <form className="contact-form" onSubmit={sendMessage} aria-busy={status === "sending"} onChange={() => { if (!sending.current) setStatus("idle"); }}>
    <h2>Vertel waar je naar op zoek bent.</h2><p className="form-intro">Vul je gegevens in. Je bericht wordt rechtstreeks naar <a href={`mailto:${SITE.email}`}>{SITE.email}</a> verstuurd.</p>
    <fieldset disabled={status === "sending"} style={{ border: 0, padding: 0, margin: 0, minWidth: 0 }}>
    <div className="form-grid">
      <div className="field"><label htmlFor="name">Naam *</label><input id="name" name="name" autoComplete="name" placeholder="Je naam" required maxLength={100} pattern=".*\S.*" /></div>
      <div className="field"><label htmlFor="email">E-mailadres *</label><input id="email" name="email" type="email" autoComplete="email" placeholder="naam@voorbeeld.nl" required maxLength={160} /></div>
      <div className="field"><label htmlFor="phone">Telefoonnummer (optioneel)</label><input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="Je telefoonnummer" maxLength={30} /></div>
      <div className="field"><label htmlFor="topic">Waar gaat je vraag over?</label><select id="topic" name="topic" defaultValue="Kennismaken"><option>Kennismaken</option><option>Jeugdzorg</option><option>Gezinsbegeleiding</option><option>Overige begeleiding</option><option>Verwijzing of samenwerking</option><option>Privacy</option></select></div>
      <div className="field wide"><label htmlFor="message">Je bericht *</label><textarea id="message" name="message" rows={5} required minLength={10} maxLength={1500} onInput={event => event.currentTarget.setCustomValidity("")} aria-describedby="message-note" placeholder="Vertel kort wat je vraag is of welke begeleiding je zoekt." /></div>
    </div>
    <div hidden aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
    <p id="message-note" className="form-note">Deel hier geen medische informatie, BSN of cliëntdossiers. Een korte omschrijving van je vraag is voldoende.</p>
    <button className="button button-primary" type="submit" disabled={status === "sending"}>{status === "sending" ? "Bezig met versturen…" : "Verstuur mijn bericht"} <IconArrowRight aria-hidden="true" /></button>
    </fieldset>
    <p className="form-note">* Verplicht veld. We gebruiken je gegevens om je vraag te beantwoorden. Lees meer over <Link href="/privacy">privacy</Link>.</p>
    <div aria-live="polite" aria-atomic="true">{status === "success" && <div className="form-status"><strong>Bedankt! Je bericht is verstuurd.</strong><p>We nemen contact met je op via de gegevens die je hebt ingevuld.</p></div>}</div>
    {status === "error" && <div className="form-status" role="alert"><p>{error}</p><p>Je kunt ook mailen naar <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p></div>}
  </form>;
}
