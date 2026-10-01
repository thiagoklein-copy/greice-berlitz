"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { GoldWord } from "@/components/ui/Shared";
import { InfinityGlyph } from "@/components/ui/InfinityMark";
import { WHATSAPP_URL } from "@/lib/constants";

interface CtaBannerProps {
  title?: ReactNode;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

/** Faixa café de fechamento, centralizada, com moldura de filete. */
export default function CtaBanner({
  title = (
    <>
      Dar o primeiro passo já é parte da <GoldWord>mudança</GoldWord>
    </>
  ),
  subtitle = "Fale comigo agora e vamos conversar sobre o que você precisa.",
  ctaLabel = "Falar no WhatsApp",
  ctaHref = WHATSAPP_URL,
}: CtaBannerProps) {
  return (
    <section className="bg-ink py-6 sm:py-10">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="border border-sand/15 px-6 py-20 text-center sm:px-12 sm:py-28 lg:py-32"
        >
          <InfinityGlyph className="mx-auto h-5 w-10 text-gold" />
          <h2 className="t-h2 mx-auto mt-10 max-w-3xl text-sand">{title}</h2>
          <p className="t-body mx-auto mt-8 max-w-xl text-sand/75">{subtitle}</p>
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent mt-12"
          >
            {ctaLabel}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
