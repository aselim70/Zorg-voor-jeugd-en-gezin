import Image from "next/image";
import { Container, ButtonPrimary } from "@/components/ui";
import { IconCheck } from "@/components/Icons";
import { SITE } from "@/lib/site";

const POINTS = [
  "Gecertificeerde begeleiders",
  "Werkzaam in de regio",
  "Korte wachttijd",
];

export function HeroBanner() {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src="/images/hero-gezin.png"
        alt="Begeleider in gesprek met een gezin in de huiskamer"
        fill
        preload
        sizes="100vw"
        className="-z-10 object-cover object-[68%_center] lg:object-center"
      />

      {/* Leesbaarheidslaag: donker links, open naar rechts */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#221c18]/94 via-[#221c18]/80 to-[#221c18]/60 lg:from-[#221c18]/92 lg:via-[#221c18]/58 lg:to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-[#221c18]/60 to-transparent" />

      <Container className="flex min-h-[560px] flex-col justify-center py-20 sm:min-h-[620px] sm:py-24">
        <div className="max-w-xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-1.5 text-[11px] font-bold tracking-[0.18em] text-white uppercase ring-1 ring-white/25 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6fdb9c]" />
            Professionele jeugd- &amp; gezinszorg
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.1] text-white drop-shadow-sm sm:text-5xl lg:text-[3.4rem]">
            {SITE.tagline} voor uw gezin
          </h1>

          <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-white/85">
            {SITE.name} biedt persoonlijke begeleiding aan jongeren, ouders en gezinnen —
            met een vaste begeleider, korte lijnen en een aanpak die past bij uw situatie.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonPrimary href="/contact">Maak een afspraak</ButtonPrimary>
            <a
              href="/diensten"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/35 bg-white/10 px-6 py-3.5 text-[15px] font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              Onze diensten
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-[13.5px] font-medium text-white/85">
            {POINTS.map((point) => (
              <span key={point} className="flex items-center gap-2">
                <IconCheck className="h-4 w-4 text-[#6fdb9c]" /> {point}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
