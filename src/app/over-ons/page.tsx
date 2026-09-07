import type { Metadata } from "next";
import { Container, Eyebrow, SectionHeading, Card } from "@/components/ui";
import { HeroArt } from "@/components/HeroArt";
import { CtaBanner } from "@/components/CtaBanner";
import { DynamicIcon } from "@/components/IconMap";
import { VALUES, PROCESS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Over ons | ${SITE.name}`,
  description:
    "Maak kennis met de missie, werkwijze en waarden van " + SITE.name + ".",
};

export default function OverOnsPage() {
  return (
    <>
      <section className="overflow-hidden pt-16 pb-8 sm:pt-20">
        <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <Eyebrow>Over ons</Eyebrow>
            <h1 className="text-4xl font-extrabold leading-[1.12] text-text sm:text-5xl">
              Er zijn voor gezinnen, op het moment dat het telt
            </h1>
            <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-text-secondary">
              {SITE.name} is opgericht vanuit de overtuiging dat elk gezin recht heeft op
              begeleiding die aansluit bij hun eigen verhaal. Geen standaardaanpak, maar
              een team dat luistert, meedenkt en meewerkt aan écht resultaat.
            </p>
          </div>
          <HeroArt />
        </Container>
      </section>

      {/* Mission */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-surface p-8">
              <div className="text-[13px] font-bold uppercase tracking-wide text-accent">
                Missie
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
                Ieder gezin de begeleiding bieden die nodig is om weer op eigen kracht
                verder te kunnen.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-8">
              <div className="text-[13px] font-bold uppercase tracking-wide text-accent">
                Visie
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
                Zorg werkt het beste dichtbij huis, met korte lijnen tussen gezin,
                begeleider en de mensen eromheen.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-8">
              <div className="text-[13px] font-bold uppercase tracking-wide text-accent">
                Aanpak
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
                Systemisch en oplossingsgericht werken, met oog voor het hele gezin —
                niet alleen het probleem.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-14">
        <Container>
          <SectionHeading
            eyebrow="Waar we voor staan"
            title="De waarden achter ons werk"
            align="center"
          />
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
            {VALUES.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <DynamicIcon name={value.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-[16px] font-bold text-text">{value.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Onze werkwijze"
            title="Zo ziet een traject er bij ons uit"
            align="center"
          />
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step) => (
              <Card key={step.step}>
                <div className="text-2xl font-extrabold text-accent/30">{step.step}</div>
                <h3 className="mt-3 text-[16px] font-bold text-text">{step.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-text-secondary">
                  {step.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
