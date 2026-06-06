"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import { useLocale } from "@/components/LocaleProvider";

export function FaqAntiAgency() {
  const { ui } = useLocale();
  const FAQS = ui.faq.items;
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section
      id="servicos"
      className="py-20 sm:py-28 bg-zinc-950 border-t border-white/5 relative"
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.95] text-white max-w-3xl">
            {ui.faq.heading1}
            <br />
            <span className="text-fyze">
              {ui.faq.heading2}
            </span>
          </h2>
        </motion.div>

        <div className="space-y-3 sm:space-y-4">
          {FAQS.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="rounded-2xl border border-white/10 bg-zinc-900/50 hover:border-fyze/30 transition-colors overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-7 py-5 sm:py-6 text-left group"
                >
                  <span className="text-white text-base sm:text-lg font-bold leading-snug pr-2 group-hover:text-fyze transition-colors">
                    “{item.q}”
                  </span>
                  <span
                    className={`shrink-0 w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white transition-all ${
                      isOpen
                        ? "bg-fyze text-zinc-950 border-fyze rotate-45"
                        : "group-hover:border-fyze/60"
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-7 pb-6 pt-1 space-y-3 border-t border-white/5">
                        {item.paragraphs.map((p, j) => (
                          <p
                            key={j}
                            className="text-zinc-300 text-sm sm:text-base leading-relaxed font-medium"
                          >
                            {p}
                          </p>
                        ))}
                      </div>
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
