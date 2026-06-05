"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useSiteFormModal } from "@/components/SiteFormModal";
import { trackEvent } from "@/lib/analytics";
import type { WebsitesCopy } from "@/data/websites-copy";

const VARIANT = "websites-lp";

export function WebsitesOfertaFinal({
  copy,
}: {
  copy: WebsitesCopy["ofertaFinal"];
}) {
  const { open } = useSiteFormModal();

  const onCta = () => {
    trackEvent("cta_click", { location: "websites_final", label: copy.cta, variant: VARIANT });
    open("websites_final");
  };

  return (
    <section className="py-24 sm:py-32 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-fyze/10 rounded-full blur-[160px] mix-blend-screen pointer-events-none" />

      <div className="relative z-10 max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-4 sm:space-y-5 mb-12 sm:mb-16">
          {copy.lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={
                i === 0
                  ? "text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.95] text-white"
                  : "text-lg sm:text-xl md:text-2xl text-zinc-300 font-medium leading-relaxed max-w-2xl mx-auto"
              }
            >
              {line}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-zinc-900/70 border border-fyze/30 rounded-3xl p-8 sm:p-12 max-w-2xl mx-auto shadow-[0_0_60px_rgba(0,240,255,0.08)]"
        >
          <p className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white mb-2 leading-tight">
            {copy.closing.line1}
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-fyze mb-8 leading-tight">
            {copy.closing.line2}
          </p>

          <button
            onClick={onCta}
            className="group inline-flex w-full items-center justify-center gap-3 bg-fyze text-zinc-950 px-6 sm:px-10 py-5 sm:py-6 rounded-full text-sm md:text-base font-black uppercase tracking-[0.16em] sm:tracking-widest transition-all hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(0,240,255,0.5)]"
          >
            {copy.cta}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
