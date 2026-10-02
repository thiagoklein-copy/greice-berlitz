"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import { ArrowLink, GoldWord, SectionLabel } from "@/components/ui/Shared";
import { WHATSAPP_PALESTRAS_URL, IMAGES } from "@/lib/constants";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const topics = [
  {
    title: "Mudança de vida",
    description:
      "Como atravessar transições com clareza, coragem e um novo olhar sobre si." },
  {
    title: "Autoamor e autoconhecimento",
    description:
      "Ferramentas para fortalecer a relação consigo e, a partir disso, com o trabalho e com o outro." },
  {
    title: "Depressão: como reconhecer e apoiar",
    description:
      "Sinais, acolhimento e o papel da equipe e da liderança no cuidado emocional." },
  {
    title: "Ansiedade no ambiente de trabalho",
    description:
      "Estratégias práticas para lidar com pressão, sobrecarga e desempenho sustentável." },
  {
    title: "Gestão de pessoas com inteligência emocional",
    description:
      "Liderança presente, comunicação empática e times mais coesos." },
  {
    title: "Autopercepção: como você se vê muda como você vive",
    description:
      "A conexão entre identidade, autoimagem e resultados na vida e no trabalho." },
];

const formats = [
  {
    title: "Palestra avulsa",
    description:
      "Evento único, com tema definido em conjunto, ideal para encontros, treinamentos e datas especiais." },
  {
    title: "Consultoria in company",
    description:
      "Formato personalizado, sob consulta, para demandas específicas da sua organização." },
];

export default function PalestrasContent() {
  return (
    <>
      <PageHero
        eyebrow="Palestras & Consultoria In Company"
        title={
          <>
            Saúde mental e alta performance caminham <GoldWord>juntas</GoldWord>.
          </>
        }
        subtitle="Levo para dentro das empresas conteúdos sobre mudança de vida, autoamor, gestão de pessoas e saúde emocional, para equipes mais saudáveis, presentes e produtivas."
        imageSrc={IMAGES.palestrasHero.src}
        imageAlt={IMAGES.palestrasHero.alt}
        imagePosition={IMAGES.palestrasHero.objectPosition}
      >
        <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center">
          <a
            href={WHATSAPP_PALESTRAS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Solicitar orçamento
          </a>
          <ArrowLink href="#temas" className="text-ink">
            Ver temas
          </ArrowLink>
        </div>
      </PageHero>

      {/* ── 01 Por que ──────────────────────────────────────── */}
      <section className="section-pad border-t hairline bg-sand">
        <div className="section-container">
          <SectionLabel index="01" className="mb-14 sm:mb-20">
            Por que trazer isso
          </SectionLabel>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
            <h2 className="t-h2 text-ink lg:col-span-5">
              Bem-estar onde as pessoas <GoldWord>vivem o dia a dia</GoldWord>
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
              className="t-lead text-ink lg:col-span-6 lg:col-start-7"
            >
              Muitas pessoas não têm acesso a um atendimento psicológico
              individualizado. As palestras corporativas são minha forma de levar
              ferramentas práticas de bem-estar emocional para o maior número de
              pessoas possível, dentro do ambiente onde elas passam boa parte da
              vida: o trabalho.
              <span className="t-body mt-8 block text-ink/85">
                Com foco especial em empresas do setor da construção civil, mas
                aberta a qualquer organização que valorize o bem-estar das suas
                equipes.
              </span>
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── 02 Temas ────────────────────────────────────────── */}
      <section id="temas" className="section-pad scroll-mt-20 bg-sand-dark">
        <div className="section-container">
          <SectionLabel index="02" className="mb-14 sm:mb-20">
            Temas
          </SectionLabel>
          <h2 className="t-h2 text-ink">
            Temas de <GoldWord>palestra</GoldWord>
          </h2>

          <ol className="mt-16 grid gap-x-16 border-t hairline md:grid-cols-2">
            {topics.map(({ title, description }, index) => (
              <motion.li
                key={title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 2) * 0.08, duration: 0.7 }}
                className="flex gap-6 border-b hairline py-10"
              >
                <span className="t-label w-8 shrink-0 pt-2 text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="t-h3 text-ink">{title}</h3>
                  <p className="t-body mt-3 text-ink/85">{description}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 03 Formatos ─────────────────────────────────────── */}
      <section className="section-pad border-t hairline bg-sand">
        <div className="section-container">
          <SectionLabel index="03" className="mb-14 sm:mb-20">
            Formatos
          </SectionLabel>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
            <h2 className="t-h2 text-ink lg:col-span-5">
              Formatos <GoldWord>disponíveis</GoldWord>
            </h2>
            <div className="space-y-12 lg:col-span-6 lg:col-start-7">
              {formats.map((format, index) => (
                <motion.div
                  key={format.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.7 }}
                  className="border-t hairline pt-8"
                >
                  <div className="flex items-baseline gap-6">
                    <span className="t-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="t-h3 text-ink">{format.title}</h3>
                  </div>
                  <p className="t-body mt-4 text-ink/85">{format.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title={
          <>
            Vamos levar isso para a sua{" "}
            <GoldWord className="whitespace-nowrap">empresa?</GoldWord>
          </>
        }
        subtitle="Solicite um orçamento e vamos desenhar o formato ideal para a sua equipe."
        ctaLabel="Solicitar orçamento no WhatsApp"
        ctaHref={WHATSAPP_PALESTRAS_URL}
      />
    </>
  );
}
