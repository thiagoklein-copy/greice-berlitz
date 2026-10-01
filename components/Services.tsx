"use client";

import { motion } from "framer-motion";
import { GoldWord, SectionHeader } from "@/components/ui/Shared";
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

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Áreas de Atuação Estratégica: intro TCC, resultados e frentes em lista. */
export default function Services() {
  return (
    <section id="como-posso-ajudar" className="section-pad scroll-mt-20 bg-sand">
      <div className="section-container">
        <SectionHeader
          eyebrow="Áreas de atuação"
          index="01"
          split
          title={
            <>
              Áreas de Atuação <GoldWord>Estratégica</GoldWord>
            </>
          }
          subtitle="Utilizo a Terapia Cognitivo-Comportamental (TCC) combinada a métodos integrativos. É uma abordagem padrão-ouro fundamentada em evidências científicas, focada em reestruturar padrões de pensamento para gerar mudanças comportamentais rápidas, mensuráveis e duradouras."
        />

        {/* Resultados */}
        <div className="bg-sand-dark px-6 py-14 sm:px-12 sm:py-16 lg:px-16">
          <p className="t-label text-gold">Resultados do Processo Terapêutico</p>
          <dl className="mt-10 grid gap-12 md:grid-cols-2 md:gap-16">
            {RESULTS.map((result) => (
              <div key={result.title} className="border-t hairline pt-8">
                <dt className="t-h3 text-ink">{result.title}</dt>
                <dd className="t-body mt-4 text-ink/85">{result.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Frentes */}
        <div className="mt-24 sm:mt-32">
          <h3 className="t-label text-ink">Frentes de Atendimento</h3>

          <ol className="mt-10 border-t hairline">
            {SERVICES.map((service, index) => (
              <motion.li
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, ease }}
                className="grid gap-6 border-b hairline py-12 sm:py-16 lg:grid-cols-12 lg:gap-12"
              >
                <span className="t-number lg:col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h4 className="t-h3 text-ink lg:col-span-4">{service.title}</h4>
                <div className="lg:col-span-6 lg:col-start-7">
                  <p className="t-body text-ink/85">{service.description}</p>
                  <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                    <p className="t-label text-ink/60">
                      {service.duration} · {service.price}
                    </p>
                    <a
                      href={buildWhatsAppUrl(
                        `Olá, Greice! Gostaria de saber mais sobre: ${service.whatsappTopic}`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-arrow text-ink"
                    >
                      Falar no WhatsApp
                      <span className="arrow" aria-hidden="true">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>

          <p className="t-small mt-10 text-ink/60">
            Valores sob consulta. Atendimento presencial em Novo Hamburgo e online.
          </p>
        </div>
      </div>
    </section>
  );
}
