"use client";

import { motion } from "motion/react";
import type { MetodoCopy } from "@/data/metodo-copy";

export function MetodoContraMercado({
  copy,
}: {
  copy: MetodoCopy["contraMercado"];
}) {
  return (
    <section className="py-20 sm:py-28 bg-zinc-900 border-t border-white/5">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.95] text-white text-center mb-12 sm:mb-16 text-balance"
        >
          {copy.headline}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-950/40 border border-white/10 rounded-3xl p-7 sm:p-8"
          >
            <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">
              Enquanto muitos vendem
            </p>
            <ul className="space-y-3">
              {copy.venders.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-base sm:text-lg text-zinc-400 font-medium leading-snug line-through decoration-zinc-700"
                >
                  <span className="text-zinc-600">—</span>
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
            className="bg-zinc-950/60 border border-fyze/40 rounded-3xl p-7 sm:p-8 shadow-[0_0_60px_rgba(0,240,255,0.08)]"
          >
            <p className="text-fyze text-xs font-bold uppercase tracking-widest mb-4">
              A Fyze constrói
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl text-white font-black tracking-tight leading-tight">
              {copy.constroi}
            </p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center text-xl sm:text-2xl text-white font-bold tracking-tight max-w-xl mx-auto"
        >
          {copy.closingLine}
        </motion.p>
      </div>
    </section>
  );
}
