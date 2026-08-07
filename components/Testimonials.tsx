"use client";

import { motion } from "framer-motion";
import MotionSection from "@/components/ui/MotionSection";
import { GoldWord, Stars } from "@/components/ui/Shared";
import {InfinityCorner,
  InfinityDivider } from "@/components/ui/InfinityMark";
import ReviewAvatars from "@/components/ui/ReviewAvatars";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <>
      <InfinityDivider className="bg-white py-8" />
      <MotionSection
        id="depoimentos"
        className="relative overflow-hidden bg-sand py-24 sm:py-32"
      >
        <div className="section-container relative z-[1]">
          <div className="mb-12 max-w-2xl">
            <h2
              className="font-display font-medium tracking-[-0.02em] text-ink"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", lineHeight: 1.1 }}
            >
              O que dizem sobre o meu{" "}
              <GoldWord>
                trabalho
              </GoldWord>
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((item, index) => (
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04, duration: 0.35 }}
                className="card-cream relative flex flex-col overflow-hidden p-6"
              >
                {index % 3 === 0 && <InfinityCorner position="top-right" />}
                <p className="flex-1 text-[15px] leading-relaxed text-ink">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </motion.blockquote>
            ))}
          </div>

          {/* Único contraste escuro pontual da seção */}
          <div className="card-dark relative mt-12 overflow-hidden p-8 sm:p-10">
            <InfinityCorner position="bottom-right" />
            <div className="relative z-[1] flex flex-wrap items-end gap-8">
              <div>
                <p className="font-display text-5xl font-bold tracking-tight text-gold">
                  5,0
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <Stars className="text-sm text-gold" />
                  <span className="text-sm text-white">
                    39 avaliações no Google
                  </span>
                </div>
              </div>
              <ReviewAvatars />
            </div>
          </div>
        </div>
      </MotionSection>
    </>
  );
}
