"use client";

/**
 * HOME — fase 3: branco predominante, dourado pontual, ∞ marcador.
 * Ver decisões em app/globals.css. Copy: conteúdo final enviado pela cliente (out/2026).
 */

import Link from "next/link";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import CompanyLogos from "@/components/CompanyLogos";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import MotionSection from "@/components/ui/MotionSection";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { InfinityStep } from "@/components/ui/InfinityMark";
import { GoldWord } from "@/components/ui/Shared";
import { WHATSAPP_CONSULTA_URL } from "@/lib/constants";

const trustStats = [
  { value: 19, suffix: "+", label: "anos de experiência" },
  { value: 5.0, decimals: 1, suffix: "", label: "no Google" },
  { value: 39, suffix: "", label: "avaliações" },
] as const;

const paths = [
  {
    number: "01",
    title: "Terapia Individual",
    description:
      "Um espaço de escuta para você se reencontrar, superar a ansiedade, a depressão e reconstruir o amor-próprio.",
    href: "/atendimento-individual",
    cta: "Conhecer a terapia individual",
    featured: true },
  {
    number: "02",
    title: "Palestras",
    description:
      "Levo saúde mental, gestão de pessoas e autoconhecimento para dentro das empresas. Já estive com equipes da Gerdau, FCC, ULBRA Saúde e outras.",
    href: "/palestras-empresas",
    cta: "Conhecer as palestras",
    featured: false },
] as const;

export default function HomePage() {
  return (
    <>
      <PageHero
        showImage={false}
        align="center"
        showBrand
        title={
          <>
            Saúde Mental, <GoldWord>Propósito</GoldWord> e Alta Performance
            Humana
          </>
        }
        subtitle="Adequar a sua vida à sua verdadeira essência é o único caminho para o equilíbrio real. Só quando descobrimos e seguimos a nossa verdade interna é que alcançamos o verdadeiro sucesso em todas as áreas da vida — na carreira, na família e no espírito."
      >
        <blockquote className="mb-10 max-w-2xl border-y border-gold/40 py-6">
          <p
            className="font-display italic text-ink"
            style={{ fontSize: "clamp(1.25rem, 2.6vw, 1.6rem)", lineHeight: 1.4 }}
          >
            &ldquo;A felicidade não é um evento isolado; é o equilíbrio da sua
            rotina. Construa um estilo de vida onde o sucesso, a saúde e o
            propósito caminhem juntos.&rdquo;
          </p>
        </blockquote>

        <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href={WHATSAPP_CONSULTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-center"
          >
            Agendar Consulta Estratégica
          </a>
          <a href="#dois-caminhos" className="btn-ghost text-center">
            Conhecer meu trabalho ↓
          </a>
        </div>

        <motion.ul
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-12 grid w-full max-w-2xl grid-cols-3 gap-6 border-t border-ink/10 pt-8 sm:gap-8"
        >
          {trustStats.map((stat) => (
            <li key={stat.label} className="text-center">
              <p className="font-display text-3xl font-medium tracking-[-0.01em] text-gold sm:text-4xl">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={"decimals" in stat ? stat.decimals : 0}
                />
                {stat.label === "no Google" && (
                  <span className="ml-1 text-gold">★</span>
                )}
              </p>
              <p className="mt-2 text-sm text-ink">{stat.label}</p>
            </li>
          ))}
        </motion.ul>
      </PageHero>

      <MotionSection id="dois-caminhos" className="bg-white py-24 sm:py-32">
        <div className="section-container">
          <div className="mb-12 max-w-2xl">
            <h2
              className="font-display font-medium tracking-[-0.01em] text-ink"
              style={{ fontSize: "clamp(2.1rem, 4.6vw, 3.5rem)", lineHeight: 1.1 }}
            >
              Dois caminhos, um{" "}
              <GoldWord>
                propósito
              </GoldWord>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink sm:text-lg">
              Seja no consultório ou na empresa, o objetivo é o mesmo: fazer
              diferença de verdade.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {paths.map((path, index) => (
              <motion.article
                key={path.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="card-surface relative flex flex-col overflow-hidden p-8 sm:p-10"
              >
                <InfinityStep number={path.number} />
                <h3
                  className={`mt-4 font-display font-medium tracking-[-0.01em] text-ink ${
                    path.featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
                  }`}
                >
                  {path.title}
                </h3>
                <p className="mt-4 flex-1 text-base leading-relaxed text-ink">
                  {path.description}
                </p>
                <Link
                  href={path.href}
                  className={`mt-8 self-start ${
                    path.featured ? "btn-primary" : "btn-ghost"
                  }`}
                >
                  {path.cta}
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="border-y border-ink/8 bg-sand py-24 sm:py-32">
        <div className="section-container">
          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:gap-20">
            <div>
              <h2
                className="font-display font-medium tracking-[-0.01em] text-ink"
                style={{ fontSize: "clamp(2.1rem, 4.6vw, 3.5rem)", lineHeight: 1.1 }}
              >
                <GoldWord>Propósito</GoldWord> antes do retorno
              </h2>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-6 text-base leading-relaxed text-ink sm:text-lg"
              >
                A verdadeira liderança e o sucesso sustentável não nascem apenas
                da competência técnica, mas do equilíbrio emocional e da clareza
                de propósito. Há mais de 19 anos, atuo na Psicologia Clínica
                guiada por uma profunda convicção: a de que o consultório não é
                apenas um espaço de cura, mas um acelerador do potencial humano.
              </motion.p>
              <Link href="/sobre" className="btn-ghost mt-8 inline-flex">
                Conhecer minha trajetória
              </Link>
            </div>

            <aside className="card-cream relative overflow-hidden border-l-0 p-8">
              <p className="font-display text-6xl font-medium tracking-[-0.01em] text-gold sm:text-7xl">
                19+
              </p>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink">
                anos dedicados a transformar vidas
              </p>
            </aside>
          </div>
        </div>
      </MotionSection>

      <CompanyLogos />

      <Testimonials />

      <CtaBanner />
    </>
  );
}
