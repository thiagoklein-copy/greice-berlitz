import type { ReactNode } from "react";

/** Traço do infinito — sempre sutil e funcional (marcador, não ilustração). */

export function InfinityGlyph({
  className = "",
  strokeWidth = 1.25,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 120 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M20 28C20 16 30 8 42 8C54 8 62 16 70 28C78 40 86 48 98 48C110 48 120 40 120 28C120 16 110 8 98 8C86 8 78 16 70 28C62 40 54 48 42 48C30 48 20 40 20 28Z"
        transform="translate(-10 0) scale(0.9)"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** ∞ flutuando após palavra de destaque (estilo asterisco) */
export function InfinityAccent({ className = "" }: { className?: string }) {
  return (
    <InfinityGlyph
      className={`ml-1 inline-block h-3 w-6 -translate-y-[0.55em] align-baseline text-gold sm:h-3.5 sm:w-7 ${className}`}
      strokeWidth={1.9}
    />
  );
}

/** Eyebrow com ∞ como prefixo */
export function InfinityEyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`eyebrow mb-4 inline-flex items-center gap-2 ${className}`}
    >
      <InfinityGlyph className="h-2.5 w-6 shrink-0 text-gold" strokeWidth={2} />
      <span>{children}</span>
    </p>
  );
}

/** Chip dourado suave (prova social / apoio) */
export function InfinityChip({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-3 py-1 text-[12px] font-semibold text-ink ${className}`}
    >
      <InfinityGlyph className="h-2.5 w-5 text-gold" strokeWidth={2} />
      {children}
    </span>
  );
}

/** Chip de passo: ∞ + 01/02 */
export function InfinityStep({
  number,
  light = false,
}: {
  number: string;
  light?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 ${
        light ? "bg-white/10" : "bg-gold/15"
      }`}
    >
      <InfinityGlyph
        className={`h-2.5 w-5 ${light ? "text-gold/80" : "text-gold"}`}
        strokeWidth={2}
      />
      <span
        className={`font-display text-xs font-bold tracking-[0.14em] ${
          light ? "text-sand" : "text-ink"
        }`}
      >
        {number}
      </span>
    </span>
  );
}

/** ∞ fino no canto de um bloco (assinatura, ~12% opacidade) */
export function InfinityCorner({
  position = "top-right",
}: {
  position?: "top-right" | "bottom-left" | "top-left" | "bottom-right";
}) {
  const map = {
    "top-right": "right-[-10%] top-[-18%] -rotate-[14deg]",
    "bottom-left": "bottom-[-20%] left-[-12%] rotate-[10deg]",
    "top-left": "left-[-10%] top-[-16%] rotate-[12deg]",
    "bottom-right": "bottom-[-18%] right-[-10%] -rotate-[8deg]",
  } as const;

  return (
    <InfinityGlyph
      className={`pointer-events-none absolute h-14 w-28 text-gold opacity-[0.12] sm:h-16 sm:w-32 ${map[position]}`}
      strokeWidth={0.9}
    />
  );
}

/** Divisor: linha fina que se curva no ∞ central */
export function InfinityDivider({
  className = "",
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 px-5 sm:px-8 lg:px-12 ${className}`}
      aria-hidden="true"
    >
      <span className="h-px flex-1 bg-ink/10" />
      <InfinityGlyph className="h-4 w-10 shrink-0 text-gold/55" strokeWidth={1.5} />
      <span className="h-px flex-1 bg-ink/10" />
    </div>
  );
}
