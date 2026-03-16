import { motion } from "motion/react";
import { MapPin } from "lucide-react";

export function About() {
  return (
    <section id="sobre" className="py-20 sm:py-24 bg-zinc-900 relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-fyze/5 rounded-full blur-[128px] mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8 sm:space-y-10"
          >
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.92] sm:leading-[0.9]">
              Quem <br />
              <span className="text-fyze">somos</span>
            </h2>

            <div className="space-y-5 sm:space-y-6">
              <p className="text-xl sm:text-2xl text-zinc-300 font-bold leading-relaxed">
                A Fyze Agency é uma agência de marketing digital focada em resultados exponenciais para o seu negócio.
              </p>

              <p className="text-zinc-400 text-base sm:text-lg leading-relaxed font-medium">
                Não somos apenas executores, somos parceiros estratégicos. Combinamos criatividade, dados e tecnologia para criar campanhas que convertem e marcas que inspiram.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 p-6 sm:p-8 bg-zinc-950/80 rounded-3xl border border-white/5 shadow-2xl">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-fyze/20 flex items-center justify-center shrink-0 border border-fyze/30">
                <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-fyze" />
              </div>
              <div>
                <h4 className="font-black text-lg sm:text-xl uppercase tracking-wider mb-2">Atuação Local & Global</h4>
                <p className="text-sm sm:text-base text-zinc-400 font-medium">Com forte presença em Lisboa e no Algarve, atendemos clientes em todo o Portugal.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden relative group border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                alt="Equipa Fyze Agency"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90" />

              <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10">
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="text-5xl sm:text-7xl font-black text-fyze tracking-tighter">100%</div>
                  <div className="text-sm sm:text-lg font-bold uppercase tracking-[0.14em] sm:tracking-widest leading-tight text-zinc-300">
                    Foco no<br />Resultado
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
