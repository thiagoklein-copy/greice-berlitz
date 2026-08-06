"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import MotionSection from "@/components/ui/MotionSection";
import { SectionHeader, Stars } from "@/components/ui/Shared";
import ReviewAvatars from "@/components/ui/ReviewAvatars";
import { GOOGLE_REVIEWS_URL, TESTIMONIALS } from "@/lib/constants";

interface TestimonialsProps {
  limit?: number;
  showAllLink?: boolean;
  showGoogleLink?: boolean;
  compactBadge?: boolean;
}

export default function Testimonials({
  limit,
  showAllLink = false,
  showGoogleLink = false,
  compactBadge = true,
}: TestimonialsProps) {
  const items = limit ? TESTIMONIALS.slice(0, limit) : TESTIMONIALS;

  return (
    <MotionSection id="depoimentos" className="py-20 sm:py-28">
      <div className="section-container">
        {(showGoogleLink || !compactBadge) && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 flex justify-center"
          >
            <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-gold/25 bg-gradient-to-r from-gold-dark/10 via-gold/15 to-gold-light/20 px-6 py-3 shadow-soft">
              <Stars className="text-base" />
              <span className="text-sm font-semibold text-ink">5,0</span>
              <span className="text-sm text-text-muted">· 39 avaliações no Google</span>
            </div>
          </motion.div>
        )}

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
          {items.map((item, index) => (
            <motion.blockquote
              key={`${item.author}-${index}`}
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
              <footer className="mt-6 border-t border-gold/15 pt-4">
                <cite className="not-italic font-medium text-ink">{item.author}</cite>
              </footer>
            </motion.blockquote>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4">
          {compactBadge && !showGoogleLink && (
            <div className="inline-flex items-center gap-4 rounded-full bg-white px-6 py-3 shadow-soft">
              <ReviewAvatars />
              <div className="flex items-center gap-2">
                <Stars />
                <span className="text-sm font-medium text-ink">5,0</span>
                <span className="text-sm text-text-muted">· 39 avaliações no Google</span>
              </div>
            </div>
          )}

          {showAllLink && (
            <Link href="/depoimentos" className="btn-ghost">
              Ver todos os depoimentos
            </Link>
          )}

          {showGoogleLink && (
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Ver todas as avaliações no Google
            </a>
          )}
        </div>
      </div>
    </MotionSection>
  );
}
