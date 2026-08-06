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
      className={`relative overflow-hidden pt-28 sm:pt-36 lg:pt-44 ${
        dark ? "bg-ink text-white" : "bg-gold-soft"
      }`}
    >
      {/* Glow ambiente central */}
      <div className="hero-glow" aria-hidden="true" />

      {/* Glow secundário direita */}
      <div
        className={`pointer-events-none absolute -right-32 top-16 h-80 w-80 rounded-full blur-3xl ${
          dark ? "bg-gold/12" : "bg-gold/18"
        }`}
        aria-hidden="true"
      />

      {/* Glow terciário esquerda */}
      <div
        className={`pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full blur-3xl ${
          dark ? "bg-gold-dark/10" : "bg-gold-light/20"
        }`}
        aria-hidden="true"
      />

      <div className="section-container relative pb-20 lg:pb-32">
        <div
          className={`grid items-center gap-12 ${
            showImage
              ? "lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16 xl:gap-24"
              : "max-w-4xl"
          }`}
        >
          {/* Bloco de texto */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={showImage ? "order-2 lg:order-1" : ""}
          >
            {/* Eyebrow tag */}
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className={`mb-6 inline-flex items-center rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] backdrop-blur-sm ${
                dark
                  ? "border-gold/30 bg-white/5 text-gold-light"
                  : "border-gold/25 bg-white/70 text-gold-dark"
              }`}
            >
              {eyebrow}
            </motion.span>

            {/* Headline display — escala Whoop-style */}
            <h1
              className={`relative font-serif font-semibold leading-[1.07] tracking-[-0.025em] ${
                dark ? "text-white" : "text-ink"
              }`}
              style={{
                fontSize: "clamp(2.1rem, 5.5vw, 5rem)",
                lineHeight: 1.06,
              }}
            >
              {/* Glow atrás do título */}
              <span
                className="pointer-events-none absolute -inset-x-10 -inset-y-8 -z-10 bg-gold-radial opacity-60 blur-2xl"
                aria-hidden="true"
              />
              {title}
            </h1>

            {subtitle && (
              <p
                className={`mt-7 max-w-xl text-base leading-relaxed sm:text-lg lg:text-[1.1rem] lg:leading-[1.75] ${
                  dark ? "text-white/70" : "text-text-muted"
                }`}
              >
                {subtitle}
              </p>
            )}

            {children && <div className="mt-8 sm:mt-10">{children}</div>}
          </motion.div>

          {/* Bloco de imagem com parallax */}
          {showImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative order-1 mx-auto w-full max-w-sm lg:order-2 lg:max-w-none"
            >
              {/* Moldura da imagem */}
              <div className="relative aspect-[5/4] overflow-hidden rounded-4xl shadow-lift sm:aspect-[4/3] lg:aspect-[5/6]">
                <ParallaxImage
                  src={imageSrc}
                  alt={imageAlt}
                  objectPosition={imagePosition}
                  priority
                  className="absolute inset-0 h-full w-full"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />
                {/* Overlay gradiente integrador */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${
                    dark ? "from-ink/50 via-ink/10" : "from-ink/30 via-transparent"
                  } to-transparent`}
                />
                {/* Overlay dourado sutil (integra antes das fotos reais chegarem) */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/8 via-transparent to-transparent mix-blend-overlay" />
              </div>

              {/* Sombra decorativa atrás da moldura */}
              <div className="absolute -bottom-5 -left-5 -z-10 h-full w-full rounded-4xl bg-gold-gradient opacity-20" />

              {/* Linha dourada decorativa */}
              <div className="absolute -right-3 top-8 h-[60%] w-[1px] bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
