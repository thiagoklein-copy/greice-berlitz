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
    const onScroll = () => setScrolled(window.scrollY > 40);
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
        scrolled
          ? "border-b border-gold/15 bg-sand/95 shadow-[0_8px_30px_rgba(138,107,46,0.12)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="section-container flex h-16 items-center justify-between gap-4 sm:h-20">
        <Link href="/" aria-label="Ir para o início">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded-full px-2.5 py-2 text-[12px] font-medium transition-colors hover:bg-gold/10 hover:text-gold-dark xl:px-3 xl:text-[13px] ${
                    active ? "bg-gold/10 text-gold-dark" : "text-text-muted"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden shrink-0 md:block">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            Falar no WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="rounded-full p-2 text-gold-dark lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-gold/15 bg-sand lg:hidden"
          >
            <ul className="section-container flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-base font-medium text-text-dark hover:bg-gold/10"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
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
