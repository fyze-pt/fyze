"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import type { MetodoCopy } from "@/data/metodo-copy";

export function MetodoFazCerto({ copy }: { copy: MetodoCopy["fazCerto"] }) {
  return (
    <section className="py-20 sm:py-28 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-fyze/8 rounded-full blur-[140px] mix-blend-screen pointer-events-none" />

      <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.95] text-white text-center mb-10 text-balance"
        >
          {copy.headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-fyze text-xs font-black uppercase tracking-widest text-center mb-8"
        >
          Quando o método é aplicado:
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-10 max-w-2xl mx-auto">
          {copy.bullets.map((bullet, i) => (
            <motion.div
              key={bullet}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-center gap-3 bg-zinc-900/60 border border-white/10 rounded-xl px-4 py-3.5"
            >
              <Check className="w-5 h-5 text-fyze shrink-0" />
              <span className="text-sm sm:text-base text-white font-medium leading-snug">
                {bullet}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="border-l-2 border-fyze/60 pl-5 max-w-2xl mx-auto"
        >
          <p className="text-base sm:text-lg md:text-xl text-white font-bold italic leading-snug text-pretty">
            {copy.quote}
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
