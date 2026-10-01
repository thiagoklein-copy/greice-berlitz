"use client";

import { motion } from "framer-motion";
import { GoldWord, SectionHeader } from "@/components/ui/Shared";

const steps = [
  {
    number: "01",
    title: "Contato inicial",
    description:
      "Você me escreve no WhatsApp contando, no seu ritmo, o que está buscando. Sem pressão, só uma conversa honesta." },
  {
    number: "02",
    title: "Primeira sessão",
    description:
      "Conheço sua história com presença total e definimos juntos a abordagem que faz mais sentido para você." },
  {
    number: "03",
    title: "Acompanhamento contínuo",
    description:
      "Sessão a sessão, construímos mudanças reais, com ferramentas práticas e escuta genuína." },
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
