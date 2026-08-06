"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "@/components/ui/Shared";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/constants";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      style={{
        transition: "background 0.55s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.55s cubic-bezier(0.25,0.46,0.45,0.94), border-color 0.55s cubic-bezier(0.25,0.46,0.45,0.94)",
      }}
      className={`fixed inset-x-0 top-0 z-40 ${
        scrolled
          ? "border-b border-gold/12 bg-sand/96 shadow-[0_8px_32px_rgba(138,107,46,0.10)] backdrop-blur-lg"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="section-container flex h-[68px] items-center justify-between gap-6 sm:h-[84px]">
        {/* Logo */}
        <Link href="/" aria-label="Ir para o início" className="shrink-0">
          <Logo />
        </Link>

        {/* Links desktop */}
        <ul className="hidden items-center gap-0 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative px-3 py-2.5 text-[13px] font-medium transition-colors duration-200 xl:px-3.5 xl:text-[14px] ${
                    active ? "text-gold-dark" : "text-text-muted hover:text-ink"
                  }`}
                >
                  {link.label}
                  {/* Indicador de rota ativa */}
                  {active && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0.5 left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-gold"
                      style={{ originX: 0.5 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA desktop */}
        <div className="hidden shrink-0 md:block">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Falar no WhatsApp
          </a>
        </div>

        {/* Botão menu mobile */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-gold-dark transition-colors hover:bg-gold/10 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <HiX className="h-5 w-5" /> : <HiMenu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Menu mobile */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-gold/12 bg-sand/98 backdrop-blur-lg lg:hidden"
          >
            <ul className="section-container flex flex-col gap-0.5 py-5">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block rounded-2xl px-4 py-3 text-base font-medium transition-colors ${
                        active
                          ? "bg-gold/10 text-gold-dark"
                          : "text-text-dark hover:bg-gold/10"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center"
                  onClick={() => setMobileOpen(false)}
                >
                  Falar no WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
