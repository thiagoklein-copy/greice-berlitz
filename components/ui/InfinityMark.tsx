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

/** Fundo watermark ∞ para seções escuras */
export function InfinityWatermark() {
  return (
    <div className="infinity-watermark" aria-hidden="true">
      <InfinityGlyph strokeWidth={0.8} />
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
