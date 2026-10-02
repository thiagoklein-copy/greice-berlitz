import { ImageResponse } from "next/og";

export const runtime = "edge";

/* Imagem de pré-visualização (WhatsApp, Instagram, LinkedIn) — 1200x630. */
export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background: "#FAF6EF",
          color: "#1C1712",
          borderLeft: "16px solid #9C7A3C",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#9C7A3C",
          }}
        >
          Psicóloga · CRP 07/16250
        </div>
        <div style={{ fontSize: 120, marginTop: 24, lineHeight: 1.05 }}>
          Greice Berlitz
        </div>
        <div style={{ fontSize: 44, marginTop: 28, color: "#241E18" }}>
          Terapia individual e palestras corporativas
        </div>
        <div style={{ fontSize: 34, marginTop: 14, color: "#9C7A3C" }}>
          Novo Hamburgo – RS
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
