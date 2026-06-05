"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";

type Faq = {
  q: string;
  paragraphs: string[];
};

const FAQS: Faq[] = [
  {
    q: "Quantos posts, reels ou stories vocês fazem por semana?",
    paragraphs: [
      "Não trabalhamos com volume fixo de conteúdo. Trabalhamos com o que gera resultado.",
      "Em muitos casos, menos conteúdo com estratégia gera muito mais do que postar todos os dias sem direção.",
      "O foco não é “alimentar redes”. É transformar atenção em clientes.",
      "Se o seu negócio precisa de 30 posts por mês para funcionar… o problema não é conteúdo. É estrutura.",
    ],
  },
  {
    q: "Vocês fazem gestão de redes sociais?",
    paragraphs: [
      "Sim, mas não da forma tradicional. Não estamos aqui para “postar por postar”.",
      "Construímos uma presença que posiciona, gera interesse e prepara o cliente para a compra.",
      "Redes sociais, para nós, são uma ferramenta de conversão. Não um calendário de posts.",
    ],
  },
  {
    q: "Eu preciso mesmo de tudo isso ou só de tráfego?",
    paragraphs: [
      "Tráfego sem base é dinheiro desperdiçado.",
      "Se o seu negócio não está preparado para converter, mais visitas só aumentam o problema.",
      "Primeiro garantimos estrutura. Depois escalamos.",
    ],
  },
  {
    q: "E se eu já tiver alguém a fazer o meu marketing?",
    paragraphs: [
      "Ótimo. O problema raramente é “ter alguém”. É ter direção.",
      "Muitas vezes encontramos gargalos que passam despercebidos, e que estão a travar completamente o crescimento.",
    ],
  },
  {
    q: "Quanto tempo demora para ver resultados?",
    paragraphs: [
      "Depende do ponto de partida. Mas a diferença aparece rápido quando o sistema começa a funcionar.",
      "Porque deixamos de depender de tentativa e erro e passamos a operar com estratégia.",
    ],
  },
  {
    q: "Isso funciona para o meu tipo de negócio?",
    paragraphs: [
      "Funciona para negócios que querem crescer com consistência no digital.",
      "Se você depende de indicação, não tem previsibilidade ou sente que o digital não está a funcionar… é exatamente aí que entramos.",
    ],
  },
  {
    q: "Vocês trabalham com qualquer cliente?",
    paragraphs: [
      "Não. Trabalhamos com negócios que querem crescer de forma estruturada.",
      "Se você procura apenas “posts” ou “anúncios rápidos”, provavelmente não somos a melhor escolha.",
    ],
  },
  {
    q: "O que acontece depois de eu entrar em contacto?",
    paragraphs: [
      "Primeiro, fazemos um diagnóstico do seu negócio.",
      "Identificamos onde você está a perder dinheiro e mostramos o caminho mais direto para crescer.",
      "A partir daí, decidimos juntos o próximo passo.",
    ],
  },
  {
    q: "Por que a Fyze é diferente de outras agências?",
    paragraphs: [
      "Porque não vendemos serviços soltos.",
      "Construímos um sistema completo de aquisição de clientes.",
      "E fazemos isso há mais de 4 anos no mercado português, com foco real em resultado.",
    ],
  },
];

export function FaqAntiAgency() {
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
            Se você já trabalhou com uma agência antes,
            <br />
            <span className="text-fyze">
              provavelmente está a pensar nisso:
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
