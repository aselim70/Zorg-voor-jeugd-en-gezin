import { Container, ButtonPrimary, Eyebrow } from "@/components/ui";
export default function NotFound() {
  return <section className="not-found"><Container><Eyebrow>Pagina niet gevonden</Eyebrow><h1>Even de weg kwijt?</h1><p>Deze pagina bestaat niet. Via de homepage helpen we je graag verder.</p><ButtonPrimary href="/">Terug naar de homepage</ButtonPrimary></Container></section>;
}
