"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MotionSection from "@/components/ui/MotionSection";
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
      <em className="italic text-gold-light">mudança</em>
    </>
  ),
  subtitle = "Fale comigo agora e vamos conversar sobre o que você precisa.",
  ctaLabel = "Falar no WhatsApp",
  ctaHref = WHATSAPP_URL,
}: CtaBannerProps) {
  return (
    <MotionSection className="py-8 sm:py-12">
      <div className="section-container">
        <div className="overflow-hidden rounded-4xl bg-ink-gold shadow-card">
          <div className="grid items-center lg:grid-cols-2">
            <div className="p-8 sm:p-12 lg:p-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif font-semibold leading-[1.08] tracking-[-0.015em] text-white" style={{ fontSize: "clamp(1.75rem, 4.5vw, 3.75rem)" }}>
                  {title}
                </h2>
                <p className="mt-4 max-w-md text-base text-white/80">{subtitle}</p>
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

            <div className="relative aspect-[3/4] sm:aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[420px]">
              <Image
                src={IMAGES.ctaBanner.src}
                alt={IMAGES.ctaBanner.alt}
                fill
                className="object-cover"
                style={{ objectPosition: IMAGES.ctaBanner.objectPosition }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-ink/40" />
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
