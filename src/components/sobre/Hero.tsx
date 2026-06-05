"use client";

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import type { SobreCopy } from "@/data/sobre-copy";

export function SobreHero({ copy }: { copy: SobreCopy["hero"] }) {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24">
      <div className="absolute inset-0 z-0 bg-zinc-950">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/80 to-zinc-950" />
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-fyze/15 rounded-full blur-[100px] sm:blur-[140px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-fyze/8 rounded-full blur-[100px] sm:blur-[120px] mix-blend-screen" />
      </div>

      <div className="relative z-10 w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-[8vw] sm:text-[5.5vw] md:text-[4.2vw] lg:text-[3.4vw] xl:text-[3vw] 2xl:text-[2.7vw] font-black tracking-tighter uppercase leading-[1] sm:leading-[0.95] mb-6 sm:mb-8 text-white text-balance">
            {copy.headline.lines.map((line, i) => {
              const parts = line.split(
                new RegExp(`(${copy.headline.highlight})`, "i"),
              );
              return (
                <span key={i} className="block">
                  {parts.map((p, j) =>
                    p.toLowerCase() === copy.headline.highlight.toLowerCase() ? (
                      <span key={j} className="text-fyze relative inline-block">
                        {p}
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                          className="absolute -bottom-1 md:-bottom-2 left-0 right-0 h-1.5 md:h-3 bg-fyze origin-left opacity-50"
                        />
                      </span>
                    ) : (
                      <span key={j}>{p}</span>
                    ),
                  )}
                </span>
              );
            })}
          </h1>

          <div className="space-y-1 max-w-2xl mx-auto">
            {copy.subhead.map((line, i) => (
              <p
                key={i}
                className="text-base sm:text-lg md:text-xl text-zinc-300 font-medium leading-snug"
              >
                {line}
              </p>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center opacity-50"
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ChevronDown className="w-8 h-8 text-white" />
      </motion.div>
    </section>
  );
}
