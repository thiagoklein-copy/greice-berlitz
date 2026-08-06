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
    <footer className="border-t border-gold/15 bg-sand-dark">
      <div className="section-container py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-text-muted">
              Terapia e palestras que fazem diferença na vida das pessoas — em
              Novo Hamburgo e além.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-dark">
              Navegação
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted transition hover:text-gold-dark"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-dark">
              Contato
            </h3>
            <address className="space-y-2 not-italic">
              <p className="text-sm text-text-muted">{CLINIC_ADDRESS}</p>
              <p>
                <a
                  href={buildWhatsAppUrl(
                    "Olá, Greice! Gostaria de mais informações.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-muted hover:text-gold-dark"
                >
                  {CLINIC_PHONE}
                </a>
              </p>
              <p>
                <a
                  href={CLINIC_INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-gold-dark"
                >
                  <FaInstagram className="h-4 w-4" />
                  {CLINIC_INSTAGRAM}
                </a>
              </p>
              <p className="pt-2 text-xs font-medium text-gold-dark">
                {PROFESSIONAL_CRP}
              </p>
            </address>
          </div>
        </div>

        <div className="gold-divider mt-12" />

        <div className="pt-8">
          <p className="text-sm text-text-muted">
            © 2026 Greice Berlitz. Todos os direitos reservados.
          </p>
          <p className="mt-4 text-xs leading-relaxed text-text-muted/80">
            Este site não substitui atendimento de urgência. Em caso de crise,
            procure o CVV (188) ou o serviço de emergência mais próximo.
          </p>
        </div>
      </div>
    </footer>
  );
}
