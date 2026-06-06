"use client";

import { motion, AnimatePresence } from "motion/react";
import {
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  Phone,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { buildWhatsappUrl } from "@/lib/whatsapp";
import { useLocale } from "@/components/LocaleProvider";
import { LanguageToggle } from "@/components/LanguageToggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const logoSrc = "/fyze.svg";
  const { ui } = useLocale();
  const whatsappUrl = buildWhatsappUrl(ui.whatsapp.message);

  const navLinks = [
    { name: ui.nav.metodo, href: "/metodo" },
    { name: ui.nav.cases, href: "/#showcase" },
    { name: ui.nav.sobre, href: "/sobre" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Block body scroll while drawer is open + close on ESC
  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-zinc-950/90 backdrop-blur-xl py-3 sm:py-4" : "bg-transparent py-4 sm:py-6"}`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 group">
              <img
                src={logoSrc}
                alt="Fyze"
                className="h-12 sm:h-14 w-auto transition-opacity group-hover:opacity-80"
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-zinc-300 hover:text-fyze transition-colors text-sm font-bold uppercase tracking-[0.2em]"
                >
                  {link.name}
                </a>
              ))}
              <LanguageToggle />
              <Link
                href="/diagnostico"
                className="bg-fyze text-zinc-950 hover:bg-fyze/90 px-8 py-3.5 rounded-full text-sm font-black uppercase tracking-[0.2em] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]"
              >
                {ui.nav.ctaAnalisar}
              </Link>
            </div>
          </div>

          <div className="md:hidden shrink-0 flex items-center gap-4">
            <LanguageToggle />
            <button
              onClick={() => setIsOpen(true)}
              aria-label={ui.nav.openMenu}
              className="text-zinc-300 hover:text-white p-2 -mr-2 transition-colors"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.aside
            key="mobile-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: [0.32, 0.72, 0, 1], duration: 0.35 }}
            className="md:hidden fixed inset-0 bg-zinc-950 z-[60] flex flex-col overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label={ui.nav.openMenu}
          >
            <div className="flex items-center justify-between px-4 sm:px-6 pt-4 sm:pt-6 pb-2">
              <Link href="/" onClick={closeMenu} className="flex items-center gap-2">
                <img src={logoSrc} alt="Fyze" className="h-12 w-auto" />
              </Link>
              <button
                onClick={closeMenu}
                aria-label={ui.nav.closeMenu}
                className="text-zinc-300 hover:text-white p-2 -mr-2 transition-colors"
              >
                <X size={28} />
              </button>
            </div>

            <div className="flex-1 px-4 sm:px-6 pt-6 pb-4">
              <ul className="space-y-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.25 }}
                  >
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      className="flex items-center justify-between py-4 border-b border-white/5 text-white text-2xl font-black uppercase tracking-[0.04em] hover:text-fyze transition-colors"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-5 h-5 text-zinc-500" />
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="mt-8"
              >
                <Link
                  href="/diagnostico"
                  onClick={closeMenu}
                  className="group flex items-center justify-center gap-3 w-full bg-fyze text-zinc-950 py-5 rounded-2xl text-sm font-black uppercase tracking-[0.16em] hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(0,240,255,0.35)] transition-all"
                >
                  {ui.nav.ctaAnalisar}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className="px-4 sm:px-6 pb-8 pt-4 border-t border-white/5 space-y-5"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex items-center gap-3 text-zinc-200 font-bold text-base hover:text-fyze transition-colors"
              >
                <span className="flex w-9 h-9 rounded-full bg-fyze/15 border border-fyze/30 items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-fyze" />
                </span>
                {ui.nav.falarEspecialista}
              </a>

              <a
                href="tel:+351915709951"
                onClick={closeMenu}
                className="flex items-center gap-3 text-zinc-300 font-medium text-base hover:text-white transition-colors"
              >
                <span className="flex w-9 h-9 rounded-full bg-zinc-900 border border-white/10 items-center justify-center">
                  <Phone className="w-4 h-4 text-zinc-300" />
                </span>
                +351 915 709 951
              </a>

              <div className="flex items-center gap-3 text-zinc-400 font-medium text-base">
                <span className="flex w-9 h-9 rounded-full bg-zinc-900 border border-white/10 items-center justify-center">
                  <MapPin className="w-4 h-4 text-zinc-400" />
                </span>
                {ui.nav.location}
              </div>

              <div className="pt-4 flex items-center justify-between text-xs text-zinc-500">
                <Link
                  href="/politica-de-privacidade"
                  onClick={closeMenu}
                  className="hover:text-zinc-300 transition-colors"
                >
                  {ui.nav.privacy}
                </Link>
                <span>© {new Date().getFullYear()} Fyze Agency</span>
              </div>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </nav>
  );
}
