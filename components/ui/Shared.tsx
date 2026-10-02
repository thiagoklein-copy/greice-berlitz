import type { ReactNode } from "react";
import Link from "next/link";
import { InfinityGlyph } from "@/components/ui/InfinityMark";

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className = "", light = false }: LogoProps) {
  return (
    <span
      className={`inline-flex items-center gap-3 leading-none ${className}`}
      aria-label="Greice Berlitz, Psicóloga, CRP 07/16250"
    >
      <InfinityGlyph className="h-5 w-10 shrink-0 text-gold" />
      <span className="flex flex-col">
        <span
          className={`font-display text-[1.4rem] font-medium tracking-[-0.01em] ${
            light ? "text-sand" : "text-ink"
          }`}
        >
          Greice Berlitz
        </span>
        <span
          className={`mt-1 text-[10px] font-normal uppercase tracking-[0.26em] ${
            light ? "text-sand/70" : "text-ink/60"
          }`}
        >
          Psicóloga · CRP 07/16250
        </span>
      </span>
    </span>
  );
}

export function Stars({ className = "" }: { className?: string }) {
  return (
    <span
      className={`tracking-[0.2em] text-gold ${className}`}
      aria-label="5 estrelas"
    >
      ★★★★★
    </span>
  );
}

/** Palavra de destaque: itálico + ouro velho */
export function GoldWord({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`italic text-gold ${className}`}>{children}</span>
  );
}

/** Rótulo de seção: "01 — Rótulo" seguido de filete até a margem */
export function SectionLabel({
  index,
  children,
  light = false,
  className = "",
}: {
  index?: string;
  children: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      <p className="t-label min-w-0 text-gold">
        {index && <span className="mr-3">{index}</span>}
        {index && (
          <span className={light ? "text-sand/40" : "text-ink/30"}>— </span>
        )}
        <span className={light ? "text-sand" : "text-ink"}>{children}</span>
      </p>
      <span
        className={`h-px min-w-8 flex-1 ${light ? "bg-sand/15" : "bg-ink/12"}`}
        aria-hidden="true"
      />
    </div>
  );
}

interface SectionHeaderProps {
  /** Rótulo pequeno acima do título */
  eyebrow?: string;
  /** Número da seção no rótulo ("01") */
  index?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  /** Título à esquerda e subtítulo à direita (desktop) */
  split?: boolean;
}

export function SectionHeader({
  eyebrow,
  index,
  title,
  subtitle,
  align = "left",
  light = false,
  split = false,
}: SectionHeaderProps) {
  const tone = light ? "text-sand" : "text-ink";
  const centered = align === "center";

  return (
    <div className="mb-16 sm:mb-20">
      {eyebrow && (
        <SectionLabel index={index} light={light} className="mb-10 sm:mb-14">
          {eyebrow}
        </SectionLabel>
      )}
      <div
        className={
          split
            ? "grid gap-8 lg:grid-cols-12 lg:gap-12"
            : centered
              ? "mx-auto max-w-4xl text-center"
              : "max-w-4xl"
        }
      >
        <h2 className={`t-h2 ${tone} ${split ? "lg:col-span-7" : ""}`}>
          {title}
        </h2>
        {subtitle && (
          <p
            className={`t-body ${light ? "text-sand/80" : "text-ink/85"} ${
              split
                ? "self-end lg:col-span-5"
                : centered
                  ? "mx-auto mt-8 max-w-2xl"
                  : "mt-8 max-w-2xl"
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

/** Link editorial com filete e seta */
export function ArrowLink({
  href,
  children,
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`link-arrow ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      <span className="arrow" aria-hidden="true">
        →
      </span>
    </Link>
  );
}
