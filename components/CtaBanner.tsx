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
      <span className="text-gold">mudança</span>
    </>
  ),
  subtitle = "Fale comigo agora e vamos conversar sobre o que você precisa.",
  ctaLabel = "Falar no WhatsApp",
  ctaHref = WHATSAPP_URL,
}: CtaBannerProps) {
  return (
    <MotionSection className="bg-ink py-16 sm:py-20">
      <div className="section-container">
        <div className="grid items-center gap-10 border border-sand/15 lg:grid-cols-2 lg:gap-0">
          <div className="p-8 sm:p-12 lg:p-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2
                className="font-sans font-extrabold tracking-[-0.03em] text-sand"
                style={{
                  fontSize: "clamp(1.75rem, 4vw, 3rem)",
                  lineHeight: 1.08,
                }}
              >
                {title}
              </h2>
              <p className="mt-4 max-w-md text-base text-sand/60">{subtitle}</p>
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

          <div className="relative aspect-[4/3] border-t border-sand/15 lg:aspect-auto lg:min-h-[380px] lg:border-l lg:border-t-0">
            {/* SUBSTITUIR: foto em ambiente de trabalho / palestra / reunião. P&B ou baixa saturação. Evitar meditação, praia, contemplação. */}
            <Image
              src={IMAGES.ctaBanner.src}
              alt={IMAGES.ctaBanner.alt}
              fill
              className="object-cover grayscale"
              style={{ objectPosition: IMAGES.ctaBanner.objectPosition }}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-ink/35" />
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
