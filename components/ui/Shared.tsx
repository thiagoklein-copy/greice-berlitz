import type { ReactNode } from "react";

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className = "", light = false }: LogoProps) {
  return (
    <span
      className={`inline-flex flex-col leading-none ${className}`}
      aria-label="Greice Berlitz, Psicóloga, CRP 07/16250"
    >
      <span className="inline-flex items-baseline gap-2 font-serif font-semibold tracking-tight sm:gap-2.5">
        <span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(135deg, #8A6B2E 0%, #C9A24B 45%, #E8CE8C 100%)",
            fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)",
          }}
        >
          Greice Berlitz
        </span>
        <span
          className={`font-extralight ${light ? "text-gold-light/70" : "text-gold/70"}`}
          aria-hidden="true"
          style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)" }}
        >
          ∞
        </span>
      </span>
      <span
        className={`mt-1 text-[10px] font-medium uppercase tracking-[0.18em] sm:text-[11px] ${
          light ? "text-gold-light/55" : "text-gold-dark/65"
        }`}
      >
        Psicóloga · CRP 07/16250
      </span>
    </span>
  );
}

export function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`text-gold ${className}`} aria-label="5 estrelas">
      ★★★★★
    </span>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-14 max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <p className={`eyebrow mb-5 ${light ? "text-gold-light/80" : ""}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-serif font-semibold leading-[1.1] tracking-[-0.015em] sm:leading-[1.08] ${
          light ? "text-white" : "text-ink"
        }`}
        style={{ fontSize: "clamp(1.75rem, 4vw, 3.5rem)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            light ? "text-white/65" : "text-text-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
