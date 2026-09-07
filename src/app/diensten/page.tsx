import type { Metadata } from "next";
import { Container, Eyebrow, Card, IconTile } from "@/components/ui";
import { CtaBanner } from "@/components/CtaBanner";
import { DynamicIcon } from "@/components/IconMap";
import { IconCheck } from "@/components/Icons";
import { SERVICES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Diensten | ${SITE.name}`,
  description:
    "Ambulante begeleiding, individuele begeleiding, gezinsbegeleiding, opvoedondersteuning, pleegzorgbegeleiding en crisisinterventie.",
};

const APPROACH_POINTS = [
  "Eén vaste begeleider gedurende het hele traject",
  "Afspraken die aansluiten bij het ritme van uw gezin",
  "Nauwe afstemming met gemeente, school en verwijzer",
  "Duidelijke doelen en regelmatige evaluatie van voortgang",
];

export default function DienstenPage() {
  return (
    <>
      <section className="pt-16 pb-6 sm:pt-20">
        <Container className="max-w-3xl">
          <Eyebrow>Diensten</Eyebrow>
          <h1 className="text-4xl font-extrabold leading-tight text-text sm:text-5xl">
            Begeleiding op maat, voor elke fase
          </h1>
          <p className="mt-6 text-[16px] leading-relaxed text-text-secondary">
            Van een luisterend oor thuis tot intensieve gezinsbegeleiding — we bieden zes
            vormen van ondersteuning, elk met een vaste begeleider en een plan dat past bij
            uw situatie.
          </p>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <Card key={service.slug} className="flex flex-col">
                <IconTile>
                  <DynamicIcon name={service.icon} className="h-6 w-6" />
                </IconTile>
                <h3 className="mt-5 text-[17px] font-bold text-text">{service.title}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-text-secondary">
                  {service.short}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-14 rounded-3xl border border-border bg-surface p-10 lg:grid-cols-2 lg:p-14">
            <div>
              <Eyebrow>Onze werkwijze</Eyebrow>
              <h2 className="text-3xl font-extrabold leading-tight text-text">
                Wat u van ons kunt verwachten
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-text-secondary">
                Ongeacht welke vorm van begeleiding het beste past, werken we volgens
                dezelfde uitgangspunten: persoonlijk, duidelijk en betrokken.
              </p>
            </div>
            <ul className="flex flex-col gap-5">
              {APPROACH_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3.5">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                    <IconCheck className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[15px] leading-relaxed text-text">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
