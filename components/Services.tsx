"use client";

import { motion } from "framer-motion";
import MotionSection from "@/components/ui/MotionSection";
import { GoldWord, SectionHeader } from "@/components/ui/Shared";
import { InfinityStep } from "@/components/ui/InfinityMark";
import { SERVICES, buildWhatsAppUrl } from "@/lib/constants";

const RESULTS = [
  {
    title: "Melhora na qualidade de vida e prazer de viver",
    description:
      "Conquista dos verdadeiros sonhos através do alinhamento com o que te faz feliz.",
  },
  {
    title: "Sucesso sistêmico",
    description:
      "Meus pacientes desenvolvem profunda inteligência emocional, conquistam relações mais saudáveis e felizes e, consequentemente, ampliam seu poder econômico e prosperidade.",
  },
];

function ServiceCard({
  service,
  index }: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      id={service.id}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="card-surface flex h-full w-full flex-col p-7 sm:p-8"
    >
      <InfinityStep number={number} />

      <h3 className="mt-4 font-display text-xl font-medium tracking-[-0.01em] text-ink">
        {service.title}
      </h3>

      <p className="mt-3 text-[15px] leading-relaxed text-ink">
        {service.description}
      </p>

      <div className="mt-auto pt-5">
        <div className="space-y-1.5 border-t border-ink/10 pt-5 text-sm">
          <p className="text-ink">
            <span className="font-semibold text-ink">Duração:</span>{" "}
            {service.duration}
          </p>
          <p className="font-medium text-ink">{service.price}</p>
        </div>

        <a
          href={buildWhatsAppUrl(
            `Olá, Greice! Gostaria de saber mais sobre: ${service.whatsappTopic}`,
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost mt-6 w-full text-center"
        >
          Falar no WhatsApp
        </a>
      </div>
    </motion.article>
  );
}

export default function Services() {
  return (
    <MotionSection id="como-posso-ajudar" className="bg-sand py-24 sm:py-32">
      <div className="section-container">
        <SectionHeader
          title={
            <>
              Áreas de Atuação <GoldWord>Estratégica</GoldWord>
            </>
          }
          subtitle="Utilizo a Terapia Cognitivo-Comportamental (TCC) combinada a métodos integrativos. É uma abordagem padrão-ouro fundamentada em evidências científicas, focada em reestruturar padrões de pensamento para gerar mudanças comportamentais rápidas, mensuráveis e duradouras."
        />

        <div className="mb-16 max-w-4xl">
          <h3 className="font-display text-2xl font-medium text-ink sm:text-3xl">
            Resultados do Processo Terapêutico
          </h3>
          <dl className="mt-6 grid gap-8 border-t border-ink/10 pt-6 sm:grid-cols-2">
            {RESULTS.map((result) => (
              <div key={result.title}>
                <dt className="font-display text-xl font-medium text-gold">
                  {result.title}
                </dt>
                <dd className="mt-2 text-base leading-relaxed text-ink">
                  {result.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <h3 className="mb-8 font-display text-2xl font-medium text-ink sm:text-3xl">
          Frentes de Atendimento
        </h3>

        <div className="grid gap-4 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <p className="mt-12 text-sm text-ink">
          Valores sob consulta. Atendimento presencial em Novo Hamburgo e online.
        </p>
      </div>
    </MotionSection>
  );
}
