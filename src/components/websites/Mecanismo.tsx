"use client";

import { motion } from "motion/react";
import type { WebsitesCopy } from "@/data/websites-copy";

export function WebsitesMecanismo({
  copy,
}: {
  copy: WebsitesCopy["mecanismo"];
}) {
  return (
    <section className="py-20 sm:py-28 bg-zinc-950 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 sm:mb-20"
        >
          <span className="text-fyze text-xs sm:text-sm font-black uppercase tracking-widest mb-4 block">
            {copy.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.95] text-white max-w-3xl mx-auto mb-5">
            {copy.headline}
          </h2>
          <p className="text-base sm:text-xl text-zinc-400 font-medium leading-relaxed max-w-2xl mx-auto">
            {copy.subhead}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {copy.steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative bg-zinc-900/70 border border-white/10 rounded-3xl p-7 sm:p-9 hover:border-fyze/40 transition-colors duration-500"
            >
              <div className="flex items-start gap-5">
                <div className="text-fyze text-5xl sm:text-6xl font-black tracking-tighter leading-none shrink-0">
                  {step.number}
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-zinc-300 text-base font-medium leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
