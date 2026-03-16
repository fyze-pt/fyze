import { Instagram, Linkedin, Facebook } from "lucide-react";

export function Footer() {
  const markSrc = `${import.meta.env.BASE_URL}y-fyze.svg`;

  return (
    <footer className="bg-zinc-950 border-t border-white/5 pt-20 sm:pt-24 pb-10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 sm:gap-12 mb-12 sm:mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-start gap-4 sm:gap-5">
              <img
                src={markSrc}
                alt="Fyze"
                className="h-20 sm:h-24 w-auto shrink-0"
              />
              <p className="text-zinc-400 max-w-md leading-relaxed text-base sm:text-lg font-medium pt-1">
                Agência de Marketing Digital em Portugal.
                Transformamos ideias em resultados através de estratégias digitais inovadoras.
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest mb-5 sm:mb-8 text-sm text-white">Links Rápidos</h4>
            <ul className="space-y-4 sm:space-y-6">
              <li><a href="#servicos" className="text-zinc-400 hover:text-fyze transition-colors font-bold uppercase tracking-widest text-sm">Serviços</a></li>
              <li><a href="#sobre" className="text-zinc-400 hover:text-fyze transition-colors font-bold uppercase tracking-widest text-sm">Sobre Nós</a></li>
              <li><a href="#contacto" className="text-zinc-400 hover:text-fyze transition-colors font-bold uppercase tracking-widest text-sm">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest mb-5 sm:mb-8 text-sm text-white">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 hover:bg-fyze hover:text-zinc-950 hover:border-fyze transition-all duration-300">
                <Instagram size={24} />
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 hover:bg-fyze hover:text-zinc-950 hover:border-fyze transition-all duration-300">
                <Linkedin size={24} />
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 hover:bg-fyze hover:text-zinc-950 hover:border-fyze transition-all duration-300">
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 sm:pt-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6">
          <p className="text-zinc-500 text-sm font-medium">
            © {new Date().getFullYear()} Fyze Agency. Todos os direitos reservados.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 text-sm text-zinc-500 font-medium">
            <a href="#" className="hover:text-white transition-colors">Termos de Serviço</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
