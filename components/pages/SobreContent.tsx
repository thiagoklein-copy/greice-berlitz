"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import FramedImage from "@/components/ui/FramedImage";
import { GoldWord, SectionLabel } from "@/components/ui/Shared";
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

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const reveal = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, ease },
};

export default function SobreContent() {
  return (
    <>
      <PageHero
        eyebrow="Minha história"
        title={
          <>
            Antes de ajudar os outros a se transformarem, eu me{" "}
            <GoldWord>transformei</GoldWord>.
          </>
        }
        showImage={false}
      />

      {/* ── 01 Quem eu sou ─────────────────────────────────── */}
      <section className="section-pad border-t hairline bg-sand">
        <div className="section-container">
          <SectionLabel index="01" className="mb-14 sm:mb-20">
            Quem eu sou
          </SectionLabel>

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <h2 className="t-h2 text-ink">
                  Vocação, presença e <GoldWord>propósito</GoldWord>
                </h2>
                <FramedImage
                  src={IMAGES.retrato.src}
                  alt={IMAGES.retrato.alt}
                  objectPosition={IMAGES.retrato.objectPosition}
                  aspect="aspect-[4/5]"
                  className="mr-4 mt-16 max-w-sm sm:mr-6"
                />
              </div>
            </div>

            <div className="space-y-10 lg:col-span-7 lg:col-start-6">
              <motion.p {...reveal} className="t-lead text-ink">
                A verdadeira liderança e o sucesso sustentável não nascem apenas da
                competência técnica, mas do equilíbrio emocional e da clareza de
                propósito. Há mais de 19 anos, atuo na Psicologia Clínica e Organizacional guiada por
                uma profunda convicção: a de que o consultório não é apenas um
                espaço de cura, mas um acelerador do potencial humano. Minha escolha
                profissional nunca foi financeira, mas sim baseada no privilégio de
                guiar pessoas a reencontrarem sua máxima potência e o prazer genuíno
                naquilo que realizam.
              </motion.p>
              <motion.p {...reveal} className="t-body border-t hairline pt-10 text-ink/85">
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
        </div>
      </section>

      {/* ── 02 Resiliência (faixa café) ────────────────────── */}
      {/*
        BLOCO SENSÍVEL: texto enviado pela cliente; confirmar antes de publicar
        se o nível de detalhe sobre a perda dos pais está ok.
      */}
      <section className="section-pad bg-ink">
        <div className="section-container">
          <SectionLabel index="02" light className="mb-14 sm:mb-20">
            Resiliência
          </SectionLabel>

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
            <h2 className="t-h2 text-sand lg:col-span-5">
              Uma prova de que é possível <GoldWord>recomeçar</GoldWord>
            </h2>

            <div className="t-body space-y-8 text-sand/80 lg:col-span-6 lg:col-start-7">
              <motion.p {...reveal}>
                Minha autoridade também foi construída pela experiência de vida.
                Conheço os caminhos da depressão por tê-la superado na juventude, o
                que me deu ferramentas práticas e uma empatia real. Diante do luto
                complexo pela perda recente dos meus pais para o câncer, vivi o meu
                maior laboratório de resiliência: transformei a dor profunda em
                energia vital e em um compromisso ainda maior com o sofrimento do
                outro.
              </motion.p>
              <motion.p {...reveal}>
                Acredito que o sucesso sem propósito é vazio. Por isso, meu trabalho
                integra a saúde emocional aos seus valores mais elevados, respeitando
                sua individualidade e sua dimensão espiritual, para que você lidere a
                sua vida com significado e plenitude.
              </motion.p>
            </div>
          </div>

          <motion.blockquote
            {...reveal}
            className="mx-auto mt-24 max-w-4xl border-y hairline-light py-14 text-center sm:mt-32"
          >
            <p
              className="font-display italic text-sand"
              style={{ fontSize: "clamp(1.6rem, 3.4vw, 2.6rem)", lineHeight: 1.3 }}
            >
              &ldquo;Se você está passando por algo parecido, saiba: dá para se
              reconstruir. E eu posso te ajudar nesse caminho.&rdquo;
            </p>
          </motion.blockquote>
        </div>
      </section>

      {/* ── 03 Formação ─────────────────────────────────────── */}
      <section className="section-pad bg-sand-dark">
        <div className="section-container">
          <SectionLabel index="03" className="mb-14 sm:mb-20">
            Formação
          </SectionLabel>

          <div className="grid items-start gap-16 lg:grid-cols-12 lg:gap-12">
            <div className="mx-auto w-full max-w-sm lg:col-span-4 lg:max-w-none">
              <FramedImage
                src={IMAGES.formatura.src}
                alt={IMAGES.formatura.alt}
                objectPosition={IMAGES.formatura.objectPosition}
                parallax={false}
                frame="left"
                caption="Formatura em Psicologia, ULBRA (2007)"
                className="ml-4 sm:ml-6"
              />
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <h2 className="t-h2 text-ink">
                Base técnica, olhar <GoldWord>humano</GoldWord>
              </h2>

              <ol className="mt-14 border-t hairline">
                {formation.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.6 }}
                    className="flex items-baseline gap-6 border-b hairline py-6"
                  >
                    <span className="t-label w-8 shrink-0 text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-xl text-ink sm:text-2xl">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04 Filosofia de trabalho ────────────────────────── */}
      <section className="section-pad bg-sand">
        <div className="section-container">
          <SectionLabel index="04" className="mb-14 sm:mb-20">
            Minha filosofia de trabalho
          </SectionLabel>

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
            <h2 className="t-h2 text-ink lg:col-span-5">
              Alta Performance com <GoldWord>Equilíbrio</GoldWord>
            </h2>

            <div className="t-body space-y-6 text-ink/85 lg:col-span-6 lg:col-start-7">
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
              <p className="font-display text-2xl italic text-ink">
                No meu consultório, o processo terapêutico é ativo, integrativo e
                baseado em três eixos essenciais:
              </p>
            </div>
          </div>

          <ol className="mt-20 border-t hairline sm:mt-28">
            {pillars.map((pillar, index) => (
              <motion.li
                key={pillar.title}
                {...reveal}
                className="grid gap-6 border-b hairline py-12 sm:py-16 lg:grid-cols-12 lg:gap-12"
              >
                <span className="t-number lg:col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="t-h3 text-ink lg:col-span-4">{pillar.title}</h3>
                <p className="t-body text-ink/85 lg:col-span-6 lg:col-start-7">
                  {pillar.description}
                </p>
              </motion.li>
            ))}
          </ol>

          <div className="mt-16">
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
      </section>

      <CtaBanner
        title={
          <>
            Quero fazer parte da sua jornada de <GoldWord>transformação</GoldWord>
          </>
        }
        subtitle="Se algo aqui ressoou com você, vamos conversar."
      />
    </>
  );
}
