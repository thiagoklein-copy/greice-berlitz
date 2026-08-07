"use client";

import { motion } from "framer-motion";
import MotionSection from "@/components/ui/MotionSection";
import {InfinityCorner,
  InfinityStep } from "@/components/ui/InfinityMark";
import { GoldWord } from "@/components/ui/Shared";

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
    <MotionSection className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="section-container relative z-[1]">
        <div className="mb-12 max-w-2xl">
          <h2
            className="font-display font-medium tracking-[-0.02em] text-ink"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", lineHeight: 1.1 }}
          >
            Três passos para começar a sua{" "}
            <GoldWord>
              terapia
            </GoldWord>
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="card-surface relative overflow-hidden p-8"
            >
              {index === 0 && <InfinityCorner position="top-right" />}
              <InfinityStep number={step.number} />
              <h3 className="mt-4 font-display text-xl font-bold text-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
