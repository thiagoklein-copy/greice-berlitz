"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/ui/Shared";
import { NAV_LINKS, WHATSAPP_CONSULTA_URL } from "@/lib/constants";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
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
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled && !mobileOpen
          ? "border-b border-ink/10 bg-sand/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className={`section-container flex items-center justify-between gap-8 transition-all duration-500 ${
          scrolled ? "h-[72px]" : "h-[88px] sm:h-[104px]"
        }`}
      >
        <Link
          href="/"
          aria-label="Ir para o início"
          className="relative z-50 shrink-0"
        >
          <Logo />
        </Link>

        <ul className="hidden items-center gap-6 lg:flex xl:gap-9">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`t-label relative whitespace-nowrap py-2 transition-colors hover:text-gold ${
                    active ? "text-gold" : "text-ink"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-0.5 left-0 h-px w-full bg-gold"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <a
          href={WHATSAPP_CONSULTA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="link-arrow hidden whitespace-nowrap text-ink xl:inline-flex"
        >
          Agendar
          <span className="arrow" aria-hidden="true">
            →
          </span>
        </a>

        <button
          type="button"
          className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-[7px] lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block h-px w-7 bg-ink transition-transform duration-300 ${
              mobileOpen ? "translate-y-[4px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-7 bg-ink transition-transform duration-300 ${
              mobileOpen ? "-translate-y-[4px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 flex flex-col bg-sand lg:hidden"
          >
            <ul className="section-container flex flex-1 flex-col justify-center gap-2">
              {NAV_LINKS.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + index * 0.05, duration: 0.5 }}
                  className="border-b border-ink/10"
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-baseline gap-5 py-4"
                  >
                    <span className="t-label text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-display text-4xl ${
                        pathname === link.href ? "italic text-gold" : "text-ink"
                      }`}
                    >
                      {link.label}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="section-container pb-10">
              <a
                href={WHATSAPP_CONSULTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full"
                onClick={() => setMobileOpen(false)}
              >
                Agendar Consulta Estratégica
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
