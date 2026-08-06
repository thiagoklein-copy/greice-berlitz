"use client";

import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import CtaBanner from "@/components/CtaBanner";
import { InfinityAccent } from "@/components/ui/InfinityMark";
import { GoldWord } from "@/components/ui/Shared";
import { WHATSAPP_URL } from "@/lib/constants";

export default function AtendimentoContent() {
  return (
    <>
      <PageHero
        eyebrow="Terapia Individual"
        title={
          <>
            Um espaço só seu, para se{" "}
            <GoldWord>
              reencontrar
              <InfinityAccent />
            </GoldWord>
            .
          </>
        }
        subtitle="Atendimento presencial em Novo Hamburgo, com base em Terapia Cognitivo-Comportamental (TCC) e um olhar humano e intuitivo sobre a sua história."
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
          <a href="#como-posso-ajudar" className="btn-ghost text-center">
            Ver áreas de atuação ↓
          </a>
        </div>
      </PageHero>

      <Services />
      <HowItWorks />

      <CtaBanner
        title={
          <>
            Você merece esse{" "}
            <GoldWord>
              cuidado
              <InfinityAccent />
            </GoldWord>{" "}
            com você mesmo(a)
          </>
        }
        subtitle="Agende sua primeira conversa e dê o primeiro passo."
      />
    </>
  );
}
