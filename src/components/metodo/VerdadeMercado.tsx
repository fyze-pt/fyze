"use client";

import { motion } from "motion/react";
import type { MetodoCopy } from "@/data/metodo-copy";

export function MetodoVerdadeMercado({
  copy,
}: {
  copy: MetodoCopy["verdadeMercado"];
}) {
  return (
    <section className="py-20 sm:py-28 bg-zinc-950 border-t border-white/5">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.95] text-white text-center mb-10 text-balance"
        >
          {copy.headline}
        </motion.h2>

        <div className="space-y-2 mb-8 sm:mb-10 max-w-2xl mx-auto text-center">
          {copy.leadParagraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="text-lg sm:text-xl text-zinc-300 font-medium leading-snug"
            >
              {p}
            </motion.p>
          ))}
          <p className="pt-2 text-fyze text-xs font-black uppercase tracking-widest">
            Por quê?
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-zinc-900/60 border border-white/10 rounded-3xl p-7 sm:p-9 max-w-2xl mx-auto mb-8 sm:mb-10"
        >
          <p className="text-zinc-400 text-sm font-bold uppercase tracking-widest mb-4">
            Porque fazem tudo fora de ordem:
          </p>
          <ul className="space-y-2.5">
            {copy.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-3 text-base sm:text-lg text-white font-medium leading-snug"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-fyze mt-2.5 shrink-0" />
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
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-zinc-400 text-sm font-medium uppercase tracking-widest mb-2">
            E depois dizem
          </p>
          <p className="text-2xl sm:text-3xl font-black italic text-zinc-500 mb-8">
            &ldquo;{copy.quote}&rdquo;
          </p>
          <div className="space-y-1">
            {copy.closingLines.map((line, i) => (
              <p
                key={i}
                className="text-lg sm:text-xl text-white font-bold leading-snug"
              >
                {line}
              </p>
            ))}
          </div>
        </motion.blockquote>
      </div>
    </section>
  );
}
