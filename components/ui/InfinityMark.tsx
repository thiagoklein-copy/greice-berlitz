/** Traço do infinito — watermark / divisor / marcador. Sempre sutil. */

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

/**
 * Posições distintas — cada seção escura usa uma composição diferente
 * para o ∞ não virar “selo central” repetido.
 */
export type InfinityWatermarkVariant =
  | "center"
  | "top-right"
  | "bottom-left"
  | "left-bleed"
  | "right-bleed"
  | "bottom-right"
  | "tilt";

const WATERMARK_LAYOUT: Record<InfinityWatermarkVariant, string> = {
  center:
    "left-1/2 top-1/2 w-[min(120vw,1100px)] -translate-x-1/2 -translate-y-[52%] opacity-[0.06]",
  "top-right":
    "right-[-14%] top-[-22%] w-[min(95vw,780px)] -rotate-[18deg] opacity-[0.07]",
  "bottom-left":
    "bottom-[-28%] left-[-20%] w-[min(110vw,920px)] rotate-[14deg] opacity-[0.055]",
  "left-bleed":
    "left-[-38%] top-[42%] w-[min(100vw,860px)] -translate-y-1/2 -rotate-[6deg] opacity-[0.06]",
  "right-bleed":
    "right-[-32%] top-[38%] w-[min(95vw,800px)] -translate-y-1/2 rotate-[16deg] opacity-[0.065]",
  "bottom-right":
    "bottom-[-18%] right-[-12%] w-[min(90vw,700px)] rotate-[9deg] opacity-[0.05]",
  tilt: "left-[8%] top-[12%] w-[min(105vw,960px)] -rotate-[26deg] opacity-[0.05]",
};

/** Fundo watermark ∞ para seções escuras */
export function InfinityWatermark({
  variant = "center",
}: {
  variant?: InfinityWatermarkVariant;
}) {
  return (
    <div className="infinity-watermark" aria-hidden="true">
      <InfinityGlyph
        className={`absolute h-auto text-gold ${WATERMARK_LAYOUT[variant]}`}
        strokeWidth={0.8}
      />
    </div>
  );
}

/** Divisor sutil entre seções (curva do infinito) */
export function InfinityDivider({
  className = "",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <div className={`flex justify-center py-2 ${className}`} aria-hidden="true">
      <InfinityGlyph
        className={`h-5 w-12 ${light ? "text-gold/40" : "text-gold/45"}`}
        strokeWidth={1.4}
      />
    </div>
  );
}

/** Marcador de passo: ∞ + número */
export function InfinityStep({
  number,
  light = false,
}: {
  number: string;
  light?: boolean;
}) {
  return (
    <span className="inline-flex items-center gap-2">
      <InfinityGlyph
        className={`h-3.5 w-8 ${light ? "text-gold/70" : "text-gold"}`}
        strokeWidth={1.6}
      />
      <span
        className={`font-display text-sm font-bold tracking-[0.16em] ${
          light ? "text-gold/90" : "text-gold"
        }`}
      >
        {number}
      </span>
    </span>
  );
}
