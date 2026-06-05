"use client";

import { motion } from "motion/react";
import type { WebsitesCopy } from "@/data/websites-copy";

export function WebsitesCasesIntro({
  copy,
}: {
  copy: WebsitesCopy["casesIntro"];
}) {
  return (
    <section className="pt-20 sm:pt-28 pb-8 sm:pb-12 bg-zinc-950 border-t border-white/5">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.95] text-white max-w-3xl mx-auto mb-5">
            {copy.headline}
            <br />
            <span className="text-fyze">{copy.highlight}</span>
          </h2>
          <p className="text-base sm:text-xl text-zinc-400 font-medium leading-relaxed max-w-2xl mx-auto">
            {copy.subhead}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function WebsitesCasesClosing({
  copy,
}: {
  copy: WebsitesCopy["casesIntro"];
}) {
  return (
    <section className="pt-8 sm:pt-12 pb-20 sm:pb-28 bg-zinc-950">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white"
        >
          {copy.closing}
        </motion.p>
      </div>
    </section>
  );
}
