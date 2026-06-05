"use client";

import { motion } from "motion/react";
import type { SobreCopy } from "@/data/sobre-copy";

export function SobreComoPensamos({
  copy,
}: {
  copy: SobreCopy["comoPensamos"];
}) {
  return (
    <section className="py-20 sm:py-28 bg-zinc-900 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-fyze/8 rounded-full blur-[140px] mix-blend-screen pointer-events-none" />

      <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.95] text-white mb-12 sm:mb-16 text-balance"
        >
          {copy.headline}
        </motion.h2>

        <div className="space-y-5 sm:space-y-6 mb-10 sm:mb-12">
          {copy.statements.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={
                i === 1
                  ? "text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-fyze leading-tight"
                  : "text-lg sm:text-xl md:text-2xl text-zinc-300 font-medium leading-snug"
              }
            >
              {line}
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
          <p className="text-lg sm:text-xl md:text-2xl text-white font-bold italic leading-snug text-pretty">
            {copy.quote}
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
