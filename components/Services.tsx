"use client";

import { motion } from "framer-motion";
import {
  HiHeart,
  HiSparkles,
  HiBeaker,
  HiMoon,
  HiArrowPath,
  HiSun,
} from "react-icons/hi2";
import MotionSection from "@/components/ui/MotionSection";
import { SectionHeader } from "@/components/ui/Shared";
import { SERVICES, buildWhatsAppUrl } from "@/lib/constants";
import type { IconType } from "react-icons";

const ICONS: Record<string, IconType> = {
  "ansiedade-panico": HiSparkles,
  depressao: HiHeart,
  "autoestima-autoamor": HiSun,
  "mudanca-vida": HiArrowPath,
  "avaliacao-neuropsicologica": HiBeaker,
  hipnoterapia: HiMoon,
};

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  const Icon = ICONS[service.id] ?? HiHeart;

  return (
    <motion.article
      id={service.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="card-surface flex h-full w-full flex-col p-6 sm:w-[calc(50%-0.75rem)] sm:p-8 lg:w-[calc(33.333%-1rem)]"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-gold-dark">
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="font-serif text-xl font-medium text-ink">{service.title}</h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">
        {service.description}
      </p>

      <div className="mt-4 space-y-1 border-t border-gold/15 pt-4 text-sm">
        <p className="text-text-muted">
          <span className="font-medium text-ink">Duração:</span> {service.duration}
        </p>
        <p className="font-medium text-gold-dark">{service.price}</p>
      </div>

      <a
        href={buildWhatsAppUrl(
          `Olá, Greice! Gostaria de saber mais sobre: ${service.whatsappTopic}`,
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-ghost mt-5 w-full text-center text-sm"
      >
        Falar no WhatsApp
      </a>
    </motion.article>
  );
}

export default function Services() {
  return (
    <MotionSection id="como-posso-ajudar" className="py-20 sm:py-28">
      <div className="section-container">
        <SectionHeader
          eyebrow="Como posso te ajudar"
          title={
            <>
              Um acompanhamento sob medida para a sua{" "}
              <em className="italic text-gold-dark">história</em>
            </>
          }
        />

        <div className="flex flex-wrap justify-center gap-6">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-text-muted">
          Valores sob consulta. Atendimento presencial em Novo Hamburgo.
        </p>
      </div>
    </MotionSection>
  );
}
