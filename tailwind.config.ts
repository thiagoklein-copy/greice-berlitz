import type { Config } from "tailwindcss";

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
          DEFAULT: "#C9A24B",
          light: "#E8CE8C",
          dark: "#8A6B2E",
        },
        ink: {
          DEFAULT: "#1A1610",
          soft: "#2A241C",
        },
        sand: {
          DEFAULT: "#FAF6EE",
          dark: "#F0E8D8",
        },
        accent: {
          DEFAULT: "#C9A24B",
          warm: "#E8CE8C",
        },
        text: {
          dark: "#1F1B14",
          muted: "#6B6358",
        },
        whatsapp: "#25D366",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-sora)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 30px rgba(138, 107, 46, 0.08)",
        card: "0 12px 40px rgba(138, 107, 46, 0.1)",
        lift: "0 20px 50px rgba(201, 162, 75, 0.22)",
        glow: "0 0 24px rgba(232, 206, 140, 0.45)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #8A6B2E 0%, #C9A24B 45%, #E8CE8C 100%)",
        "gold-soft":
          "linear-gradient(160deg, rgba(232,206,140,0.28) 0%, rgba(250,246,238,0.9) 45%, rgba(201,162,75,0.12) 100%)",
        "gold-radial":
          "radial-gradient(ellipse at 50% 40%, rgba(232,206,140,0.35) 0%, transparent 65%)",
        "ink-gold":
          "linear-gradient(145deg, #1A1610 0%, #2A241C 50%, #1A1610 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
