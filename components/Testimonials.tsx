"use client";

import { motion } from "framer-motion";
import { GoldWord, SectionLabel, Stars } from "@/components/ui/Shared";
import ReviewAvatars from "@/components/ui/ReviewAvatars";
import { GOOGLE_REVIEWS_URL, TESTIMONIALS } from "@/lib/constants";

/** Depoimentos: nota fixa à esquerda, citações em lista editorial à direita. */
export default function Testimonials({ index = "04" }: { index?: string }) {
  return (
    <section id="depoimentos" className="section-pad bg-sand-dark">
      <div className="section-container">
        <SectionLabel index={index} className="mb-14 sm:mb-20">
          Depoimentos
        </SectionLabel>

        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <h2 className="t-h2 text-ink">
                O que dizem sobre o meu <GoldWord>trabalho</GoldWord>
              </h2>

              <div className="mt-12 border-t hairline pt-10">
                <p className="font-display text-[5.5rem] leading-none text-gold">
                  5,0
                </p>
                <Stars className="mt-4 block text-sm" />
                <p className="t-small mt-3 text-ink/85">
                  39 avaliações no Google
                </p>
                <div className="mt-8 flex items-center gap-6">
                  <ReviewAvatars />
                  <a
                    href={GOOGLE_REVIEWS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-arrow text-ink"
                  >
                    Ver no Google
                    <span className="arrow" aria-hidden="true">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <ul>
              {TESTIMONIALS.map((item, index) => (
                <motion.li
                  key={item.author}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: (index % 2) * 0.05 }}
                  className="border-t hairline py-10 first:border-t-0 first:pt-0 sm:py-12"
                >
                  <blockquote>
                    <p className="font-display text-[1.5rem] leading-[1.45] text-ink sm:text-[1.75rem]">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                    <footer className="t-label mt-6 text-gold">
                      {item.author}
                    </footer>
                  </blockquote>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
