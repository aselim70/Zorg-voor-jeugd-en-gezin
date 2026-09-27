import type { Metadata } from "next";
import { PageHero } from "@/components/ContentPage";
import { Container } from "@/components/ui";
import { ServiceCards } from "@/components/ServiceCards";
import { CtaBanner } from "@/components/CtaBanner";
export const metadata: Metadata = { title: "Onze begeleiding", description: "Jeugdzorg, gezinsbegeleiding, individuele begeleiding, gehandicaptenzorg en GGZ-begeleiding. Ontdek welke ondersteuning bij jouw situatie past." };
export default function Diensten() {
  return <><PageHero label="Onze begeleiding" title="Ieder verhaal is anders." accent="De begeleiding dus ook." intro="Met jeugdzorg als belangrijkste specialisatie bieden we ondersteuning aan jongeren, gezinnen en mensen die begeleiding nodig hebben. We kijken samen wat past bij jouw situatie." /><section className="section"><Container><ServiceCards /></Container></section><CtaBanner /></>;
}

