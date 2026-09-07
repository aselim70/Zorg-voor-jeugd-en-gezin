import Link from "next/link";
import { Container, Eyebrow, ButtonPrimary, ButtonSecondary, SectionHeading, Card, IconTile } from "@/components/ui";
import { HeroArt } from "@/components/HeroArt";
import { CtaBanner } from "@/components/CtaBanner";
import { DynamicIcon } from "@/components/IconMap";
import { IconArrowRight, IconCheck } from "@/components/Icons";
import { SERVICES, USPS, SITE } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden pt-16 pb-8 sm:pt-20">
        <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <Eyebrow>Professionele jeugd- &amp; gezinszorg</Eyebrow>
            <h1 className="text-4xl font-extrabold leading-[1.12] text-text sm:text-5xl">
              {SITE.tagline} voor uw gezin
            </h1>
            <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-text-secondary">
              {SITE.name} biedt persoonlijke begeleiding aan jongeren, ouders en gezinnen —
              met een vaste begeleider, korte lijnen en een aanpak die past bij uw situatie.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonPrimary href="/contact">Maak een afspraak</ButtonPrimary>
              <ButtonSecondary href="/diensten">Onze diensten</ButtonSecondary>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-[13.5px] font-medium text-text-secondary">
              <span className="flex items-center gap-2">
                <IconCheck className="h-4 w-4 text-accent" /> Gecertificeerde begeleiders
              </span>
              <span className="flex items-center gap-2">
                <IconCheck className="h-4 w-4 text-accent" /> Werkzaam in de regio
              </span>
              <span className="flex items-center gap-2">
                <IconCheck className="h-4 w-4 text-accent" /> Korte wachttijd
              </span>
            </div>
          </div>

          <HeroArt />
        </Container>
      </section>

      {/* USP bar */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 rounded-2xl border border-border bg-surface p-8 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:p-10">
            {USPS.map((usp, i) => (
              <div
                key={usp.title}
                className={`flex items-start gap-4 ${i > 0 ? "sm:border-l sm:border-border sm:pl-8" : ""}`}
              >
                <IconTile>
                  <DynamicIcon name={usp.icon} className="h-6 w-6" />
                </IconTile>
                <div>
                  <div className="text-[15px] font-bold text-text">{usp.title}</div>
                  <div className="mt-1 text-[13.5px] leading-relaxed text-text-secondary">
                    {usp.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Diensten preview */}
      <section className="py-4 sm:py-8">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Wat wij doen"
              title="Begeleiding die past bij uw gezin"
              description="Van ambulante begeleiding thuis tot pleegzorgondersteuning — we bieden maatwerk voor elke situatie."
            />
            <Link
              href="/diensten"
              className="hidden shrink-0 items-center gap-2 text-[14px] font-bold text-accent hover:text-accent-hover sm:flex"
            >
              Bekijk alle diensten
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 3).map((service) => (
              <Card key={service.slug}>
                <IconTile>
                  <DynamicIcon name={service.icon} className="h-6 w-6" />
                </IconTile>
                <h3 className="mt-5 text-[17px] font-bold text-text">{service.title}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-text-secondary">
                  {service.short}
                </p>
                <Link
                  href="/diensten"
                  className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-bold text-accent"
                >
                  Meer info
                  <IconArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Card>
            ))}
          </div>

          <Link
            href="/diensten"
            className="mt-8 flex items-center justify-center gap-2 text-[14px] font-bold text-accent sm:hidden"
          >
            Bekijk alle diensten
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </Container>
      </section>

      {/* Over ons teaser */}
      <section className="py-20 sm:py-24">
        <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-5">
              <div className="rounded-2xl border border-border bg-accent-soft p-7">
                <div className="text-3xl font-extrabold text-accent">10+</div>
                <div className="mt-1 text-[13.5px] font-medium text-text-secondary">
                  jaar ervaring in de jeugdzorg
                </div>
              </div>
              <div className="mt-8 rounded-2xl border border-border bg-tan-soft p-7">
                <div className="text-3xl font-extrabold text-text">100%</div>
                <div className="mt-1 text-[13.5px] font-medium text-text-secondary">
                  persoonlijke aanpak per gezin
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-7 shadow-[0_1px_2px_rgba(43,36,32,0.04)]">
                <div className="text-3xl font-extrabold text-text">Regio</div>
                <div className="mt-1 text-[13.5px] font-medium text-text-secondary">
                  werkzaam dichtbij huis
                </div>
              </div>
              <div className="mt-8 rounded-2xl border border-border bg-surface p-7 shadow-[0_1px_2px_rgba(43,36,32,0.04)]">
                <div className="text-3xl font-extrabold text-text">Snel</div>
                <div className="mt-1 text-[13.5px] font-medium text-text-secondary">
                  eerste gesprek binnen 5 werkdagen
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Over ons"
              title="Betrokken begeleiders met kennis van zaken"
              description={`${SITE.name} bestaat uit een team van ervaren, gecertificeerde begeleiders die dagelijks werken aan een veiliger en sterker thuis voor jongeren en gezinnen. We werken systemisch en oplossingsgericht, met korte lijnen naar gemeente, school en andere betrokkenen.`}
            />
            <div className="mt-8">
              <ButtonSecondary href="/over-ons">Lees meer over ons</ButtonSecondary>
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
