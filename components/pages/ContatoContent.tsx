"use client";

import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export default function ContatoContent() {
  return (
    <>
      <PageHero
        eyebrow="Vamos conversar"
        title="O primeiro passo pode ser uma mensagem."
        subtitle="Conte o que você está buscando: terapia individual ou palestra para sua empresa. Eu retorno pelo WhatsApp."
        showImage={false}
      />

      <ContactForm />
    </>
  );
}
