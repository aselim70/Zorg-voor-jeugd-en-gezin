import Image from "next/image";
import Link from "next/link";
import { IconMail, IconPhone, IconPin, IconClock } from "./Icons";
import { NAV_LINKS, SERVICES, SITE } from "@/lib/site";
import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/images/logo.png"
            alt={SITE.name}
            width={434}
            height={496}
            className="h-24 w-auto"
          />
          <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-text-secondary">
            Professionele begeleiding voor jeugd en gezin, met een persoonlijke aanpak en korte lijnen.
          </p>
        </div>

        <div>
          <div className="text-[13px] font-bold uppercase tracking-wide text-text-muted">
            Navigatie
          </div>
          <ul className="mt-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[14px] font-medium text-text-secondary hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-[13px] font-bold uppercase tracking-wide text-text-muted">
            Diensten
          </div>
          <ul className="mt-4 space-y-3">
            {SERVICES.slice(0, 5).map((service) => (
              <li key={service.slug}>
                <Link
                  href="/diensten"
                  className="text-[14px] font-medium text-text-secondary hover:text-accent"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-[13px] font-bold uppercase tracking-wide text-text-muted">
            Contact
          </div>
          <ul className="mt-4 space-y-3 text-[14px] text-text-secondary">
            <li className="flex items-start gap-2.5">
              <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              {SITE.address}
            </li>
            <li className="flex items-start gap-2.5">
              <IconPhone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={`tel:${SITE.phoneHref}`} className="hover:text-accent">
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <IconMail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={`mailto:${SITE.email}`} className="hover:text-accent">
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <IconClock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              {SITE.hours}
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-[13px] text-text-muted sm:flex-row">
          <span>
            &copy; {new Date().getFullYear()} {SITE.name}. Alle rechten voorbehouden.
          </span>
          <span>KvK {SITE.kvk}</span>
        </Container>
      </div>
    </footer>
  );
}
