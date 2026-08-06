import type { Metadata } from "next";
import SobreContent from "@/components/pages/SobreContent";

export const metadata: Metadata = {
  title: "Minha História",
  description:
    "Antes de ajudar os outros a se transformarem, eu me transformei. Conheça a trajetória, formação e valores de Greice Berlitz.",
};

export default function SobrePage() {
  return <SobreContent />;
}
