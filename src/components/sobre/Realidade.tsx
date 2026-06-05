"use client";

import { motion } from "motion/react";
import type { SobreCopy } from "@/data/sobre-copy";

export function SobreRealidade({ copy }: { copy: SobreCopy["realidade"] }) {
  return (
    <section className="py-20 sm:py-28 bg-zinc-950 border-t border-white/5">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.95] text-white text-center mb-12 sm:mb-14 text-balance"
        >
          {copy.headline}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-10 sm:mb-12">
          {copy.bullets.map((bullet, i) => (
            <motion.div
              key={bullet}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-zinc-900/60 border border-white/10 rounded-2xl p-6 text-center hover:border-fyze/30 transition-colors"
            >
              <p className="text-base sm:text-lg text-white font-bold leading-snug">
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
          className="text-center max-w-2xl mx-auto space-y-1"
        >
          {copy.closingLines.map((line, i) => (
            <p
              key={i}
              className="text-lg sm:text-xl md:text-2xl font-bold text-zinc-300 leading-snug"
            >
              {i === copy.closingLines.length - 1 ? (
                <em className="text-zinc-500 italic">&ldquo;{line}&rdquo;</em>
              ) : (
                line
              )}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
