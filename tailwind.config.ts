import type { Config } from "tailwindcss";

/**
 * SISTEMA VISUAL — Greice Berlitz (meio-termo quente)
 * Sóbrio + humano: escuro café, Bricolage Grotesque, ∞ como assinatura.
 * Mantém: limpeza, sem gradiente, logos B&W, stats secos, carrossel.
 */
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#D4AF37",
          light: "#F0D78C",
          dark: "#B8941F",
        },
        // Escuro quente (café) — não navy frio
        ink: {
          DEFAULT: "#1C1712",
          soft: "#241E18",
        },
        sand: {
          DEFAULT: "#FAFAF8",
          dark: "#F3F0EB",
        },
        accent: {
          DEFAULT: "#D4AF37",
          warm: "#D4AF37",
        },
        text: {
          dark: "#1C1712",
          // bege/marrom — sem azul
          muted: "#7A6E60",
        },
        whatsapp: "#25D366",
      },
      fontFamily: {
        display: ["var(--font-bricolage)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-bricolage)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "none",
        card: "none",
        lift: "none",
        glow: "none",
      },
      borderRadius: {
        "4xl": "0.75rem",
      },
    },
  },
  plugins: [],
};

export default config;
