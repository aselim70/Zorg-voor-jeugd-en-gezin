"use client";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { SITE } from "@/lib/site";
import { IconArrowRight } from "./Icons";

export function ContactForm() {
  const [draft, setDraft] = useState<{ href: string; text: string } | null>(null);
  const [copyStatus, setCopyStatus] = useState("");
  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const messageField = event.currentTarget.elements.namedItem("message") as HTMLTextAreaElement;
    if (String(form.get("message")).trim().length < 10) {
      messageField.setCustomValidity("Omschrijf je vraag in minimaal 10 tekens, zonder alleen spaties te gebruiken.");
      messageField.reportValidity();
      return;
    }
    const text = `Naam: ${String(form.get("name")).trim()}\nE-mailadres: ${String(form.get("email")).trim()}\nTelefoon: ${String(form.get("phone")).trim() || "Niet opgegeven"}\n\n${String(form.get("message")).trim()}`;
    const href = `mailto:${SITE.email}?subject=${encodeURIComponent(`Kennismaking — ${form.get("topic")}`)}&body=${encodeURIComponent(text)}`;
    setDraft({ href, text });
    setCopyStatus("");
    window.location.href = href;
  }
  async function copyDraft() {
    if (!draft) return;
    try { await navigator.clipboard.writeText(draft.text); setCopyStatus("Je bericht is gekopieerd."); }
    catch { setCopyStatus("Kopiëren is niet gelukt. Je kunt het bericht hieronder selecteren en zelf kopiëren."); }
  }
  return <form className="contact-form" onSubmit={prepareEmail} onChange={() => { setDraft(null); setCopyStatus(""); }}>
    <h2>Vertel waar je naar op zoek bent.</h2><p className="form-intro">Vul je gegevens in. We zetten je bericht klaar in je eigen e-mailprogramma, waar je het zelf kunt versturen.</p>
    <div className="form-grid">
      <div className="field"><label htmlFor="name">Naam *</label><input id="name" name="name" autoComplete="name" placeholder="Je naam" required maxLength={100} pattern=".*\S.*" /></div>
      <div className="field"><label htmlFor="email">E-mailadres *</label><input id="email" name="email" type="email" autoComplete="email" placeholder="naam@voorbeeld.nl" required maxLength={160} /></div>
      <div className="field"><label htmlFor="phone">Telefoonnummer (optioneel)</label><input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="Je telefoonnummer" maxLength={30} /></div>
      <div className="field"><label htmlFor="topic">Waar gaat je vraag over?</label><select id="topic" name="topic" defaultValue="Kennismaken"><option>Kennismaken</option><option>Jeugdzorg</option><option>Gezinsbegeleiding</option><option>Overige begeleiding</option><option>Verwijzing of samenwerking</option><option>Privacy</option></select></div>
      <div className="field wide"><label htmlFor="message">Je bericht *</label><textarea id="message" name="message" rows={5} required minLength={10} maxLength={1500} onInput={event => event.currentTarget.setCustomValidity("")} aria-describedby="message-note" placeholder="Vertel kort wat je vraag is of welke begeleiding je zoekt." /></div>
    </div>
    <p id="message-note" className="form-note">Deel hier geen medische informatie, BSN of cliëntdossiers. Een korte omschrijving van je vraag is voldoende.</p>
    <button className="button button-primary" type="submit">Open mijn e-mailconcept <IconArrowRight aria-hidden="true" /></button>
    <p className="form-note">* Verplicht veld. De website bewaart je bericht niet. Lees meer over <Link href="/privacy">privacy</Link>.</p>
    {draft && <div className="form-status"><div role="status"><strong>Je e-mailconcept staat klaar.</strong><p>Verstuur het bericht zelf vanuit je e-mailprogramma. Er is via deze website nog niets verzonden.</p></div><a href={draft.href}>Open het concept opnieuw</a><p>Geen e-mailprogramma geopend? Kopieer je bericht en mail het naar <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p><button className="button button-secondary" type="button" onClick={copyDraft}>Kopieer mijn bericht</button><p role="status">{copyStatus}</p><details><summary>Bekijk mijn bericht</summary><p style={{ whiteSpace: "pre-wrap", overflowWrap: "anywhere" }}>{draft.text}</p></details></div>}
  </form>;
}
