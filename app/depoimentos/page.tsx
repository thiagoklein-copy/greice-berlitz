import type { Metadata } from "next";
import DepoimentosContent from "@/components/pages/DepoimentosContent";

export const metadata: Metadata = {
  title: "Depoimentos",
  description:
    "Resultados reais de quem já caminhou com a Greice Berlitz. Nota 5,0 no Google com 39 avaliações.",
};

export default function DepoimentosPage() {
  return <DepoimentosContent />;
}
