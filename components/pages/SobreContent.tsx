"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import MotionSection from "@/components/ui/MotionSection";
import { GoldWord, SectionHeader } from "@/components/ui/Shared";
import {InfinityCorner,
  InfinityStep } from "@/components/ui/InfinityMark";
import { IMAGES, PROFESSIONAL_CRP, WHATSAPP_URL } from "@/lib/constants";

const formation = [
  "Graduação em Psicologia, ULBRA (2007)",
  "Pós-graduação em Terapia Cognitivo-Comportamental, UFRGS (2012)",
  "Capacitação como Psicóloga do Trânsito, ULBRA",
  PROFESSIONAL_CRP,
  "Experiência em Psicologia Clínica, Hospitalar e Organizacional",
];

const values = [
  "Vocação antes do retorno",
  "Presença total em cada atendimento",
  "Conhecimento técnico com intuição",
  "Autoamor como caminho de mudança",
];

export default function SobreContent() {
  return (
    <>
      <PageHero
        eyebrow="Minha história"
        title={
          <>
            <span className="block text-balance">
              Antes de ajudar os outros a se transformarem,
            </span>
            <span className="mt-2 block text-balance sm:mt-3">
              eu me <GoldWord>transformei</GoldWord>.
            </span>
          </>
        }
        imageSrc={IMAGES.greice.src}
        imageAlt={IMAGES.greice.alt}
        imagePosition={IMAGES.greice.objectPosition}
      />

      <MotionSection className="bg-white py-24 sm:py-32">
        <div className="section-container">
          <SectionHeader
            eyebrow="Quem eu sou"
            title={
              <>
                Vocação, presença e{" "}
                <GoldWord>
                  propósito
                </GoldWord>
              </>
            }
          />

          <div className="max-w-3xl space-y-5 text-base leading-relaxed text-ink sm:text-lg">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Sempre fui uma pessoa muito empática. Meu maior sonho sempre foi
              ajudar as pessoas a ficarem bem. Tive a sorte de poder escolher minha
              profissão pela vocação, não pelo retorno financeiro. E foi exatamente
              esse propósito que, com o tempo, trouxe os resultados.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 }}
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
        Um dos ≤2 momentos escuros da página (junto com o CTA).
      */}
      <MotionSection className="relative overflow-hidden bg-ink py-24 sm:py-32">
        <div className="section-container relative z-[1]">
          <SectionHeader
            eyebrow="Resiliência"
            title={
              <>
                Uma prova de que é possível{" "}
                <GoldWord>
                  recomeçar
                </GoldWord>
              </>
            }
            light
          />

          <div className="max-w-3xl space-y-5 text-base leading-relaxed text-sand sm:text-lg">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Em 2024 e 2025, vivi um dos períodos mais difíceis da minha vida:
              perdi meus dois pais, em um intervalo de poucos meses, para o câncer.
              Foi um tempo de muita dor, e também de muito aprendizado sobre o que
              significa cuidar de si enquanto se cuida de quem se ama.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 }}
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

      <MotionSection className="bg-sand py-24 sm:py-32">
        <div className="section-container">
          <SectionHeader
            eyebrow="Formação"
            title={
              <>
                Base técnica, olhar{" "}
                <GoldWord>
                  humano
                </GoldWord>
              </>
            }
          />

          <ul className="card-surface max-w-2xl space-y-0 overflow-hidden p-0">
            {formation.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="flex items-start gap-4 border-b border-ink/10 px-5 py-4 last:border-b-0"
              >
                <InfinityStep number={String(index + 1).padStart(2, "0")} />
                <span className="text-sm text-ink sm:text-base">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </MotionSection>

      <MotionSection className="border-t border-ink/8 bg-white py-24 sm:py-32">
        <div className="section-container">
          <SectionHeader
            eyebrow="O que me move"
            title={
              <>
                Valores que guiam cada{" "}
                <GoldWord>
                  encontro
                </GoldWord>
              </>
            }
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((label, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="card-surface relative overflow-hidden p-6"
              >
                {index === 0 && <InfinityCorner position="bottom-right" />}
                <InfinityStep number={String(index + 1).padStart(2, "0")} />
                <p className="mt-3 font-display text-base font-semibold text-ink">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
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
            <GoldWord>
              transformação
            </GoldWord>
          </>
        }
        subtitle="Se algo aqui ressoou com você, vamos conversar."
      />
    </>
  );
}
