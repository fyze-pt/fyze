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
