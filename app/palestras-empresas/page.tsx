import type { Metadata } from "next";
import PalestrasContent from "@/components/pages/PalestrasContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Palestras corporativas sobre saúde mental",
  "Palestras corporativas sobre saúde mental, autoamor, gestão de pessoas e autoconhecimento.",
  "/palestras-empresas"
);

export default function PalestrasPage() {
  return <PalestrasContent />;
}
