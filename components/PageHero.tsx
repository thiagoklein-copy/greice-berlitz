"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import ParallaxImage from "@/components/ui/ParallaxImage";
import { IMAGES } from "@/lib/constants";

interface PageHeroProps {
  eyebrow: string;
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
      className={`relative overflow-hidden pt-24 sm:pt-28 lg:pt-32 ${
        dark ? "bg-ink text-white" : "bg-gold-soft"
      }`}
    >
      <div className="hero-glow" aria-hidden="true" />
      <div
        className={`pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full blur-3xl ${
          dark ? "bg-gold/15" : "bg-gold/20"
        }`}
        aria-hidden="true"
      />

      <div className="section-container relative pb-16 lg:pb-24">
        <div
          className={`grid items-center gap-10 ${
            showImage
              ? "lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 xl:gap-20"
              : "max-w-3xl"
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={showImage ? "order-2 lg:order-1" : ""}
          >
            <span
              className={`mb-5 inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur-sm ${
                dark
                  ? "border-gold/30 bg-white/5 text-gold-light"
                  : "border-gold/25 bg-white/70 text-gold-dark"
              }`}
            >
              {eyebrow}
            </span>

            <h1
              className={`relative max-w-2xl font-serif text-[1.75rem] font-medium leading-[1.15] tracking-tight sm:text-4xl sm:leading-[1.12] lg:text-[2.75rem] lg:leading-[1.1] xl:text-5xl ${
                dark ? "text-white" : "text-ink"
              }`}
            >
              <span
                className="pointer-events-none absolute -inset-x-8 -inset-y-6 -z-10 bg-gold-radial opacity-70 blur-xl"
                aria-hidden="true"
              />
              {title}
            </h1>

            {subtitle && (
              <p
                className={`mt-5 max-w-xl text-base leading-relaxed sm:mt-6 sm:text-lg ${
                  dark ? "text-white/75" : "text-text-muted"
                }`}
              >
                {subtitle}
              </p>
            )}

            {children && <div className="mt-7 sm:mt-8">{children}</div>}
          </motion.div>

          {showImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none"
            >
              <div className="relative aspect-[5/4] overflow-hidden rounded-4xl shadow-card sm:aspect-[4/3] lg:aspect-[5/6]">
                <ParallaxImage
                  src={imageSrc}
                  alt={imageAlt}
                  objectPosition={imagePosition}
                  priority
                  className="absolute inset-0 h-full w-full"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${
                    dark ? "from-ink/40" : "from-ink/20"
                  } via-transparent to-transparent`}
                />
              </div>
              <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-4xl bg-gold-gradient opacity-25" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
