import type { Metadata } from "next";
import SobreContent from "@/components/pages/SobreContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Psicóloga em Novo Hamburgo: formação e trajetória",
  "Antes de ajudar os outros a se transformarem, eu me transformei. Conheça a trajetória, a formação em Psicologia e os valores de Greice Berlitz, psicóloga em Novo Hamburgo.",
  "/sobre"
);

export default function SobrePage() {
  return <SobreContent />;
}
