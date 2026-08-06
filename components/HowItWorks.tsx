"use client";

import { motion } from "framer-motion";
import MotionSection from "@/components/ui/MotionSection";
import { InfinityStep, InfinityWatermark } from "@/components/ui/InfinityMark";

const steps = [
  {
    number: "01",
    title: "Contato inicial",
    description:
      "Você me escreve no WhatsApp contando, no seu ritmo, o que está buscando. Sem pressão, só uma conversa honesta.",
  },
  {
    number: "02",
    title: "Primeira sessão",
    description:
      "Conheço sua história com presença total e definimos juntos a abordagem que faz mais sentido para você.",
  },
  {
    number: "03",
    title: "Acompanhamento contínuo",
    description:
      "Sessão a sessão, construímos mudanças reais, com ferramentas práticas e escuta genuína.",
  },
];

export default function HowItWorks() {
  return (
    <MotionSection className="relative overflow-hidden bg-ink py-24 text-sand sm:py-32">
      <InfinityWatermark variant="bottom-left" />
      <div className="section-container relative z-[1]">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow mb-4 text-sand/45">Como funciona</p>
          <h2
            className="font-display font-bold tracking-[-0.02em] text-sand"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", lineHeight: 1.1 }}
          >
            Três passos para começar a sua{" "}
            <span className="font-semibold text-sand/65">terapia</span>
          </h2>
        </div>

        <div className="grid gap-0 overflow-hidden rounded-xl border border-sand/12 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className={`p-8 ${
                index < steps.length - 1
                  ? "border-b border-sand/12 md:border-b-0 md:border-r"
                  : ""
              }`}
            >
              <InfinityStep number={step.number} light />
              <h3 className="mt-4 font-display text-xl font-bold text-sand">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-sand/55">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
