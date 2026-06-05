export type SobreCopy = {
  hero: {
    headline: { lines: string[]; highlight: string };
    subhead: string[];
  };
  realidade: {
    headline: string;
    bullets: string[];
    closingLines: string[];
  };
  comoPensamos: {
    headline: string;
    statements: string[];
    quote: string;
  };
  bastidores: {
    headline: string;
    subhead: string[];
    body: string[];
    quote: string;
  };
  experiencia: {
    headline: string;
    paragraphs: string[];
  };
  filtro: {
    headline: string;
    body: string[];
  };
  finalCta: {
    intro: string;
    cta: string;
  };
};

export const sobreCopy: SobreCopy = {
  hero: {
    headline: {
      lines: [
        "Não somos uma agência tradicional.",
        "E isso é intencional.",
      ],
      highlight: "intencional",
    },
    subhead: [
      "A Fyze nasceu para resolver um problema simples:",
      "negócios que investem no digital, mas não crescem.",
    ],
  },

  realidade: {
    headline: "A maioria das empresas está perdida no digital.",
    bullets: [
      "Publicam conteúdo sem estratégia",
      "Investem em anúncios sem retorno claro",
      "Não sabem o que está a travar o crescimento",
    ],
    closingLines: [
      "E com o tempo,",
      "começam a acreditar que marketing não funciona.",
    ],
  },

  comoPensamos: {
    headline: "Como pensamos.",
    statements: [
      "Nós não fazemos marketing por fazer.",
      "Construímos sistemas.",
      "Porque o problema raramente é esforço.",
      "É falta de estrutura.",
    ],
    quote: "Antes de escalar, é preciso parar de perder.",
  },

  bastidores: {
    headline: "O que acontece antes dos resultados aparecerem.",
    subhead: [
      "Isto não é teoria.",
      "É o que acontece todos os dias com os nossos clientes.",
    ],
    body: [
      "Cada projeto começa com análise.",
      "Passa por estrutura.",
      "E só depois escala.",
    ],
    quote: "Nada aqui é aleatório.",
  },

  experiencia: {
    headline: "Experiência real.",
    paragraphs: [
      "Trabalhamos há mais de 4 anos no mercado português.",
      "Lisboa. Algarve. Negócios locais.",
      "Já vimos os mesmos erros repetirem-se dezenas de vezes.",
      "E sabemos exatamente onde procurar.",
    ],
  },

  filtro: {
    headline: "Não somos para todos.",
    body: [
      "Trabalhamos com negócios que querem crescer com estrutura.",
      "Se você procura apenas mais marketing, provavelmente não somos a melhor escolha.",
    ],
  },

  finalCta: {
    intro: "Se quer perceber o que está a travar o seu negócio…",
    cta: "Analisar o meu negócio",
  },
};
