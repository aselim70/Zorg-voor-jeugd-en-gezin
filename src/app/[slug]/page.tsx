import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PAGES } from "@/lib/pages";
import { ContentPage } from "@/components/ContentPage";

export const dynamicParams = false;
export function generateStaticParams() {
  return Object.keys(PAGES).filter(slug => slug !== "over-ons").map(slug => ({ slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = Object.hasOwn(PAGES, slug) ? PAGES[slug] : undefined;
  if (!page) return {};
  return { title: page.label, description: page.intro };
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!Object.hasOwn(PAGES, slug)) notFound();
  return <ContentPage page={PAGES[slug]} />;
}
