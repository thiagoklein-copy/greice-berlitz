"use client";

import ParallaxImage from "@/components/ui/ParallaxImage";

/**
 * Foto P&B com filete dourado deslocado atrás — moldura padrão do site.
 * `frame` escolhe para que lado o filete escapa.
 */
export default function FramedImage({
  src,
  alt,
  objectPosition = "50% 50%",
  aspect = "aspect-[4/5]",
  priority = false,
  sizes = "(max-width: 1024px) 90vw, 40vw",
  frame = "right",
  caption,
  className = "",
}: {
  src: string;
  alt: string;
  objectPosition?: string;
  aspect?: string;
  priority?: boolean;
  sizes?: string;
  frame?: "right" | "left";
  caption?: string;
  className?: string;
}) {
  const offset =
    frame === "right"
      ? "translate-x-4 translate-y-4 sm:translate-x-6 sm:translate-y-6"
      : "-translate-x-4 translate-y-4 sm:-translate-x-6 sm:translate-y-6";

  return (
    <figure className={`relative ${className}`}>
      <div className="relative">
        <span
          className={`pointer-events-none absolute inset-0 border border-gold/60 ${offset}`}
          aria-hidden="true"
        />
        <div className={`relative overflow-hidden bg-sand-dark ${aspect}`}>
          <ParallaxImage
            src={src}
            alt={alt}
            objectPosition={objectPosition}
            priority={priority}
            sizes={sizes}
            className="absolute inset-0 h-full w-full grayscale"
          />
        </div>
      </div>
      {caption && (
        <figcaption className="t-label mt-10 text-ink/60">{caption}</figcaption>
      )}
    </figure>
  );
}
