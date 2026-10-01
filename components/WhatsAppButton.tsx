"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL } from "@/lib/constants";

/** Botão flutuante discreto, nos tons do site. */
export default function WhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full border border-gold-light/40 bg-ink text-gold-light shadow-[0_10px_30px_-10px_rgba(28,23,18,0.5)] sm:bottom-8 sm:right-8"
    >
      <FaWhatsapp className="h-6 w-6" />
    </motion.a>
  );
}
