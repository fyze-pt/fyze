"use client";

import { motion } from "motion/react";
import type { DiagnosticoCopy } from "@/data/diagnostico-copy";

export function DiagnosticoComoFunciona({
  copy,
}: {
  copy: DiagnosticoCopy["comoFunciona"];
}) {
  return (
    <section className="py-20 sm:py-28 bg-zinc-900 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fyze/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
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
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.95] text-white max-w-3xl mx-auto text-balance">
            {copy.headline}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {copy.steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="bg-zinc-950/60 border border-white/10 rounded-3xl p-7 sm:p-9 hover:border-fyze/40 transition-colors duration-500"
            >
              <div className="text-fyze text-5xl sm:text-6xl font-black tracking-tighter mb-5 leading-none">
                {step.number}
              </div>
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white mb-3 leading-tight">
                {step.title}
              </h3>
              <p className="text-zinc-300 text-base font-medium leading-relaxed">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
