"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";
import MotionSection from "@/components/ui/MotionSection";
import { GoldWord, SectionHeader } from "@/components/ui/Shared";
import { InfinityAccent } from "@/components/ui/InfinityMark";
import {
  buildWhatsAppUrl,
  CLINIC_ADDRESS,
  CLINIC_INSTAGRAM,
  CLINIC_INSTAGRAM_URL,
  CLINIC_PHONE,
  CONTACT_OBJECTIVES,
  MAPS_EMBED_URL,
} from "@/lib/constants";
import { formatPhoneMask } from "@/lib/phone";

const fieldClass =
  "block w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-ink focus:ring-1 focus:ring-ink/20";

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
    <MotionSection id="contato" className="bg-sand py-24 sm:py-32">
      <div className="section-container">
        <SectionHeader
          eyebrow="Contato"
          title={
            <>
              Vamos conversar sobre o seu{" "}
              <GoldWord>
                próximo passo
                <InfinityAccent />
              </GoldWord>
            </>
          }
        />

        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-surface flex w-full min-w-0 flex-col gap-5 p-6 sm:p-8"
          >
            <div className="w-full">
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
                Nome completo <span className="text-gold">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={fieldClass}
                placeholder="Seu nome"
              />
            </div>

            <div className="w-full">
              <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">
                Telefone / WhatsApp <span className="text-gold">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(formatPhoneMask(e.target.value))}
                className={fieldClass}
                placeholder="(51) 99999-9999"
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="objective"
                className="mb-1.5 block text-sm font-medium text-ink"
              >
                Qual o seu objetivo? <span className="text-gold">*</span>
              </label>
              <select
                id="objective"
                required
                value={objective}
                onChange={(e) => setObjective(e.target.value)}
                className={fieldClass}
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

            <div className="w-full">
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
                Mensagem <span className="text-ink">(opcional)</span>
              </label>
              <textarea
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`${fieldClass} resize-none`}
                placeholder="Conte um pouco sobre o que você está buscando..."
              />
            </div>

            <button type="submit" className="btn-primary mt-1 w-full max-w-none">
              Enviar e falar no WhatsApp
            </button>
          </motion.form>

          <motion.aside
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="card-surface space-y-5 p-6 sm:p-8">
              <div className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 h-4 w-4 shrink-0 text-ink" />
                <div>
                  <p className="text-sm font-semibold text-ink">Endereço</p>
                  <p className="mt-1 text-sm text-ink">{CLINIC_ADDRESS}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <FaPhone className="mt-1 h-4 w-4 shrink-0 text-ink" />
                <div>
                  <p className="text-sm font-semibold text-ink">Telefone / WhatsApp</p>
                  <a
                    href={buildWhatsAppUrl(
                      "Olá, Greice! Gostaria de mais informações.",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm text-ink hover:text-ink"
                  >
                    {CLINIC_PHONE}
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <FaInstagram className="mt-1 h-4 w-4 shrink-0 text-ink" />
                <div>
                  <p className="text-sm font-semibold text-ink">Instagram</p>
                  <a
                    href={CLINIC_INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm text-ink hover:text-ink"
                  >
                    {CLINIC_INSTAGRAM}
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <FaClock className="mt-1 h-4 w-4 shrink-0 text-ink" />
                <div>
                  <p className="text-sm font-semibold text-ink">Horário de atendimento</p>
                  <p className="mt-1 text-sm text-ink">
                    De segunda a sexta, das 8:00 às 18:30
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-ink/10">
              <iframe
                src={MAPS_EMBED_URL}
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do consultório no mapa"
                className="w-full"
              />
            </div>
          </motion.aside>
        </div>
      </div>
    </MotionSection>
  );
}
