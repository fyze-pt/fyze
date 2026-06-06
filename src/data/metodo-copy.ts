import type { Locale } from "@/lib/locale";

export type MetodoCopy = {
  hero: {
    headline: { lines: string[]; highlight: string };
    subhead: string;
    cta: string;
  };
  verdadeMercado: {
    headline: string;
    leadParagraphs: string[];
    bullets: string[];
    quote: string;
    closingLines: string[];
  };
  erroCustaCaro: {
    headline: string;
    sequence: string[];
    body: string[];
    quote: string;
  };
  metodoFyze: {
    eyebrow: string;
    headline: string[];
    intro: string[];
    pillars: {
      number: string;
      tag: string;
      title: string;
      kicker: string;
      lead: string;
      items: string[];
      conclusion: string;
    }[];
  };
  ordemImporta: {
    headline: string;
    bullets: string[];
    closingLines: string[];
  };
  fazCerto: {
    headline: string;
    bullets: string[];
    quote: string;
  };
  contraMercado: {
    headline: string;
    venders: string[];
    constroi: string;
    closingLine: string;
  };
  filtro: {
    headline: string;
    body: string[];
  };
  finalCta: {
    headline: string;
    subhead: string;
    cta: string;
  };
};

export const metodoCopy: MetodoCopy = {
  hero: {
    headline: {
      lines: [
        "O problema não é o seu marketing.",
        "É a falta de estrutura por trás dele.",
      ],
      highlight: "estrutura",
    },
    subhead:
      "Enquanto a maioria dos negócios tenta crescer com ações soltas, a Fyze constrói um sistema completo para gerar clientes com consistência.",
    cta: "Analisar o meu negócio",
  },

  verdadeMercado: {
    headline: "A verdade do mercado.",
    leadParagraphs: [
      "A maioria das empresas está a fazer marketing.",
      "Mas poucas estão a crescer de forma consistente.",
    ],
    bullets: [
      "Criam conteúdo sem direção",
      "Investem em anúncios sem base",
      "Mudam estratégia constantemente",
    ],
    quote: "O digital não funciona.",
    closingLines: [
      "O problema não é o digital.",
      "É a forma como está a ser usado.",
    ],
  },

  erroCustaCaro: {
    headline: "O erro que custa caro.",
    sequence: ["Mais tráfego", "Mais posts", "Mais investimento"],
    body: [
      "A maioria tenta escalar antes de estar pronta.",
      "Mas com uma base fraca, isso só aumenta o desperdício.",
    ],
    quote: "Crescimento sem estrutura não escala. Amplifica o problema.",
  },

  metodoFyze: {
    eyebrow: "Método Fyze",
    headline: [
      "Pare de perder.",
      "Comece a converter.",
      "Escale com controlo.",
    ],
    intro: [
      "Não é sobre fazer mais.",
      "É sobre fazer certo — na ordem certa.",
    ],
    pillars: [
      {
        number: "01",
        tag: "Vazamentos",
        title: "Pare de perder",
        kicker:
          "Onde o seu negócio está a perder clientes todos os dias — sem perceber.",
        lead: "Antes de crescer, é preciso parar de perder.",
        items: [
          "Analisamos o seu digital por completo",
          "Identificamos pontos de fuga",
          "Corrigimos a comunicação",
          "Ajustamos o posicionamento",
        ],
        conclusion: "Aqui você deixa de desperdiçar oportunidades.",
      },
      {
        number: "02",
        tag: "Conversão",
        title: "Comece a converter",
        kicker:
          "Como transformar atenção em cliente — e não só em seguidor.",
        lead: "Depois de corrigir, é hora de estruturar.",
        items: [
          "Construímos presença com autoridade",
          "Criamos conteúdo com intenção",
          "Alinhamos a experiência do cliente",
          "Estruturamos o caminho até a ação",
        ],
        conclusion: "Aqui o seu digital deixa de ser vitrine e começa a vender.",
      },
      {
        number: "03",
        tag: "Escala",
        title: "Escale com controlo",
        kicker: "Como transformar isso num fluxo previsível de clientes.",
        lead: "Agora sim, faz sentido acelerar.",
        items: [
          "Tráfego com estratégia",
          "Público certo",
          "Mensagem alinhada",
          "Crescimento com consistência",
        ],
        conclusion: "Aqui você ganha controlo.",
      },
    ],
  },

  ordemImporta: {
    headline: "Por que a ordem importa.",
    bullets: [
      "Atrai pessoas erradas",
      "Não converte",
      "Culpa o marketing",
    ],
    closingLines: [
      "E tenta resolver com mais esforço,",
      "quando o problema é estrutura.",
    ],
  },

  fazCerto: {
    headline: "O que acontece quando faz certo.",
    bullets: [
      "O cliente certo começa a chegar",
      "A comunicação faz sentido",
      "O digital passa a trabalhar a seu favor",
      "O crescimento deixa de ser aleatório",
    ],
    quote: "Você sai do improviso e entra no controlo.",
  },

  contraMercado: {
    headline: "Contra o mercado.",
    venders: ["posts", "campanhas", "gestão de redes"],
    constroi: "um sistema de aquisição de clientes",
    closingLine: "E isso muda tudo.",
  },

  filtro: {
    headline: "Este método não é para todos.",
    body: [
      "Não é para quem procura soluções rápidas ou quer testar mais marketing.",
      "É para quem quer crescimento estruturado, previsibilidade e controlo.",
    ],
  },

  finalCta: {
    headline: "Se o seu negócio não está a crescer como deveria, há algo a falhar.",
    subhead: "A diferença é que agora você sabe por onde começar.",
    cta: "Analisar o meu negócio",
  },
};

export const metodoCopyEn: MetodoCopy = {
  hero: {
    headline: {
      lines: [
        "The problem isn't your marketing.",
        "It's the lack of structure behind it.",
      ],
      highlight: "structure",
    },
    subhead:
      "While most businesses try to grow with scattered tactics, Fyze builds a complete system to win clients consistently.",
    cta: "Analyze my business",
  },

  verdadeMercado: {
    headline: "The truth about the market.",
    leadParagraphs: [
      "Most companies are doing marketing.",
      "But few are growing consistently.",
    ],
    bullets: [
      "They create content with no direction",
      "They invest in ads with no foundation",
      "They change strategy constantly",
    ],
    quote: "Digital doesn't work.",
    closingLines: [
      "The problem isn't digital.",
      "It's the way it's being used.",
    ],
  },

  erroCustaCaro: {
    headline: "The mistake that costs you dearly.",
    sequence: ["More traffic", "More posts", "More investment"],
    body: [
      "Most try to scale before they're ready.",
      "But on a weak foundation, that only multiplies the waste.",
    ],
    quote: "Growth without structure doesn't scale. It amplifies the problem.",
  },

  metodoFyze: {
    eyebrow: "The Fyze Method",
    headline: [
      "Stop losing.",
      "Start converting.",
      "Scale with control.",
    ],
    intro: [
      "It's not about doing more.",
      "It's about doing it right — in the right order.",
    ],
    pillars: [
      {
        number: "01",
        tag: "Leaks",
        title: "Stop losing",
        kicker:
          "Where your business is losing clients every single day — without realizing it.",
        lead: "Before you can grow, you have to stop losing.",
        items: [
          "We analyze your entire digital presence",
          "We pinpoint the leak points",
          "We fix the messaging",
          "We refine the positioning",
        ],
        conclusion: "This is where you stop wasting opportunities.",
      },
      {
        number: "02",
        tag: "Conversion",
        title: "Start converting",
        kicker:
          "How to turn attention into a client — not just another follower.",
        lead: "Once it's fixed, it's time to structure it.",
        items: [
          "We build presence with authority",
          "We create content with intent",
          "We align the client experience",
          "We map the path to action",
        ],
        conclusion: "This is where your digital stops being a showcase and starts selling.",
      },
      {
        number: "03",
        tag: "Scale",
        title: "Scale with control",
        kicker: "How to turn it into a predictable flow of clients.",
        lead: "Now it actually makes sense to accelerate.",
        items: [
          "Traffic with strategy",
          "The right audience",
          "An aligned message",
          "Growth with consistency",
        ],
        conclusion: "This is where you gain control.",
      },
    ],
  },

  ordemImporta: {
    headline: "Why the order matters.",
    bullets: [
      "Attracts the wrong people",
      "Doesn't convert",
      "Blames the marketing",
    ],
    closingLines: [
      "And tries to fix it with more effort,",
      "when the problem is structure.",
    ],
  },

  fazCerto: {
    headline: "What happens when you do it right.",
    bullets: [
      "The right client starts coming in",
      "The messaging makes sense",
      "Digital starts working in your favor",
      "Growth stops being random",
    ],
    quote: "You move out of improvising and into control.",
  },

  contraMercado: {
    headline: "Against the market.",
    venders: ["posts", "campaigns", "social media management"],
    constroi: "a client acquisition system",
    closingLine: "And that changes everything.",
  },

  filtro: {
    headline: "This method isn't for everyone.",
    body: [
      "It's not for those looking for quick fixes or wanting to test more marketing.",
      "It's for those who want structured growth, predictability, and control.",
    ],
  },

  finalCta: {
    headline: "If your business isn't growing the way it should, something is failing.",
    subhead: "The difference is that now you know where to start.",
    cta: "Analyze my business",
  },
};

export function getMetodoCopy(locale: Locale): MetodoCopy {
  return locale === "en" ? metodoCopyEn : metodoCopy;
}
