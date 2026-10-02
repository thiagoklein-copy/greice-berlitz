import type { Metadata } from "next";
import SobreContent from "@/components/pages/SobreContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Formação e trajetória da psicóloga",
  "Antes de ajudar os outros a se transformarem, eu me transformei. Conheça a trajetória, formação e valores de Greice Berlitz.",
  "/sobre"
);

export default function SobrePage() {
  return <SobreContent />;
}
