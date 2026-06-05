"use client";

import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import type { DiagnosticoCopy } from "@/data/diagnostico-copy";

export function DiagnosticoOqueAcontece({
  copy,
}: {
  copy: DiagnosticoCopy["oQueAcontece"];
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
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.95] text-white mb-6 text-balance">
            {copy.headline}
          </h2>

          <div className="space-y-1 max-w-2xl mx-auto">
            {copy.leadParagraphs.map((p, i) => (
              <p
                key={i}
                className="text-lg sm:text-xl text-zinc-400 font-medium leading-snug"
              >
                {p}
              </p>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-zinc-900/60 border border-white/10 rounded-3xl p-7 sm:p-10 max-w-2xl mx-auto mb-10 sm:mb-14"
        >
          <p className="text-fyze text-xs font-black uppercase tracking-widest mb-5 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            Durante o diagnóstico
          </p>
          <ul className="space-y-3.5">
            {copy.bullets.map((bullet, i) => (
              <li
                key={bullet}
                className="flex items-start gap-3 text-base sm:text-lg text-white font-medium leading-snug"
              >
                <span className="flex shrink-0 w-7 h-7 rounded-full bg-fyze/15 border border-fyze/30 text-fyze text-xs font-black items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </motion.div>

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
