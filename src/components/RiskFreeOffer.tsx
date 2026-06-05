"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import type { HomeCopy } from "@/data/home-copy";

export function RiskFreeOffer({
  variant,
  copy,
}: {
  variant?: string;
  copy?: HomeCopy["riskFree"];
} = {}) {
  const c = copy ?? {
    eyebrow: "Diferencial Fyze",
    headline: {
      line1: "Criamos o seu site",
      highlight: "sem compromisso.",
    },
    body: "Confiamos tanto no nosso trabalho que assumimos o risco. Desenhamos e desenvolvemos o seu site. Se gostar do resultado, avançamos. Se não gostar, não paga absolutamente nada.",
    cta: "Quero o meu site",
  };

  return (
    <section className="py-20 sm:py-24 bg-zinc-950 relative border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden bg-zinc-900 border border-fyze/30 p-6 sm:p-10 md:p-16 shadow-[0_0_50px_rgba(0,240,255,0.05)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-fyze/20 via-transparent to-transparent opacity-50" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
            <div className="max-w-2xl">
              <span className="inline-block text-fyze text-xs sm:text-sm font-black uppercase tracking-widest mb-5">
                Seu website
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase leading-[0.95] sm:leading-[0.92] mb-5 sm:mb-8 text-white">
                {c.headline.line1} <br />
                <span className="text-fyze">{c.headline.highlight}</span>
              </h2>
              <p className="text-base sm:text-xl text-zinc-300 font-medium leading-relaxed mb-8 sm:mb-10">
                {c.body}
              </p>

              <Link
                href="/criacao-de-websites"
                onClick={() =>
                  trackEvent("cta_click", {
                    location: "risk_free_offer",
                    label: c.cta,
                    variant,
                  })
                }
                className="inline-flex w-full sm:w-auto group items-center justify-center gap-3 bg-fyze text-zinc-950 px-8 sm:px-10 py-4 sm:py-6 rounded-2xl text-base sm:text-lg font-black uppercase tracking-[0.16em] sm:tracking-widest transition-all hover:bg-white hover:scale-105 hover:shadow-[0_0_40px_rgba(0,240,255,0.4)]"
              >
                {c.cta}
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-zinc-950 shadow-2xl flex flex-col">
              <div className="h-10 bg-zinc-900 border-b border-white/10 flex items-center px-4 gap-2 shrink-0">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="relative flex-1 w-full overflow-hidden">
                <motion.div
                  animate={{ y: ["0%", "-50%"] }}
                  transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                  className="absolute top-0 left-0 w-full"
                >
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                    alt="Website Placeholder 1"
                    className="w-full h-auto object-cover border-b border-white/10"
                    referrerPolicy="no-referrer"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=800"
                    alt="Website Placeholder 2"
                    className="w-full h-auto object-cover border-b border-white/10"
                    referrerPolicy="no-referrer"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
                    alt="Website Placeholder 3"
                    className="w-full h-auto object-cover border-b border-white/10"
                    referrerPolicy="no-referrer"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                    alt="Website Placeholder 1"
                    className="w-full h-auto object-cover border-b border-white/10"
                    referrerPolicy="no-referrer"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=800"
                    alt="Website Placeholder 2"
                    className="w-full h-auto object-cover border-b border-white/10"
                    referrerPolicy="no-referrer"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
                    alt="Website Placeholder 3"
                    className="w-full h-auto object-cover border-b border-white/10"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>

                <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-zinc-950 to-transparent z-10 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-zinc-950 to-transparent z-10 pointer-events-none" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
