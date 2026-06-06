import type { Locale } from "@/lib/locale";

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

export const sobreCopyEn: SobreCopy = {
  hero: {
    headline: {
      lines: [
        "We're not a traditional agency.",
        "And that's intentional.",
      ],
      highlight: "intentional",
    },
    subhead: [
      "Fyze was born to solve a simple problem:",
      "businesses that invest in digital but don't grow.",
    ],
  },

  realidade: {
    headline: "Most companies are lost when it comes to digital.",
    bullets: [
      "They publish content with no strategy",
      "They invest in ads with no clear return",
      "They don't know what's holding their growth back",
    ],
    closingLines: [
      "And over time,",
      "they start to believe that marketing doesn't work.",
    ],
  },

  comoPensamos: {
    headline: "How we think.",
    statements: [
      "We don't do marketing for the sake of it.",
      "We build systems.",
      "Because the problem is rarely effort.",
      "It's a lack of structure.",
    ],
    quote: "Before you scale, you have to stop losing.",
  },

  bastidores: {
    headline: "What happens before the results show up.",
    subhead: [
      "This isn't theory.",
      "It's what happens every day with our clients.",
    ],
    body: [
      "Every project starts with analysis.",
      "It moves through structure.",
      "And only then does it scale.",
    ],
    quote: "Nothing here is random.",
  },

  experiencia: {
    headline: "Real experience.",
    paragraphs: [
      "We've been working in the Portuguese market for over 4 years.",
      "Lisbon. The Algarve. Local businesses.",
      "We've seen the same mistakes repeat themselves dozens of times.",
      "And we know exactly where to look.",
    ],
  },

  filtro: {
    headline: "We're not for everyone.",
    body: [
      "We work with businesses that want to grow with structure.",
      "If you're just looking for more marketing, we're probably not the best fit.",
    ],
  },

  finalCta: {
    intro: "If you want to understand what's holding your business back…",
    cta: "Analyze my business",
  },
};

export function getSobreCopy(locale: Locale): SobreCopy {
  return locale === "en" ? sobreCopyEn : sobreCopy;
}
