import type { Metadata } from "next";
import PalestrasContent from "@/components/pages/PalestrasContent";

export const metadata: Metadata = {
  title: "Palestras",
  description:
    "Palestras corporativas sobre saúde mental, autoamor, gestão de pessoas e autoconhecimento. Já atendi Gerdau, FCC, ULBRA Saúde e outras.",
};

export default function PalestrasPage() {
  return <PalestrasContent />;
}
