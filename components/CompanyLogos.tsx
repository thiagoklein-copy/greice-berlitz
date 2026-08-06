"use client";

import Image from "next/image";
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
    <MotionSection id={id} className="py-24 sm:py-32">
      <div className="section-container">
        <SectionHeader eyebrow="Prova social" title={title} subtitle={supportText} />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COMPANIES.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="card-surface flex min-h-[7.5rem] items-center justify-center px-7 py-9 text-center"
            >
              {"logo" in company && company.logo ? (
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={220}
                  height={72}
                  className="h-12 w-auto max-w-[11rem] object-contain sm:h-14 sm:max-w-[13rem]"
                />
              ) : (
                <span className="font-serif text-xl font-semibold text-ink">
                  {company.name}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
