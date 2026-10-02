import type { Metadata } from "next";
import ContatoContent from "@/components/pages/ContatoContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Agende sua sessão em Novo Hamburgo",
  "Fale com a Greice Berlitz. Atendimento em Novo Hamburgo: terapia individual e palestras corporativas.",
  "/contato"
);

export default function ContatoPage() {
  return <ContatoContent />;
}
