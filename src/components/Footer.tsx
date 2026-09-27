import Image from "next/image";
import Link from "next/link";
import { IconArrowRight } from "./Icons";
import { NAV_LINKS, SERVICES, SITE } from "@/lib/site";
import { Container } from "./ui";
import { RegistrationDetails } from "./RegistrationDetails";

export function Footer() {
  return <footer className="site-footer"><Container>
    <div className="footer-grid">
      <div><Link href="/" className="brand"><Image src="/logo-zorg-voor-jeugd-en-gezin.png" alt={SITE.name} width={228} height={76} sizes="(max-width: 767px) 180px, (max-width: 1150px) 198px, 228px" /></Link><p>Een vertrouwd gezicht.<br />Aandacht voor jouw verhaal.<br />Samen werken aan morgen.</p></div>
      <div><h2>Ontdek</h2>{NAV_LINKS.slice(1).map(link => <Link href={link.href} key={link.href}>{link.label}</Link>)}</div>
      <div><h2>Onze begeleiding</h2>{SERVICES.map(service => <Link href={service.href} key={service.slug}>{service.title}</Link>)}</div>
      <div className="footer-contact"><h2>Laten we kennismaken</h2><p>Een eerste gesprek begint<br />met jouw verhaal.</p><a href={`mailto:${SITE.email}`}>{SITE.email}</a><Link href="/contact" className="text-link">Neem contact op <IconArrowRight aria-hidden="true" /></Link></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} {SITE.name}</span><RegistrationDetails className="footer-registrations" /><Link href="/privacy">Privacy</Link></div>
  </Container></footer>;
}
