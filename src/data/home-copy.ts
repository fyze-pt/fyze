import type { Variant } from "@/lib/variant";
import type { Locale } from "@/lib/locale";

export type MethodStep = {
  number: string;
  title: string;
  lead: string;
  items: string[];
  conclusion: string;
};

export type HomeCopy = {
  hero: {
    headline: { lines: string[]; highlight: string };
    subhead: string;
    bullets?: string[];
    transition?: string;
    cta: string;
    proof?: string;
  };
  beliefBreaker: {
    headline: string;
    paragraphs: string[];
    closingLine: string;
  };
  realProblem: {
    headline: string;
    intro: string;
    bullets: string[];
    closingLine: string;
  };
  method: {
    headline: string;
    subhead: string;
    steps: MethodStep[];
  };
  methodClose: {
    lines: string[];
    punch: string;
  };
  services: {
    headline: { line1: string; line2: string };
    subhead: string;
  };
  riskFree: {
    eyebrow: string;
    headline: { line1: string; highlight: string };
    body: string;
    cta: string;
  };
  authority: {
    headline: { line1: string; line2: string };
    bullets: string[];
    proofText?: string;
  };
  finalCta: {
    headline: string;
    body?: string;
    cta: string;
  };
};

const COPY: Record<Variant, HomeCopy> = {
  // ────────────────────────────────────────────────────────────
  // VARIANTE A — Reconstrução da Narrativa (mais agressiva)
  // ────────────────────────────────────────────────────────────
  a: {
    hero: {
      headline: {
        lines: [
          "Estar no digital não está a trazer clientes?",
          "Então não é presença. É estrutura.",
        ],
        highlight: "estrutura",
      },
      subhead:
        "Identificamos onde o seu negócio está a perder oportunidades e corrigimos isso com um sistema que gera clientes.",
      cta: "Analisar o meu negócio",
      proof: "+4 anos a ajudar negócios em Lisboa e Algarve",
    },
    beliefBreaker: {
      headline: "O problema não é falta de tráfego.",
      paragraphs: [
        "A maioria dos negócios acha que precisa de mais alcance, mais seguidores, mais visitas.",
        "Mas você pode ter tudo isso e continuar sem clientes.",
        "Porque o problema real é outro: comunicação desalinhada, estrutura fraca e falta de um sistema claro.",
      ],
      closingLine: "Sem isso, você só está jogando dinheiro no digital.",
    },
    realProblem: {
      headline: "Se o seu negócio não cresce no digital…",
      intro: "Você está preso em um destes cenários:",
      bullets: [
        "Depende de indicação para faturar",
        "Atrai curiosos, mas não clientes",
        "Investe e não vê retorno claro",
        "Não sabe o que está travando o crescimento",
      ],
      closingLine:
        "E isso não se resolve com mais posts ou mais anúncios. Resolve-se com sistema.",
    },
    method: {
      headline: "O Método Fyze",
      subhead:
        "Não escalamos negócios com posts ou anúncios soltos. Construímos um sistema completo de aquisição.",
      steps: [
        {
          number: "01",
          title: "Clareza",
          lead: "Antes de crescer, você precisa parar de perder dinheiro.",
          items: [
            "Identificamos gargalos ocultos",
            "Corrigimos a comunicação",
            "Alinhamos posicionamento e mensagem",
            "Criamos uma narrativa que vende",
          ],
          conclusion:
            "Aqui você deixa de ser “mais um” e passa a ser percebido como referência.",
        },
        {
          number: "02",
          title: "Estrutura",
          lead: "Sem estrutura, tráfego é dinheiro queimado.",
          items: [
            "Website pronto para converter",
            "Redes alinhadas com a sua marca",
            "Conteúdo estratégico (não aleatório)",
            "Produção profissional orientada à venda",
          ],
          conclusion:
            "Aqui o seu negócio deixa de parecer amador e começa a converter atenção em interesse.",
        },
        {
          number: "03",
          title: "Escala",
          lead: "Agora sim, faz sentido acelerar.",
          items: [
            "Tráfego pago direcionado",
            "Público certo, mensagem certa",
            "Geração previsível de leads",
            "Crescimento com consistência",
          ],
          conclusion:
            "Aqui você sai do “depender de sorte” e entra no controle do crescimento.",
        },
      ],
    },
    methodClose: {
      lines: [
        "Sem clareza, você atrai as pessoas erradas.",
        "Sem estrutura, você perde quem chega.",
        "Sem tráfego, você não cresce.",
      ],
      punch: "A Fyze resolve os três.",
    },
    services: {
      headline: { line1: "Como fazemos isso", line2: "acontecer na prática" },
      subhead:
        "Estratégia, estrutura e tráfego: três frentes que funcionam juntas para tirar o seu negócio do aleatório.",
    },
    riskFree: {
      eyebrow: "Diferencial Fyze",
      headline: {
        line1: "Nós não pedimos confiança.",
        highlight: "Nós mostramos primeiro.",
      },
      body: "Criamos a primeira versão do seu site antes de você pagar. Você analisa, entende e decide. Sem risco. Sem pressão. Sem promessas vazias.",
      cta: "Ver a primeira versão do meu site",
    },
    authority: {
      headline: { line1: "Por que a", line2: "Fyze funciona" },
      bullets: [
        "Estratégia antes de execução",
        "Decisões baseadas em dados",
        "Foco total em resultado",
        "Sistema validado na prática",
      ],
    },
    finalCta: {
      headline: "Se o seu negócio não está a crescer no digital, algo está travando.",
      body: "A diferença é que agora você pode identificar e corrigir isso.",
      cta: "Falar com a Fyze",
    },
  },

  // ────────────────────────────────────────────────────────────
  // VARIANTE B — Alta Conversão (objetivo direto)
  // ────────────────────────────────────────────────────────────
  b: {
    hero: {
      headline: {
        lines: ["Crescer no digital", "não é estar presente"],
        highlight: "crescer",
      },
      subhead:
        "É gerar clientes de forma previsível. A Fyze transforma atenção em vendas com estratégia, estrutura e tráfego no lugar certo.",
      cta: "Quero ver meu site",
    },
    beliefBreaker: {
      headline: "A maioria dos negócios acha que o problema é tráfego.",
      paragraphs: [
        "Não é.",
        "Você pode ter mais seguidores, mais visitas, mais alcance, e continuar sem clientes.",
        "Porque o problema real é outro: comunicação desalinhada, estrutura fraca, falta de um sistema claro.",
      ],
      closingLine: "Sem isso, você só está jogando dinheiro no digital.",
    },
    realProblem: {
      headline: "Se o seu negócio não cresce de forma consistente…",
      intro: "Você provavelmente está preso em um destes cenários:",
      bullets: [
        "Depende totalmente de indicação",
        "Atrai curiosos, mas não clientes",
        "Investe em tráfego e não vê retorno",
        "Não sabe o que está travando o crescimento",
      ],
      closingLine:
        "E isso não se resolve com “mais posts” ou “mais anúncios”. Resolve-se com um sistema.",
    },
    method: {
      headline: "Método Fyze: organize o crescimento em 3 etapas.",
      subhead:
        "O problema não é esforço. É falta de sistema. A Fyze organiza o crescimento do seu negócio em 3 etapas simples, na ordem certa.",
      steps: [
        {
          number: "01",
          title: "Clareza",
          lead: "Antes de crescer, você precisa parar de perder dinheiro.",
          items: [
            "Raio-X completo do seu negócio",
            "Identificação de gargalos",
            "Alinhamento da comunicação",
            "Posicionamento como autoridade",
          ],
          conclusion:
            "Aqui você deixa de ser “mais um” e passa a ser visto como referência.",
        },
        {
          number: "02",
          title: "Estrutura",
          lead: "Sem estrutura, tráfego não converte.",
          items: [
            "Website preparado para gerar leads",
            "Redes sociais alinhadas com a sua marca",
            "Conteúdo estratégico (não aleatório)",
            "Produção profissional orientada para conversão",
          ],
          conclusion: "Aqui atenção vira interesse.",
        },
        {
          number: "03",
          title: "Escala",
          lead: "Agora sim, faz sentido acelerar.",
          items: [
            "Gestão de tráfego com estratégia",
            "Público certo + mensagem certa",
            "Geração previsível de leads",
            "Crescimento consistente",
          ],
          conclusion: "Aqui você ganha controle sobre o crescimento.",
        },
      ],
    },
    methodClose: {
      lines: [
        "Sem clareza, você atrai as pessoas erradas.",
        "Sem estrutura, você perde quem chega.",
        "Sem tráfego, você não cresce.",
      ],
      punch: "A Fyze resolve os três.",
    },
    services: {
      headline: { line1: "Como fazemos isso", line2: "acontecer na prática" },
      subhead:
        "Soluções completas de marketing digital para escalar o seu negócio com previsibilidade.",
    },
    riskFree: {
      eyebrow: "Oferta diferencial",
      headline: {
        line1: "Nós não pedimos confiança.",
        highlight: "Nós mostramos primeiro.",
      },
      body: "Criamos a primeira versão do seu site antes de você pagar qualquer coisa. Você analisa, entende e decide. Sem risco. Sem pressão. Sem promessas vazias.",
      cta: "Ver a primeira versão do meu site",
    },
    authority: {
      headline: { line1: "Por que a Fyze", line2: "funciona" },
      bullets: [
        "Estratégia antes de execução",
        "Decisões baseadas em dados",
        "Foco total em resultado",
        "Sistema validado em centenas de projetos",
      ],
    },
    finalCta: {
      headline: "Se o seu negócio não está a crescer no digital, algo está travando.",
      body: "A diferença é que agora você pode identificar e corrigir isso.",
      cta: "Falar com a Fyze",
    },
  },

  // ────────────────────────────────────────────────────────────
  // VARIANTE C — Versão Final com Autoridade (4 anos no mercado PT)
  // ────────────────────────────────────────────────────────────
  c: {
    hero: {
      headline: {
        lines: [
          "Você não precisa de mais marketing.",
          "Precisa de um sistema que gere clientes.",
        ],
        highlight: "sistema",
      },
      subhead:
        "A Fyze identifica onde o seu negócio está a perder oportunidades e constrói a estrutura certa para transformar atenção em clientes.",
      transition: "Chamamos isso de Método Fyze.",
      cta: "Analisar o meu negócio",
      proof:
        "Há mais de 4 anos a ajudar negócios em Lisboa e Algarve a crescer com consistência no digital.",
    },
    beliefBreaker: {
      headline: "A maioria dos negócios acha que precisa de mais tráfego.",
      paragraphs: [
        "Não precisa.",
        "Você pode ter mais seguidores, mais visitas, mais alcance, e continuar sem clientes.",
        "Porque o problema real é outro: comunicação desalinhada, estrutura fraca, falta de um sistema claro.",
      ],
      closingLine: "Sem isso, você só está jogando dinheiro fora.",
    },
    realProblem: {
      headline: "Se o seu negócio não cresce de forma consistente…",
      intro: "Provavelmente você está preso num ciclo:",
      bullets: [
        "Atrai pessoas erradas",
        "Não converte quem chega",
        "Não tem previsibilidade",
        "Tenta resolver com mais esforço, quando o que falta é direção",
      ],
      closingLine:
        "Não é falta de trabalho. É falta de sistema.",
    },
    method: {
      headline: "O Método Fyze",
      subhead:
        "Não escalamos negócios com posts ou anúncios soltos. Construímos um sistema completo de aquisição.",
      steps: [
        {
          number: "01",
          title: "Vazamentos",
          lead: "Onde o seu negócio está a perder clientes todos os dias, sem perceber.",
          items: [
            "Raio-X completo do seu digital",
            "Identificação dos pontos de fuga",
            "Ajuste da comunicação",
            "Posicionamento que faz o cliente escolher você",
          ],
          conclusion:
            "Aqui você para de perder dinheiro antes de tentar crescer.",
        },
        {
          number: "02",
          title: "Conversão",
          lead: "Como transformar atenção em cliente, e não só em seguidor.",
          items: [
            "Instagram que transmite autoridade",
            "Conteúdo que gera interesse real",
            "Presença que constrói confiança",
            "Estrutura que leva à ação",
          ],
          conclusion:
            "Aqui o seu digital deixa de ser vitrine e começa a vender.",
        },
        {
          number: "03",
          title: "Escala",
          lead: "Como transformar isso num fluxo previsível de clientes.",
          items: [
            "Tráfego com estratégia (não impulso)",
            "Público certo no momento certo",
            "Mensagem alinhada com a dor",
            "Consistência de resultados",
          ],
          conclusion: "Aqui você sai do aleatório e entra no controle.",
        },
      ],
    },
    methodClose: {
      lines: [
        "Sem corrigir vazamentos, você perde dinheiro.",
        "Sem conversão, você perde oportunidades.",
        "Sem escala, você não cresce.",
      ],
      punch: "A Fyze resolve os três.",
    },
    services: {
      headline: { line1: "Como isso acontece", line2: "no seu negócio" },
      subhead:
        "Estratégia + estrutura + tráfego operando como um único sistema, adaptado ao mercado português.",
    },
    riskFree: {
      eyebrow: "Diferencial Fyze",
      headline: {
        line1: "Nós não pedimos confiança.",
        highlight: "Nós mostramos primeiro.",
      },
      body: "Criamos a primeira versão do seu site antes de você pagar. Você analisa, entende e decide. Sem risco. Sem pressão. Sem promessas vazias.",
      cta: "Ver a primeira versão do meu site",
    },
    authority: {
      headline: { line1: "Por que a Fyze funciona", line2: "no mercado português" },
      bullets: [
        "+4 anos a operar em Lisboa e Algarve",
        "Experiência real com negócios locais",
        "Identificação rápida de onde o dinheiro está a ser perdido",
        "Estratégia antes de execução",
      ],
      proofText:
        "Não aplicamos fórmulas genéricas. Trabalhamos com o que realmente funciona aqui.",
    },
    finalCta: {
      headline: "Não crescer no digital\né perder clientes todos os dias.",
      cta: "Analisar o meu negócio",
    },
  },
};

// English version (single, locale-based — A/B variants are PT-only experiments).
const HOME_COPY_EN: HomeCopy = {
  hero: {
    headline: {
      lines: [
        "You don't need more marketing.",
        "You need a system that generates clients.",
      ],
      highlight: "system",
    },
    subhead:
      "Fyze pinpoints where your business is missing opportunities and builds the right structure to turn attention into clients.",
    transition: "We call it the Fyze Method.",
    cta: "Analyze my business",
    proof:
      "Over 4 years helping businesses in Lisbon and the Algarve grow consistently online.",
  },
  beliefBreaker: {
    headline: "Most businesses think they need more traffic.",
    paragraphs: [
      "They don't.",
      "You can have more followers, more visits, more reach — and still have no clients.",
      "Because the real problem is something else: misaligned communication, a weak structure, the lack of a clear system.",
    ],
    closingLine: "Without that, you're just throwing money away.",
  },
  realProblem: {
    headline: "If your business isn't growing consistently…",
    intro: "You're probably stuck in a cycle:",
    bullets: [
      "Attracting the wrong people",
      "Not converting those who arrive",
      "No predictability",
      "Trying to fix it with more effort, when what's missing is direction",
    ],
    closingLine: "It's not a lack of work. It's a lack of system.",
  },
  method: {
    headline: "The Fyze Method",
    subhead:
      "We don't scale businesses with random posts or ads. We build a complete acquisition system.",
    steps: [
      {
        number: "01",
        title: "Leaks",
        lead: "Where your business is losing clients every day without realizing it.",
        items: [
          "A full X-ray of your digital presence",
          "Identifying the leak points",
          "Fixing the communication",
          "Positioning that makes the client choose you",
        ],
        conclusion:
          "Here you stop losing money before you even try to grow.",
      },
      {
        number: "02",
        title: "Conversion",
        lead: "How to turn attention into a client, not just a follower.",
        items: [
          "An Instagram that conveys authority",
          "Content that sparks real interest",
          "A presence that builds trust",
          "A structure that drives action",
        ],
        conclusion:
          "Here your digital presence stops being a showcase and starts selling.",
      },
      {
        number: "03",
        title: "Scale",
        lead: "How to turn that into a predictable flow of clients.",
        items: [
          "Traffic with strategy (not impulse)",
          "The right audience at the right moment",
          "A message aligned with the pain point",
          "Consistent results",
        ],
        conclusion: "Here you leave randomness behind and take control.",
      },
    ],
  },
  methodClose: {
    lines: [
      "Without fixing leaks, you lose money.",
      "Without conversion, you lose opportunities.",
      "Without scale, you don't grow.",
    ],
    punch: "Fyze solves all three.",
  },
  services: {
    headline: { line1: "How this happens", line2: "in your business" },
    subhead:
      "Strategy + structure + traffic operating as a single system, adapted to the market.",
  },
  riskFree: {
    eyebrow: "The Fyze Difference",
    headline: {
      line1: "We don't ask for trust.",
      highlight: "We show you first.",
    },
    body: "We build the first version of your site before you pay. You review it, understand it and decide. No risk. No pressure. No empty promises.",
    cta: "See the first version of my site",
  },
  authority: {
    headline: { line1: "Why Fyze works", line2: "" },
    bullets: [
      "4+ years operating in Lisbon and the Algarve",
      "Real experience with local businesses",
      "Quick to identify where money is being lost",
      "Strategy before execution",
    ],
    proofText:
      "We don't apply generic formulas. We work with what actually works.",
  },
  finalCta: {
    headline: "Not growing online\nmeans losing clients every day.",
    cta: "Analyze my business",
  },
};

export function getHomeCopy(variant: Variant, locale: Locale = "pt"): HomeCopy {
  return locale === "en" ? HOME_COPY_EN : COPY[variant];
}
