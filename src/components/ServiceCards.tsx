import Link from "next/link";
import { SERVICES } from "@/lib/site";
import { DynamicIcon } from "./IconMap";
import { IconArrowRight } from "./Icons";

export function ServiceCards() {
  return <div className="services-grid">{SERVICES.map((service, index) => <Link className={`service-card ${index === 0 ? "featured" : ""}`} href={service.href} key={service.slug}>
    <div className="service-card-top"><DynamicIcon name={service.icon} aria-hidden="true" />{index === 0 && <span className="specialty-label">Onze specialisatie</span>}</div>
    <h3>{service.title}</h3><p>{service.short}</p><span className="service-link">Ontdek de begeleiding <IconArrowRight aria-hidden="true" /></span>
  </Link>)}</div>;
}
