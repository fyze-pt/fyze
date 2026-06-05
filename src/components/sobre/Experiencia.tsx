"use client";

import { motion } from "motion/react";
import type { SobreCopy } from "@/data/sobre-copy";

export function SobreExperiencia({
  copy,
}: {
  copy: SobreCopy["experiencia"];
}) {
  return (
    <section className="py-20 sm:py-28 bg-zinc-900 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fyze/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

      <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.95] text-white mb-10 text-balance"
        >
          {copy.headline}
        </motion.h2>

        <div className="space-y-3 max-w-2xl mx-auto">
          {copy.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={
                i === copy.paragraphs.length - 1
                  ? "text-xl sm:text-2xl md:text-3xl font-black italic text-fyze pt-3"
                  : "text-lg sm:text-xl text-zinc-300 font-medium leading-snug"
              }
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
