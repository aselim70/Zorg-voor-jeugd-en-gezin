import Link from "next/link";
import type { ReactNode } from "react";
import { IconArrowRight } from "./Icons";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`container ${className}`}>{children}</div>;
}
export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}
export function ButtonPrimary({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return <Link href={href} className={`button button-primary ${className}`}>{children}<IconArrowRight aria-hidden="true" /></Link>;
}
export function ButtonSecondary({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return <Link href={href} className={`button button-secondary ${className}`}>{children}<IconArrowRight aria-hidden="true" /></Link>;
}
export function SectionHeading({ eyebrow, title, description, align = "left" }: { eyebrow?: string; title: ReactNode; description?: string; align?: "left" | "center" }) {
  return <div className={`section-heading ${align === "center" ? "centered" : ""}`}>{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}<h2>{title}</h2>{description && <p>{description}</p>}</div>;
}
export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`card ${className}`}>{children}</div>;
}
export function IconTile({ children }: { children: ReactNode }) {
  return <span className="icon-tile">{children}</span>;
}
