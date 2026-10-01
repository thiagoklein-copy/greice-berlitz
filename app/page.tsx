"use client";

/**
 * HOME — fase 5 (editorial). Copy: conteúdo final enviado pela cliente
 * (out/2026). Ver decisões em app/globals.css.
 */

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import CompanyLogos from "@/components/CompanyLogos";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import FramedImage from "@/components/ui/FramedImage";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { InfinityGlyph } from "@/components/ui/InfinityMark";
import { ArrowLink, GoldWord, SectionLabel } from "@/components/ui/Shared";
import { IMAGES, WHATSAPP_CONSULTA_URL } from "@/lib/constants";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const trustStats = [
  { value: 19, suffix: "+", label: "anos de experiência" },
  { value: 5.0, decimals: 1, suffix: "", label: "no Google", star: true },
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
    image: IMAGES.terapiaHero,
  },
  {
    number: "02",
    title: "Palestras",
    description:
      "Levo saúde mental, gestão de pessoas e autoconhecimento para dentro das empresas. Já estive com equipes da Gerdau, FCC, ULBRA Saúde e outras.",
    href: "/palestras-empresas",
    cta: "Conhecer as palestras",
    image: IMAGES.palestrasHero,
  },
] as const;

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative bg-sand pb-20 pt-36 sm:pt-44 lg:pb-28 lg:pt-48">
        <div className="section-container">
          <div className="grid items-end gap-16 lg:grid-cols-12 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease }}
              className="lg:col-span-7 lg:pb-6"
            >
              <p className="t-label mb-10 flex items-center gap-4 text-ink">
                <InfinityGlyph className="h-3.5 w-7 shrink-0 text-gold" />
                Psicologia Clínica · TCC
              </p>

              <h1 className="t-display text-ink">
                Saúde Mental, <GoldWord>Propósito</GoldWord> e Alta Performance
                Humana
              </h1>

              <p className="t-body mt-10 max-w-xl text-ink/85">
                Adequar a sua vida à sua verdadeira essência é o único caminho
                para o equilíbrio real. Só quando descobrimos e seguimos a nossa
                verdade interna é que alcançamos o verdadeiro sucesso em todas
                as áreas da vida — na carreira, na família e no espírito.
              </p>

              <div className="mt-12 flex flex-col items-start gap-8 sm:flex-row sm:items-center">
                <a
                  href={WHATSAPP_CONSULTA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Agendar Consulta Estratégica
                </a>
                <ArrowLink href="#sobre" className="text-ink">
                  Conhecer meu trabalho
                </ArrowLink>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.15, ease }}
              className="mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none"
            >
              <FramedImage
                src={IMAGES.retrato.src}
                alt={IMAGES.retrato.alt}
                objectPosition={IMAGES.retrato.objectPosition}
                priority
                className="mr-4 sm:mr-6"
              />
            </motion.div>
          </div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-24 grid grid-cols-3 border-t hairline lg:mt-28"
          >
            {trustStats.map((stat, index) => (
              <li
                key={stat.label}
                className={`pt-8 ${index > 0 ? "border-l hairline pl-4 sm:pl-10" : ""}`}
              >
                <p className="font-display text-4xl leading-none text-ink sm:text-6xl">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={"decimals" in stat ? stat.decimals : 0}
                  />
                  {"star" in stat && (
                    <span className="ml-1 align-top text-2xl text-gold sm:text-3xl">
                      ★
                    </span>
                  )}
                </p>
                <p className="t-label mt-4 text-ink/70">{stat.label}</p>
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* ── Frase de destaque ───────────────────────────────── */}
      <section className="bg-ink py-28 sm:py-36">
        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease }}
          className="section-container text-center"
        >
          <InfinityGlyph className="mx-auto h-5 w-10 text-gold" />
          <blockquote className="mx-auto mt-12 max-w-5xl">
            <p
              className="font-display italic text-sand"
              style={{ fontSize: "clamp(1.9rem, 4.2vw, 3.6rem)", lineHeight: 1.22 }}
            >
              &ldquo;A felicidade não é um evento isolado; é o equilíbrio da sua
              rotina. Construa um estilo de vida onde o sucesso, a saúde e o
              propósito caminhem juntos.&rdquo;
            </p>
          </blockquote>
          <figcaption className="t-label mt-12 text-gold">
            Greice Berlitz
          </figcaption>
        </motion.figure>
      </section>

      {/* ── Sobre (resumo) ──────────────────────────────────── */}
      <section id="sobre" className="section-pad scroll-mt-20 bg-sand">
        <div className="section-container">
          <SectionLabel index="01" className="mb-14 sm:mb-20">
            Sobre mim
          </SectionLabel>

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
            <h2 className="t-h2 text-ink lg:col-span-5">
              <GoldWord>Propósito</GoldWord> antes do retorno
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
              className="lg:col-span-6 lg:col-start-7"
            >
              <p className="t-lead text-ink">
                A verdadeira liderança e o sucesso sustentável não nascem apenas
                da competência técnica, mas do equilíbrio emocional e da clareza
                de propósito. Há mais de 19 anos, atuo na Psicologia Clínica
                guiada por uma profunda convicção: a de que o consultório não é
                apenas um espaço de cura, mas um acelerador do potencial humano.
              </p>
              <ArrowLink href="/sobre" className="mt-12 text-ink">
                Conhecer minha trajetória
              </ArrowLink>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Dois caminhos ───────────────────────────────────── */}
      <section id="dois-caminhos" className="section-pad border-t hairline bg-sand">
        <div className="section-container">
          <SectionLabel index="02" className="mb-14 sm:mb-20">
            Atuação
          </SectionLabel>

          <div className="mb-16 grid gap-8 sm:mb-24 lg:grid-cols-12 lg:gap-12">
            <h2 className="t-h2 text-ink lg:col-span-7">
              Dois caminhos, um <GoldWord>propósito</GoldWord>
            </h2>
            <p className="t-body self-end text-ink/85 lg:col-span-4 lg:col-start-9">
              Seja no consultório ou na empresa, o objetivo é o mesmo: fazer
              diferença de verdade.
            </p>
          </div>

          <div className="grid gap-20 md:grid-cols-2 md:gap-10 lg:gap-16">
            {paths.map((path, index) => (
              <motion.article
                key={path.href}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, delay: index * 0.12, ease }}
                className={index === 1 ? "md:mt-32" : ""}
              >
                <Link href={path.href} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-sand-dark">
                    <Image
                      src={path.image.src}
                      alt={path.image.alt}
                      fill
                      sizes="(max-width: 768px) 90vw, 45vw"
                      className="object-cover grayscale transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                      style={{ objectPosition: path.image.objectPosition }}
                    />
                  </div>
                  <div className="mt-10 flex items-baseline gap-6 border-t hairline pt-8">
                    <span className="t-number">{path.number}</span>
                    <h3 className="t-h3 text-ink">{path.title}</h3>
                  </div>
                  <p className="t-body mt-6 text-ink/85">{path.description}</p>
                  <span className="link-arrow mt-8 text-ink group-hover:text-gold">
                    {path.cta}
                    <span className="arrow" aria-hidden="true">
                      →
                    </span>
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CompanyLogos />

      <Testimonials index="03" />

      <CtaBanner />
    </>
  );
}
