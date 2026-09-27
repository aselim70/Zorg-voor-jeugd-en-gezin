import Link from "next/link";
import { ContentPage as ContentPageData } from "@/lib/pages";
import { Container, Eyebrow, ButtonPrimary } from "./ui";
import { IconArrowRight, IconCheck, IconSeedling } from "./Icons";
import { CtaBanner } from "./CtaBanner";

export function PageHero({ label, title, accent, intro }: { label: string; title: string; accent?: string; intro: string }) {
  return <section className="page-hero"><Container><nav className="breadcrumb" aria-label="Broodkruimel"><Link href="/">Home</Link><IconArrowRight aria-hidden="true" /><span aria-current="page">{label}</span></nav><Eyebrow>{label}</Eyebrow><h1>{title}{accent && <><br /><em>{accent}</em></>}</h1><p className="lead">{intro}</p></Container></section>;
}

export function ContentPage({ page }: { page: ContentPageData }) {
  return <><PageHero {...page} /><section className="section"><Container className="detail-grid"><div>{page.sections.map(section => <section key={section.title} id={section.id} className="content-block"><h2>{section.title}</h2>{section.paragraphs.map(p => <p key={p}>{p}</p>)}{section.points && <ul className="check-list">{section.points.map(point => <li key={point}><IconCheck aria-hidden="true" /><span>{point}</span></li>)}</ul>}</section>)}</div><aside className="detail-aside"><IconSeedling aria-hidden="true" /><h2>{page.asideTitle}</h2><p>{page.asideText}</p><ButtonPrimary href="/contact">Neem contact op</ButtonPrimary><div className="aside-links"><Link href="/werkwijze">Zo werken we samen</Link><Link href="/diensten">Bekijk alle begeleiding</Link></div></aside></Container></section>{page.faqs && <section className="section faq-section"><Container><h2>Goed om te weten</h2>{page.faqs.map(faq => <details className="faq" key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</Container></section>}<CtaBanner /></>;
}
