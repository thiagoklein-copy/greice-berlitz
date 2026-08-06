"use client";

import { motion } from "framer-motion";
import MotionSection from "@/components/ui/MotionSection";
import { Stars } from "@/components/ui/Shared";
import { InfinityDivider, InfinityWatermark } from "@/components/ui/InfinityMark";
import ReviewAvatars from "@/components/ui/ReviewAvatars";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <>
      <InfinityDivider className="bg-sand py-6" />
      <MotionSection
        id="depoimentos"
        className="relative overflow-hidden bg-ink py-24 sm:py-32"
      >
        <InfinityWatermark variant="left-bleed" />
        <div className="section-container relative z-[1]">
          <div className="mb-12 max-w-2xl">
            <h2
              className="font-display font-bold tracking-[-0.02em] text-white"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", lineHeight: 1.1 }}
            >
              O que dizem sobre o meu trabalho
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
                className="card-dark flex flex-col p-6"
              >
                <p className="flex-1 text-[15px] leading-relaxed text-white/70">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </motion.blockquote>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-end gap-8 border-t border-white/10 pt-10">
            <div>
              <p className="font-display text-5xl font-bold tracking-tight text-white">
                5,0
              </p>
              <div className="mt-2 flex items-center gap-2">
                <Stars className="text-sm text-gold" />
                <span className="text-sm text-white/45">
                  39 avaliações no Google
                </span>
              </div>
            </div>
            <ReviewAvatars />
          </div>
        </div>
      </MotionSection>
    </>
  );
}
