import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function LogoMark(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 20.5c-.3 0-.6-.1-.8-.3C8.2 17.9 4 14.6 4 10.3 4 7.9 5.9 6 8.3 6c1.4 0 2.7.7 3.7 1.9C13 6.7 14.3 6 15.7 6 18.1 6 20 7.9 20 10.3c0 4.3-4.2 7.6-7.2 9.9-.2.2-.5.3-.8.3z" />
    </svg>
  );
}

export function IconShield(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 3l7 3v5.2c0 4.5-3 8.3-7 9.8-4-1.5-7-5.3-7-9.8V6l7-3z" />
      <path d="M9 12.2l2 2 4-4.2" />
    </svg>
  );
}

export function IconBadge(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="12" cy="9" r="5.5" />
      <path d="M8.5 13.8L7 21l5-2.6L17 21l-1.5-7.2" />
    </svg>
  );
}

export function IconChat(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 5.5h16v10.5H9.5L5 20v-4H4z" strokeLinejoin="round" />
      <path d="M8 9.5h8M8 12.5h5" />
    </svg>
  );
}

export function IconHandshake(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M2 12.5l4-3.5 3 2 3.5-3 3.5 3 3-2 3 3.5" />
      <path d="M9 11l3.5 3.5a1.6 1.6 0 002.3 0 1.6 1.6 0 000-2.3" />
      <path d="M12.5 14.5l1 1a1.6 1.6 0 002.3 0 1.6 1.6 0 000-2.3" />
      <path d="M4 12l3 6.5 2.5-1" />
      <path d="M20 12l-3 6.5-2.5-1" />
    </svg>
  );
}

export function IconHome(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M3.5 10.5L12 4l8.5 6.5" />
      <path d="M5.5 9.5V20h13V9.5" />
      <path d="M10 20v-6h4v6" />
    </svg>
  );
}

export function IconUser(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="12" cy="8.5" r="3.5" />
      <path d="M5.5 20c1-3.6 4-5.5 6.5-5.5s5.5 1.9 6.5 5.5" />
    </svg>
  );
}

export function IconUsers(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3.5 19c.8-3.1 3-4.7 5.5-4.7s4.7 1.6 5.5 4.7" />
      <circle cx="17" cy="9.5" r="2.3" />
      <path d="M15.3 14.7c1.9.2 3.4 1.7 4.2 4.3" />
    </svg>
  );
}

export function IconBook(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 6.2C10.3 4.9 7.8 4.3 4.5 4.5v13.8c3.3-.2 5.8.4 7.5 1.7 1.7-1.3 4.2-1.9 7.5-1.7V4.5c-3.3-.2-5.8.4-7.5 1.7z" strokeLinejoin="round" />
      <path d="M12 6.2v13.8" />
    </svg>
  );
}

export function IconHouseHeart(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 11l8-6.5 8 6.5" />
      <path d="M6 10v9.5h12V10" />
      <path d="M12 17.3s-2.7-1.7-2.7-3.5c0-1 .8-1.7 1.7-1.7.5 0 .9.2 1 .6.1-.4.5-.6 1-.6.9 0 1.7.7 1.7 1.7 0 1.8-2.7 3.5-2.7 3.5z" />
    </svg>
  );
}

export function IconAlert(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 3.5l9 16H3z" strokeLinejoin="round" />
      <path d="M12 10v4" />
      <circle cx="12" cy="17" r="0.15" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconCompass(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M14.8 9.2l-2 4.8-4.8 2 2-4.8z" strokeLinejoin="round" />
    </svg>
  );
}

export function IconEye(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
      <circle cx="12" cy="12" r="2.8" />
    </svg>
  );
}

export function IconSeedling(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 21v-8" />
      <path d="M12 13c0-4 -3-6.5-8-6.5C4.5 11 7 13 12 13z" />
      <path d="M12 10c0-3.2 2.5-5.2 6.5-5.2C18 8.3 15.8 10 12 10z" />
    </svg>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconPhone(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M6.5 3.5h3l1.5 4-2 1.5c.9 2.2 2.6 3.9 4.8 4.8l1.5-2 4 1.5v3c0 1-.9 1.8-1.9 1.7-6.8-.6-12.1-5.9-12.7-12.7-.1-1 .7-1.9 1.8-1.9z" strokeLinejoin="round" />
    </svg>
  );
}

export function IconMail(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
      <path d="M4.5 6.5l7.5 6 7.5-6" />
    </svg>
  );
}

export function IconPin(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 21s7-6.5 7-11.5A7 7 0 105 9.5C5 14.5 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  );
}

export function IconClock(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M5 12.5l4.5 4.5L19 7" />
    </svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconClose(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
