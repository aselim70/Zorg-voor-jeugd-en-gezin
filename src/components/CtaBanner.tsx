import { ButtonPrimary, Container, Eyebrow } from "./ui";
import { IconChat } from "./Icons";
export function CtaBanner() {
  return <section className="contact-banner"><Container><div className="contact-banner-inner"><span className="contact-symbol"><IconChat aria-hidden="true" /></span><div><Eyebrow>Een eerste stap, samen</Eyebrow><h2>Op zoek naar passende begeleiding?</h2><p>Vertel wat er speelt. We kijken samen naar de mogelijkheden.</p></div><ButtonPrimary href="/contact">Laten we kennismaken</ButtonPrimary></div></Container></section>;
}
