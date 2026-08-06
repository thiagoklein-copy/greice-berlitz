"use client";

/**
 * HOME — fase 3: branco predominante, dourado pontual, ∞ marcador.
 * Ver decisões em app/globals.css. Copy intacta.
 */

import Link from "next/link";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import CompanyLogos from "@/components/CompanyLogos";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import MotionSection from "@/components/ui/MotionSection";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import {
  InfinityAccent,
  InfinityCorner,
  InfinityEyebrow,
  InfinityStep,
} from "@/components/ui/InfinityMark";
import { GoldWord } from "@/components/ui/Shared";
import { WHATSAPP_URL } from "@/lib/constants";

const trustStats = [
  { value: 16, suffix: "+", label: "anos de experiência" },
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
    featured: true,
  },
  {
    number: "02",
    title: "Palestras",
    description:
      "Levo saúde mental, gestão de pessoas e autoconhecimento para dentro das empresas. Já estive com equipes da Gerdau, FCC, ULBRA Saúde e outras.",
    href: "/palestras-empresas",
    cta: "Conhecer as palestras",
    featured: false,
  },
] as const;

export default function HomePage() {
  return (
    <>
      <PageHero
        title={
          <>
            <span className="block text-balance">
              Sua vida pode ser <GoldWord>diferente</GoldWord>
              <InfinityAccent />
            </span>
            <span className="mt-2 block text-balance font-medium text-text-muted sm:mt-3">
              A mudança começa com você.
            </span>
          </>
        }
        subtitle="Há mais de 16 anos, ajudo pessoas a se reencontrarem na terapia e ajudo empresas a cuidarem de quem faz parte delas com palestras que fazem diferença."
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-center"
          >
            Falar no WhatsApp
          </a>
          <a href="#dois-caminhos" className="btn-ghost text-center">
            Conhecer meu trabalho ↓
          </a>
        </div>

        <motion.ul
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-12 grid grid-cols-3 gap-6 border-t border-ink/10 pt-8 sm:gap-8"
        >
          {trustStats.map((stat) => (
            <li key={stat.label}>
              <p className="font-display text-3xl font-bold tracking-tight text-gold sm:text-4xl">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={"decimals" in stat ? stat.decimals : 0}
                />
                {stat.label === "no Google" && (
                  <span className="ml-1 text-gold">★</span>
                )}
              </p>
              <p className="mt-2 text-sm text-text-muted">{stat.label}</p>
            </li>
          ))}
        </motion.ul>
      </PageHero>

      <MotionSection id="dois-caminhos" className="bg-white py-24 sm:py-32">
        <div className="section-container">
          <div className="mb-12 max-w-2xl">
            <InfinityEyebrow>Como posso ajudar</InfinityEyebrow>
            <h2
              className="font-display font-medium tracking-[-0.02em] text-ink"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", lineHeight: 1.1 }}
            >
              Dois caminhos, um{" "}
              <GoldWord>
                propósito
                <InfinityAccent />
              </GoldWord>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted sm:text-lg">
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
                <InfinityCorner
                  position={index === 0 ? "bottom-right" : "top-right"}
                />
                <InfinityStep number={path.number} />
                <h3
                  className={`mt-4 font-display font-bold tracking-tight text-ink ${
                    path.featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
                  }`}
                >
                  {path.title}
                </h3>
                <p className="mt-4 flex-1 text-base leading-relaxed text-text-muted">
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
              <InfinityEyebrow>Prévia da minha história</InfinityEyebrow>
              <h2
                className="font-display font-medium tracking-[-0.02em] text-ink"
                style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", lineHeight: 1.1 }}
              >
                <GoldWord>Propósito</GoldWord> antes do retorno
                <InfinityAccent />
              </h2>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-6 text-base leading-relaxed text-text-muted sm:text-lg"
              >
                Sempre escolhi minha profissão pela vocação, não pelo retorno
                financeiro. Ao longo de mais de 16 anos, vi pessoas chegarem sem
                perspectiva e saírem com outra relação consigo mesmas. O autoamor
                transforma vidas, e eu quero continuar fazendo parte disso.
              </motion.p>
              <Link href="/sobre" className="btn-ghost mt-8 inline-flex">
                Conhecer minha trajetória
              </Link>
            </div>

            <aside className="card-cream relative overflow-hidden border-l-0 p-8">
              <InfinityCorner position="bottom-left" />
              <p className="font-display text-6xl font-bold tracking-tight text-gold sm:text-7xl">
                16+
              </p>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-text-muted">
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
