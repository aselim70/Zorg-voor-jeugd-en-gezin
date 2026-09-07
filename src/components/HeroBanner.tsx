import { getImageProps } from "next/image";
import { Container, ButtonPrimary } from "@/components/ui";
import { IconCheck } from "@/components/Icons";
import { SITE } from "@/lib/site";

const POINTS = [
  "Gecertificeerde begeleiders",
  "Werkzaam in de regio",
  "Korte wachttijd",
];

export function HeroBanner() {
  // Art direction: staande foto op mobiel, liggende banner vanaf md.
  const common = {
    alt: "Begeleider in gesprek met een gezin in de huiskamer",
    sizes: "100vw",
  };
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({
    ...common,
    src: "/images/hero-gezin.png",
    width: 1942,
    height: 809,
  });
  const {
    props: { srcSet: mobileSrcSet, ...imgProps },
  } = getImageProps({
    ...common,
    src: "/images/hero-gezin-mobiel.png",
    width: 941,
    height: 1672,
  });

  return (
    <section className="relative isolate overflow-hidden">
      <picture>
        <source media="(min-width: 768px)" srcSet={desktopSrcSet} />
        <source srcSet={mobileSrcSet} />
        <img
          {...imgProps}
          alt={common.alt}
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center lg:object-center"
        />
      </picture>

      {/* Leesbaarheidslaag — mobiel van onder naar boven, desktop van links naar rechts */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#221c18]/95 via-[#221c18]/70 to-[#221c18]/25 md:hidden" />
      <div className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-[#221c18]/92 via-[#221c18]/70 to-[#221c18]/25 md:block lg:via-[#221c18]/58 lg:to-transparent" />

      <Container className="flex min-h-[640px] flex-col justify-end py-16 md:min-h-[600px] md:justify-center md:py-20 lg:min-h-[620px] lg:py-24">
        <div className="md:max-w-xl">
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
