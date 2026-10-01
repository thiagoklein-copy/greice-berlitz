/*
 * CHECKLIST: confirmar com a Greice antes de publicar:
 * - [ ] Confirmar o nível de detalhe aceitável no bloco sobre a perda dos pais (página /sobre)
 * - [ ] Fotos reais dela (hero, história, palestras; ambiente corporativo/palco)
 * - [ ] Confirmar se pode citar os nomes das empresas publicamente
 * - [ ] Valores de sessão e de palestra (hoje "sob consulta")
 * - [ ] Confirmar handle oficial do Instagram
 * - [ ] Confirmar URL oficial do Google Business Profile
 *
 * VISUAL: off-white + Cormorant/Jost + ∞ assinatura. Ver app/globals.css.
 */
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import SiteShell from "@/components/SiteShell";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1C1712",
};

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
  weight: ["300", "400", "500"],
});

const title = "Greice Berlitz | Psicóloga em Novo Hamburgo — Psicoterapia e Palestras";

const description =
  "Greice Berlitz, psicóloga (CRP 07/16250), especialista em TCC com mais de 19 anos de experiência. Atendimento individual e palestras corporativas em Novo Hamburgo - RS.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s | Greice Berlitz",
  },
  description,
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title,
    description,
    locale: "pt_BR",
    type: "website",
    siteName: "Greice Berlitz",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="font-sans">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
