"use client";

import { motion } from "framer-motion";
import {
  HiArrowPath,
  HiHeart,
  HiExclamationTriangle,
  HiSparkles,
  HiUserGroup,
  HiEye,
} from "react-icons/hi2";
import PageHero from "@/components/PageHero";
import CompanyLogos from "@/components/CompanyLogos";
import CtaBanner from "@/components/CtaBanner";
import MotionSection from "@/components/ui/MotionSection";
import { SectionHeader } from "@/components/ui/Shared";
import { WHATSAPP_PALESTRAS_URL } from "@/lib/constants";
import type { IconType } from "react-icons";

const topics: { icon: IconType; title: string; description: string }[] = [
  {
    icon: HiArrowPath,
    title: "Mudança de vida",
    description:
      "Como atravessar transições com clareza, coragem e um novo olhar sobre si.",
  },
  {
    icon: HiHeart,
    title: "Autoamor e autoconhecimento",
    description:
      "Ferramentas para fortalecer a relação consigo e, a partir disso, com o trabalho e com o outro.",
  },
  {
    icon: HiExclamationTriangle,
    title: "Depressão: como reconhecer e apoiar",
    description:
      "Sinais, acolhimento e o papel da equipe e da liderança no cuidado emocional.",
  },
  {
    icon: HiSparkles,
    title: "Ansiedade no ambiente de trabalho",
    description:
      "Estratégias práticas para lidar com pressão, sobrecarga e desempenho sustentável.",
  },
  {
    icon: HiUserGroup,
    title: "Gestão de pessoas com inteligência emocional",
    description:
      "Liderança presente, comunicação empática e times mais coesos.",
  },
  {
    icon: HiEye,
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
        title="Saúde mental e alta performance caminham juntas."
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

      <MotionSection className="py-28 sm:py-36">
        <div className="section-container">
          <SectionHeader
            eyebrow="Por que trazer isso"
            title={
              <>
                Bem-estar onde as pessoas{" "}
                <em className="italic text-gold-dark">vivem o dia a dia</em>
              </>
            }
          />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center text-base leading-relaxed text-text-muted sm:text-lg"
          >
            Muitas pessoas não têm acesso a um atendimento psicológico
            individualizado. As palestras corporativas são minha forma de levar
            ferramentas práticas de bem-estar emocional para o maior número de
            pessoas possível, dentro do ambiente onde elas passam boa parte da
            vida: o trabalho.
          </motion.p>
        </div>
      </MotionSection>

      <MotionSection className="bg-sand-dark/50 py-28 sm:py-36">
        <div className="section-container">
          <SectionHeader
            eyebrow="Temas"
            title={
              <>
                Temas de{" "}
                <em className="italic text-gold-dark">palestra</em>
              </>
            }
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map(({ icon: Icon, title, description }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="card-surface p-7 sm:p-9"
              >
                <div
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{
                    background: "linear-gradient(#ffffff, #ffffff) padding-box, linear-gradient(135deg, rgba(201,162,75,0.5), rgba(232,206,140,0.3)) border-box",
                    border: "1px solid transparent",
                    boxShadow: "0 4px 16px rgba(201,162,75,0.12)",
                  }}
                >
                  <Icon className="h-6 w-6" style={{ color: "#8A6B2E" }} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
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

      <MotionSection className="py-28 sm:py-36">
        <div className="section-container">
          <SectionHeader
            eyebrow="Formatos"
            title={
              <>
                Formatos{" "}
                <em className="italic text-gold-dark">disponíveis</em>
              </>
            }
          />

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {formats.map((format, index) => (
              <motion.article
                key={format.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-surface p-8"
              >
                <h3 className="font-serif text-2xl font-medium text-ink">
                  {format.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted sm:text-base">
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
            <em className="italic text-gold-light">empresa</em>?
          </>
        }
        subtitle="Solicite um orçamento e vamos desenhar o formato ideal para a sua equipe."
        ctaLabel="Solicitar orçamento no WhatsApp"
        ctaHref={WHATSAPP_PALESTRAS_URL}
      />
    </>
  );
}
