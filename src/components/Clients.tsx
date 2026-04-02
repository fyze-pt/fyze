import { motion } from "motion/react";

const logos = [
  { name: "AguaQlub", src: "/logos/aguaqlub.png" },
  { name: "NosoloÁgua", src: "/logos/nosoloagua.png" },
  { name: "Patacas Bar", src: "/logos/patacas-bar.png" },
  { name: "CharruaFit", src: "/logos/charruafit.png" },
  { name: "4Guys", src: "/logos/4guys.png" },
  { name: "Oporto Tavern", src: "/logos/oporto-tavern.png" },
];

export function Clients() {
  return (
    <section className="py-16 sm:py-20 bg-zinc-950 border-t border-white/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p className="text-[11px] sm:text-sm font-bold uppercase tracking-[0.12em] text-white">
          CONFIADO PELAS SEGUINTES EMPRESAS
        </p>
      </div>

      <div className="relative w-full flex overflow-hidden">
        {/* Left and Right Gradient Masks for smooth fade */}
        <div className="absolute top-0 left-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex w-max items-center opacity-40 hover:opacity-100 transition-opacity duration-500"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
        >
          {/* First set of logos */}
          <div className="flex items-center gap-16 sm:gap-32 px-8 sm:px-16">
            {logos.map((logo, index) => (
              <div key={`logo-1-${index}`} className="flex-shrink-0">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-10 sm:h-14 w-auto max-w-[120px] sm:max-w-[160px] object-contain brightness-0 invert opacity-60"
                />
              </div>
            ))}
          </div>
          {/* Duplicated set for seamless loop */}
          <div className="flex items-center gap-16 sm:gap-32 px-8 sm:px-16">
            {logos.map((logo, index) => (
              <div key={`logo-2-${index}`} className="flex-shrink-0">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-10 sm:h-14 w-auto max-w-[120px] sm:max-w-[160px] object-contain brightness-0 invert opacity-60"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
