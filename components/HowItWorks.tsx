"use client";

import { motion } from "framer-motion";
import MotionSection from "@/components/ui/MotionSection";
import { SectionHeader } from "@/components/ui/Shared";

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
      "Conheço sua história com presença total e definimos juntos o caminho de cuidado que faz sentido para você.",
  },
  {
    number: "03",
    title: "Acompanhamento contínuo",
    description:
      "Sessão a sessão, construímos mudanças reais, com ferramentas práticas, escuta e clareza sobre o próximo passo.",
  },
];

export default function HowItWorks() {
  return (
    <MotionSection className="bg-ink-gold py-28 text-white sm:py-36">
      <div className="section-container">
        <SectionHeader
          eyebrow="Como funciona"
          light
          title={
            <>
              Três passos para começar a sua{" "}
              <em className="italic text-gold-light">jornada</em>
            </>
          }
        />

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.14, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-3xl border border-gold/20 bg-white/5 p-8 backdrop-blur-sm"
            >
              {/* Número decorativo com gradiente */}
              <span
                className="block font-serif text-8xl font-extralight leading-none"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgba(138,107,46,0.8) 0%, rgba(201,162,75,0.9) 45%, rgba(232,206,140,0.6) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                aria-hidden="true"
              >
                {step.number}
              </span>
              <h3 className="mt-3 font-serif text-xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                {step.description}
              </p>

              {/* Conector entre steps */}
              {index < steps.length - 1 && (
                <div
                  className="absolute -right-4 top-1/2 hidden h-px w-8 md:block"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(138,107,46,0.4), rgba(232,206,140,0.5))",
                  }}
                  aria-hidden="true"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
