"use client";

import { motion } from "framer-motion";
import MotionSection from "@/components/ui/MotionSection";

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
    <MotionSection className="bg-ink py-24 text-sand sm:py-32">
      <div className="section-container">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow mb-4 text-sand/45">Como funciona</p>
          <h2
            className="font-sans font-extrabold tracking-[-0.03em] text-sand"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", lineHeight: 1.08 }}
          >
            Três passos para começar a sua{" "}
            <span className="font-semibold text-sand/70">terapia</span>
          </h2>
        </div>

        <div className="grid gap-0 border border-sand/12 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className={`p-8 ${
                index < steps.length - 1 ? "border-b border-sand/12 md:border-b-0 md:border-r" : ""
              }`}
            >
              <span className="font-sans text-sm font-bold tracking-[0.2em] text-gold">
                {step.number}
              </span>
              <h3 className="mt-4 font-sans text-xl font-bold text-sand">
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
