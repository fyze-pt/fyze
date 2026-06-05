"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import type { HomeCopy } from "@/data/home-copy";
import { trackEvent } from "@/lib/analytics";

export function FinalCta({
  copy,
  variant,
}: {
  copy: HomeCopy["finalCta"];
  variant?: string;
}) {
  return (
    <section className="py-20 sm:py-28 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center opacity-[0.40]"
        style={{ backgroundImage: "url('/cases-img/sobre/producao-video-3.webp')" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-zinc-950/85 via-zinc-950/40 to-zinc-950/85"
      />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-fyze/10 rounded-full blur-[160px] mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tighter uppercase leading-[1.1] text-white mb-10 whitespace-pre-line"
        >
          {copy.headline}
        </motion.h2>

        {copy.body && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg sm:text-xl text-zinc-300 font-medium max-w-2xl mx-auto -mt-4 mb-10"
          >
            {copy.body}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/diagnostico"
            onClick={() =>
              trackEvent("cta_click", {
                location: "final_cta",
                label: copy.cta,
                variant,
              })
            }
            className="group inline-flex items-center justify-center gap-3 bg-fyze text-zinc-950 px-10 sm:px-12 py-5 sm:py-6 rounded-full text-base sm:text-lg font-black uppercase tracking-[0.16em] sm:tracking-widest transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(102,252,240,0.4)]"
          >
            {copy.cta}
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
