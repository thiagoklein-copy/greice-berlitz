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

        <div className="grid grid-cols-2 items-center gap-x-8 gap-y-12 sm:grid-cols-3 lg:gap-x-12 lg:gap-y-16">
          {COMPANIES.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex min-h-[4.5rem] items-center justify-center px-2"
            >
              {"logo" in company && company.logo ? (
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={220}
                  height={88}
                  className="h-11 w-auto max-h-16 max-w-[10.5rem] object-contain opacity-80 grayscale transition duration-300 hover:opacity-100 sm:h-14 sm:max-h-20 sm:max-w-[13rem]"
                />
              ) : (
                <span className="font-serif text-xl font-semibold tracking-wide text-ink/55 sm:text-2xl">
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
