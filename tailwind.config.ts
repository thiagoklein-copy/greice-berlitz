import type { Config } from "tailwindcss";

/**
 * SISTEMA VISUAL — Greice Berlitz (fase 5: editorial). Ver app/globals.css.
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
          DEFAULT: "#9C7A3C",
          light: "#D9C08A",
          soft: "#F1E8D6",
          dark: "#7F6230",
        },
        ink: {
          DEFAULT: "#1C1712",
          soft: "#241E18",
        },
        sand: {
          DEFAULT: "#FEFCF8",
          dark: "#FAF6EF",
        },
        accent: {
          DEFAULT: "#9C7A3C",
          warm: "#9C7A3C",
        },
        text: {
          dark: "#1C1712",
          // Mesmo tom do ink — hierarquia por peso, não por cinza
          muted: "#1C1712",
        },
        whatsapp: "#25D366",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jost)", "system-ui", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      // Filetes finos usam /8, /12 e /14 (fora da escala padrão)
      opacity: {
        8: "0.08",
        12: "0.12",
        14: "0.14",
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
