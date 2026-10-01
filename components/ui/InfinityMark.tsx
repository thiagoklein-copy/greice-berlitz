/**
 * Traço do infinito — é o logo da Greice. Logo, chips de passo, divisor e
 * placeholder usam este mesmo desenho e a mesma espessura: não passe
 * strokeWidth por fora. Para mudar o ∞ do site inteiro, mude só aqui
 * (e em public/favicon.svg, que repete o mesmo path).
 */

export const INFINITY_PATH =
  "M60 28C72 12 82 6 94 6C106 6 114 16 114 28C114 40 106 50 94 50C82 50 72 44 60 28C48 12 38 6 26 6C14 6 6 16 6 28C6 40 14 50 26 50C38 50 48 44 60 28Z";

/** Espessura única, em px de tela (não escala com o tamanho do ícone). */
const INFINITY_STROKE = 1.5;

export function InfinityGlyph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d={INFINITY_PATH}
        stroke="currentColor"
        strokeWidth={INFINITY_STROKE}
        vectorEffect="non-scaling-stroke"
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
    <span className="inline-flex items-center gap-2">
      <InfinityGlyph className="h-3.5 w-7 text-gold" />
      <span
        className={`font-sans text-[11px] font-normal tracking-[0.24em] ${
          light ? "text-sand" : "text-gold"
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
      <InfinityGlyph className="h-5 w-12 shrink-0 text-gold" />
      <span className="h-px flex-1 bg-ink/10" />
    </div>
  );
}
