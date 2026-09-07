import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui";
import { IconMail, IconPhone, IconPin, IconClock } from "@/components/Icons";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact | ${SITE.name}`,
  description: `Neem contact op met ${SITE.name} voor een vrijblijvend gesprek.`,
};

const CONTACT_ITEMS = [
  { icon: IconPin, label: "Adres", value: SITE.address },
  { icon: IconPhone, label: "Telefoon", value: SITE.phone, href: `tel:${SITE.phoneHref}` },
  { icon: IconMail, label: "E-mail", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: IconClock, label: "Bereikbaarheid", value: SITE.hours },
];

export default function ContactPage() {
  return (
    <>
      <section className="pt-16 pb-8 sm:pt-20">
        <Container className="max-w-3xl">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="text-4xl font-extrabold leading-tight text-text sm:text-5xl">
            Laten we kennismaken
          </h1>
          <p className="mt-6 text-[16px] leading-relaxed text-text-secondary">
            Heeft u een vraag over begeleiding voor uw gezin, of wilt u een verwijzing
            bespreken? Neem gerust contact op — we reageren binnen twee werkdagen.
          </p>
        </Container>
      </section>

      <section className="py-10 sm:py-16">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-14">
          {/* Contact info */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-surface p-8">
              <h2 className="text-[15px] font-bold text-text">Contactgegevens</h2>
              <ul className="mt-6 flex flex-col gap-6">
                {CONTACT_ITEMS.map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-[12.5px] font-bold uppercase tracking-wide text-text-muted">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a href={item.href} className="mt-0.5 block text-[14.5px] font-semibold text-text hover:text-accent">
                          {item.value}
                        </a>
                      ) : (
                        <div className="mt-0.5 text-[14.5px] font-semibold text-text">
                          {item.value}
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-accent-soft p-6">
              <p className="text-[13.5px] leading-relaxed text-text-secondary">
                <span className="font-bold text-text">Spoedsituatie?</span> Bel ons rechtstreeks
                — we schakelen snel bij crisissituaties die niet kunnen wachten.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form className="rounded-2xl border border-border bg-surface p-8 sm:p-10">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-[13px] font-bold text-text">
                    Naam
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Uw volledige naam"
                    className="mt-2 w-full rounded-lg border border-border-strong bg-bg px-4 py-3 text-[14.5px] text-text placeholder:text-text-muted focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-[13px] font-bold text-text">
                    E-mailadres
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="naam@voorbeeld.nl"
                    className="mt-2 w-full rounded-lg border border-border-strong bg-bg px-4 py-3 text-[14.5px] text-text placeholder:text-text-muted focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-[13px] font-bold text-text">
                    Telefoonnummer
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="06 - 12 34 56 78"
                    className="mt-2 w-full rounded-lg border border-border-strong bg-bg px-4 py-3 text-[14.5px] text-text placeholder:text-text-muted focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="topic" className="text-[13px] font-bold text-text">
                    Onderwerp
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    className="mt-2 w-full rounded-lg border border-border-strong bg-bg px-4 py-3 text-[14.5px] text-text focus:border-accent focus:outline-none"
                    defaultValue="algemeen"
                  >
                    <option value="algemeen">Algemene vraag</option>
                    <option value="aanmelding">Aanmelding / verwijzing</option>
                    <option value="samenwerking">Samenwerking gemeente</option>
                    <option value="overig">Overig</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-[13px] font-bold text-text">
                    Bericht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Vertel kort waar we mee kunnen helpen..."
                    className="mt-2 w-full resize-none rounded-lg border border-border-strong bg-bg px-4 py-3 text-[14.5px] text-text placeholder:text-text-muted focus:border-accent focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-7 inline-flex w-full items-center justify-center rounded-lg bg-accent px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-accent-hover sm:w-auto"
              >
                Bericht versturen
              </button>
              <p className="mt-4 text-[12.5px] leading-relaxed text-text-muted">
                We gaan zorgvuldig om met uw gegevens en gebruiken deze uitsluitend om contact
                met u op te nemen.
              </p>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}
