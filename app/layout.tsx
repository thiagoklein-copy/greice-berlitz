/*
 * CHECKLIST: confirmar com a Greice antes de publicar:
 * - [ ] Confirmar o nível de detalhe aceitável no bloco sobre a perda dos pais (página /sobre)
 * - [ ] Fotos reais dela (hero de cada página, seção "minha história", seção de palestras; idealmente foto em ambiente corporativo/palco)
 * - [ ] Confirmar se pode citar os nomes das empresas publicamente
 * - [ ] Valores de sessão e de palestra (hoje "sob consulta")
 * - [ ] Confirmar handle oficial do Instagram
 * - [ ] Confirmar URL oficial do Google Business Profile
 *
 * VISUAL (pivô SaaS): Inter bold + branco/navy + âmbar sólido.
 * Ver resumo em app/globals.css e app/page.tsx.
 */
import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import SiteShell from "@/components/SiteShell";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1424",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
});

const title = "Greice Berlitz | Psicóloga em Novo Hamburgo — Psicoterapia e Palestras";

const description =
  "Greice Berlitz, psicóloga (CRP 07/16250), especialista em TCC com mais de 16 anos de experiência. Atendimento individual e palestras corporativas em Novo Hamburgo - RS.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s | Greice Berlitz",
  },
  description,
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
    <html lang="pt-BR" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="font-sans">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
