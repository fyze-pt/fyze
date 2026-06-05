"use client";

import { motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { useSiteFormModal } from "@/components/SiteFormModal";
import { trackEvent } from "@/lib/analytics";
import type { WebsitesCopy } from "@/data/websites-copy";

const VARIANT = "websites-lp";

export function WebsitesHero({ copy }: { copy: WebsitesCopy["hero"] }) {
  const { open } = useSiteFormModal();

  const onCta = () => {
    trackEvent("cta_click", { location: "websites_hero", label: copy.cta, variant: VARIANT });
    open("websites_hero");
  };

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-24 pb-14 sm:pt-28 sm:pb-20">
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
          <h1 className="text-[9vw] sm:text-[6vw] md:text-[4.5vw] lg:text-[3.6vw] xl:text-[3.2vw] font-black tracking-tighter uppercase leading-[1] sm:leading-[0.95] mb-6 sm:mb-8 text-white">
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

          <p className="text-lg sm:text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto font-medium leading-relaxed mb-8 sm:mb-10">
            {copy.subhead}
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto mb-10 sm:mb-12">
            {copy.bullets.map((b) => (
              <li
                key={b}
                className="flex items-center gap-3 text-sm sm:text-base text-zinc-200 font-medium bg-zinc-900/60 border border-white/10 rounded-xl px-4 py-3 justify-center sm:justify-start"
              >
                <Check className="w-5 h-5 text-fyze shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={onCta}
            className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-fyze text-zinc-950 px-8 sm:px-12 py-5 sm:py-6 rounded-full text-sm md:text-base font-black uppercase tracking-[0.16em] sm:tracking-widest transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(0,240,255,0.45)]"
          >
            {copy.cta}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
