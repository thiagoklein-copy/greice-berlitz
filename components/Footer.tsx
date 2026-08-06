import Link from "next/link";
import Logo from "@/components/ui/Shared";
import {
  NAV_LINKS,
  CLINIC_ADDRESS,
  CLINIC_PHONE,
  CLINIC_INSTAGRAM_URL,
  CLINIC_INSTAGRAM,
  PROFESSIONAL_CRP,
  buildWhatsAppUrl,
} from "@/lib/constants";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-ink">
      {/* Linha gradiente dourada no topo */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(201,162,75,0.7) 30%, rgba(232,206,140,0.8) 50%, rgba(201,162,75,0.7) 70%, transparent)",
        }}
        aria-hidden="true"
      />

      <div className="section-container py-24 lg:py-32">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
          {/* Coluna 1 — Marca */}
          <div>
            <Logo light />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/50">
              Terapia e palestras que fazem diferença na vida das pessoas, em
              Novo Hamburgo e além.
            </p>
          </div>

          {/* Coluna 2 — Navegação */}
          <div>
            <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold/80">
              Navegação
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors duration-200 hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 — Contato */}
          <div>
            <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold/80">
              Contato
            </h3>
            <address className="space-y-3 not-italic">
              <p className="text-sm leading-relaxed text-white/50">{CLINIC_ADDRESS}</p>
              <p>
                <a
                  href={buildWhatsAppUrl(
                    "Olá, Greice! Gostaria de mais informações.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/50 transition-colors duration-200 hover:text-gold"
                >
                  {CLINIC_PHONE}
                </a>
              </p>
              <p>
                <a
                  href={CLINIC_INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors duration-200 hover:text-gold"
                >
                  <FaInstagram className="h-4 w-4" />
                  {CLINIC_INSTAGRAM}
                </a>
              </p>
              <p className="pt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold/55">
                {PROFESSIONAL_CRP}
              </p>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div
          className="mt-16 h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(201,162,75,0.25), transparent)",
          }}
        />

        {/* Base */}
        <div className="flex flex-col gap-4 pt-8 sm:flex-row sm:items-start sm:justify-between">
          <p className="text-sm text-white/35">
            © 2026 Greice Berlitz. Todos os direitos reservados.
          </p>
          <p className="max-w-sm text-xs leading-relaxed text-white/28 sm:text-right">
            Este site não substitui atendimento de urgência. Em caso de crise,
            procure o CVV (188) ou o serviço de emergência mais próximo.
          </p>
        </div>
      </div>
    </footer>
  );
}
