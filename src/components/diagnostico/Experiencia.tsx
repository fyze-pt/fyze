"use client";

import { motion } from "motion/react";
import type { DiagnosticoCopy } from "@/data/diagnostico-copy";

export function DiagnosticoExperiencia({
  copy,
}: {
  copy: DiagnosticoCopy["experiencia"];
}) {
  return (
    <section className="py-20 sm:py-28 bg-zinc-950 border-t border-white/5">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.95] text-white mb-8 sm:mb-10 text-balance"
        >
          {copy.headline}
        </motion.h2>

        <div className="space-y-3 mb-8 sm:mb-10">
          {copy.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-lg sm:text-xl text-zinc-300 font-medium leading-snug"
            >
              {p}
            </motion.p>
          ))}
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="border-l-2 border-fyze/60 pl-5 max-w-2xl mx-auto text-left"
        >
          <p className="text-base sm:text-lg md:text-xl text-white font-bold italic leading-snug text-pretty">
            {copy.closingQuote}
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
