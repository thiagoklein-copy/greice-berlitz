"use client";

import { motion } from "framer-motion";
import MotionSection from "@/components/ui/MotionSection";
import { SectionHeader, Stars } from "@/components/ui/Shared";
import ReviewAvatars from "@/components/ui/ReviewAvatars";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <MotionSection id="depoimentos" className="relative overflow-hidden bg-ink py-28 sm:py-36">
      {/* Glow ambiente */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[600px] -translate-x-1/2 rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 50% 20%, rgba(201,162,75,0.25) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
        aria-hidden="true"
      />

      <div className="section-container relative">
        <SectionHeader
          eyebrow="Resultados reais"
          light
          title={
            <>
              Quem já caminhou{" "}
              <em className="italic text-gold-light">comigo</em>
            </>
          }
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((item, index) => (
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="card-dark relative flex flex-col p-7 sm:p-8"
            >
              {/* Aspas decorativas */}
              <span
                className="pointer-events-none absolute right-6 top-4 select-none font-serif text-7xl leading-none text-gold/15"
                aria-hidden="true"
              >
                &#8220;
              </span>

              <Stars className="relative text-sm text-gold" />

              <p className="relative mt-4 flex-1 text-sm leading-relaxed text-white/70">
                &ldquo;{item.quote}&rdquo;
              </p>
            </motion.blockquote>
          ))}
        </div>

        {/* Prova social — Google Reviews */}
        <div className="mt-14 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-4 rounded-full border border-gold/25 px-7 py-3.5 backdrop-blur-sm"
            style={{
              background:
                "linear-gradient(rgba(42,36,28,0.7), rgba(42,36,28,0.7)) padding-box, linear-gradient(135deg, rgba(201,162,75,0.3), rgba(232,206,140,0.2)) border-box",
              borderColor: "transparent",
            }}
          >
            <ReviewAvatars />
            <div className="flex items-center gap-2">
              <Stars className="text-gold" />
              <span className="text-sm font-semibold text-white">5,0</span>
              <span className="text-sm text-white/55">· 39 avaliações no Google</span>
            </div>
          </motion.div>
        </div>
      </div>
    </MotionSection>
  );
}
