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
