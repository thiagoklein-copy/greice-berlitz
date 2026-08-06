import type { Metadata } from "next";
import AtendimentoContent from "@/components/pages/AtendimentoContent";

export const metadata: Metadata = {
  title: "Terapia Individual",
  description:
    "Atendimento presencial em Novo Hamburgo, com base em TCC e um olhar humano sobre a sua história. Ansiedade, depressão, autoestima e mais.",
};

export default function AtendimentoPage() {
  return <AtendimentoContent />;
}
