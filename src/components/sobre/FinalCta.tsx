"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import type { SobreCopy } from "@/data/sobre-copy";
import { trackEvent } from "@/lib/analytics";

const VARIANT = "sobre-lp";

export function SobreFinalCta({ copy }: { copy: SobreCopy["finalCta"] }) {
  const onCta = () => {
    trackEvent("cta_click", { location: "sobre_final", label: copy.cta, variant: VARIANT });
  };

  return (
    <section className="py-24 sm:py-32 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-fyze/10 rounded-full blur-[160px] mix-blend-screen pointer-events-none" />

      <div className="relative z-10 max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white mb-10 leading-tight text-balance"
        >
          {copy.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Link
            href="/diagnostico"
            onClick={onCta}
            className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-fyze text-zinc-950 px-8 sm:px-12 py-5 sm:py-6 rounded-full text-sm md:text-base font-black uppercase tracking-[0.16em] sm:tracking-widest transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(0,240,255,0.5)]"
          >
            {copy.cta}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
