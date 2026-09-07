import { IconHouseHeart } from "./Icons";

export function HeroArt() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
        <circle cx="200" cy="200" r="180" fill="var(--color-accent-soft)" />
        <circle cx="120" cy="300" r="46" fill="var(--color-tan-soft)" />
        <circle cx="320" cy="110" r="30" fill="var(--color-tan-soft)" />
        <path
          d="M60 230c0-70 60-120 140-120s140 50 140 120"
          stroke="var(--color-border-strong)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="3 7"
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] bg-surface shadow-[0_20px_45px_rgba(43,36,32,0.12)]">
        <IconHouseHeart className="h-16 w-16 text-accent" strokeWidth={1.4} />
      </div>

      <div className="absolute left-[16%] top-[18%] flex h-16 w-16 items-center justify-center rounded-2xl bg-surface shadow-[0_10px_25px_rgba(43,36,32,0.1)]">
        <svg viewBox="0 0 24 24" className="h-7 w-7 text-tan" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="8.5" r="3" />
          <path d="M3.5 19c.8-3.1 3-4.7 5.5-4.7s4.7 1.6 5.5 4.7" />
          <circle cx="17" cy="9.5" r="2.3" />
          <path d="M15.3 14.7c1.9.2 3.4 1.7 4.2 4.3" />
        </svg>
      </div>

      <div className="absolute bottom-[10%] right-[10%] flex h-16 w-16 items-center justify-center rounded-2xl bg-surface shadow-[0_10px_25px_rgba(43,36,32,0.1)]">
        <svg viewBox="0 0 24 24" className="h-7 w-7 text-accent" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3l7 3v5.2c0 4.5-3 8.3-7 9.8-4-1.5-7-5.3-7-9.8V6l7-3z" />
          <path d="M9 12.2l2 2 4-4.2" />
        </svg>
      </div>
    </div>
  );
}
