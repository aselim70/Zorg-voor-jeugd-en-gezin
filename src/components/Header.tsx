"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IconMenu, IconClose, IconPhone } from "./Icons";
import { NAV_LINKS, SITE } from "@/lib/site";
import { Container } from "./ui";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo-mark.png"
            alt=""
            width={302}
            height={304}
            loading="eager"
            className="h-11 w-auto"
          />
          <span className="text-[15px] font-extrabold leading-tight text-text sm:text-base">
            {SITE.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[14px] font-semibold transition-colors ${
                  active ? "text-accent" : "text-text hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href={`tel:${SITE.phoneHref}`}
            className="flex items-center gap-2 text-[14px] font-semibold text-text-secondary hover:text-accent"
          >
            <IconPhone className="h-4 w-4" />
            {SITE.phone}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-accent px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Neem contact op
          </Link>
        </div>

        <button
          type="button"
          aria-label="Menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-text md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-border bg-surface md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-[15px] font-semibold ${
                    active ? "bg-accent-soft text-accent" : "text-text"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-accent px-5 py-3 text-[15px] font-semibold text-white"
            >
              Neem contact op
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
