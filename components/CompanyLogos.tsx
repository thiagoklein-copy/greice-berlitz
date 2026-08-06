"use client";

import { motion } from "framer-motion";
import MotionSection from "@/components/ui/MotionSection";
import { SectionHeader } from "@/components/ui/Shared";
import { COMPANIES } from "@/lib/constants";

interface CompanyLogosProps {
  title?: string;
  supportText?: string;
  id?: string;
}

export default function CompanyLogos({
  title = "Empresas que já confiaram no meu trabalho",
  supportText,
  id,
}: CompanyLogosProps) {
  return (
    <MotionSection id={id} className="py-16 sm:py-24">
      <div className="section-container">
        <SectionHeader eyebrow="Prova social" title={title} subtitle={supportText} />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COMPANIES.map((name, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
              className="flex items-center justify-center rounded-2xl border border-gold/20 bg-gradient-to-br from-white via-sand to-gold-light/20 px-6 py-8 text-center shadow-soft"
            >
              <span className="font-serif text-lg font-medium text-ink sm:text-xl">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
