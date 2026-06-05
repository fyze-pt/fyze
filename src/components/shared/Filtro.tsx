"use client";

import { motion } from "motion/react";

export function Filtro({
  headline,
  body,
}: {
  headline: string;
  body: string[];
}) {
  return (
    <section className="py-20 sm:py-28 bg-zinc-950 border-t border-white/5">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.95] text-white mb-8 text-balance">
            {headline}
          </h2>

          <div className="space-y-3">
            {body.map((line, i) => (
              <p
                key={i}
                className="text-lg sm:text-xl text-zinc-300 font-medium leading-snug max-w-2xl mx-auto text-pretty"
              >
                {line}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
