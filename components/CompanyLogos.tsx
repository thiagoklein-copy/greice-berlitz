"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import MotionSection from "@/components/ui/MotionSection";
import { COMPANIES } from "@/lib/constants";

interface CompanyLogosProps {
  title?: string;
  supportText?: string;
  id?: string;
  bridgeToDark?: boolean;
}

export default function CompanyLogos({
  title = "Empresas que já confiaram no meu trabalho",
  supportText,
  id,
}: CompanyLogosProps) {
  return (
    <MotionSection id={id} className="bg-sand py-20 sm:py-24">
      <div className="section-container">
        <p className="eyebrow mb-3">{title}</p>
        {supportText && (
          <p className="mb-10 max-w-2xl text-sm text-text-muted">{supportText}</p>
        )}

        <div className="mt-8 flex flex-wrap items-center justify-start gap-x-10 gap-y-8 sm:gap-x-14">
          {COMPANIES.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.35 }}
              className="flex h-12 items-center"
            >
              {"logo" in company && company.logo ? (
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={160}
                  height={48}
                  className="h-8 w-auto max-w-[9rem] object-contain opacity-70 brightness-0 sm:h-9 sm:max-w-[11rem]"
                />
              ) : (
                <span className="font-sans text-lg font-bold tracking-tight text-ink/70">
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
