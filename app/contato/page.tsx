import type { Metadata } from "next";
import ContatoContent from "@/components/pages/ContatoContent";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a Greice Berlitz. Atendimento em Novo Hamburgo — terapia individual e palestras corporativas.",
};

export default function ContatoPage() {
  return <ContatoContent />;
}
