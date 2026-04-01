import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Websites & Sistemas",
    description: "Desenvolvemos plataformas digitais rápidas, modernas e otimizadas para conversão e gestão do seu negócio.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    contactService: "Criação de Sites",
    features: [
      "UI/UX Design",
      "Websites Multi-Pages",
      "Websites One-Page",
      "E-commerce",
      "Sistemas de Gestão",
    ],
  },
  {
    title: "Marketing & Tráfego",
    description: "Maximizamos o seu ROI e a sua presença online através de campanhas estratégicas e gestão de redes sociais.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    contactService: "Tráfego Pago",
    features: [
      "Google Ads",
      "Meta Ads & TikTok Ads",
      "Gestão de Redes Sociais",
      "Google Meu Negócio",
      "Estratégia de Conteúdo",
    ],
  },
  {
    title: "Audiovisual & Conteúdo",
    description: "Captação profissional de imagens e vídeos para destacar a essência da sua marca no mercado.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=800",
    contactService: "Criação de Conteúdo",
    features: [
      "Fotografia Profissional",
      "Captação de Vídeo",
      "Imagens Aéreas (Drone)",
      "Edição e Pós-produção",
      "Material para Redes Sociais",
    ],
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-20 sm:py-24 bg-zinc-950 relative border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-14 gap-6 sm:gap-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.92] sm:leading-[0.9] mb-4 sm:mb-6">
              O que <br />
              <span className="text-fyze">fazemos</span>
            </h2>
            <p className="text-zinc-400 text-base sm:text-xl font-medium">
              Soluções completas de marketing digital para escalar o seu negócio.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-24 h-2 bg-fyze" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group flex flex-col rounded-[2rem] bg-[#050505] border border-white/10 overflow-hidden hover:border-white/30 transition-colors duration-500"
            >
              <div className="relative h-56 sm:h-72 w-full flex items-center justify-center overflow-hidden bg-[#050505]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover opacity-60 mix-blend-lighten transition-transform duration-700 group-hover:scale-105"
                  style={{
                    maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)",
                  }}
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex flex-col flex-grow p-6 sm:p-8 pt-0">
                <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-3 sm:mb-4 text-white group-hover:text-fyze transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 min-h-0 sm:min-h-[80px]">
                  {service.description}
                </p>

                <ul className="flex flex-col gap-3 sm:gap-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                      <Check className="w-5 h-5 text-[#D4FF00] shrink-0" />
                      <span className="text-zinc-300 text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contacto"
                  onClick={(e) => {
                    e.preventDefault();
                    const select = document.getElementById("service") as HTMLSelectElement | null;
                    if (select) {
                      select.value = service.contactService;
                    }
                    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="mt-8 group flex w-full items-center justify-center gap-3 bg-fyze text-zinc-950 px-6 py-4 rounded-2xl text-sm font-black uppercase tracking-widest transition-all hover:bg-white hover:shadow-[0_0_40px_rgba(0,240,255,0.4)]"
                >
                  Pedir Orçamento
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
