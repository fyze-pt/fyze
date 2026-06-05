"use client";

import { motion } from "motion/react";
import type { DiagnosticoCopy } from "@/data/diagnostico-copy";

export function DiagnosticoDiferencial({
  copy,
}: {
  copy: DiagnosticoCopy["diferencial"];
}) {
  return (
    <section className="py-20 sm:py-28 bg-zinc-900 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fyze/8 rounded-full blur-[140px] mix-blend-screen pointer-events-none" />

      <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.95] text-white mb-8 text-balance"
        >
          {copy.headline}
        </motion.h2>

        <div className="space-y-4 sm:space-y-5">
          {copy.body.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={
                i === 0
                  ? "text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-fyze leading-tight"
                  : "text-lg sm:text-xl text-zinc-300 font-medium leading-snug"
              }
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
