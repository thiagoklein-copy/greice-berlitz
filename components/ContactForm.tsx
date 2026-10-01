"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { GoldWord, SectionLabel } from "@/components/ui/Shared";
import {
  buildWhatsAppUrl,
  CLINIC_ADDRESS,
  CLINIC_INSTAGRAM,
  CLINIC_INSTAGRAM_URL,
  CLINIC_PHONE,
  CONTACT_OBJECTIVES,
  MAPS_EMBED_URL,
  WHATSAPP_URL,
} from "@/lib/constants";
import { formatPhoneMask } from "@/lib/phone";

const labelClass = "t-label block text-ink/70";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [objective, setObjective] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const lines = [
      "Olá, Greice! Vim pelo site.",
      "",
      `*Nome:* ${name}`,
      `*Telefone:* ${phone}`,
      `*Objetivo:* ${objective}`,
    ];

    if (message.trim()) {
      lines.push("", `*Mensagem:* ${message.trim()}`);
    }

    const url = buildWhatsAppUrl(lines.join("\n"));
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contato" className="section-pad border-t hairline bg-sand">
      <div className="section-container">
        <SectionLabel index="01" className="mb-14 sm:mb-20">
          Contato
        </SectionLabel>

        <div className="grid gap-20 lg:grid-cols-12 lg:gap-12">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <h2 className="t-h2 text-ink">
              Vamos conversar sobre o seu <GoldWord>próximo passo</GoldWord>
            </h2>

            <div className="mt-14 space-y-10">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Nome completo <span className="text-gold">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="field"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="phone" className={labelClass}>
                  Telefone / WhatsApp <span className="text-gold">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(formatPhoneMask(e.target.value))}
                  className="field"
                  placeholder="(51) 99999-9999"
                />
              </div>

              <div>
                <label htmlFor="objective" className={labelClass}>
                  Qual o seu objetivo? <span className="text-gold">*</span>
                </label>
                <select
                  id="objective"
                  required
                  value={objective}
                  onChange={(e) => setObjective(e.target.value)}
                  className="field cursor-pointer"
                >
                  <option value="" disabled>
                    Selecione uma opção
                  </option>
                  {CONTACT_OBJECTIVES.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  Mensagem (opcional)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="field resize-none"
                  placeholder="Conte um pouco sobre o que você está buscando..."
                />
              </div>
            </div>

            <button type="submit" className="btn-primary mt-14 w-full sm:w-auto">
              Enviar e falar no WhatsApp
            </button>
          </motion.form>

          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5 lg:col-start-8"
          >
            <dl className="border-t hairline">
              <div className="border-b hairline py-7">
                <dt className="t-label text-gold">Endereço</dt>
                <dd className="t-body mt-2 text-ink">{CLINIC_ADDRESS}</dd>
              </div>
              <div className="border-b hairline py-7">
                <dt className="t-label text-gold">Telefone / WhatsApp</dt>
                <dd className="mt-2">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-2xl text-ink transition-colors hover:text-gold"
                  >
                    {CLINIC_PHONE}
                  </a>
                </dd>
              </div>
              <div className="border-b hairline py-7">
                <dt className="t-label text-gold">Instagram</dt>
                <dd className="mt-2">
                  <a
                    href={CLINIC_INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-2xl text-ink transition-colors hover:text-gold"
                  >
                    {CLINIC_INSTAGRAM}
                  </a>
                </dd>
              </div>
              <div className="border-b hairline py-7">
                <dt className="t-label text-gold">Horário de atendimento</dt>
                <dd className="t-body mt-2 text-ink">
                  De segunda a sexta, das 8:00 às 18:30
                </dd>
              </div>
            </dl>

            <div className="mt-10 aspect-[4/3] overflow-hidden bg-sand-dark">
              <iframe
                src={MAPS_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) contrast(0.95)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do consultório no mapa"
                className="h-full w-full"
              />
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
