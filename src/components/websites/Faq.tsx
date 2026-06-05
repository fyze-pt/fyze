"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import type { WebsitesCopy } from "@/data/websites-copy";

export function WebsitesFaq({ copy }: { copy: WebsitesCopy["faq"] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 sm:py-28 bg-zinc-900 border-t border-white/5">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.95] text-white">
            {copy.headline}
          </h2>
        </motion.div>

        <div className="space-y-3 sm:space-y-4">
          {copy.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-zinc-950/60 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-7 py-5 sm:py-6 text-left"
                >
                  <span className="text-base sm:text-lg font-bold text-white">
                    {item.q}
                  </span>
                  <Plus
                    className={`w-5 h-5 text-fyze shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 sm:px-7 pb-6 text-zinc-300 font-medium leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
