"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import ParallaxImage from "@/components/ui/ParallaxImage";
import { IMAGES } from "@/lib/constants";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
  showImage?: boolean;
  dark?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: string;
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  showImage = true,
  dark = false,
  imageSrc = IMAGES.hero.src,
  imageAlt = IMAGES.hero.alt,
  imagePosition = IMAGES.hero.objectPosition,
}: PageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden pt-28 sm:pt-36 lg:pt-40 ${
        dark ? "bg-ink text-sand" : "bg-sand"
      }`}
    >
      <div className="section-container relative pb-16 lg:pb-24">
        <div
          className={`grid items-center gap-10 ${
            showImage
              ? "lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16 xl:gap-20"
              : "max-w-3xl"
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={showImage ? "order-2 lg:order-1" : ""}
          >
            {eyebrow && (
              <p
                className={`mb-5 text-[11px] font-semibold uppercase tracking-[0.18em] ${
                  dark ? "text-sand/50" : "text-text-muted"
                }`}
              >
                {eyebrow}
              </p>
            )}

            <h1
              className={`relative font-sans font-extrabold tracking-[-0.035em] text-balance ${
                dark ? "text-sand" : "text-ink"
              }`}
              style={{
                fontSize: "clamp(2.25rem, 5vw, 4rem)",
                lineHeight: 1.05,
              }}
            >
              {title}
            </h1>

            {subtitle && (
              <p
                className={`mt-6 max-w-xl text-base leading-relaxed sm:text-lg ${
                  dark ? "text-sand/65" : "text-text-muted"
                }`}
              >
                {subtitle}
              </p>
            )}

            {children && <div className="mt-8 sm:mt-10">{children}</div>}
          </motion.div>

          {showImage && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative order-1 mx-auto w-full max-w-sm lg:order-2 lg:max-w-none"
            >
              <div className="relative aspect-[5/4] overflow-hidden rounded-lg border border-ink/10 sm:aspect-[4/3] lg:aspect-[5/6]">
                {/* SUBSTITUIR: foto da Greice em ambiente profissional/corporativo ou palestra. Preferir P&B ou baixa saturação. Evitar yoga, praia, natureza genérica. */}
                <ParallaxImage
                  src={imageSrc}
                  alt={imageAlt}
                  objectPosition={imagePosition}
                  priority
                  className="absolute inset-0 h-full w-full grayscale"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />
                <div className="absolute inset-0 bg-ink/20" />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
