"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import type { HomeCopy } from "@/data/home-copy";
import { trackEvent } from "@/lib/analytics";
import { useLocale } from "@/components/LocaleProvider";

export function MethodClose({
  copy,
  variant,
}: {
  copy: HomeCopy["methodClose"];
  variant?: string;
}) {
  const { ui } = useLocale();
  return (
    <section className="relative pt-8 sm:pt-12 pb-20 sm:pb-28 bg-zinc-950 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center opacity-[0.35]"
        style={{ backgroundImage: "url('/cases-img/sobre/making-of.webp')" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-zinc-950/85 via-zinc-950/40 to-zinc-950/85"
      />

      <div className="relative max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-3 sm:space-y-4 mb-10">
          {copy.lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="text-xl sm:text-2xl md:text-3xl text-zinc-300 font-bold leading-tight"
            >
              {line}
            </motion.p>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-white leading-tight mb-12 sm:mb-14"
        >
          {copy.punch.split(/(os três|all three)/i).map((part, i) =>
            /os três|all three/i.test(part) ? (
              <span key={i} className="text-fyze">
                {part}
              </span>
            ) : (
              <span key={i}>{part}</span>
            ),
          )}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            href="/diagnostico"
            onClick={() =>
              trackEvent("cta_click", {
                location: "method_close",
                label: "Analisar o meu negócio",
                variant,
              })
            }
            className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-fyze text-zinc-950 px-8 sm:px-12 py-5 sm:py-6 rounded-full text-sm md:text-base font-black uppercase tracking-[0.16em] sm:tracking-widest transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(0,240,255,0.45)]"
          >
            {ui.nav.ctaAnalisar}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
