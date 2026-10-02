"use client";

import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Modalidades from "@/components/Modalidades";
import CtaBanner from "@/components/CtaBanner";
import { ArrowLink, GoldWord } from "@/components/ui/Shared";
import { WHATSAPP_CONSULTA_URL, IMAGES } from "@/lib/constants";

export default function AtendimentoContent() {
  return (
    <>
      <PageHero
        eyebrow="Terapia Individual"
        title={
          <>
            Um espaço só seu, para se <GoldWord>reencontrar</GoldWord>.
          </>
        }
        subtitle="Atendimento presencial em Novo Hamburgo e online, no Brasil e no exterior, com base em Terapia Cognitivo-Comportamental (TCC) e um olhar humano e intuitivo sobre a sua história."
        imageSrc={IMAGES.terapiaHero.src}
        imageAlt={IMAGES.terapiaHero.alt}
        imagePosition={IMAGES.terapiaHero.objectPosition}
      >
        <div className="flex flex-wrap items-center gap-x-8 gap-y-6">
          <a
            href={WHATSAPP_CONSULTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Agendar Consulta Estratégica
          </a>
          <ArrowLink href="#como-posso-ajudar" className="text-ink">
            Ver áreas de atuação
          </ArrowLink>
        </div>
      </PageHero>

      <Services />
      <Modalidades />
      <HowItWorks />

      <CtaBanner
        title={
          <>
            Você merece esse cuidado com você mesmo(a). Seja a sua{" "}
            <GoldWord>prioridade</GoldWord>!
          </>
        }
        subtitle="Agende sua primeira conversa e dê o primeiro passo."
      />
    </>
  );
}
