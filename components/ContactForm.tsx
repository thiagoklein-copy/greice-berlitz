"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";
import MotionSection from "@/components/ui/MotionSection";
import { SectionHeader } from "@/components/ui/Shared";
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
    <MotionSection id="contato" className="bg-sand-dark/60 py-20 sm:py-28">
      <div className="section-container">
        <SectionHeader
          eyebrow="Contato"
          title={
            <>
              Vamos conversar sobre o seu{" "}
              <em className="italic text-gold-dark">próximo passo</em>
            </>
          }
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-surface space-y-5 p-6 sm:p-8"
          >
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
                Nome completo <span className="text-gold">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-2xl border border-gold/20 bg-sand/50 px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/15"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">
                Telefone / WhatsApp <span className="text-gold">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(formatPhoneMask(e.target.value))}
                className="w-full rounded-2xl border border-gold/20 bg-sand/50 px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/15"
                placeholder="(51) 99999-9999"
              />
            </div>

            <div>
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
                className="w-full rounded-2xl border border-gold/20 bg-sand/50 px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/15"
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
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
                Mensagem <span className="text-text-muted">(opcional)</span>
              </label>
              <textarea
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full resize-none rounded-2xl border border-gold/20 bg-sand/50 px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/15"
                placeholder="Conte um pouco sobre o que você está buscando..."
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              Enviar e falar no WhatsApp
            </button>
          </motion.form>

          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card-surface space-y-5 p-6 sm:p-8">
              <div className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="text-sm font-medium text-ink">Endereço</p>
                  <p className="mt-1 text-sm text-text-muted">{CLINIC_ADDRESS}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <FaPhone className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="text-sm font-medium text-ink">Telefone / WhatsApp</p>
                  <a
                    href={buildWhatsAppUrl(
                      "Olá, Greice! Gostaria de mais informações.",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm text-text-muted hover:text-gold-dark"
                  >
                    {CLINIC_PHONE}
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <FaInstagram className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="text-sm font-medium text-ink">Instagram</p>
                  <a
                    href={CLINIC_INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm text-text-muted hover:text-gold-dark"
                  >
                    {CLINIC_INSTAGRAM}
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <FaClock className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="text-sm font-medium text-ink">Horário de atendimento</p>
                  <p className="mt-1 text-sm text-text-muted">Mediante agendamento</p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-gold/15 shadow-soft">
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
