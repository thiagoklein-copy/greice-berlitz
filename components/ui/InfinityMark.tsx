/** Traço do infinito — logo, chips de passo e divisor. */

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
        light ? "bg-white/10" : "bg-gold/20"
      }`}
    >
      <InfinityGlyph className="h-3 w-6 text-gold" strokeWidth={2.25} />
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

/** Divisor: linha fina com ∞ central */
export function InfinityDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center gap-3 px-5 sm:px-8 lg:px-12 ${className}`}
      aria-hidden="true"
    >
      <span className="h-px flex-1 bg-ink/10" />
      <InfinityGlyph className="h-5 w-12 shrink-0 text-gold" strokeWidth={1.9} />
      <span className="h-px flex-1 bg-ink/10" />
    </div>
  );
}
