import { motion } from "motion/react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contacto" className="py-20 sm:py-24 bg-zinc-950 relative border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.92] sm:leading-[0.9] mb-6 sm:mb-8">
              Vamos <br />
              <span className="text-fyze">falar?</span>
            </h2>
            <p className="text-base sm:text-xl text-zinc-400 mb-10 sm:mb-12 max-w-lg font-medium leading-relaxed">
              Pronto para elevar a sua marca? Preencha o formulário ou contacte-nos diretamente.
            </p>

            <div className="space-y-6 sm:space-y-10">
              <div className="flex items-start sm:items-center gap-4 sm:gap-8 group">
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:bg-fyze group-hover:border-fyze transition-all duration-300 shrink-0">
                  <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-zinc-400 group-hover:text-zinc-950 transition-colors duration-300" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-zinc-500 uppercase tracking-widest font-bold mb-2">Ligue-nos</p>
                  <a href="tel:+351900000000" className="text-xl sm:text-3xl font-black hover:text-fyze transition-colors break-words">+351 900 000 000</a>
                </div>
              </div>

              <div className="flex items-start sm:items-center gap-4 sm:gap-8 group">
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:bg-fyze group-hover:border-fyze transition-all duration-300 shrink-0">
                  <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-zinc-400 group-hover:text-zinc-950 transition-colors duration-300" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-zinc-500 uppercase tracking-widest font-bold mb-2">Email</p>
                  <a href="mailto:hello@fyze.pt" className="text-xl sm:text-3xl font-black hover:text-fyze transition-colors break-all">hello@fyze.pt</a>
                </div>
              </div>

              <div className="flex items-start sm:items-center gap-4 sm:gap-8 group">
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:bg-fyze group-hover:border-fyze transition-all duration-300 shrink-0">
                  <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-zinc-400 group-hover:text-zinc-950 transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 uppercase tracking-widest font-bold mb-2">Localização</p>
                  <p className="text-xl sm:text-3xl font-black">Lisboa & Algarve</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-zinc-900/50 p-5 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] border border-white/5 backdrop-blur-sm"
          >
            <form className="space-y-6 sm:space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-bold uppercase tracking-widest text-zinc-400 mb-3">Nome</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-zinc-950 border border-white/10 rounded-2xl px-5 sm:px-6 py-4 sm:py-5 text-white focus:outline-none focus:border-fyze transition-colors font-medium"
                  placeholder="O seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold uppercase tracking-widest text-zinc-400 mb-3">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-zinc-950 border border-white/10 rounded-2xl px-5 sm:px-6 py-4 sm:py-5 text-white focus:outline-none focus:border-fyze transition-colors font-medium"
                  placeholder="O seu email"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-bold uppercase tracking-widest text-zinc-400 mb-3">Serviço de Interesse</label>
                <div className="relative">
                  <select
                    id="service"
                    className="w-full bg-zinc-950 border border-white/10 rounded-2xl px-5 sm:px-6 py-4 sm:py-5 text-white focus:outline-none focus:border-fyze transition-colors appearance-none font-medium"
                  >
                    <option>Criação de Sites</option>
                    <option>Tráfego Pago</option>
                    <option>Gestão de Redes Sociais</option>
                    <option>Criação de Conteúdo</option>
                    <option>Foto & Vídeo / Drone</option>
                    <option>Outro</option>
                  </select>
                  <div className="absolute inset-y-0 right-5 sm:right-6 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold uppercase tracking-widest text-zinc-400 mb-3">Mensagem</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-zinc-950 border border-white/10 rounded-2xl px-5 sm:px-6 py-4 sm:py-5 text-white focus:outline-none focus:border-fyze transition-colors resize-none font-medium"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full group flex items-center justify-center gap-3 bg-fyze text-zinc-950 px-6 sm:px-8 py-5 sm:py-6 rounded-2xl text-sm sm:text-base font-black uppercase tracking-[0.14em] sm:tracking-widest transition-all hover:bg-fyze/90 hover:shadow-[0_0_40px_rgba(0,240,255,0.4)]"
              >
                Enviar Mensagem
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
