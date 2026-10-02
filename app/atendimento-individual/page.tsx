import type { Metadata } from "next";
import AtendimentoContent from "@/components/pages/AtendimentoContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Terapia individual (TCC) em Novo Hamburgo",
  "Atendimento presencial em Novo Hamburgo, com base em TCC e um olhar humano sobre a sua história. Ansiedade, depressão, autoestima e mais.",
  "/atendimento-individual"
);

export default function AtendimentoPage() {
  return <AtendimentoContent />;
}
