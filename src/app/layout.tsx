import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: { default: `${SITE.name} | Persoonlijke begeleiding`, template: `%s | ${SITE.name}` },
  description: "Persoonlijke, professionele begeleiding voor jongeren en gezinnen. Een vaste, SKJ-geregistreerde begeleider met aandacht voor jouw verhaal en mogelijkheden.",
  openGraph: { locale: "nl_NL", type: "website", siteName: SITE.name, title: SITE.name, description: "Samen verder, op jouw manier. Persoonlijke begeleiding voor jongeren en gezinnen." },
  icons: { icon: "/logo-icon.png", apple: "/logo-icon.png" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="nl" data-scroll-behavior="smooth"><body><a className="skip-link" href="#main-content">Ga naar de inhoud</a><Header /><main id="main-content" tabIndex={-1}>{children}</main><Footer /></body></html>;
}
