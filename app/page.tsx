"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import CompanyLogos from "@/components/CompanyLogos";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import MotionSection from "@/components/ui/MotionSection";
import { SectionHeader } from "@/components/ui/Shared";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { WHATSAPP_URL } from "@/lib/constants";

const trustStats = [
  { value: 16, suffix: "+", label: "anos de experiência" },
  { value: 5.0, decimals: 1, suffix: " ⭐", label: "no Google" },
  { value: 39, suffix: "", label: "avaliações" },
] as const;

const paths = [
  {
    title: "Terapia Individual",
    description:
      "Um espaço de escuta para você se reencontrar, superar a ansiedade, a depressão e reconstruir o amor-próprio.",
    href: "/atendimento-individual",
    cta: "Conhecer a terapia individual",
  },
  {
    title: "Palestras & Empresas",
    description:
      "Levo saúde mental, gestão de pessoas e autoconhecimento para dentro das empresas. Já estive com equipes da Gerdau, FCC, ULBRA Saúde e outras.",
    href: "/palestras-empresas",
    cta: "Conhecer as palestras",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <PageHero
        title={
          <>
            <span className="block text-balance">Sua vida pode ser diferente.</span>
            <span className="mt-2 block text-balance font-normal italic text-gold-dark sm:mt-3">
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
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 grid grid-cols-3 gap-4 border-t border-gold/20 pt-6"
        >
          {trustStats.map((stat) => (
            <li key={stat.label} className="text-center sm:text-left">
              <p className="font-serif text-2xl font-medium text-ink sm:text-3xl">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={"decimals" in stat ? stat.decimals : 0}
                />
              </p>
              <p className="mt-1 text-xs text-text-muted sm:text-sm">{stat.label}</p>
            </li>
          ))}
        </motion.ul>
      </PageHero>

      <MotionSection id="dois-caminhos" className="py-28 sm:py-36">
        <div className="section-container">
          <SectionHeader
            eyebrow="Como posso ajudar"
            title={
              <>
                Dois caminhos,{" "}
                <em className="italic text-gold-dark">um propósito</em>
              </>
            }
            subtitle="Seja no consultório ou na empresa, o objetivo é o mesmo: fazer diferença de verdade."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {paths.map((path, index) => (
              <motion.article
                key={path.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.55 }}
                className="card-surface flex flex-col p-8 sm:p-10"
              >
                <h3 className="font-serif text-2xl font-medium text-ink sm:text-3xl">
                  {path.title}
                </h3>
                <p className="mt-4 flex-1 text-base leading-relaxed text-text-muted">
                  {path.description}
                </p>
                <Link href={path.href} className="btn-primary mt-8 self-start">
                  {path.cta}
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-sand-dark/50 py-28 sm:py-36">
        <div className="section-container">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeader
              eyebrow="Prévia da minha história"
              title={
                <>
                  Propósito antes do{" "}
                  <em className="italic text-gold-dark">retorno</em>
                </>
              }
            />
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-base leading-relaxed text-text-muted sm:text-lg"
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
        </div>
      </MotionSection>

      <CompanyLogos />

      <Testimonials />

      <CtaBanner />
    </>
  );
}
