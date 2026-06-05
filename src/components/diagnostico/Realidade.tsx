"use client";

import { motion } from "motion/react";
import { AlertTriangle } from "lucide-react";
import type { DiagnosticoCopy } from "@/data/diagnostico-copy";

export function DiagnosticoRealidade({
  copy,
}: {
  copy: DiagnosticoCopy["realidade"];
}) {
  return (
    <section className="py-20 sm:py-28 bg-zinc-950 border-t border-white/5">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fyze/10 border border-fyze/30 text-fyze text-xs font-bold uppercase tracking-widest mb-6">
            <AlertTriangle className="w-3.5 h-3.5" />
            Realidade
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.95] text-white mb-6 text-balance">
            {copy.headline}
          </h2>
          <p className="text-lg sm:text-xl text-zinc-300 font-medium leading-snug max-w-2xl mx-auto">
            {copy.intro}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-10 sm:mb-12"
        >
          {copy.bullets.map((bullet, i) => (
            <div
              key={bullet}
              className="bg-zinc-900/60 border border-white/10 rounded-2xl p-6 text-center hover:border-fyze/30 transition-colors"
            >
              <div className="text-fyze text-xs font-black uppercase tracking-widest mb-3">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="text-base sm:text-lg text-white font-bold leading-snug">
                {bullet}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center text-lg sm:text-xl md:text-2xl font-bold text-white max-w-2xl mx-auto leading-snug text-pretty"
        >
          {copy.closingLine}
        </motion.p>
      </div>
    </section>
  );
}
