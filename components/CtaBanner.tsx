"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MotionSection from "@/components/ui/MotionSection";
import { InfinityCorner, InfinityAccent } from "@/components/ui/InfinityMark";
import { GoldWord } from "@/components/ui/Shared";
import { IMAGES, WHATSAPP_URL } from "@/lib/constants";

interface CtaBannerProps {
  title?: ReactNode;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function CtaBanner({
  title = (
    <>
      Dar o primeiro passo já é parte da{" "}
      <GoldWord>
        mudança
        <InfinityAccent className="text-gold" />
      </GoldWord>
    </>
  ),
  subtitle = "Fale comigo agora e vamos conversar sobre o que você precisa.",
  ctaLabel = "Falar no WhatsApp",
  ctaHref = WHATSAPP_URL,
}: CtaBannerProps) {
  return (
    <MotionSection className="relative overflow-hidden bg-ink py-16 sm:py-20">
      <div className="section-container relative z-[1]">
        <div className="relative grid items-center gap-10 overflow-hidden rounded-2xl border border-white/12 lg:grid-cols-2 lg:gap-0">
          <InfinityCorner position="top-left" />
          <div className="relative z-[1] p-8 sm:p-12 lg:p-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.45, 0, 0.2, 1] }}
            >
              <h2
                className="font-display font-medium tracking-[-0.02em] text-white"
                style={{
                  fontSize: "clamp(1.75rem, 4vw, 3rem)",
                  lineHeight: 1.1,
                }}
              >
                {title}
              </h2>
              <p className="mt-4 max-w-md text-base text-white/55">{subtitle}</p>
              <a
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent mt-8"
              >
                {ctaLabel}
              </a>
            </motion.div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-none border-t border-white/12 lg:aspect-auto lg:min-h-[380px] lg:rounded-none lg:border-l lg:border-t-0">
            {/* SUBSTITUIR: foto em ambiente de trabalho / palestra. P&B. */}
            <Image
              src={IMAGES.ctaBanner.src}
              alt={IMAGES.ctaBanner.alt}
              fill
              className="object-cover grayscale"
              style={{ objectPosition: IMAGES.ctaBanner.objectPosition }}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-ink/30" />
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
