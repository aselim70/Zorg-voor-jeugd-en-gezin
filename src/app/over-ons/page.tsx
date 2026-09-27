import type { Metadata } from "next";
import { PAGES } from "@/lib/pages";
import { ContentPage } from "@/components/ContentPage";
export const metadata: Metadata = { title: "Over ons", description: PAGES["over-ons"].intro };
export default function OverOns() { return <ContentPage page={PAGES["over-ons"]} />; }

