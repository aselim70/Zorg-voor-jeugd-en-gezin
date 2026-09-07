import { ButtonPrimary, ButtonSecondary, Container } from "./ui";
import { SITE } from "@/lib/site";

export function CtaBanner() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-text px-8 py-14 text-center sm:px-16 sm:py-16">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-20"
            style={{ background: "var(--color-accent)" }}
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full opacity-10"
            style={{ background: "var(--color-tan)" }}
          />
          <div className="relative">
            <h2 className="mx-auto max-w-xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Klaar om de eerste stap te zetten?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-white/70">
              Neem vrijblijvend contact op. We denken graag mee over wat uw gezin nodig heeft.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonPrimary href="/contact">Neem contact op</ButtonPrimary>
              <ButtonSecondary
                href={`tel:${SITE.phoneHref}`}
                className="border-white/20 bg-transparent text-white hover:border-white hover:bg-white/5 hover:text-white"
              >
                Bel {SITE.phone}
              </ButtonSecondary>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
