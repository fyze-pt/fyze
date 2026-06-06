import type { Locale } from "@/lib/locale";

/**
 * UI "chrome" strings that live outside the page-copy files
 * (nav, footer, modals, forms, FAQ, metadata...). Typed once so the
 * `pt` and `en` dictionaries are forced to stay in sync.
 */
export type UICopy = {
  nav: {
    metodo: string;
    cases: string;
    sobre: string;
    ctaAnalisar: string;
    openMenu: string;
    closeMenu: string;
    falarEspecialista: string;
    location: string;
    privacy: string;
  };
  footer: {
    description: string;
    linksRapidos: string;
    metodo: string;
    sobreNos: string;
    ctaAnalisar: string;
    contacto: string;
    rights: string;
    privacy: string;
  };
  cookieConsent: {
    message: string;
    saberMais: string;
    apenasEssenciais: string;
    aceitarTudo: string;
  };
  contactModal: {
    titleLead: string;
    strikeWord: string;
    titleHighlight: string;
    intro: string;
    preferirFalar: string;
    telefone: string;
    email: string;
    localizacao: string;
    lisboaAlgarve: string;
    nome: string;
    nomePh: string;
    emailLabel: string;
    emailPh: string;
    telefoneWhats: string;
    telefonePh: string;
    ondeTravado: string;
    gargaloOptions: string[];
    mensagem: string;
    mensagemPh: string;
    enviada: string;
    erro: string;
    ctaIdle: string;
    close: string;
  };
  contact: {
    titleLead: string;
    titleHighlight: string;
    subtitle: string;
    ligueNos: string;
    email: string;
    localizacao: string;
    lisboaAlgarve: string;
    nome: string;
    nomePh: string;
    emailLabel: string;
    emailPh: string;
    servicoInteresse: string;
    serviceOptions: string[];
    mensagem: string;
    mensagemPh: string;
    enviada: string;
    erro: string;
    ctaIdle: string;
  };
  siteForm: {
    title: string;
    titleHighlight: string;
    stepLabel: string; // contains "{n}"
    close: string;
    step1Title: string;
    fields: {
      nome: { label: string; ph: string };
      email: { label: string; ph: string };
      whatsapp: { label: string; ph: string };
      tipoNegocio: { label: string; ph: string };
    };
    step2Title: string;
    objetivo: { label: string; options: string[] };
    presencaGoogle: { label: string; options: string[] };
    clientesNovos: { label: string; options: string[] };
    prazo: { label: string; options: string[] };
    step3Title: string;
    sitesRef: { label: string; ph: string };
    logoUpload: { label: string; dropText: string; fileTypes: string };
    voltar: string;
    enviado: string;
    erro: string;
    enviarPedido: string;
    seguinte: string;
  };
  diagnosticoForm: {
    recebemos: string;
    recebemosSub: string;
    nome: string;
    nomePh: string;
    emailLabel: string;
    emailPh: string;
    negocio: string;
    negocioPh: string;
    maiorDificuldade: string;
    mensagem: string;
    mensagemPh: string;
    erro: string;
  };
  whatsapp: {
    bubble: string;
    closeAria: string;
    fabAria: string;
    message: string;
  };
  faq: {
    heading1: string;
    heading2: string;
    items: { q: string; paragraphs: string[] }[];
  };
  showcase: {
    hint: string;
    prevAria: string;
    nextAria: string;
  };
  caseStudy: {
    backToCases: string;
    goToWebsite: string;
    playVideo: string;
    challenge: string;
    approach: string;
    client: string;
    year: string;
    sector: string;
    scope: string;
    whatWeDid: string;
    results: string;
  };
  websiteCase: {
    backToWebsites: string;
    visitSite: string;
    challenge: string;
    solution: string;
    gallery: string;
    highlights: string;
    finalTitle: string;
    finalSubtitle: string;
    finalCta: string;
    seeCase: string;
  };
  notFound: {
    title: string;
    back: string;
  };
  meta: {
    layoutTitle: string;
    layoutDescription: string;
    diagnostico: { title: string; description: string; ogTitle: string; ogDescription: string };
    metodo: { title: string; description: string; ogTitle: string; ogDescription: string };
    sobre: { title: string; description: string; ogTitle: string; ogDescription: string };
    websites: { title: string; description: string; ogTitle: string; ogDescription: string };
    privacidade: { title: string; description: string };
    caseNotFound: string;
    siteNotFound: string;
    casesSuffix: string; // "Cases Fyze"
    siteSuffix: string; // "Site | Fyze"
    siteOgSuffix: string; // "Site"
  };
};

const pt: UICopy = {
  nav: {
    metodo: "Método",
    cases: "Cases",
    sobre: "Sobre",
    ctaAnalisar: "Analisar o meu negócio",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    falarEspecialista: "Falar com especialista",
    location: "Lisboa · Algarve",
    privacy: "Política de Privacidade",
  },
  footer: {
    description:
      "Agência de Marketing Digital em Portugal. Transformamos ideias em resultados através de estratégias digitais inovadoras.",
    linksRapidos: "Links Rápidos",
    metodo: "Método",
    sobreNos: "Sobre Nós",
    ctaAnalisar: "Analisar o meu negócio",
    contacto: "Contacto",
    rights: "Todos os direitos reservados.",
    privacy: "Política de Privacidade",
  },
  cookieConsent: {
    message:
      "Usamos cookies para melhorar a sua experiência e analisar o tráfego do site. Pode aceitar todos ou apenas os essenciais.",
    saberMais: "Saber mais",
    apenasEssenciais: "Apenas essenciais",
    aceitarTudo: "Aceitar tudo",
  },
  contactModal: {
    titleLead: "Seu negócio não precisa de mais",
    strikeWord: "marketing",
    titleHighlight: "Precisa de um sistema que gere clientes.",
    intro:
      "Preencha o formulário e vamos identificar onde você está a perder dinheiro no digital. Em seguida, mostramos como corrigir isso.",
    preferirFalar: "Preferir falar diretamente?",
    telefone: "Telefone",
    email: "Email",
    localizacao: "Localização",
    lisboaAlgarve: "Lisboa & Algarve",
    nome: "Nome",
    nomePh: "O seu nome",
    emailLabel: "Email",
    emailPh: "O melhor email para contacto",
    telefoneWhats: "Telefone / WhatsApp",
    telefonePh: "+351 ...",
    ondeTravado: "Onde você sente que está travado?",
    gargaloOptions: [
      "Não tenho leads",
      "Tenho leads mas não converto",
      "Quero escalar",
      "Preciso de estrutura",
    ],
    mensagem: "Mensagem",
    mensagemPh:
      "Descreva rapidamente o seu negócio e o que sente que não está a funcionar",
    enviada: "Mensagem Enviada!",
    erro: "Erro. Tente novamente.",
    ctaIdle: "Quero identificar os meus gargalos",
    close: "Fechar",
  },
  contact: {
    titleLead: "Vamos",
    titleHighlight: "falar?",
    subtitle:
      "Pronto para elevar a sua marca? Preencha o formulário ou contacte-nos diretamente.",
    ligueNos: "Ligue-nos",
    email: "Email",
    localizacao: "Localização",
    lisboaAlgarve: "Lisboa & Algarve",
    nome: "Nome",
    nomePh: "O seu nome",
    emailLabel: "Email",
    emailPh: "O seu email",
    servicoInteresse: "Serviço de Interesse",
    serviceOptions: [
      "Criação de Sites",
      "Tráfego Pago",
      "Gestão de Redes Sociais",
      "Criação de Conteúdo",
      "Foto & Vídeo / Drone",
      "Outro",
    ],
    mensagem: "Mensagem",
    mensagemPh: "Como podemos ajudar?",
    enviada: "Mensagem Enviada!",
    erro: "Erro ao enviar. Tente novamente.",
    ctaIdle: "Enviar Mensagem",
  },
  siteForm: {
    title: "Conte-nos sobre o seu",
    titleHighlight: "projeto",
    stepLabel: "Passo {n} de 3",
    close: "Fechar",
    step1Title: "Informações de Contacto",
    fields: {
      nome: { label: "Nome", ph: "O seu nome" },
      email: { label: "Email", ph: "O seu email" },
      whatsapp: { label: "WhatsApp", ph: "O seu número" },
      tipoNegocio: { label: "Tipo de Negócio", ph: "Ex: Restaurante, Clínica..." },
    },
    step2Title: "Sobre o Projeto",
    objetivo: {
      label: "Qual seu principal objetivo com um website?",
      options: [
        "Gerar mais clientes",
        "Melhorar imagem e aumentar autoridade",
        "Vender online",
        "Outro",
      ],
    },
    presencaGoogle: {
      label: "Já tem presença no Google? (Google Meu Negócio)",
      options: ["Sim", "Não"],
    },
    clientesNovos: {
      label:
        "Quantos clientes novos gostaria de gerar por mês através do website?",
      options: ["0 - 10", "10 - 50", "50 - 100", "100 +"],
    },
    prazo: {
      label: "Quando pretende ter o website pronto?",
      options: ["O quanto antes", "1 - 3 meses", "Só estou a avaliar"],
    },
    step3Title: "Referências",
    sitesRef: {
      label: "Sites de Referência (Opcional)",
      ph: "Links de sites que gosta",
    },
    logoUpload: {
      label: "Logomarca ou Identidade Visual (Opcional)",
      dropText: "Clique para fazer upload ou arraste os ficheiros",
      fileTypes: "PNG, JPG, PDF ou SVG (Máx. 10MB)",
    },
    voltar: "Voltar",
    enviado: "Enviado!",
    erro: "Erro. Tente novamente.",
    enviarPedido: "Enviar Pedido",
    seguinte: "Seguinte",
  },
  diagnosticoForm: {
    recebemos: "Recebemos.",
    recebemosSub:
      "Vamos analisar o seu negócio e voltar dentro de 24h com a primeira leitura.",
    nome: "Nome",
    nomePh: "O seu nome",
    emailLabel: "Email",
    emailPh: "o.seu@email.com",
    negocio: "Negócio / Área de atuação",
    negocioPh: "Ex: Restaurante, Clínica, E-commerce...",
    maiorDificuldade: "Maior dificuldade hoje",
    mensagem: "Mensagem",
    mensagemPh: "Descreva o seu negócio e o que sente que não está a funcionar.",
    erro: "Erro. Tente novamente.",
  },
  whatsapp: {
    bubble: "Falar com especialista",
    closeAria: "Fechar",
    fabAria: "Falar com especialista no WhatsApp",
    message: `Olá, vim pelo site da Fyze.

Quero identificar onde o meu negócio está a perder oportunidades no digital e perceber como posso gerar mais clientes de forma previsível.`,
  },
  faq: {
    heading1: "Se você já trabalhou com uma agência antes,",
    heading2: "provavelmente está a pensar nisso:",
    items: [
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
    ],
  },
  showcase: {
    hint: "Arraste ou use as setas para ver mais",
    prevAria: "Caso anterior",
    nextAria: "Próximo caso",
  },
  caseStudy: {
    backToCases: "Voltar para cases",
    goToWebsite: "Ir para website",
    playVideo: "Reproduzir vídeo",
    challenge: "Desafio",
    approach: "Abordagem",
    client: "Cliente",
    year: "Ano",
    sector: "Nicho/Setor",
    scope: "Escopo",
    whatWeDid: "O que fizemos",
    results: "Resultados",
  },
  websiteCase: {
    backToWebsites: "Criação de websites",
    visitSite: "Visitar site",
    challenge: "O desafio",
    solution: "A solução",
    gallery: "Galeria",
    highlights: "Destaques",
    finalTitle: "Quer um site assim para o seu negócio?",
    finalSubtitle:
      "Identificamos onde o seu negócio está a perder oportunidades e construímos a estrutura certa para gerar clientes.",
    finalCta: "Analisar o meu negócio",
    seeCase: "Ver case",
  },
  notFound: {
    title: "Página não encontrada",
    back: "Voltar ao início",
  },
  meta: {
    layoutTitle: "Fyze Agency | Marketing Digital",
    layoutDescription:
      "Agência de Marketing Digital focada em resultados exponenciais. Atuamos em Lisboa, Algarve e em todo o Portugal.",
    diagnostico: {
      title: "Diagnóstico do seu negócio | Fyze",
      description:
        "Identifique onde o seu negócio está a perder clientes no digital. Análise direta, sem call comercial — você sai com clareza, mesmo que não avance connosco.",
      ogTitle: "Diagnóstico do seu negócio | Fyze",
      ogDescription:
        "Identifique onde o seu negócio está a perder clientes no digital.",
    },
    metodo: {
      title: "Método Fyze | Sistema de aquisição de clientes",
      description:
        "Pare de perder. Comece a converter. Escale com controlo. O sistema completo da Fyze para gerar clientes com consistência no digital.",
      ogTitle: "Método Fyze | Sistema de aquisição de clientes",
      ogDescription: "Pare de perder. Comece a converter. Escale com controlo.",
    },
    sobre: {
      title: "Sobre a Fyze | Não somos uma agência tradicional",
      description:
        "A Fyze nasceu para resolver um problema simples: negócios que investem no digital, mas não crescem. Construímos sistemas, não fazemos marketing por fazer.",
      ogTitle: "Sobre a Fyze",
      ogDescription: "Não somos uma agência tradicional. E isso é intencional.",
    },
    websites: {
      title: "Criação de Websites | Fyze — Você só paga se gostar",
      description:
        "A Fyze cria a primeira versão completa do seu site antes de você pagar. Estrutura focada em conversão. Sem risco. Se não gostar, não paga.",
      ogTitle: "Criação de Websites | Fyze",
      ogDescription:
        "Você vê a primeira versão do seu site antes de pagar. Estrutura pensada pra gerar clientes.",
    },
    privacidade: {
      title: "Política de Privacidade | Fyze Agency",
      description:
        "Como a Fyze Agency recolhe, utiliza e protege os seus dados pessoais ao abrigo do RGPD.",
    },
    caseNotFound: "Case não encontrado | Fyze",
    siteNotFound: "Site não encontrado | Fyze",
    casesSuffix: "Cases Fyze",
    siteSuffix: "Site | Fyze",
    siteOgSuffix: "Site",
  },
};

const en: UICopy = {
  nav: {
    metodo: "Method",
    cases: "Work",
    sobre: "About",
    ctaAnalisar: "Analyze my business",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    falarEspecialista: "Talk to a specialist",
    location: "Lisbon · Algarve",
    privacy: "Privacy Policy",
  },
  footer: {
    description:
      "Digital Marketing Agency in Portugal. We turn ideas into results through innovative digital strategies.",
    linksRapidos: "Quick Links",
    metodo: "Method",
    sobreNos: "About Us",
    ctaAnalisar: "Analyze my business",
    contacto: "Contact",
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
  },
  cookieConsent: {
    message:
      "We use cookies to improve your experience and analyze site traffic. You can accept all or only the essential ones.",
    saberMais: "Learn more",
    apenasEssenciais: "Essential only",
    aceitarTudo: "Accept all",
  },
  contactModal: {
    titleLead: "Your business doesn't need more",
    strikeWord: "marketing",
    titleHighlight: "It needs a system that generates clients.",
    intro:
      "Fill out the form and we'll pinpoint where you're losing money online. Then we'll show you how to fix it.",
    preferirFalar: "Prefer to talk directly?",
    telefone: "Phone",
    email: "Email",
    localizacao: "Location",
    lisboaAlgarve: "Lisbon & Algarve",
    nome: "Name",
    nomePh: "Your name",
    emailLabel: "Email",
    emailPh: "Best email to reach you",
    telefoneWhats: "Phone / WhatsApp",
    telefonePh: "+351 ...",
    ondeTravado: "Where do you feel stuck?",
    gargaloOptions: [
      "I don't have leads",
      "I have leads but don't convert",
      "I want to scale",
      "I need structure",
    ],
    mensagem: "Message",
    mensagemPh:
      "Briefly describe your business and what you feel isn't working",
    enviada: "Message Sent!",
    erro: "Something went wrong. Please try again.",
    ctaIdle: "Show me my bottlenecks",
    close: "Close",
  },
  contact: {
    titleLead: "Let's",
    titleHighlight: "talk?",
    subtitle:
      "Ready to elevate your brand? Fill out the form or reach us directly.",
    ligueNos: "Call us",
    email: "Email",
    localizacao: "Location",
    lisboaAlgarve: "Lisbon & Algarve",
    nome: "Name",
    nomePh: "Your name",
    emailLabel: "Email",
    emailPh: "Your email",
    servicoInteresse: "Service of Interest",
    serviceOptions: [
      "Website Design",
      "Paid Traffic",
      "Social Media Management",
      "Content Creation",
      "Photo & Video / Drone",
      "Other",
    ],
    mensagem: "Message",
    mensagemPh: "How can we help?",
    enviada: "Message Sent!",
    erro: "Couldn't send. Please try again.",
    ctaIdle: "Send Message",
  },
  siteForm: {
    title: "Tell us about your",
    titleHighlight: "project",
    stepLabel: "Step {n} of 3",
    close: "Close",
    step1Title: "Contact Information",
    fields: {
      nome: { label: "Name", ph: "Your name" },
      email: { label: "Email", ph: "Your email" },
      whatsapp: { label: "WhatsApp", ph: "Your number" },
      tipoNegocio: { label: "Business Type", ph: "e.g. Restaurant, Clinic..." },
    },
    step2Title: "About the Project",
    objetivo: {
      label: "What's your main goal with a website?",
      options: [
        "Generate more clients",
        "Improve image and build authority",
        "Sell online",
        "Other",
      ],
    },
    presencaGoogle: {
      label: "Do you already have a Google presence? (Google Business Profile)",
      options: ["Yes", "No"],
    },
    clientesNovos: {
      label: "How many new clients would you like to generate per month through the website?",
      options: ["0 - 10", "10 - 50", "50 - 100", "100 +"],
    },
    prazo: {
      label: "When do you want the website ready?",
      options: ["As soon as possible", "1 - 3 months", "Just exploring"],
    },
    step3Title: "References",
    sitesRef: {
      label: "Reference Websites (Optional)",
      ph: "Links to sites you like",
    },
    logoUpload: {
      label: "Logo or Visual Identity (Optional)",
      dropText: "Click to upload or drag your files",
      fileTypes: "PNG, JPG, PDF or SVG (Max. 10MB)",
    },
    voltar: "Back",
    enviado: "Sent!",
    erro: "Something went wrong. Please try again.",
    enviarPedido: "Send Request",
    seguinte: "Next",
  },
  diagnosticoForm: {
    recebemos: "Got it.",
    recebemosSub:
      "We'll analyze your business and get back to you within 24h with a first read.",
    nome: "Name",
    nomePh: "Your name",
    emailLabel: "Email",
    emailPh: "your@email.com",
    negocio: "Business / Field of work",
    negocioPh: "e.g. Restaurant, Clinic, E-commerce...",
    maiorDificuldade: "Biggest challenge today",
    mensagem: "Message",
    mensagemPh: "Describe your business and what you feel isn't working.",
    erro: "Something went wrong. Please try again.",
  },
  whatsapp: {
    bubble: "Talk to a specialist",
    closeAria: "Close",
    fabAria: "Talk to a specialist on WhatsApp",
    message: `Hi, I came from the Fyze website.

I'd like to identify where my business is missing opportunities online and understand how I can generate more clients predictably.`,
  },
  faq: {
    heading1: "If you've worked with an agency before,",
    heading2: "you're probably thinking this:",
    items: [
      {
        q: "How many posts, reels or stories do you publish per week?",
        paragraphs: [
          "We don't work with a fixed content volume. We work with whatever drives results.",
          "In many cases, less content with strategy generates far more than posting every day with no direction.",
          "The goal isn't to “feed the feed”. It's to turn attention into clients.",
          "If your business needs 30 posts a month to work… the problem isn't content. It's structure.",
        ],
      },
      {
        q: "Do you manage social media?",
        paragraphs: [
          "Yes, but not the traditional way. We're not here to “post for the sake of posting”.",
          "We build a presence that positions you, sparks interest and prepares the client to buy.",
          "For us, social media is a conversion tool. Not a posting calendar.",
        ],
      },
      {
        q: "Do I really need all of this or just traffic?",
        paragraphs: [
          "Traffic without a foundation is wasted money.",
          "If your business isn't ready to convert, more visitors only make the problem bigger.",
          "First we secure structure. Then we scale.",
        ],
      },
      {
        q: "What if I already have someone doing my marketing?",
        paragraphs: [
          "Great. The problem is rarely “having someone”. It's having direction.",
          "We often find bottlenecks that go unnoticed and are completely holding back growth.",
        ],
      },
      {
        q: "How long until I see results?",
        paragraphs: [
          "It depends on the starting point. But the difference shows up fast once the system starts working.",
          "Because we stop relying on trial and error and start operating with strategy.",
        ],
      },
      {
        q: "Does this work for my type of business?",
        paragraphs: [
          "It works for businesses that want to grow with consistency online.",
          "If you depend on referrals, have no predictability or feel that digital isn't working… that's exactly where we come in.",
        ],
      },
      {
        q: "Do you work with any client?",
        paragraphs: [
          "No. We work with businesses that want to grow in a structured way.",
          "If you're only after “posts” or “quick ads”, we're probably not the best fit.",
        ],
      },
      {
        q: "What happens after I get in touch?",
        paragraphs: [
          "First, we run a diagnosis of your business.",
          "We identify where you're losing money and show you the most direct path to grow.",
          "From there, we decide the next step together.",
        ],
      },
      {
        q: "Why is Fyze different from other agencies?",
        paragraphs: [
          "Because we don't sell loose services.",
          "We build a complete client-acquisition system.",
          "And we've been doing it for over 4 years in the Portuguese market, with a real focus on results.",
        ],
      },
    ],
  },
  showcase: {
    hint: "Drag or use the arrows to see more",
    prevAria: "Previous case",
    nextAria: "Next case",
  },
  caseStudy: {
    backToCases: "Back to work",
    goToWebsite: "Visit website",
    playVideo: "Play video",
    challenge: "Challenge",
    approach: "Approach",
    client: "Client",
    year: "Year",
    sector: "Niche / Sector",
    scope: "Scope",
    whatWeDid: "What we did",
    results: "Results",
  },
  websiteCase: {
    backToWebsites: "Website design",
    visitSite: "Visit site",
    challenge: "The challenge",
    solution: "The solution",
    gallery: "Gallery",
    highlights: "Highlights",
    finalTitle: "Want a site like this for your business?",
    finalSubtitle:
      "We pinpoint where your business is missing opportunities and build the right structure to generate clients.",
    finalCta: "Analyze my business",
    seeCase: "See case",
  },
  notFound: {
    title: "Page not found",
    back: "Back to home",
  },
  meta: {
    layoutTitle: "Fyze Agency | Digital Marketing",
    layoutDescription:
      "Digital Marketing Agency focused on exponential results. We operate in Lisbon, the Algarve and across Portugal.",
    diagnostico: {
      title: "Business diagnosis | Fyze",
      description:
        "Find out where your business is losing clients online. A direct analysis, no sales call — you walk away with clarity, even if you don't move forward with us.",
      ogTitle: "Business diagnosis | Fyze",
      ogDescription: "Find out where your business is losing clients online.",
    },
    metodo: {
      title: "The Fyze Method | Client acquisition system",
      description:
        "Stop losing. Start converting. Scale with control. Fyze's complete system to generate clients consistently online.",
      ogTitle: "The Fyze Method | Client acquisition system",
      ogDescription: "Stop losing. Start converting. Scale with control.",
    },
    sobre: {
      title: "About Fyze | We're not a traditional agency",
      description:
        "Fyze was born to solve a simple problem: businesses that invest in digital but don't grow. We build systems — we don't do marketing for the sake of it.",
      ogTitle: "About Fyze",
      ogDescription: "We're not a traditional agency. And that's intentional.",
    },
    websites: {
      title: "Website Design | Fyze — You only pay if you like it",
      description:
        "Fyze builds the first complete version of your site before you pay. Conversion-focused structure. No risk. If you don't like it, you don't pay.",
      ogTitle: "Website Design | Fyze",
      ogDescription:
        "You see the first version of your site before paying. Built to generate clients.",
    },
    privacidade: {
      title: "Privacy Policy | Fyze Agency",
      description:
        "How Fyze Agency collects, uses and protects your personal data under the GDPR.",
    },
    caseNotFound: "Case not found | Fyze",
    siteNotFound: "Site not found | Fyze",
    casesSuffix: "Fyze Work",
    siteSuffix: "Site | Fyze",
    siteOgSuffix: "Site",
  },
};

export function getUICopy(locale: Locale): UICopy {
  return locale === "en" ? en : pt;
}
