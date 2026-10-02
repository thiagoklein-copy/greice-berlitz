import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const rotas = [
    { path: "", priority: 1 },
    { path: "/atendimento-individual", priority: 0.9 },
    { path: "/palestras-empresas", priority: 0.8 },
    { path: "/sobre", priority: 0.7 },
    { path: "/contato", priority: 0.7 },
  ];
  return rotas.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    priority,
  }));
}
