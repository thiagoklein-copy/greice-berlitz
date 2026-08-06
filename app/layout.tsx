/*
 * CHECKLIST — confirmar com a Greice antes de publicar:
 * - [ ] Confirmar o nível de detalhe aceitável no bloco sobre a perda dos pais (página /sobre)
 * - [ ] Fotos reais dela (hero de cada página, seção "minha história", seção de palestras — idealmente foto em ambiente corporativo/palco)
 * - [ ] Confirmar se pode citar os nomes das empresas (Britasinos, Gerdau, FCC, ULBRA Saúde, Facat, Construtora Mosmam) publicamente, ou se precisa de autorização formal
 * - [ ] Valores de sessão e de palestra (hoje "sob consulta" em ambos)
 * - [ ] Vídeo do Instagram — perguntar se quer incorporar trecho/link na /sobre ou manter só como referência de tom
 * - [ ] Confirmar handle oficial do Instagram
 * - [ ] Confirmar URL oficial do Google Business Profile (avaliações)
 */
import type { Metadata, Viewport } from "next";
import { Fraunces, Sora } from "next/font/google";
import "./globals.css";
import SiteShell from "@/components/SiteShell";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#C9A24B",
};

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const title = "Greice Berlitz | Psicoterapia e Palestras que Transformam";

const description =
  "Há mais de 16 anos, ajudo pessoas a se reencontrarem através da terapia — e empresas a cuidarem de quem faz parte delas através de palestras. Atendimento em Novo Hamburgo - RS.";

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
    <html lang="pt-BR" className={`${fraunces.variable} ${sora.variable}`}>
      <body className="font-sans">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
