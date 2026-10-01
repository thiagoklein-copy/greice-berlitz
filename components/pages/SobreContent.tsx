"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import MotionSection from "@/components/ui/MotionSection";
import { GoldWord, SectionHeader } from "@/components/ui/Shared";
import { InfinityStep } from "@/components/ui/InfinityMark";
import Image from "next/image";
import { IMAGES, PROFESSIONAL_CRP, WHATSAPP_URL } from "@/lib/constants";

const formation = [
  "Graduação em Psicologia, ULBRA (2007)",
  "Pós-graduação em Terapia Cognitivo-Comportamental, UFRGS (2012)",
  "Capacitação como Psicóloga do Trânsito, ULBRA",
  PROFESSIONAL_CRP,
  "Experiência em Psicologia Clínica, Hospitalar e Organizacional",
];

const pillars = [
  {
    title: "Psicoeducação Avançada e Alinhamento de Vida",
    description:
      "Para quem tem um intelecto apurado, não basta apenas receber orientações; é preciso compreender o porquê. Eu ensino os meus pacientes sobre os processos cognitivos que envolvem nossas reações fisiológicas e mentais. Pautados na história de cada indivíduo, identificamos juntos os pensamentos, sentimentos e comportamentos disfuncionais que geram os sintomas de diversas patologias ou que travam os projetos de vida. Atuamos diretamente nos desafios de carreira e no planejamento existencial, ajudando a recalibrar rotas profissionais. Quando você entende como a sua mente funciona diante das pressões, ganha o controle para transformá-la.",
  },
  {
    title: "O Estilo de Vida como Base Científica",
    description:
      "A mente e o corpo são um sistema único. Minha abordagem pauta-se na extrema importância do cuidado integrado entre mente, corpo e espírito. Olhamos para a prática de atividade física regular e para uma alimentação regrada como bases biológicas indispensáveis para a regulação das emoções, do foco e dos neurotransmissores. Nós desenhamos juntos a sua “rotina de vida ideal e possível”, orientando e estruturando um cotidiano personalizado que protege a sua energia vital e o seu bem-estar.",
  },
  {
    title: "Liderança pelo Exemplo",
    description:
      "Eu não receito o que não pratico. Tudo o que proponho aos meus pacientes — desde o manejo do estresse, a disciplina nos treinos, até o cultivo da espiritualidade e da resiliência diante dos desafios da vida — faz parte do meu próprio dia a dia. Minha bagagem profissional e minha rotina pessoal são os meus maiores avais de que este método funciona.",
  },
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
        imageSrc={IMAGES.retrato.src}
        imageAlt={IMAGES.retrato.alt}
        imagePosition={IMAGES.retrato.objectPosition}
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
              A verdadeira liderança e o sucesso sustentável não nascem apenas da
              competência técnica, mas do equilíbrio emocional e da clareza de
              propósito. Há mais de 19 anos, atuo na Psicologia Clínica guiada por
              uma profunda convicção: a de que o consultório não é apenas um
              espaço de cura, mas um acelerador do potencial humano. Minha escolha
              profissional nunca foi financeira, mas sim baseada no privilégio de
              guiar pessoas a reencontrarem sua máxima potência e o prazer genuíno
              naquilo que realizam.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 }}
            >
              Com especialização em Terapia Cognitivo-Comportamental (TCC) e uma
              sólida trajetória que une as áreas Clínica, Hospitalar e
              Organizacional, desenvolvi uma visão sistêmica sobre a mente humana.
              Essa bagagem multifacetada me permite compreender com precisão a
              rotina de alta exigência, as pressões de mercado e os desafios de
              tomada de decisão enfrentados por empresários, profissionais
              autônomos e líderes. Esse olhar atento estende-se também à jornada
              múltipla de muitas mulheres, que equilibram com maestria as demandas
              corporativas com a vida familiar. No meu consultório — avaliado com
              nota máxima (5 estrelas) no Google —, traduzo a ciência em
              estratégias práticas para quem busca lucratividade e sucesso sem
              abdicar do seu verdadeiro propósito de vida. Sempre conectado à saúde
              mental, ao bem-estar e à felicidade.
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
              Minha autoridade também foi construída pela experiência de vida.
              Conheço os caminhos da depressão por tê-la superado na juventude, o
              que me deu ferramentas práticas e uma empatia real. Diante do luto
              complexo pela perda recente dos meus pais para o câncer, vivi o meu
              maior laboratório de resiliência: transformei a dor profunda em
              energia vital e em um compromisso ainda maior com o sofrimento do
              outro.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 }}
            >
              Acredito que o sucesso sem propósito é vazio. Por isso, meu trabalho
              integra a saúde emocional aos seus valores mais elevados, respeitando
              sua individualidade e sua dimensão espiritual, para que você lidere a
              sua vida com significado e plenitude.
            </motion.p>
          </div>

          <motion.blockquote
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12, duration: 0.5 }}
            className="relative mx-auto mt-16 max-w-3xl px-4 text-center sm:mt-20"
          >
            <span
              className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[70%] font-display text-[clamp(5rem,14vw,9rem)] leading-none text-gold/55"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <p
              className="relative z-[1] font-display font-medium tracking-[-0.01em] text-sand"
              style={{
                fontSize: "clamp(1.35rem, 3.2vw, 2rem)",
                lineHeight: 1.35,
              }}
            >
              Se você está passando por algo parecido, saiba: dá para se
              reconstruir. E eu posso te ajudar nesse caminho.
            </p>
          </motion.blockquote>
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

          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-16">
          <ul className="card-surface space-y-0 overflow-hidden p-0">
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

          <figure className="mx-auto w-full max-w-sm lg:max-w-none">
            <div className="relative aspect-square overflow-hidden rounded-sm border border-ink/10">
              <Image
                src={IMAGES.formatura.src}
                alt={IMAGES.formatura.alt}
                fill
                sizes="(max-width: 1024px) 90vw, 35vw"
                className="object-cover grayscale"
                style={{ objectPosition: IMAGES.formatura.objectPosition }}
              />
            </div>
            <figcaption className="mt-3 text-sm text-ink">
              Formatura em Psicologia, ULBRA (2007)
            </figcaption>
          </figure>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="border-t border-ink/8 bg-white py-24 sm:py-32">
        <div className="section-container">
          <SectionHeader
            title={
              <>
                Alta Performance com <GoldWord>Equilíbrio</GoldWord>
              </>
            }
          />

          <div className="max-w-3xl space-y-5 text-base leading-relaxed text-ink sm:text-lg">
            <p>
              Muitas mentes brilhantes vivem exaustas porque foram mal orientadas
              a acreditar que o sucesso exige o sacrifício da saúde ou da paz. Eu
              não acredito em fórmulas mágicas, mas sim em engenharia de rotina. A
              verdadeira felicidade está em adequar o seu sentido real de vida e a
              sua verdade às suas necessidades diárias. Ela reside no alinhamento
              diário — e possível — de todas as esferas da sua vida: saúde física,
              desenvolvimento intelectual, carreira, família e conexão espiritual,
              utilizando pilares fundamentais embasados pelo conhecimento
              científico.
            </p>
            <p>
              No meu consultório, o processo terapêutico é ativo, integrativo e
              baseado em três eixos essenciais:
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {pillars.map((pillar, index) => (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="card-surface relative overflow-hidden p-7 sm:p-8"
              >
                <InfinityStep number={String(index + 1).padStart(2, "0")} />
                <h3 className="mt-4 font-display text-2xl font-medium text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink sm:text-base">
                  {pillar.description}
                </p>
              </motion.article>
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
