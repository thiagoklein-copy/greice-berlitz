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
      <span className="inline-flex items-baseline gap-2 font-sans font-bold tracking-tight">
        <span
          className={light ? "text-white" : "text-ink"}
          style={{ fontSize: "clamp(1.05rem, 2.2vw, 1.25rem)" }}
        >
          Greice Berlitz
        </span>
        <span
          className={light ? "text-gold" : "text-gold"}
          aria-hidden="true"
          style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)" }}
        >
          ∞
        </span>
      </span>
      <span
        className={`mt-1 text-[10px] font-medium sm:text-[11px] ${
          light ? "text-white/50" : "text-text-muted"
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
  align = "left",
  light = false,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-12 max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <p className={`eyebrow mb-4 ${light ? "text-white/50" : ""}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-sans font-extrabold tracking-[-0.03em] ${
          light ? "text-white" : "text-ink"
        }`}
        style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", lineHeight: 1.08 }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? "text-white/55" : "text-text-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
