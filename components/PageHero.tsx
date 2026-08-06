"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import ParallaxImage from "@/components/ui/ParallaxImage";
import {
  InfinityCorner,
  InfinityEyebrow,
} from "@/components/ui/InfinityMark";
import { IMAGES } from "@/lib/constants";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
  showImage?: boolean;
  /** @deprecated Hero é sempre claro na fase 3 */
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
  imageSrc = IMAGES.hero.src,
  imageAlt = IMAGES.hero.alt,
  imagePosition = IMAGES.hero.objectPosition,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-sand pt-28 text-ink sm:pt-36 lg:pt-40">
      <div className="section-container relative z-[1] pb-16 lg:pb-24">
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
            transition={{ duration: 0.65, ease: [0.45, 0, 0.2, 1] }}
            className={showImage ? "order-2 lg:order-1" : ""}
          >
            {eyebrow && <InfinityEyebrow>{eyebrow}</InfinityEyebrow>}

            <h1
              className="relative font-display font-medium tracking-[-0.025em] text-balance text-ink"
              style={{
                fontSize: "clamp(2.25rem, 5vw, 4rem)",
                lineHeight: 1.06,
              }}
            >
              {title}
            </h1>

            {subtitle && (
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink sm:text-lg">
                {subtitle}
              </p>
            )}

            {children && <div className="mt-8 sm:mt-10">{children}</div>}
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
                <InfinityCorner position="top-right" />
                {/* SUBSTITUIR: foto da Greice em ambiente profissional/corporativo ou palestra. P&B. */}
                <ParallaxImage
                  src={imageSrc}
                  alt={imageAlt}
                  objectPosition={imagePosition}
                  priority
                  className="absolute inset-0 h-full w-full grayscale"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />
                <div className="absolute inset-0 bg-ink/10" />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
