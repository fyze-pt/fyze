"use client";

import { motion } from "motion/react";
import type { WebsitesCopy } from "@/data/websites-copy";

export function WebsitesReposicionamento({
  copy,
}: {
  copy: WebsitesCopy["reposicionamento"];
}) {
  return (
    <section className="py-20 sm:py-28 bg-zinc-900 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-fyze/5 rounded-full blur-[140px] mix-blend-screen pointer-events-none" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.95] text-white mb-4 sm:mb-6">
            {copy.headline}
          </h2>
          <p className="text-lg sm:text-2xl text-zinc-300 font-medium max-w-2xl mx-auto">
            {copy.subhead}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-16">
          {copy.pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-zinc-950/60 border border-white/10 rounded-3xl p-7 sm:p-8 hover:border-fyze/40 transition-colors duration-500"
            >
              <div className="w-10 h-10 rounded-xl bg-fyze/10 border border-fyze/30 flex items-center justify-center text-fyze font-black text-lg mb-5">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white mb-3">
                {pillar.title}
              </h3>
              <p className="text-zinc-300 text-base font-medium leading-relaxed">
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white max-w-3xl mx-auto"
        >
          {copy.closingLine}
        </motion.p>
      </div>
    </section>
  );
}
