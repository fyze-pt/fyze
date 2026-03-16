import { motion } from "motion/react";
import { Asterisk, Smile, Hexagon, Triangle } from "lucide-react";

const logos = [
  {
    name: "nora",
    element: <span className="text-4xl font-black lowercase tracking-tighter">nora</span>,
  },
  {
    name: "elara",
    element: (
      <div className="flex items-center gap-2">
        <span className="text-4xl font-serif lowercase tracking-tight">elara</span>
        <Asterisk className="w-8 h-8" />
      </div>
    ),
  },
  {
    name: "KuantaVita",
    element: <span className="text-4xl font-serif tracking-tight">KuantaVita.</span>,
  },
  {
    name: "Liberad",
    element: (
      <div className="flex items-center gap-1">
        <span className="text-4xl font-semibold tracking-tight">Liberad</span>
        <Smile className="w-8 h-8" />
      </div>
    ),
  },
  {
    name: "biovit farma",
    element: (
      <div className="flex flex-col -gap-2">
        <span className="text-3xl font-serif italic leading-none">biovit</span>
        <span className="text-3xl font-serif italic leading-none text-zinc-500">farma</span>
      </div>
    ),
  },
  {
    name: "nexus",
    element: (
      <div className="flex items-center gap-2">
        <Hexagon className="w-8 h-8" />
        <span className="text-4xl font-bold uppercase tracking-widest">Nexus</span>
      </div>
    ),
  },
  {
    name: "vertex",
    element: (
      <div className="flex items-center gap-2">
        <Triangle className="w-8 h-8" />
        <span className="text-4xl font-light uppercase tracking-widest">Vertex</span>
      </div>
    ),
  },
];

export function Clients() {
  return (
    <section className="py-12 bg-zinc-950 border-t border-white/5 overflow-hidden">
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
            duration: 30,
          }}
        >
          {/* First set of logos */}
          <div className="flex items-center gap-12 sm:gap-24 px-6 sm:px-12">
            {logos.map((logo, index) => (
              <div key={`logo-1-${index}`} className="text-zinc-400 flex-shrink-0">
                {logo.element}
              </div>
            ))}
          </div>
          {/* Duplicated set for seamless loop */}
          <div className="flex items-center gap-12 sm:gap-24 px-6 sm:px-12">
            {logos.map((logo, index) => (
              <div key={`logo-2-${index}`} className="text-zinc-400 flex-shrink-0">
                {logo.element}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
