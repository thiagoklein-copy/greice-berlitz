"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import CompanyLogos from "@/components/CompanyLogos";
import CtaBanner from "@/components/CtaBanner";
import MotionSection from "@/components/ui/MotionSection";
import { GoldWord, SectionHeader } from "@/components/ui/Shared";
import {
  InfinityAccent,
  InfinityCorner,
  InfinityStep,
} from "@/components/ui/InfinityMark";
import { WHATSAPP_PALESTRAS_URL } from "@/lib/constants";

const topics = [
  {
    title: "Mudança de vida",
    description:
      "Como atravessar transições com clareza, coragem e um novo olhar sobre si.",
  },
  {
    title: "Autoamor e autoconhecimento",
    description:
      "Ferramentas para fortalecer a relação consigo e, a partir disso, com o trabalho e com o outro.",
  },
  {
    title: "Depressão: como reconhecer e apoiar",
    description:
      "Sinais, acolhimento e o papel da equipe e da liderança no cuidado emocional.",
  },
  {
    title: "Ansiedade no ambiente de trabalho",
    description:
      "Estratégias práticas para lidar com pressão, sobrecarga e desempenho sustentável.",
  },
  {
    title: "Gestão de pessoas com inteligência emocional",
    description:
      "Liderança presente, comunicação empática e times mais coesos.",
  },
  {
    title: "Autopercepção: como você se vê muda como você vive",
    description:
      "A conexão entre identidade, autoimagem e resultados na vida e no trabalho.",
  },
];

const formats = [
  {
    title: "Palestra avulsa",
    description:
      "Evento único, com tema definido em conjunto, ideal para encontros, treinamentos e datas especiais.",
  },
  {
    title: "Consultoria in company",
    description:
      "Formato personalizado, sob consulta, para demandas específicas da sua organização.",
  },
];

export default function PalestrasContent() {
  return (
    <>
      <PageHero
        eyebrow="Palestras & Consultoria In Company"
        title={
          <>
            Saúde mental e alta performance caminham{" "}
            <GoldWord>
              juntas
              <InfinityAccent />
            </GoldWord>
            .
          </>
        }
        subtitle="Levo para dentro das empresas conteúdos sobre mudança de vida, autoamor, gestão de pessoas e saúde emocional, para equipes mais saudáveis, presentes e produtivas."
      >
        <a
          href={WHATSAPP_PALESTRAS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Solicitar orçamento
        </a>
      </PageHero>

      <MotionSection className="bg-white py-24 sm:py-32">
        <div className="section-container">
          <SectionHeader
            eyebrow="Por que trazer isso"
            title={
              <>
                Bem-estar onde as pessoas{" "}
                <GoldWord>
                  vivem o dia a dia
                  <InfinityAccent />
                </GoldWord>
              </>
            }
          />
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl text-base leading-relaxed text-ink sm:text-lg"
          >
            Muitas pessoas não têm acesso a um atendimento psicológico
            individualizado. As palestras corporativas são minha forma de levar
            ferramentas práticas de bem-estar emocional para o maior número de
            pessoas possível, dentro do ambiente onde elas passam boa parte da
            vida: o trabalho.
          </motion.p>
        </div>
      </MotionSection>

      <MotionSection className="border-y border-ink/8 bg-sand py-24 sm:py-32">
        <div className="section-container">
          <SectionHeader
            eyebrow="Temas"
            title={
              <>
                Temas de{" "}
                <GoldWord>
                  palestra
                  <InfinityAccent />
                </GoldWord>
              </>
            }
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map(({ title, description }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="card-surface relative overflow-hidden p-7"
              >
                {index === 0 && <InfinityCorner position="top-right" />}
                <InfinityStep number={String(index + 1).padStart(2, "0")} />
                <h3 className="mt-4 font-display text-lg font-bold text-ink">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink">
                  {description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </MotionSection>

      <CompanyLogos
        supportText="Com foco especial em empresas do setor da construção civil, mas aberta a qualquer organização que valorize o bem-estar das suas equipes."
      />

      <MotionSection className="bg-white py-24 sm:py-32">
        <div className="section-container">
          <SectionHeader
            eyebrow="Formatos"
            title={
              <>
                Formatos{" "}
                <GoldWord>
                  disponíveis
                  <InfinityAccent />
                </GoldWord>
              </>
            }
          />

          <div className="grid max-w-4xl gap-4 md:grid-cols-2">
            {formats.map((format, index) => (
              <motion.article
                key={format.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="card-surface relative overflow-hidden p-8"
              >
                <InfinityStep number={String(index + 1).padStart(2, "0")} />
                <h3 className="mt-4 font-display text-xl font-bold text-ink">
                  {format.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink sm:text-base">
                  {format.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </MotionSection>

      <CtaBanner
        title={
          <>
            Vamos levar isso para a sua{" "}
            <span className="whitespace-nowrap">
              <GoldWord>empresa?</GoldWord>
              <InfinityAccent />
            </span>
          </>
        }
        subtitle="Solicite um orçamento e vamos desenhar o formato ideal para a sua equipe."
        ctaLabel="Solicitar orçamento no WhatsApp"
        ctaHref={WHATSAPP_PALESTRAS_URL}
      />
    </>
  );
}
