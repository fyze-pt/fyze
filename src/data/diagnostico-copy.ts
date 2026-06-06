import type { Locale } from "@/lib/locale";

export type DiagnosticoCopy = {
  hero: {
    headline: { lines: string[]; highlight: string };
    subhead: string;
    cta: string;
    proof: string;
  };
  realidade: {
    headline: string;
    intro: string;
    bullets: string[];
    closingLine: string;
  };
  paraQuem: {
    headline: string;
    para: { title: string; items: string[] };
    naoPara: { title: string; items: string[] };
    closingQuote: string;
  };
  oQueAcontece: {
    headline: string;
    leadParagraphs: string[];
    bullets: string[];
    closingQuote: string;
  };
  comoFunciona: {
    eyebrow: string;
    headline: string;
    steps: { number: string; title: string; body: string }[];
  };
  experiencia: {
    headline: string;
    paragraphs: string[];
    closingQuote: string;
  };
  diferencial: {
    headline: string;
    body: string[];
  };
  filtroFinal: {
    headline: string;
    body: string[];
  };
  finalCta: {
    headline: string;
    subhead: string;
    formCta: string;
    options: string[];
  };
};

export const diagnosticoCopy: DiagnosticoCopy = {
  hero: {
    headline: {
      lines: [
        "Você não precisa de mais marketing.",
        "Precisa descobrir onde está a perder clientes — todos os dias.",
      ],
      highlight: "perder clientes",
    },
    subhead:
      "Analisamos o seu negócio, identificamos os gargalos reais e mostramos o que está a travar o seu crescimento no digital.",
    cta: "Analisar o meu negócio",
    proof:
      "Há mais de 4 anos a ajudar negócios em Lisboa e Algarve a crescer com consistência no digital.",
  },

  realidade: {
    headline: "A realidade que ninguém te diz.",
    intro:
      "A maioria dos negócios acha que o problema é falta de clientes. Não é.",
    bullets: [
      "Comunicação desalinhada",
      "Estrutura que não converte",
      "Falta de direção clara",
    ],
    closingLine:
      "E enquanto isso não for corrigido, você continua a perder oportunidades todos os dias.",
  },

  paraQuem: {
    headline: "Para quem é (e para quem não é).",
    para: {
      title: "Este diagnóstico é para quem:",
      items: [
        "Quer parar de depender de indicação",
        "Quer previsibilidade de clientes",
        "Sabe que o digital pode mais",
      ],
    },
    naoPara: {
      title: "Não é para quem:",
      items: [
        "Procura posts ou soluções rápidas",
        "Quer atalhos sem estrutura",
        "Não está disposto a ajustar o que está errado",
      ],
    },
    closingQuote:
      "Se você não está disposto a rever o seu negócio com honestidade, este diagnóstico não vai fazer sentido.",
  },

  oQueAcontece: {
    headline: "O que vai acontecer.",
    leadParagraphs: [
      "Não é uma call genérica.",
      "Não é uma conversa comercial.",
    ],
    bullets: [
      "Analisar o seu digital atual",
      "Identificar onde você está a perder clientes",
      "Mapear os principais erros",
      "Mostrar o caminho mais direto para crescer",
    ],
    closingQuote:
      "E na maioria dos casos, os problemas são mais simples — e mais críticos — do que parecem.",
  },

  comoFunciona: {
    eyebrow: "Como funciona",
    headline: "Três etapas. Direção clara no fim.",
    steps: [
      {
        number: "01",
        title: "Análise do negócio",
        body: "Entendemos o que você faz, como comunica e como vende.",
      },
      {
        number: "02",
        title: "Identificação de gargalos",
        body: "Descobrimos onde o seu sistema está a falhar.",
      },
      {
        number: "03",
        title: "Direção clara",
        body: "Mostramos exatamente o que precisa ser corrigido.",
      },
    ],
  },

  experiencia: {
    headline: "Sabemos onde procurar.",
    paragraphs: [
      "Trabalhamos há mais de 4 anos com negócios no mercado português.",
      "Já vimos os mesmos erros repetirem-se dezenas de vezes.",
    ],
    closingQuote: "E muitas vezes, o que você acha que é o problema, não é.",
  },

  diferencial: {
    headline: "Você não vai sair com mais dúvidas.",
    body: [
      "Vai sair com clareza.",
      "Mesmo que não avance connosco.",
    ],
  },

  filtroFinal: {
    headline: "Não trabalhamos com todos — e isso é intencional.",
    body: [
      "Este diagnóstico é para negócios que querem crescer com estrutura.",
      "Se você procura apenas mais marketing, este não é o caminho.",
    ],
  },

  finalCta: {
    headline: "Vamos identificar o que está a travar o seu negócio.",
    subhead:
      "Quanto mais você adiar, mais oportunidades continua a perder.",
    formCta: "Iniciar diagnóstico",
    options: [
      "Não tenho leads",
      "Tenho leads mas não converto",
      "Quero escalar",
      "Não sei o que está errado",
    ],
  },
};

export const diagnosticoCopyEn: DiagnosticoCopy = {
  hero: {
    headline: {
      lines: [
        "You don't need more marketing.",
        "You need to find out where you're losing clients — every single day.",
      ],
      highlight: "losing clients",
    },
    subhead:
      "We analyze your business, pinpoint the real bottlenecks, and show you what's holding back your growth online.",
    cta: "Analyze my business",
    proof:
      "For over 4 years we've helped businesses in Lisbon and the Algarve grow consistently online.",
  },

  realidade: {
    headline: "The truth no one tells you.",
    intro:
      "Most businesses think the problem is a lack of clients. It isn't.",
    bullets: [
      "Misaligned messaging",
      "A structure that doesn't convert",
      "No clear direction",
    ],
    closingLine:
      "And until that gets fixed, you keep losing opportunities every single day.",
  },

  paraQuem: {
    headline: "Who it's for (and who it's not for).",
    para: {
      title: "This diagnosis is for those who:",
      items: [
        "Want to stop depending on referrals",
        "Want a predictable flow of clients",
        "Know their online presence can do more",
      ],
    },
    naoPara: {
      title: "It's not for those who:",
      items: [
        "Are looking for posts or quick fixes",
        "Want shortcuts without structure",
        "Aren't willing to fix what's broken",
      ],
    },
    closingQuote:
      "If you're not willing to look at your business honestly, this diagnosis won't make sense.",
  },

  oQueAcontece: {
    headline: "What's going to happen.",
    leadParagraphs: [
      "It's not a generic call.",
      "It's not a sales pitch.",
    ],
    bullets: [
      "Review your current online presence",
      "Identify where you're losing clients",
      "Map out the main mistakes",
      "Show you the most direct path to grow",
    ],
    closingQuote:
      "And in most cases, the problems are simpler — and more critical — than they seem.",
  },

  comoFunciona: {
    eyebrow: "How it works",
    headline: "Three steps. Clear direction at the end.",
    steps: [
      {
        number: "01",
        title: "Business analysis",
        body: "We understand what you do, how you communicate, and how you sell.",
      },
      {
        number: "02",
        title: "Bottleneck identification",
        body: "We find out where your system is breaking down.",
      },
      {
        number: "03",
        title: "Clear direction",
        body: "We show you exactly what needs to be fixed.",
      },
    ],
  },

  experiencia: {
    headline: "We know where to look.",
    paragraphs: [
      "We've worked with businesses for over 4 years.",
      "We've seen the same mistakes repeat themselves dozens of times.",
    ],
    closingQuote: "And often, what you think is the problem isn't.",
  },

  diferencial: {
    headline: "You won't leave with more questions.",
    body: [
      "You'll leave with clarity.",
      "Even if you don't move forward with us.",
    ],
  },

  filtroFinal: {
    headline: "We don't work with everyone — and that's by design.",
    body: [
      "This diagnosis is for businesses that want to grow with structure.",
      "If you're just looking for more marketing, this isn't the path.",
    ],
  },

  finalCta: {
    headline: "Let's find out what's holding your business back.",
    subhead:
      "The longer you put it off, the more opportunities you keep losing.",
    formCta: "Start diagnosis",
    options: [
      "I don't have leads",
      "I have leads but don't convert",
      "I want to scale",
      "I don't know what's wrong",
    ],
  },
};

export function getDiagnosticoCopy(locale: Locale): DiagnosticoCopy {
  return locale === "en" ? diagnosticoCopyEn : diagnosticoCopy;
}
