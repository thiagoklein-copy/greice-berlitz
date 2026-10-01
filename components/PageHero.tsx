"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import FramedImage from "@/components/ui/FramedImage";
import { InfinityGlyph } from "@/components/ui/InfinityMark";
import { IMAGES } from "@/lib/constants";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
  showImage?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: string;
}

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Topo das páginas internas: texto à esquerda, foto emoldurada à direita. */
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
    <section className="relative overflow-hidden bg-sand pb-24 pt-36 sm:pb-32 sm:pt-44 lg:pt-48">
      <div className="section-container">
        <div
          className={
            showImage
              ? "grid items-center gap-16 lg:grid-cols-12 lg:gap-12"
              : "max-w-5xl"
          }
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease }}
            className={showImage ? "lg:col-span-7 lg:pr-8" : ""}
          >
            {eyebrow && (
              <p className="t-label mb-10 flex items-center gap-4 text-ink">
                <InfinityGlyph className="h-3.5 w-7 shrink-0 text-gold" />
                {eyebrow}
              </p>
            )}

            <h1 className="t-display text-ink">{title}</h1>

            {subtitle && (
              <p className="t-body mt-10 max-w-xl text-ink/85">{subtitle}</p>
            )}

            {children && <div className="mt-12">{children}</div>}
          </motion.div>

          {showImage && (
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease }}
              className="mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none"
            >
              <FramedImage
                src={imageSrc}
                alt={imageAlt}
                objectPosition={imagePosition}
                priority
                className="mr-4 sm:mr-6"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
