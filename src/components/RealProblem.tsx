"use client";

import { motion } from "motion/react";
import { X } from "lucide-react";
import type { HomeCopy } from "@/data/home-copy";

export function RealProblem({ copy }: { copy: HomeCopy["realProblem"] }) {
  return (
    <section className="py-20 sm:py-28 bg-zinc-900 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-fyze/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 min-w-0"
          >
            <span className="text-fyze text-xs sm:text-sm font-black uppercase tracking-widest mb-4 block">
              O problema real
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black tracking-tighter uppercase leading-[0.95] text-white break-words hyphens-auto">
              {copy.headline}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-6 min-w-0"
          >
            <p className="text-base sm:text-lg text-zinc-300 font-medium mb-7">
              {copy.intro}
            </p>

            <ul className="space-y-3 mb-8">
              {copy.bullets.map((b, i) => (
                <motion.li
                  key={b}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-950/60 border border-white/5"
                >
                  <span className="w-8 h-8 rounded-full bg-fyze/10 border border-fyze/30 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-fyze" />
                  </span>
                  <span className="text-zinc-200 text-base sm:text-lg font-medium leading-relaxed">
                    {b}
                  </span>
                </motion.li>
              ))}
            </ul>

            <p className="text-lg sm:text-xl text-white font-bold leading-relaxed border-l-4 border-fyze pl-5">
              {copy.closingLine}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
