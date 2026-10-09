import type { Metadata } from "next";
import AtendimentoContent from "@/components/pages/AtendimentoContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Terapia individual (TCC) em Novo Hamburgo",
  "Terapia individual com base em TCC, presencial em Novo Hamburgo e online. Ansiedade, depressão, autoestima e mais, com um olhar humano sobre a sua história.",
  "/atendimento-individual"
);

export default function AtendimentoPage() {
  return <AtendimentoContent />;
}
