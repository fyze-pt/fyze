"use client";

import { motion } from "motion/react";
import { AlertTriangle } from "lucide-react";
import type { HomeCopy } from "@/data/home-copy";

export function BeliefBreaker({
  copy,
  eyebrow = "A verdade é simples",
}: {
  copy: HomeCopy["beliefBreaker"];
  eyebrow?: string;
}) {
  return (
    <section className="py-20 sm:py-28 bg-zinc-950 border-t border-white/5">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 mb-6 sm:mb-8 text-fyze">
            <AlertTriangle className="w-5 h-5" />
            <span className="text-xs sm:text-sm font-black uppercase tracking-widest">
              {eyebrow}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.95] text-white mb-8 sm:mb-12 max-w-3xl mx-auto">
            {copy.headline}
          </h2>

          <div className="space-y-5 max-w-2xl mx-auto">
            {copy.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="text-lg sm:text-xl text-zinc-300 font-medium leading-relaxed"
              >
                {p}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-24 h-1 bg-fyze mx-auto my-10 origin-center"
          />

          <p className="text-xl sm:text-2xl text-fyze font-black tracking-tight max-w-2xl mx-auto">
            {copy.closingLine}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
