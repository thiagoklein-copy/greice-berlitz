"use client";

import { motion } from "framer-motion";
import {
  HiHeart,
  HiEye,
  HiLightBulb,
  HiSparkles,
} from "react-icons/hi2";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import MotionSection from "@/components/ui/MotionSection";
import { SectionHeader } from "@/components/ui/Shared";
import { IMAGES, PROFESSIONAL_CRP, WHATSAPP_URL } from "@/lib/constants";

const formation = [
  "Graduação em Psicologia, ULBRA (2007)",
  "Pós-graduação em Terapia Cognitivo-Comportamental, UFRGS (2012)",
  "Capacitação como Psicóloga do Trânsito, ULBRA",
  PROFESSIONAL_CRP,
  "Experiência em Psicologia Clínica, Hospitalar e Organizacional",
];

const values = [
  { icon: HiHeart, label: "Vocação antes do retorno" },
  { icon: HiEye, label: "Presença total em cada atendimento" },
  { icon: HiLightBulb, label: "Conhecimento técnico com intuição" },
  { icon: HiSparkles, label: "Autoamor como caminho de mudança" },
];

export default function SobreContent() {
  return (
    <>
      <PageHero
        eyebrow="Minha história"
        title="Antes de ajudar os outros a se transformarem, eu me transformei."
        imageSrc={IMAGES.greice.src}
        imageAlt={IMAGES.greice.alt}
        imagePosition={IMAGES.greice.objectPosition}
      />

      <MotionSection className="py-28 sm:py-36">
        <div className="section-container">
          <SectionHeader
            eyebrow="Quem eu sou"
            title={
              <>
                Vocação, presença e{" "}
                <em className="italic text-gold-dark">propósito</em>
              </>
            }
            align="left"
          />

          <div className="mx-auto max-w-3xl space-y-5 text-base leading-relaxed text-text-muted sm:text-lg">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Sempre fui uma pessoa muito empática. Meu maior sonho sempre foi
              ajudar as pessoas a ficarem bem. Tive a sorte de poder escolher minha
              profissão pela vocação, não pelo retorno financeiro. E foi exatamente
              esse propósito que, com o tempo, trouxe os resultados.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
            >
              Ao longo de mais de 16 anos de prática clínica, vi pessoas chegarem
              até mim sem perspectiva de vida, sem vontade de seguir em frente,
              cercadas por relacionamentos tóxicos, e vi essas mesmas pessoas se
              reconstruírem. Costumo brincar com meus pacientes que, além de
              emocionalmente mais fortes, eles saem mais bonitos e mais
              &ldquo;ricos&rdquo; depois de um período de acompanhamento. O autoamor
              transforma vidas, e eu quero continuar fazendo parte disso para cada
              vez mais pessoas.
            </motion.p>
          </div>
        </div>
      </MotionSection>

      {/*
        BLOCO SENSÍVEL: confirmar com a cliente o nível de detalhe antes de publicar.
        Tom sóbrio, sem imagens ou elementos gráficos "tristes".
      */}
      <MotionSection className="bg-gold-soft py-28 sm:py-36">
        <div className="section-container">
          <SectionHeader
            eyebrow="Resiliência"
            title="Uma prova de que é possível recomeçar"
            align="left"
          />

          <div className="mx-auto max-w-3xl space-y-5 text-base leading-relaxed text-text-muted sm:text-lg">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Em 2024 e 2025, vivi um dos períodos mais difíceis da minha vida:
              perdi meus dois pais, em um intervalo de poucos meses, para o câncer.
              Foi um tempo de muita dor, e também de muito aprendizado sobre o que
              significa cuidar de si enquanto se cuida de quem se ama.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
            >
              Mantive o que pude da minha rotina, da minha família, do meu trabalho,
              na medida do possível, sem deixar de cuidar de mim enquanto cuidava
              deles. Hoje sigo minha vida com a certeza de que é possível atravessar
              os momentos mais difíceis e, ainda assim, encontrar propósito e alegria
              do outro lado. Se você está passando por algo parecido, saiba: dá para
              se reconstruir. E eu posso te ajudar nesse caminho.
            </motion.p>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="py-28 sm:py-36">
        <div className="section-container">
          <SectionHeader
            eyebrow="Formação"
            title={
              <>
                Base técnica, olhar{" "}
                <em className="italic text-gold-dark">humano</em>
              </>
            }
          />

          <ul className="mx-auto max-w-2xl space-y-3">
            {formation.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="flex items-start gap-3 rounded-2xl border border-gold/15 bg-white px-5 py-4 shadow-soft"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold-gradient" />
                <span className="text-sm text-text-muted sm:text-base">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </MotionSection>

      <MotionSection className="bg-sand-dark/50 py-28 sm:py-36">
        <div className="section-container">
          <SectionHeader
            eyebrow="O que me move"
            title={
              <>
                Valores que guiam cada{" "}
                <em className="italic text-gold-dark">encontro</em>
              </>
            }
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, label }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex flex-col items-center rounded-full border border-gold/20 bg-gradient-to-br from-white to-gold-light/20 px-6 py-8 text-center shadow-soft sm:rounded-3xl"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-sm font-medium text-ink">{label}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Falar com a Greice
            </a>
          </div>
        </div>
      </MotionSection>

      <CtaBanner
        title={
          <>
            Quero fazer parte da sua jornada de{" "}
            <em className="italic text-gold-light">transformação</em>
          </>
        }
        subtitle="Se algo aqui ressoou com você, vamos conversar."
      />
    </>
  );
}
