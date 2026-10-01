import Link from "next/link";
import Logo from "@/components/ui/Shared";
import {
  NAV_LINKS,
  CLINIC_ADDRESS,
  CLINIC_PHONE,
  CLINIC_INSTAGRAM_URL,
  CLINIC_INSTAGRAM,
  PROFESSIONAL_CRP,
  WHATSAPP_URL,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-ink text-sand">
      <div className="section-container pb-12 pt-24 sm:pt-32">
        <p className="t-h2 max-w-4xl text-sand">
          Saúde Mental, <span className="italic text-gold">Propósito</span> e
          Alta Performance Humana
        </p>

        <div className="mt-20 grid gap-14 border-t border-sand/15 pt-14 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo light />
            <p className="t-small mt-6 max-w-sm text-sand/70">
              Terapia e palestras que fazem diferença na vida das pessoas, em
              Novo Hamburgo e além.
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="t-label mb-6 text-gold">Navegação</p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="t-small text-sand/85 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="t-label mb-6 text-gold">Contato</p>
            <address className="t-small space-y-3 not-italic text-sand/85">
              <p>{CLINIC_ADDRESS}</p>
              <p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold"
                >
                  {CLINIC_PHONE}
                </a>
              </p>
              <p>
                <a
                  href={CLINIC_INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold"
                >
                  {CLINIC_INSTAGRAM}
                </a>
              </p>
              <p className="t-label pt-2 text-sand/60">{PROFESSIONAL_CRP}</p>
            </address>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-sand/15 pt-8 sm:flex-row sm:items-start sm:justify-between">
          <p className="text-xs text-sand/60">
            © 2026 Greice Berlitz. Todos os direitos reservados.
          </p>
          <p className="max-w-sm text-xs leading-relaxed text-sand/60 sm:text-right">
            Este site não substitui atendimento de urgência. Em caso de crise,
            procure o CVV (188) ou o serviço de emergência mais próximo.
          </p>
        </div>
      </div>
    </footer>
  );
}
