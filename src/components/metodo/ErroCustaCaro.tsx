"use client";

import { motion } from "motion/react";
import type { MetodoCopy } from "@/data/metodo-copy";

export function MetodoErroCustaCaro({
  copy,
}: {
  copy: MetodoCopy["erroCustaCaro"];
}) {
  return (
    <section className="py-20 sm:py-28 bg-zinc-900 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fyze/5 rounded-full blur-[140px] mix-blend-screen pointer-events-none" />

      <div className="relative z-10 max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.95] text-white mb-10 text-balance"
        >
          {copy.headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-lg sm:text-xl text-zinc-300 font-medium mb-8 max-w-2xl mx-auto"
        >
          A maioria tenta escalar antes de estar pronta.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10"
        >
          {copy.sequence.map((item) => (
            <span
              key={item}
              className="bg-zinc-950/60 border border-white/10 rounded-full px-5 py-2.5 text-sm sm:text-base font-bold uppercase tracking-widest text-white"
            >
              {item}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="space-y-2 mb-10 max-w-2xl mx-auto"
        >
          {copy.body.map((p, i) => (
            <p
              key={i}
              className="text-base sm:text-lg text-zinc-300 font-medium leading-snug"
            >
              {p}
            </p>
          ))}
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="border-l-2 border-fyze/60 pl-5 max-w-2xl mx-auto text-left"
        >
          <p className="text-base sm:text-lg md:text-xl text-white font-bold italic leading-snug text-pretty">
            {copy.quote}
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
