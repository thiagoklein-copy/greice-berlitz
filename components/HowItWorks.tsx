"use client";

import { motion } from "framer-motion";
import { GoldWord, SectionHeader } from "@/components/ui/Shared";

const steps = [
  {
    number: "01",
    title: "Alinhamento Inicial",
    description:
      "O primeiro contato ocorre via WhatsApp, onde você poderá expor brevemente e em seu próprio ritmo as suas demandas atuais. Este é um espaço de escuta inicial reservado, ético e isento de pressões.",
  },
  {
    number: "02",
    title: "Avaliação Clínica e Metas Metodológicas",
    description:
      "Em nossa primeira sessão, dedico presença total para compreender a complexidade da sua história. A partir dessa avaliação inicial, exponho de forma clara os principais pontos a serem trabalhados e estabelecemos juntos as metas de tratamento. Essa metodologia visa a obtenção de resultados mais rápidos e resolutivos através de um planejamento estruturado.",
  },
  {
    number: "03",
    title: "Desenvolvimento de Competências e Mudança Estrutural",
    description:
      "Ao longo do acompanhamento contínuo, unimos uma escuta clínica genuína ao desenvolvimento de competências emocionais específicas. Através de ferramentas práticas e científicas, viabilizamos a superação dos sintomas e a consolidação do equilíbrio real e sustentável.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-pad bg-sand-dark">
      <div className="section-container">
        <SectionHeader
          eyebrow="Como começar"
          index="03"
          title={
            <>
              Três passos para começar a sua <GoldWord>terapia</GoldWord>
            </>
          }
        />

        <ol className="relative grid gap-14 md:grid-cols-3 md:gap-10">
          <span
            className="absolute left-0 right-0 top-[1.75rem] hidden h-px bg-ink/12 md:block"
            aria-hidden="true"
          />
          {steps.map((step, index) => (
            <motion.li
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.8 }}
              className="relative"
            >
              <span className="t-number relative inline-block bg-sand-dark pr-6">
                {step.number}
              </span>
              <h3 className="t-h3 mt-8 text-ink">{step.title}</h3>
              <p className="t-body mt-4 text-ink/85">{step.description}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
