"use client";

import { motion } from "motion/react";

type Logo = {
  name: string;
  src: string;
  /** Estratégia visual no fundo escuro:
   * - "invert" (default): brightness-0 invert (para logos lineares/contornadas)
   * - "as-is": mostra como está (logo já preparada para fundo escuro)
   * - "lighten": mix-blend-mode lighten (logos coloridas com cores claras)
   */
  display?: "invert" | "as-is" | "lighten";
};

const logos: Logo[] = [
  { name: "Active Body", src: "/logos/active-body-white.png", display: "as-is" },
  { name: "Boteco Dona Luzia", src: "/logos/boteco-dona-luzia-white.png", display: "as-is" },
  { name: "Teixeira Wine Bar", src: "/logos/teixeira-wine-bar.png" },
  { name: "Patacas Bar", src: "/logos/patacas-bar.png" },
  { name: "Oporto Tavern", src: "/logos/oporto-tavern.png" },
  { name: "Suyori Sushi & Ramen", src: "/logos/suyori.png" },
  { name: "AguaQlub", src: "/logos/aguaqlub.png" },
  { name: "NosoloÁgua", src: "/logos/nosoloagua.png" },
  { name: "CharruaFit", src: "/logos/charruafit.png" },
  { name: "Need Vilamoura", src: "/logos/need-vilamoura.png" },
  { name: "Desentuup Clean", src: "/logos/desentuup-clean.png" },
];

const displayClass: Record<NonNullable<Logo["display"]>, string> = {
  invert:
    "max-w-full max-h-full object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity",
  "as-is":
    "max-w-full max-h-full object-contain opacity-90 hover:opacity-100 transition-opacity",
  lighten:
    "max-w-full max-h-full object-contain opacity-90 hover:opacity-100 transition-opacity mix-blend-lighten",
};

export function Clients() {
  return (
    <section className="py-16 sm:py-20 bg-zinc-950 border-t border-white/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <p className="text-[11px] sm:text-sm font-bold uppercase tracking-[0.12em] text-white">
          CONFIADO PELAS SEGUINTES EMPRESAS
        </p>
      </div>

      <div className="relative w-full flex overflow-hidden">
        <div className="absolute top-0 left-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex w-max items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 60,
          }}
        >
          {[0, 1].map((dup) => (
            <div
              key={dup}
              className="flex items-center gap-10 sm:gap-16 px-5 sm:px-8 shrink-0"
            >
              {logos.map((logo) => (
                <div
                  key={`logo-${dup}-${logo.name}`}
                  className="flex items-center justify-center shrink-0 w-32 h-14 sm:w-44 sm:h-20"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className={displayClass[logo.display ?? "invert"]}
                  />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
