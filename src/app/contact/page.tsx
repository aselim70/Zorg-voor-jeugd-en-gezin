import type { Metadata } from "next";
import { PageHero } from "@/components/ContentPage";
import { Container, Eyebrow } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";
import { IconMail } from "@/components/Icons";
import { SITE } from "@/lib/site";
import { RegistrationDetails } from "@/components/RegistrationDetails";
export const metadata: Metadata = { title: "Contact", description: "Neem vrijblijvend contact op met Zorg voor Jeugd en Gezin. Samen bespreken we jouw vraag en de mogelijkheden voor passende begeleiding." };
export default function Contact() {
  return <><PageHero label="Contact" title="De eerste stap?" accent="Gewoon even kennismaken." intro="Heb je een vraag over begeleiding voor jezelf, een jongere, gezin of cliënt? Je bent welkom om contact op te nemen. Samen kijken we naar de situatie en de mogelijkheden." /><section className="section"><Container className="contact-grid"><div className="contact-info"><Eyebrow>We horen graag van je</Eyebrow><h2>Het begint met<br />jouw verhaal.</h2><p>Je hoeft nog niet precies te weten welke begeleiding je zoekt. Vertel gerust kort wat er speelt of waar je vragen over hebt.</p><div className="email-card"><IconMail aria-hidden="true" /><div><small>Mail rechtstreeks naar</small><a href={`mailto:${SITE.email}`}>{SITE.email}</a></div></div><RegistrationDetails /><h3>Ben je verwijzer of professional?</h3><p>Ook voor een mogelijke samenwerking of het bespreken van inzetbaarheid kun je hier terecht. Vermeld in je bericht je organisatie en de aard van je vraag, zonder herleidbare cliëntgegevens.</p><div className="small-note"><h3>Wat gebeurt er daarna?</h3><p>Na ontvangst van je e-mail bespreken we je vraag en stemmen we een kennismaking af. Beschikbaarheid, passende begeleiding en praktische afspraken worden persoonlijk besproken.</p></div><div className="small-note"><h3>Dringende hulp nodig?</h3><p>Deze website en het e-mailadres zijn niet bedoeld voor acute crisishulp. Neem bij direct gevaar contact op met 112. Neem voor een urgente zorgvraag contact op met je huisarts, huisartsenpost of betrokken hulpverlener.</p></div></div><ContactForm /></Container></section></>;
}

