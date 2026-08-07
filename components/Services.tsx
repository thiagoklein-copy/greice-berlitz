"use client";

import { motion } from "framer-motion";
import MotionSection from "@/components/ui/MotionSection";
import { GoldWord, SectionHeader } from "@/components/ui/Shared";
import {InfinityCorner,
  InfinityStep } from "@/components/ui/InfinityMark";
import { SERVICES, buildWhatsAppUrl } from "@/lib/constants";

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
      className="card-surface relative flex h-full w-full flex-col overflow-hidden p-7 sm:p-8"
    >
      {index === 0 && <InfinityCorner position="top-right" />}
      <InfinityStep number={number} />

      <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-ink">
        {service.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-ink">
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
          eyebrow="Como posso te ajudar"
          title={
            <>
              Um acompanhamento sob medida para a sua{" "}
              <GoldWord>
                história
              </GoldWord>
            </>
          }
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <p className="mt-12 text-sm text-ink">
          Valores sob consulta. Atendimento presencial em Novo Hamburgo.
        </p>
      </div>
    </MotionSection>
  );
}
