"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { IconArrowRight, IconMenu, IconClose, IconShield } from "./Icons";
import { NAV_LINKS, SITE } from "@/lib/site";
import { Container } from "./ui";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  function active(href: string) {
    return pathname === href || (href === "/diensten" && ["/jeugdzorg", "/gezinsbegeleiding", "/overige-begeleiding"].includes(pathname));
  }
  return <>
    <div className="topbar"><Container><span>Persoonlijke aandacht. Professionele begeleiding.</span><span><IconShield aria-hidden="true" /> SKJ-geregistreerd</span></Container></div>
    <header className="site-header" onKeyDown={(event) => { if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); } }}>
      <Container className="header-inner">
        <Link href="/" className="brand" aria-label={`${SITE.name} — naar de homepage`} onClick={() => setOpen(false)}>
          <Image src="/logo-zorg-voor-jeugd-en-gezin.png" alt={SITE.name} width={228} height={76} sizes="(max-width: 767px) 180px, (max-width: 1150px) 198px, 228px" preload />
        </Link>
        <nav className="desktop-nav" aria-label="Hoofdnavigatie">{NAV_LINKS.map(link => <Link key={link.href} href={link.href} aria-current={active(link.href) ? "page" : undefined}>{link.label}</Link>)}</nav>
        <Link href="/contact" className="button button-primary header-contact">Neem contact op <IconArrowRight aria-hidden="true" /></Link>
        <button ref={toggle} className="menu-toggle" type="button" aria-label={open ? "Menu sluiten" : "Menu openen"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <IconClose /> : <IconMenu />}</button>
      </Container>
      <nav id="mobile-menu" className="mobile-nav" aria-label="Mobiele navigatie" hidden={!open}>
        <Container>{[...NAV_LINKS, { href: "/contact", label: "Neem contact op" }].map(link => <Link key={link.href} href={link.href} aria-current={active(link.href) ? "page" : undefined} onClick={() => setOpen(false)}>{link.label}<IconArrowRight aria-hidden="true" /></Link>)}</Container>
      </nav>
    </header>
  </>;
}
