"use client";

import PageHero from "@/components/PageHero";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";

export default function DepoimentosContent() {
  return (
    <>
      <PageHero
        eyebrow="Resultados reais"
        title="Histórias de quem já deu o primeiro passo."
        subtitle="Depoimentos reais de pacientes e famílias que confiaram no acompanhamento terapêutico."
        showImage={false}
      />

      <Testimonials showGoogleLink compactBadge={false} />

      <CtaBanner
        title={
          <>
            Pronto para escrever a sua{" "}
            <em className="italic text-gold-light">própria história</em>?
          </>
        }
      />
    </>
  );
}
