"use client";

import { motion } from "framer-motion";
import MotionSection from "@/components/ui/MotionSection";
import { GoldWord, SectionHeader } from "@/components/ui/Shared";
import { InfinityStep } from "@/components/ui/InfinityMark";

const modalidades = [
  {
    title: "Atendimento Presencial",
    description:
      "Em consultório premium, planejado para garantir o seu máximo conforto, discrição e privacidade.",
  },
  {
    title: "Atendimento Online (Nacional e Internacional)",
    description:
      "Consultas por videochamada criptografada para pacientes em qualquer lugar do Brasil e para profissionais e expatriados residentes no exterior.",
  },
];

/** Atendimento Internacional e Presencial */
export default function Modalidades() {
  return (
    <MotionSection id="modalidades" className="bg-white py-24 sm:py-32">
      <div className="section-container">
        <SectionHeader
          title={
            <>
              Alcance Global, Cuidado <GoldWord>Personalizado</GoldWord>
            </>
          }
          subtitle="Ofereço suporte terapêutico adaptado à sua realidade geográfica e de tempo, garantindo absoluto sigilo, ética e flexibilidade de horários para conciliar com as agendas mais exigentes."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {modalidades.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="card-surface p-8 sm:p-10"
            >
              <InfinityStep number={String(index + 1).padStart(2, "0")} />
              <h3 className="mt-4 font-display text-2xl font-medium text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
