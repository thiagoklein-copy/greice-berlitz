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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="card-surface flex h-full w-full flex-col p-7 sm:p-9"
    >
      {/* Ícone com anel gradiente */}
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
        style={{
          background: "linear-gradient(#ffffff, #ffffff) padding-box, linear-gradient(135deg, rgba(201,162,75,0.5), rgba(232,206,140,0.3)) border-box",
          border: "1px solid transparent",
          boxShadow: "0 4px 16px rgba(201,162,75,0.12)",
        }}
      >
        <Icon
          className="h-6 w-6"
          style={{ color: "#8A6B2E" }}
        />
      </div>

      <h3 className="font-serif text-xl font-semibold text-ink sm:text-[1.3rem]">
        {service.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-text-muted">
        {service.description}
      </p>

      <div className="mt-auto pt-5">
        <div className="space-y-1.5 border-t border-gold/12 pt-5 text-sm">
          <p className="text-text-muted">
            <span className="font-semibold text-ink">Duração:</span> {service.duration}
          </p>
          <p className="font-medium text-gold-dark">{service.price}</p>
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
    <MotionSection id="como-posso-ajudar" className="py-28 sm:py-36">
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-text-muted">
          Valores sob consulta. Atendimento presencial em Novo Hamburgo.
        </p>
      </div>
    </MotionSection>
  );
}
