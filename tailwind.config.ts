import type { Config } from "tailwindcss";

/**
 * SISTEMA VISUAL — Greice Berlitz (pivô SaaS / técnico)
 * Referências: Ordina, Neative, Flowspark
 * Branco × navy seco · sans bold · âmbar sólido só em acentos · zero gradiente
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
        // Accent âmbar — uso contido (CTA, underline, badge, stat)
        gold: {
          DEFAULT: "#C9982E",
          light: "#E8D5A3",
          dark: "#A67B1F",
        },
        ink: {
          DEFAULT: "#0D0D0F",
          soft: "#10141C",
        },
        sand: {
          DEFAULT: "#FAFAF9",
          dark: "#F0EFED",
        },
        accent: {
          DEFAULT: "#C9982E",
          warm: "#C9982E",
        },
        text: {
          dark: "#12110F",
          muted: "#6B6A66",
        },
        whatsapp: "#25D366",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "none",
        card: "none",
        lift: "none",
        glow: "none",
      },
      borderRadius: {
        "4xl": "0.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
