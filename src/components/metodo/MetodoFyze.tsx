"use client";

import { motion } from "motion/react";
import type { MetodoCopy } from "@/data/metodo-copy";

export function MetodoMetodoFyze({
  copy,
}: {
  copy: MetodoCopy["metodoFyze"];
}) {
  return (
    <section className="py-20 sm:py-28 bg-zinc-950 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-fyze text-xs sm:text-sm font-black uppercase tracking-widest mb-4 block">
            {copy.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.95] text-white mb-6 text-balance">
            {copy.headline.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h2>
          <div className="space-y-1 max-w-2xl mx-auto">
            {copy.intro.map((p, i) => (
              <p
                key={i}
                className="text-base sm:text-lg md:text-xl text-zinc-400 font-medium leading-snug"
              >
                {p}
              </p>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {copy.pillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="bg-zinc-900/70 border border-white/10 rounded-3xl p-7 sm:p-8 hover:border-fyze/40 transition-colors duration-500 flex flex-col"
            >
              <div className="flex items-baseline gap-3 mb-4">
                <div className="text-fyze text-5xl sm:text-6xl font-black tracking-tighter leading-none">
                  {pillar.number}
                </div>
                <div className="text-fyze text-xs sm:text-sm font-black uppercase tracking-widest">
                  {pillar.tag}
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-3 leading-tight">
                {pillar.title}
              </h3>

              <p className="text-zinc-400 text-sm font-medium leading-snug mb-5 italic">
                {pillar.kicker}
              </p>

              <p className="text-zinc-200 text-base font-bold leading-snug mb-5">
                {pillar.lead}
              </p>

              <ul className="space-y-2.5 mb-6">
                {pillar.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-zinc-300 font-medium leading-snug"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-fyze mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-5 border-t border-white/5">
                <p className="text-sm text-fyze font-bold leading-snug italic">
                  {pillar.conclusion}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
