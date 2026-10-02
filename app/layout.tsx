/*
 * CHECKLIST: confirmar com a Greice antes de publicar:
 * - [ ] Confirmar o nível de detalhe aceitável no bloco sobre a perda dos pais (página /sobre)
 * - [ ] Fotos reais dela (hero, história, palestras; ambiente corporativo/palco)
 * - [ ] Valores de sessão e de palestra (hoje "sob consulta")
 * - [ ] Confirmar handle oficial do Instagram
 * - [ ] Confirmar URL oficial do Google Business Profile
 *
 * VISUAL: off-white + Cormorant/Jost + ∞ assinatura. Ver app/globals.css.
 */
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SiteShell from "@/components/SiteShell";
import {
  CLINIC_INSTAGRAM_URL,
  CLINIC_PHONE,
  PROFESSIONAL_CRP,
  SITE_URL,
} from "@/lib/constants";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1C1712",
};

/*
 * Fontes hospedadas localmente (app/fonts): o Google Fonts serve parte dos
 * arquivos em URLs sem extensão (/l/font?kit=...), o que quebra o
 * next/font/google do Next 14 no build da Vercel.
 */
const cormorant = localFont({
  variable: "--font-cormorant",
  display: "swap",
  src: [
    { path: "./fonts/cormorant-garamond-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/cormorant-garamond-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/cormorant-garamond-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/cormorant-garamond-400-italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/cormorant-garamond-500-italic.woff2", weight: "500", style: "italic" },
    { path: "./fonts/cormorant-garamond-600-italic.woff2", weight: "600", style: "italic" },
  ],
});

const jost = localFont({
  variable: "--font-jost",
  display: "swap",
  src: [
    { path: "./fonts/jost-300-normal.woff2", weight: "300", style: "normal" },
    { path: "./fonts/jost-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/jost-500-normal.woff2", weight: "500", style: "normal" },
  ],
});

const title = "Greice Berlitz | Psicóloga em Novo Hamburgo";

const description =
  "Greice Berlitz, psicóloga (CRP 07/16250), especialista em TCC. Terapia individual e palestras corporativas em Novo Hamburgo - RS.";

/* Dados estruturados (JSON-LD) para busca local. Só dados já públicos no site. */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#negocio`,
      name: "Greice Berlitz – Psicóloga",
      description,
      url: SITE_URL,
      image: `${SITE_URL}/greice-retrato.jpg`,
      telephone: "+55 51 99820-4918",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Cel. Frederico Linck, 714, Sala 205, Centro",
        addressLocality: "Novo Hamburgo",
        addressRegion: "RS",
        postalCode: "93336-002",
        addressCountry: "BR",
      },
      areaServed: { "@type": "City", name: "Novo Hamburgo" },
      sameAs: [CLINIC_INSTAGRAM_URL],
      founder: { "@id": `${SITE_URL}/#greice` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#greice`,
      name: "Greice Berlitz",
      jobTitle: "Psicóloga",
      identifier: PROFESSIONAL_CRP,
      telephone: CLINIC_PHONE,
      url: SITE_URL,
      image: `${SITE_URL}/greice-retrato.jpg`,
      sameAs: [CLINIC_INSTAGRAM_URL],
      worksFor: { "@id": `${SITE_URL}/#negocio` },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
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
    url: "/",
    images: [{ url: "/og", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
