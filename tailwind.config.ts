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
        // Accent punchy (família Ordina/Neative) — só CTA, indicador, badge
        gold: {
          DEFAULT: "#E5B93C",
          light: "#F0D078",
          dark: "#C9982E",
        },
        // Navy profundo (não preto puro)
        ink: {
          DEFAULT: "#0B1424",
          soft: "#111B2E",
        },
        sand: {
          DEFAULT: "#FFFFFF",
          dark: "#F4F5F7",
        },
        accent: {
          DEFAULT: "#E5B93C",
          warm: "#E5B93C",
        },
        text: {
          dark: "#0B1424",
          muted: "#5C6578",
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
