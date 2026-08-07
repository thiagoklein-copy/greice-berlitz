import type { ReactNode } from "react";
import { InfinityGlyph } from "@/components/ui/InfinityMark";

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
      <span className="inline-flex items-center gap-2.5">
        <InfinityGlyph
          className="h-7 w-14 shrink-0 text-gold sm:h-8 sm:w-16"
          strokeWidth={1.8}
        />
        <span
          className={`font-display font-bold tracking-tight ${
            light ? "text-white" : "text-ink"
          }`}
          style={{ fontSize: "clamp(1.05rem, 2.2vw, 1.3rem)" }}
        >
          Greice Berlitz
        </span>
      </span>
      <span
        className={`mt-1.5 text-[10px] font-medium sm:text-[11px] ${
          light ? "text-white" : "text-ink"
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

/** Palavra de destaque: bold + dourado */
export function GoldWord({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`font-bold text-gold ${className}`}>{children}</span>
  );
}

interface SectionHeaderProps {
  /** Ignorado — badges/eyebrows removidos do site */
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  align = "left",
  light = false,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-12 max-w-3xl ${alignClass}`}>
      <h2
        className={`font-display font-medium tracking-[-0.02em] ${
          light ? "text-white" : "text-ink"
        }`}
        style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", lineHeight: 1.1 }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? "text-white" : "text-ink"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
