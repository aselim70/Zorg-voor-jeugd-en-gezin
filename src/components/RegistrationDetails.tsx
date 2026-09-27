import { SITE } from "@/lib/site";

export function RegistrationDetails({ className = "" }: { className?: string }) {
  return <dl className={`registration-details ${className}`} aria-label="Bedrijfsgegevens">
    <div><dt>AGB-code</dt><dd>{SITE.agb}</dd></div>
    <div><dt>KvK</dt><dd>{SITE.kvk}</dd></div>
  </dl>;
}
