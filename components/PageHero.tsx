"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import ParallaxImage from "@/components/ui/ParallaxImage";
import { InfinityCorner, InfinityGlyph } from "@/components/ui/InfinityMark";
import { IMAGES } from "@/lib/constants";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
  showImage?: boolean;
  /** Centraliza conteúdo (hero da home) */
  align?: "left" | "center";
  /** Marca Greice + ∞ acima do título */
  showBrand?: boolean;
  /** Bloco aguardando foto real (ex.: Greice) */
  imagePlaceholder?: boolean;
  /** @deprecated Hero é sempre claro na fase 3 */
  dark?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: string;
}

export default function PageHero({
  title,
  subtitle,
  children,
  showImage = true,
  align = "left",
  showBrand = false,
  imagePlaceholder = false,
  imageSrc = IMAGES.hero.src,
  imageAlt = IMAGES.hero.alt,
  imagePosition = IMAGES.hero.objectPosition,
}: PageHeroProps) {
  const centered = align === "center";

  return (
    <section className="relative overflow-hidden bg-sand pt-28 text-ink sm:pt-36 lg:pt-40">
      <div className="section-container relative z-[1] pb-16 lg:pb-24">
        <div
          className={
            showImage
              ? "grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16 xl:gap-20"
              : centered
                ? "mx-auto max-w-3xl text-center"
                : "max-w-3xl"
          }
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.45, 0, 0.2, 1] }}
            className={showImage ? "order-2 lg:order-1" : ""}
          >
            {showBrand && (
              <div
                className={`mb-8 inline-flex flex-col leading-none sm:mb-10 ${
                  centered ? "items-center" : "items-start"
                }`}
                aria-label="Greice Berlitz, Psicóloga, CRP 07/16250"
              >
                <span className="inline-flex items-center gap-3">
                  <InfinityGlyph
                    className="h-9 w-[4.5rem] shrink-0 text-gold sm:h-11 sm:w-24"
                    strokeWidth={2.2}
                  />
                  <span
                    className="font-display font-bold tracking-tight text-ink"
                    style={{ fontSize: "clamp(1.35rem, 3vw, 1.85rem)" }}
                  >
                    Greice Berlitz
                  </span>
                </span>
                <span className="mt-2 text-[11px] font-medium text-ink sm:text-xs">
                  Psicóloga · CRP 07/16250
                </span>
              </div>
            )}

            <h1
              className={`relative font-display font-medium tracking-[-0.025em] text-balance text-ink ${
                centered ? "mx-auto" : ""
              }`}
              style={{
                fontSize: "clamp(2.25rem, 5vw, 4rem)",
                lineHeight: 1.06,
              }}
            >
              {title}
            </h1>

            {subtitle && (
              <p
                className={`mt-6 text-base leading-relaxed text-ink sm:text-lg ${
                  centered ? "mx-auto max-w-2xl" : "max-w-xl"
                }`}
              >
                {subtitle}
              </p>
            )}

            {children && (
              <div
                className={`mt-8 sm:mt-10 ${
                  centered ? "flex flex-col items-center" : ""
                }`}
              >
                {children}
              </div>
            )}
          </motion.div>

          {showImage && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.08,
                ease: [0.45, 0, 0.2, 1],
              }}
              className="relative order-1 mx-auto w-full max-w-sm lg:order-2 lg:max-w-none"
            >
              <div className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-ink/10 sm:aspect-[4/3] lg:aspect-[5/6]">
                {imagePlaceholder ? (
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-sand-dark px-6 text-center"
                    role="img"
                    aria-label="Espaço reservado para foto da Greice Berlitz"
                  >
                    <InfinityGlyph
                      className="h-12 w-24 text-gold sm:h-14 sm:w-28"
                      strokeWidth={1.8}
                    />
                    <div>
                      <p className="font-display text-lg font-semibold text-ink sm:text-xl">
                        Foto da Greice
                      </p>
                      <p className="mt-1.5 text-sm text-ink">
                        Aguardando imagem profissional
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    <InfinityCorner position="top-right" />
                    <ParallaxImage
                      src={imageSrc}
                      alt={imageAlt}
                      objectPosition={imagePosition}
                      priority
                      className="absolute inset-0 h-full w-full grayscale"
                      sizes="(max-width: 1024px) 90vw, 45vw"
                    />
                    <div className="absolute inset-0 bg-ink/10" />
                  </>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
