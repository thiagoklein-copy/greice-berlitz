import type { Config } from "tailwindcss";

/**
 * SISTEMA VISUAL — Greice Berlitz (fase 3: branco + ∞ marcador)
 * Base clara, dourado pontual, ∞ como pontuação visual.
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
          soft: "#F5E9C4",
          dark: "#B8941F",
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
          DEFAULT: "#D4AF37",
          warm: "#D4AF37",
        },
        text: {
          dark: "#1C1712",
          // Mesmo tom do ink — hierarquia por peso, não por cinza
          muted: "#1C1712",
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
