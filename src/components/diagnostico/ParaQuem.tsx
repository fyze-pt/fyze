"use client";

import { motion } from "motion/react";
import { Check, X } from "lucide-react";
import type { DiagnosticoCopy } from "@/data/diagnostico-copy";

export function DiagnosticoParaQuem({
  copy,
}: {
  copy: DiagnosticoCopy["paraQuem"];
}) {
  return (
    <section className="py-20 sm:py-28 bg-zinc-900 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-fyze/5 rounded-full blur-[140px] mix-blend-screen pointer-events-none" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.95] text-white text-center mb-12 sm:mb-16 text-balance"
        >
          {copy.headline}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-950/60 border border-fyze/30 rounded-3xl p-7 sm:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-fyze mb-5">
              {copy.para.title}
            </h3>
            <ul className="space-y-3">
              {copy.para.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base text-white font-medium leading-snug"
                >
                  <Check className="w-5 h-5 text-fyze shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-950/40 border border-white/10 rounded-3xl p-7 sm:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-zinc-400 mb-5">
              {copy.naoPara.title}
            </h3>
            <ul className="space-y-3">
              {copy.naoPara.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base text-zinc-400 font-medium leading-snug"
                >
                  <X className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="border-l-2 border-fyze/60 pl-5 max-w-3xl mx-auto"
        >
          <p className="text-base sm:text-lg md:text-xl text-white font-bold italic leading-snug text-pretty">
            {copy.closingQuote}
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
