"use client";

import { motion } from "motion/react";
import type { HomeCopy } from "@/data/home-copy";

export function Method({ copy }: { copy: HomeCopy["method"] }) {
  return (
    <section
      id="metodo"
      className="pt-20 pb-8 sm:pt-28 sm:pb-12 bg-zinc-950 border-t border-white/5"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 sm:mb-20"
        >
          <span className="text-fyze text-xs sm:text-sm font-black uppercase tracking-widest mb-4 block">
            O sistema
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.95] text-white max-w-4xl mx-auto mb-6">
            {copy.headline}
          </h2>
          <p className="text-base sm:text-xl text-zinc-400 font-medium leading-relaxed max-w-3xl mx-auto">
            {copy.subhead}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {copy.steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative bg-zinc-900/70 border border-white/10 rounded-3xl p-7 sm:p-8 hover:border-fyze/40 transition-colors duration-500"
            >
              <div className="text-fyze text-5xl sm:text-6xl font-black tracking-tighter mb-4 leading-none">
                {step.number}
              </div>

              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-3">
                {step.title}
              </h3>

              <p className="text-zinc-300 text-base font-medium leading-relaxed mb-6">
                {step.lead}
              </p>

              <ul className="space-y-2.5 mb-6">
                {step.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-zinc-300 font-medium leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-fyze mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-5 border-t border-white/5">
                <p className="text-sm text-fyze font-bold leading-relaxed italic">
                  {step.conclusion}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
