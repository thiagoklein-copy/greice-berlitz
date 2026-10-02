"use client";

import { motion } from "framer-motion";
import { GoldWord, SectionHeader } from "@/components/ui/Shared";

const modalidades = [
  {
    title: "Atendimento Presencial",
    description:
      "Em consultório premium, planejado para garantir o seu máximo conforto, discrição e privacidade.",
  },
  {
    title: "Atendimento Online (Nacional e Internacional)",
    description:
      "Consultas por videochamada criptografada para pacientes em qualquer lugar do mundo.",
  },
];

/** Atendimento Internacional e Presencial — faixa café */
export default function Modalidades() {
  return (
    <section id="modalidades" className="section-pad bg-ink">
      <div className="section-container">
        <SectionHeader
          eyebrow="Atendimento internacional e presencial"
          index="02"
          light
          split
          title={
            <>
              Alcance Global, Cuidado <GoldWord>Personalizado</GoldWord>
            </>
          }
          subtitle="Ofereço suporte terapêutico adaptado à sua realidade geográfica e de tempo, garantindo absoluto sigilo, ética e flexibilidade de horários para conciliar com as agendas mais exigentes."
        />

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {modalidades.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="border-t hairline-light pt-10"
            >
              <span className="t-number">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="t-h3 mt-6 text-sand">{item.title}</h3>
              <p className="t-body mt-4 text-sand/75">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
