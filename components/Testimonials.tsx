"use client";

import { motion } from "framer-motion";
import MotionSection from "@/components/ui/MotionSection";
import { SectionHeader, Stars } from "@/components/ui/Shared";
import ReviewAvatars from "@/components/ui/ReviewAvatars";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <MotionSection id="depoimentos" className="py-20 sm:py-28">
      <div className="section-container">
        <SectionHeader
          eyebrow="Resultados reais"
          title={
            <>
              Quem já caminhou{" "}
              <em className="italic text-gold-dark">comigo</em>
            </>
          }
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((item, index) => (
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
              className="card-surface flex flex-col p-6 sm:p-8"
            >
              <Stars className="text-sm" />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-text-muted">
                &ldquo;{item.quote}&rdquo;
              </p>
            </motion.blockquote>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-4 rounded-full bg-white px-6 py-3 shadow-soft">
            <ReviewAvatars />
            <div className="flex items-center gap-2">
              <Stars />
              <span className="text-sm font-medium text-ink">5,0</span>
              <span className="text-sm text-text-muted">· 39 avaliações no Google</span>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
