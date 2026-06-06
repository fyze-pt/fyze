import type { Locale } from "@/lib/locale";

export type WebsitesCopy = {
  hero: {
    headline: { lines: string[]; highlight: string };
    subhead: string;
    bullets: string[];
    cta: string;
  };
  beliefBreaker: {
    headline: string;
    paragraphs: string[];
    closingLine: string;
  };
  reposicionamento: {
    headline: string;
    subhead: string;
    pillars: { title: string; body: string }[];
    closingLine: string;
  };
  mecanismo: {
    eyebrow: string;
    headline: string;
    subhead: string;
    steps: { number: string; title: string; body: string }[];
  };
  casesIntro: {
    headline: string;
    highlight: string;
    subhead: string;
    closing: string;
  };
  faq: {
    headline: string;
    items: { q: string; a: string }[];
  };
  ofertaFinal: {
    lines: string[];
    closing: { line1: string; line2: string };
    cta: string;
  };
};

export const websitesCopy: WebsitesCopy = {
  hero: {
    headline: {
      lines: ["Nós criamos a primeira versão do", "seu site antes de você pagar."],
      highlight: "antes de você pagar",
    },
    subhead:
      "A Fyze assume o risco: desenhamos a estrutura completa do seu site focada em conversão. Se fizer sentido pra você, avançamos. Se não, você não paga nada.",
    bullets: [
      "Sem pagamento antecipado",
      "Sem site bonito e vazio",
      "Foco total em gerar leads",
    ],
    cta: "Quero ver a primeira versão do meu site",
  },

  beliefBreaker: {
    headline: "A maioria dos sites não serve pra nada.",
    paragraphs: [
      "São bonitos, modernos e completamente inúteis pra gerar clientes.",
      "Você paga caro e continua sem retorno.",
    ],
    closingLine: "A Fyze faz diferente.",
  },

  reposicionamento: {
    headline: "Você não precisa de um site novo.",
    subhead: "Você precisa de um sistema que:",
    pillars: [
      { title: "Capture atenção", body: "Posicionamento claro e mensagem afiada já no primeiro segundo." },
      { title: "Construa confiança", body: "Estrutura que mostra autoridade antes de pedir qualquer ação." },
      { title: "Conduza à decisão", body: "Caminho desenhado pra transformar visitante em cliente." },
    ],
    closingLine: "Isso não começa no design. Começa na estratégia.",
  },

  mecanismo: {
    eyebrow: "Como funciona",
    headline: "A gente prova antes de cobrar.",
    subhead:
      "Enquanto outras agências pedem pagamento pra começar, a gente começa pra provar.",
    steps: [
      {
        number: "01",
        title: "Diagnóstico",
        body: "Identificamos onde o seu negócio perde clientes hoje e o que está bloqueando o crescimento no digital.",
      },
      {
        number: "02",
        title: "Estrutura estratégica",
        body: "Montamos um site pensado pra conversão — não pra parecer bonito, mas pra gerar resultado.",
      },
      {
        number: "03",
        title: "Primeira versão entregue",
        body: "Você analisa antes de qualquer pagamento. Vê a estrutura, entende a lógica, enxerga o potencial.",
      },
      {
        number: "04",
        title: "Decisão sem risco",
        body: "Gostou, avançamos juntos. Não gostou, você não paga nada. Sem letra miúda.",
      },
    ],
  },

  casesIntro: {
    headline: "Não é sobre o que a gente fala.",
    highlight: "É sobre o que acontece depois.",
    subhead:
      "Resultados reais de empresas que tinham o mesmo problema: sites que não geravam contato, dependência de indicação, visitantes que não tomavam ação.",
    closing:
      "O padrão é claro: não é o design que muda o jogo. É a estrutura que conduz a decisão.",
  },

  faq: {
    headline: "Antes que pergunte.",
    items: [
      {
        q: "Isso é realmente sem risco?",
        a: "Sim. Você só avança se enxergar valor. Caso contrário, não paga nada. Sem cláusula escondida, sem fidelização forçada.",
      },
      {
        q: "Vocês entregam o site completo de graça?",
        a: "Não. Entregamos a primeira versão estratégica — o suficiente pra você entender o potencial e tomar uma decisão informada antes de qualquer pagamento.",
      },
      {
        q: "Serve pra qualquer empresa?",
        a: "Não. Só serve pra quem quer transformar o site num canal real de aquisição de clientes. Se você só quer um site bonito pra estar na internet, não somos a opção certa.",
      },
    ],
  },

  ofertaFinal: {
    lines: [
      "Seu site atual já está te fazendo perder dinheiro.",
      "Cada visitante que entra e não converte é uma oportunidade desperdiçada.",
      "Agora você pode mudar isso sem assumir risco nenhum.",
    ],
    closing: {
      line1: "A Fyze faz primeiro.",
      line2: "Você decide depois.",
    },
    cta: "Quero ver meu site funcionando",
  },
};

export const websitesCopyEn: WebsitesCopy = {
  hero: {
    headline: {
      lines: ["We build the first version of", "your site before you pay."],
      highlight: "before you pay",
    },
    subhead:
      "Fyze takes the risk: we design the complete structure of your site, built for conversion. If it makes sense for you, we move forward. If not, you pay nothing.",
    bullets: [
      "No upfront payment",
      "No pretty, empty site",
      "Fully focused on generating leads",
    ],
    cta: "Show me the first version of my site",
  },

  beliefBreaker: {
    headline: "Most websites are useless.",
    paragraphs: [
      "They're beautiful, modern and completely useless at generating clients.",
      "You pay a fortune and still get nothing back.",
    ],
    closingLine: "Fyze does it differently.",
  },

  reposicionamento: {
    headline: "You don't need a new website.",
    subhead: "You need a system that:",
    pillars: [
      { title: "Captures attention", body: "Clear positioning and a sharp message from the very first second." },
      { title: "Builds trust", body: "A structure that proves authority before asking for any action." },
      { title: "Drives the decision", body: "A path designed to turn a visitor into a client." },
    ],
    closingLine: "It doesn't start with design. It starts with strategy.",
  },

  mecanismo: {
    eyebrow: "How it works",
    headline: "We prove it before we charge you.",
    subhead:
      "While other agencies ask for payment to get started, we get started to prove ourselves.",
    steps: [
      {
        number: "01",
        title: "Diagnosis",
        body: "We pinpoint where your business loses clients today and what's blocking your growth online.",
      },
      {
        number: "02",
        title: "Strategic structure",
        body: "We build a site designed to convert — not to look pretty, but to deliver results.",
      },
      {
        number: "03",
        title: "First version delivered",
        body: "You review it before any payment. You see the structure, understand the logic, see the potential.",
      },
      {
        number: "04",
        title: "Risk-free decision",
        body: "If you like it, we move forward together. If you don't, you pay nothing. No fine print.",
      },
    ],
  },

  casesIntro: {
    headline: "It's not about what we say.",
    highlight: "It's about what happens next.",
    subhead:
      "Real results from companies that had the same problem: sites that generated no contact, reliance on referrals, visitors who never took action.",
    closing:
      "The pattern is clear: design isn't what changes the game. It's the structure that drives the decision.",
  },

  faq: {
    headline: "Before you ask.",
    items: [
      {
        q: "Is this really risk-free?",
        a: "Yes. You only move forward if you see the value. Otherwise, you pay nothing. No hidden clauses, no forced lock-in.",
      },
      {
        q: "Do you deliver the full site for free?",
        a: "No. We deliver the first strategic version — enough for you to understand the potential and make an informed decision before any payment.",
      },
      {
        q: "Is it right for every company?",
        a: "No. It's only for those who want to turn their site into a real client-acquisition channel. If you just want a pretty site to be online, we're not the right fit.",
      },
    ],
  },

  ofertaFinal: {
    lines: [
      "Your current site is already costing you money.",
      "Every visitor who lands and doesn't convert is a wasted opportunity.",
      "Now you can change that without taking on any risk.",
    ],
    closing: {
      line1: "Fyze goes first.",
      line2: "You decide after.",
    },
    cta: "Show me my site working",
  },
};

export function getWebsitesCopy(locale: Locale): WebsitesCopy {
  return locale === "en" ? websitesCopyEn : websitesCopy;
}
