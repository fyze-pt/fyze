"use client";

import { motion } from "motion/react";
import type { HomeCopy } from "@/data/home-copy";

export function Authority({ copy }: { copy: HomeCopy["authority"] }) {
  return (
    <section
      id="sobre"
      className="py-20 sm:py-28 bg-zinc-900 border-t border-white/5 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-fyze/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter uppercase leading-[0.95] text-white mb-12 sm:mb-14 max-w-3xl">
            {copy.headline.line1}
            <br />
            <span className="text-fyze">{copy.headline.line2}</span>
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 max-w-3xl">
            {copy.bullets.map((b, i) => (
              <motion.li
                key={b}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-3 p-4 sm:p-5 rounded-2xl bg-zinc-950/70 border border-white/5"
              >
                <span className="w-2 h-2 rounded-full bg-fyze mt-2.5 shrink-0" />
                <span className="text-zinc-200 text-base sm:text-lg font-medium leading-relaxed">
                  {b}
                </span>
              </motion.li>
            ))}
          </ul>

          {copy.proofText && (
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 sm:mt-14 max-w-2xl text-xl sm:text-2xl text-white font-bold italic leading-relaxed border-l-4 border-fyze pl-6"
            >
              {copy.proofText}
            </motion.blockquote>
          )}
        </motion.div>
      </div>
    </section>
  );
}
