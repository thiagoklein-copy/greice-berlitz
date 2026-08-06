"use client";

import { motion } from "framer-motion";
import MotionSection from "@/components/ui/MotionSection";
import { Stars } from "@/components/ui/Shared";
import ReviewAvatars from "@/components/ui/ReviewAvatars";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <MotionSection id="depoimentos" className="bg-ink py-24 sm:py-32">
      <div className="section-container">
        <div className="mb-12 max-w-2xl">
          <h2
            className="font-sans font-extrabold tracking-[-0.03em] text-sand"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", lineHeight: 1.08 }}
          >
            O que dizem sobre o meu trabalho
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((item, index) => (
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="card-dark flex flex-col p-6 sm:p-7"
            >
              <span
                className="font-serif text-4xl leading-none text-sand/20"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p className="mt-3 flex-1 font-serif text-base leading-relaxed text-sand/75">
                {item.quote}
              </p>
            </motion.blockquote>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-6 border-t border-sand/12 pt-10">
          <div>
            <p className="font-sans text-4xl font-extrabold tracking-tight text-sand">
              5,0
            </p>
            <div className="mt-1 flex items-center gap-2">
              <Stars className="text-sm text-gold" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-sand/45">
                39 avaliações no Google
              </span>
            </div>
          </div>
          <ReviewAvatars />
        </div>
      </div>
    </MotionSection>
  );
}
