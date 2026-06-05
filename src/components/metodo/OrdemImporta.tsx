"use client";

import { motion } from "motion/react";
import type { MetodoCopy } from "@/data/metodo-copy";

export function MetodoOrdemImporta({
  copy,
}: {
  copy: MetodoCopy["ordemImporta"];
}) {
  return (
    <section className="py-20 sm:py-28 bg-zinc-900 border-t border-white/5">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
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
          className="text-lg sm:text-xl text-zinc-400 font-medium text-center mb-10 max-w-2xl mx-auto"
        >
          Se você ignora essa sequência, entra num ciclo:
        </motion.p>

        <div className="space-y-3 mb-10 max-w-xl mx-auto">
          {copy.bullets.map((bullet, i) => (
            <motion.div
              key={bullet}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-3 bg-zinc-950/60 border border-white/10 rounded-xl px-5 py-3.5"
            >
              <span className="text-fyze text-xs font-black tabular-nums w-6 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-base sm:text-lg text-white font-medium leading-snug">
                {bullet}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto"
        >
          {copy.closingLines.map((line, i) => (
            <p
              key={i}
              className="text-base sm:text-lg md:text-xl text-zinc-300 font-bold italic leading-snug"
            >
              {line}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
