import type { Metadata } from "next";

/** Metadata de página interna: mantém Open Graph/Twitter completos
 *  (o Next substitui o bloco inteiro do layout quando a página define o seu). */
export function pageMetadata(
  title: string,
  description: string,
  path: string
): Metadata {
  const fullTitle = `${title} | Greice Berlitz`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      locale: "pt_BR",
      type: "website",
      siteName: "Greice Berlitz",
      images: [{ url: "/og", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/og"],
    },
  };
}
