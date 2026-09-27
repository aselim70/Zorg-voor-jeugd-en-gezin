import Image from "next/image";
import Link from "next/link";
import { Container, Eyebrow, ButtonPrimary, ButtonSecondary, SectionHeading } from "@/components/ui";
import { CtaBanner } from "@/components/CtaBanner";
import { ServiceCards } from "@/components/ServiceCards";
import { Process } from "@/components/Process";
import { DynamicIcon } from "@/components/IconMap";
import { IconArrowRight, IconCheck, IconSeedling } from "@/components/Icons";
import { USPS, VALUES } from "@/lib/site";

export default function Home() {
  return <>
    <section className="hero">
      <Container className="hero-grid">
        <div className="hero-copy">
          <Eyebrow>Voor jongeren, gezinnen en hun toekomst</Eyebrow>
          <h1>Samen verder,<br /><em>op jouw manier.</em></h1>
          <p className="hero-subtitle">Persoonlijke begeleiding voor jongeren en gezinnen.</p>
          <p className="hero-description">Soms heb je iemand nodig die naast je staat. Die luistert, meedenkt en helpt om weer vooruit te kijken. Met aandacht voor wie jij bent en wat jij nodig hebt.</p>
          <div className="hero-actions"><ButtonPrimary href="/contact">Neem contact op</ButtonPrimary><ButtonSecondary href="#begeleiding">Ontdek onze begeleiding</ButtonSecondary></div>
          <div className="hero-note"><span><IconCheck aria-hidden="true" /></span>Een eerste kennismaking is altijd vrijblijvend.</div>
        </div>
        <div className="hero-visual">
          <div className="hero-image"><Image src="/persoonlijke-begeleiding.webp" alt="Illustratief beeld van een begeleider die aandachtig luistert naar een jongere" fill sizes="(max-width: 767px) 90vw, 46vw" preload /><div className="image-caption"><span className="caption-line" />Kleine stappen. Nieuwe perspectieven.</div></div>
          <div className="growth-seal"><IconSeedling aria-hidden="true" /><span>Ruimte om<br /><strong>te groeien</strong></span></div>
          <div className="hero-quote"><span className="quote-mark">“</span><p>Je hoeft het niet<br /><strong>alleen te doen.</strong></p><span className="quote-rule" /></div>
          <svg className="hero-scribble" viewBox="0 0 100 100" fill="none" aria-hidden="true"><path d="M20 75C60 85 88 47 59 25C35 7 8 41 34 63C54 78 83 57 88 19M68 21L89 14L93 38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
        </div>
      </Container>
    </section>
    <section className="trust-strip" aria-label="Wat je kunt verwachten"><Container>{USPS.map(item => <div className="trust-item" key={item.title}><DynamicIcon name={item.icon} aria-hidden="true" /><div><h2>{item.title}</h2><p>{item.description}</p></div></div>)}</Container></section>
    <section className="section services-section" id="begeleiding"><Container>
      <div className="section-top"><SectionHeading eyebrow="Waarmee kunnen we helpen?" title={<>Begeleiding die past.<br /><em>Bij jou en jouw leven.</em></>} /><p>Iedere situatie is anders. Daarom kijken we samen naar wat er nodig is. Van een steuntje in de rug tot begeleiding bij een complexe situatie.</p></div>
      <ServiceCards />
      <div className="services-footnote"><span>Twijfel je welke begeleiding aansluit bij jouw vraag?</span><Link className="text-link" href="/contact">We denken graag met je mee <IconArrowRight aria-hidden="true" /></Link></div>
    </Container></section>
    <section className="about-section section"><Container className="about-grid">
      <div className="about-visual"><Image src="/gezinsbegeleiding.webp" alt="Illustratief beeld van een begeleider in gesprek met een moeder en haar dochter" fill sizes="(max-width: 767px) 90vw, 42vw" /><div className="about-image-note"><IconSeedling aria-hidden="true" /><span>Oog voor de mens.<br /><strong>Ruimte voor mogelijkheden.</strong></span></div></div>
      <div className="about-copy"><SectionHeading eyebrow="Aangenaam, jouw vaste begeleider" title={<>Een mens achter de zorg.<br /><em>Een mens vóór je.</em></>} /><p>Bij Zorg voor Jeugd en Gezin heb je contact met één betrokken, zelfstandige begeleider. Iemand die jouw verhaal leert kennen en met je meeloopt. Met deskundigheid in de jeugdzorg en aandacht voor het hele gezin.</p><blockquote>“Ik zie niet alleen een dossier of een hulpvraag. Ik zie een mens met een eigen verhaal, talenten en mogelijkheden. Daar begint voor mij goede begeleiding.”</blockquote><p>We bouwen aan vertrouwen, bepalen samen haalbare doelen en staan stil bij iedere stap vooruit. Hoe klein die soms ook is.</p><Link href="/over-ons" className="text-link">Meer over mij en mijn visie <IconArrowRight aria-hidden="true" /></Link></div>
    </Container></section>
    <section className="section approach-section"><Container>
      <div className="section-top"><SectionHeading eyebrow="Zo werken we samen" title={<>Van een eerste gesprek<br /><em>naar een volgende stap.</em></>} /><div><p>Een duidelijke aanpak, met ruimte voor jouw tempo. Je weet waar je aan toe bent en beslist mee over de begeleiding.</p><Link href="/werkwijze" className="text-link">Bekijk onze werkwijze <IconArrowRight aria-hidden="true" /></Link></div></div>
      <Process />
    </Container></section>
    <section className="quote-section"><Container><IconSeedling aria-hidden="true" /><Eyebrow>Vertrouwen in de weg vooruit</Eyebrow><h2>Geen dal is te diep en<br />geen berg is <em>te hoog.</em></h2><p>Ook als de weg moeilijk is, zoeken we samen naar mogelijkheden.<br />Met rust, betrokkenheid en de bereidheid om door te gaan.</p></Container><span className="quote-orbit orbit-one" /><span className="quote-orbit orbit-two" /></section>
    <section className="section values-section"><Container><SectionHeading eyebrow="Hier kun je op rekenen" title={<>Betrokken vanuit het hart.<br /><em>Deskundig in de aanpak.</em></>} align="center" /><div className="values-grid">{VALUES.map(value => <div className="value-item" key={value.title}><DynamicIcon name={value.icon} aria-hidden="true" /><div><h3>{value.title}</h3><p>{value.description}</p></div></div>)}</div><div className="professional-note"><span>Ben je verwijzer of zorgprofessional?</span><Link href="/voor-verwijzers" className="text-link">Ontdek de mogelijkheden voor samenwerking <IconArrowRight aria-hidden="true" /></Link></div></Container></section>
    <CtaBanner />
  </>;
}
