"use client";

import { Globe } from "lucide-react";
import { useLocale } from "@/components/LocaleProvider";

/**
 * Discreet PT ⇄ EN switcher. A small globe + the language it switches TO,
 * styled low-emphasis to sit quietly in the navigation.
 */
export function LanguageToggle({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLocale();
  const next = locale === "pt" ? "en" : "pt";

  return (
    <button
      type="button"
      onClick={() => setLocale(next)}
      aria-label={
        locale === "pt" ? "Switch to English" : "Mudar para Português"
      }
      title={locale === "pt" ? "Switch to English" : "Mudar para Português"}
      className={`group inline-flex items-center gap-1.5 text-zinc-400 hover:text-fyze transition-colors ${className}`}
    >
      <Globe className="w-4 h-4" strokeWidth={2} />
      <span className="text-xs font-bold uppercase tracking-[0.2em]">
        {next}
      </span>
    </button>
  );
}
