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
    <footer className="border-t border-sand/10 bg-ink">
      <div className="section-container py-20 lg:py-24">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
          <div>
            <Logo light />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-sand">
              Terapia e palestras que fazem diferença na vida das pessoas, em
              Novo Hamburgo e além.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-sand">
              Navegação
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-sand transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-sand">
              Contato
            </h3>
            <address className="space-y-3 not-italic">
              <p className="text-sm leading-relaxed text-sand">{CLINIC_ADDRESS}</p>
              <p>
                <a
                  href={buildWhatsAppUrl(
                    "Olá, Greice! Gostaria de mais informações.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-sand transition-colors hover:text-gold"
                >
                  {CLINIC_PHONE}
                </a>
              </p>
              <p>
                <a
                  href={CLINIC_INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-sand transition-colors hover:text-gold"
                >
                  <FaInstagram className="h-4 w-4" />
                  {CLINIC_INSTAGRAM}
                </a>
              </p>
              <p className="pt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold">
                {PROFESSIONAL_CRP}
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 border-t border-sand/10 pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <p className="text-sm text-sand">
              © 2026 Greice Berlitz. Todos os direitos reservados.
            </p>
            <p className="max-w-sm text-xs leading-relaxed text-sand sm:text-right">
              Este site não substitui atendimento de urgência. Em caso de crise,
              procure o CVV (188) ou o serviço de emergência mais próximo.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
