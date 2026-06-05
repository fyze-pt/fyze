export interface ServiceSection {
  title: string;
  description: string;
  /** Imagem única (legado). Para múltiplos itens ou vídeos, usar `media`. */
  image?: string;
  /** Lista mista de imagens e vídeos exibidos junto à descrição da seção. */
  media?: GalleryItem[];
}

/** Item de galeria/mídia. String = imagem; objeto = vídeo com poster. */
export type GalleryItem =
  | string
  | { src: string; poster: string; wide?: boolean };

export interface CaseStudy {
  slug: string;
  client: string;
  logo: string;
  year: string;
  sector: string;
  scope: string[];
  heroImage: string;
  website?: string;
  challenge: string;
  approach: string;
  description: string;
  services: ServiceSection[];
  gallery: GalleryItem[];
  results?: string[];
  /** Marca o case como sendo do segmento de restauração — usado pelo subdomínio restauracao.fyze.pt para filtrar */
  isRestaurant?: boolean;
  /** Tamanho do logo no card do Showcase. Default 'md'. */
  logoSize?: "sm" | "md" | "lg";
  /** Alinha o logo na base do bounding box (útil pra logos com aspecto largo) */
  logoAlignBottom?: boolean;
  /** Como ajustar a hero image. Default 'cover'. Use 'contain' pra fotos verticais. */
  heroFit?: "cover" | "contain";
}

export const cases: CaseStudy[] = [
  // ──────────────────────────────────────────────────────
  // RESTAURANTES
  // ──────────────────────────────────────────────────────
  {
    slug: "boteco-dona-luzia",
    client: "Boteco Dona Luzia",
    logo: "/logos/boteco-dona-luzia.png",
    year: "2024–2025",
    sector: "Restauração / Grupo de Restaurantes",
    scope: [
      "Direção de Comunicação",
      "Social Media",
      "Influencers",
      "Tráfego Pago",
      "Audiovisual",
      "Website + Menu Digital",
      "Design",
    ],
    heroImage: "/cases-img/boteco-dona-luzia-ok/cover.webp",
    isRestaurant: true,
    challenge:
      "O Boteco Dona Luzia já era um restaurante conhecido na Grande Lisboa, com boa comida, ambiente forte e identidade cultural clara. Mas tinha o problema que mata qualquer restaurante: inconsistência de fluxo. Fins de semana cheios, dias de semana irregulares, dependência de eventos e comunicação desalinhada entre as três unidades. Um negócio com potencial alto a operar abaixo da capacidade.",
    approach:
      "A Fyze assumiu a Direção de Comunicação do grupo (não como agência, mas para construir um sistema). Não começámos por publicar. Começámos por entender onde o dinheiro estava a ser perdido. Unificámos a marca dos 3 restaurantes, transformámos as redes sociais em canal de movimento, integrámos influência local com intenção, conectámos Google + Meta Ads à decisão de saída, e ligámos tudo à operação dos restaurantes.",
    description:
      "O Boteco Dona Luzia é um grupo de 3 restaurantes brasileiros na Grande Lisboa, conhecidos pela boa comida, ambiente intimista e forte identidade cultural. A direção foi conduzida por João Borba, garantindo que a marca fosse percebida da mesma forma em todos os pontos de contacto.",
    services: [
      {
        title: "Direção de Comunicação",
        description:
          "Definição e consolidação do posicionamento da marca, estratégia online e offline, direção da identidade verbal e narrativa do grupo. Centralização da comunicação dos 3 restaurantes para garantir consistência entre marca, experiência, conteúdo e operação.",
        image: "/cases-img/boteco-dona-luzia-ok/05d38b511a.webp",
      },
      {
        title: "Gestão de Redes Sociais + Estratégia de Conteúdo",
        description:
          "Linha editorial estruturada em pilares: produto, ambiente, conexão, prova social, convite. Conteúdo com identidade forte, foco em conexão real com o público local. O Instagram deixou de ser vitrine e passou a ser canal de movimento.",
        image: "/cases-img/boteco-dona-luzia-ok/260a20eb8e.webp",
      },
      {
        title: "Gestão de Influencers",
        description:
          "Seleção estratégica de criadores alinhados com a marca, focados em público da Grande Lisboa. Parcerias com influencers de lifestyle e food integradas na estratégia, não como ações pontuais, mas como sistema de geração de prova social e fluxo qualificado.",
        image: "/cases-img/boteco-dona-luzia-ok/influencer.webp",
      },
      {
        title: "Gestão de Tráfego (Google Ads + Meta Ads)",
        description:
          "Integração de Google Ads (intenção ativa: capturar quem já quer sair) com Meta Ads (criar desejo, remarketing, eventos). Campanhas ajustadas por dia da semana, eventos e comportamento do público local. O tráfego pago passou a ser motor de movimento.",
      },
      {
        title: "Produções Audiovisuais",
        description:
          "Direção e produção de conteúdo audiovisual com foco em experiência real, emoção e identidade. Captação dentro dos restaurantes: clientes, ambiente, momentos. Conteúdos verticais para redes, anúncios e campanhas. Cada peça responde a uma pergunta: isto faz alguém querer estar aqui agora?",
        media: [
          {
            src: "/cases-img/boteco-dona-luzia-ok/videos/1.mp4",
            poster: "/cases-img/boteco-dona-luzia-ok/videos/1.webp",
          },
          {
            src: "/cases-img/boteco-dona-luzia-ok/videos/2.mp4",
            poster: "/cases-img/boteco-dona-luzia-ok/videos/2.webp",
          },
          {
            src: "/cases-img/boteco-dona-luzia-ok/videos/3.mp4",
            poster: "/cases-img/boteco-dona-luzia-ok/videos/3.webp",
          },
        ],
      },
      {
        title: "Website com SEO + Menu Digital",
        description:
          "Website otimizado para SEO local (pesquisas como 'restaurante brasileiro Lisboa'), com páginas dedicadas para cada unidade. Menu digital acessível por QR Code nas mesas: atualização centralizada, experiência mais rápida, integração com a identidade visual.",
        image: "/cases-img/boteco-dona-luzia-ok/website.webp",
      },
      {
        title: "Design Profissional",
        description:
          "Direção e execução do design da marca com foco em consistência, identidade e impacto visual: peças para redes, campanhas, menus físicos e digitais, materiais para eventos. Cada peça parte do mesmo universo visual.",
        image: "/cases-img/boteco-dona-luzia-ok/logo-mark.webp",
      },
    ],
    gallery: [],
    results: [
      "Comunicação unificada nos 3 restaurantes",
      "Maior fluxo durante a semana, não só fins de semana",
      "Marca consolidada como referência cultural na Grande Lisboa",
      "Conteúdo digital traduzindo a experiência real do espaço",
      "Operação, marketing e marca a trabalhar como sistema único",
    ],
  },
  {
    slug: "teixeira-wine-bar",
    client: "Teixeira Wine Bar",
    logo: "/logos/teixeira-wine-bar.png",
    year: "2024",
    sector: "Restauração Premium / Wine Bar",
    scope: [
      "Rebranding",
      "Direção de Comunicação",
      "Lançamento",
      "Audiovisual",
      "Conteúdo Premium",
    ],
    heroImage: "/cases-img/teixeira-wine-bar-ok/cover.webp",
    isRestaurant: true,
    challenge:
      "O Teixeira Wine Bar tinha localização privilegiada (beira-mar, Algarve, fluxo natural), mas estava preso num ponto perigoso: marca sem força real, comunicação genérica, experiência que não justificava percepção premium. Tinha potencial mas não tinha posição. Sem posicionamento claro, o cliente não percebe valor, o preço vira problema e o espaço não se destaca.",
    approach:
      "Com a mudança de gestão veio uma decisão: parar de ser “mais um restaurante bonito” e tornar-se uma experiência com identidade forte. A Fyze entrou para reposicionar o negócio, não para “melhorar o visual”. Conduzimos rebranding completo, ajustámos a direção de comunicação, transformámos o relançamento em evento, criámos um sistema de conteúdo premium e levámos a comunicação para dentro do restaurante.",
    description:
      "O Teixeira Wine Bar é um restaurante à beira-mar na orla de Quarteira, Algarve. Em 2024, sob nova administração, iniciou uma nova fase com o objetivo de reposicionar-se como referência premium na região.",
    services: [
      {
        title: "Rebranding Completo",
        description:
          "Não foi troca de logo. Foi mudança de percepção. Construímos uma nova identidade: mais sofisticada, coerente com o espaço, alinhada com o público certo. O Teixeira passou a parecer um lugar onde se quer estar.",
        image: "/cases-img/teixeira-wine-bar-ok/6ee0ff6aba.webp",
      },
      {
        title: "Direção de Comunicação",
        description:
          "Ajuste completo da forma como a marca fala. Tom refinado, narrativa alinhada com experiência premium, coerência entre digital e físico. Cada ponto de contacto passou a reforçar a mesma coisa: valor.",
      },
      {
        title: "Lançamento como Evento",
        description:
          "O relançamento não foi “abrir portas”. Foi construir expectativa. Vídeos de lançamento, conteúdos que geram curiosidade, narrativa de nova fase. As pessoas não só viram, esperaram.",
      },
      {
        title: "Produção Contínua de Conteúdo Premium",
        description:
          "Sistema de conteúdo que sustenta o posicionamento: fotografia profissional, vídeos que captam o ambiente real, foco em experiência (não só produto). O objetivo nunca foi mostrar comida; foi fazer a pessoa querer estar lá.",
        media: [
          "/cases-img/teixeira-wine-bar-ok/70d6b2590b.webp",
          {
            src: "/cases-img/teixeira-wine-bar-ok/videos/1.mp4",
            poster: "/cases-img/teixeira-wine-bar-ok/videos/1.webp",
          },
          {
            src: "/cases-img/teixeira-wine-bar-ok/videos/2.mp4",
            poster: "/cases-img/teixeira-wine-bar-ok/videos/2.webp",
          },
        ],
      },
      {
        title: "Integração com a Operação",
        description:
          "A comunicação não ficou no Instagram. Entrou no restaurante. Equipa alinhada com o novo posicionamento, experiência coerente com a imagem, consistência entre promessa e entrega.",
      },
    ],
    gallery: [
      "/cases-img/teixeira-wine-bar-ok/cover.webp",
      "/cases-img/teixeira-wine-bar-ok/extra.webp",
      "/cases-img/teixeira-wine-bar-ok/6ee0ff6aba.webp",
      "/cases-img/teixeira-wine-bar-ok/70d6b2590b.webp",
    ],
    results: [
      "Percepção da marca mudou completamente",
      "Restaurante visto como espaço premium na região",
      "Valor percebido pelo cliente aumentou",
      "Lançamento da nova fase gerou expectativa real, não apenas tráfego",
      "Base sólida construída para crescimento sustentado",
    ],
  },
  {
    slug: "patacas-bar",
    client: "Patacas Bar",
    logo: "/logos/patacas-bar-white.png",
    heroFit: "contain",
    year: "2023–2024",
    sector: "Bar / Restauração",
    scope: [
      "Audiovisual",
      "Direção de Conteúdo",
      "Cobertura de Experiência",
    ],
    heroImage: "/cases-img/patacas-bar/cover.webp",
    isRestaurant: true,
    challenge:
      "O Patacas já tinha algo que dinheiro não compra: história, tradição, ambiente autêntico. Mas tinha um desafio: isso não estava a ser explorado como deveria. Conteúdos soltos, falta de narrativa, experiência não estruturada no digital. Um lugar incrível, comunicado de forma comum.",
    approach:
      "A mudança foi simples e poderosa: parar de mostrar o espaço, começar a mostrar as pessoas a viver o espaço. Direção focada em conexão (amigos juntos, momentos reais, interação espontânea), conteúdo baseado em memória (o Patacas vende momento, não bebida), captura de energia real, nada encenado.",
    description:
      "O Patacas Bar fica em Vilamoura, Algarve. É um espaço icónico que reúne família e amigos desde 1987, conhecido pelo ambiente descontraído, autêntico e cheio de vida.",
    services: [
      {
        title: "Direção de Conteúdo",
        description:
          "Saímos do visual e entrámos na emoção. Foco em amigos juntos, momentos reais, interação espontânea. Cada conteúdo projetado para fazer a pessoa pensar: “quero viver isso de novo”.",
        image: "/cases-img/patacas-bar/01.webp",
      },
      {
        title: "Captura da Energia Real",
        description:
          "Nada encenado. Nada forçado. Tudo orgânico, porque verdade gera conexão. A cobertura registou momentos entre amigos e família, casa cheia, música, energia da noite.",
        image: "/cases-img/patacas-bar/03.webp",
      },
      {
        title: "Conteúdo Baseado em Memória",
        description:
          "O Patacas não vende só bebida: vende momento. Conteúdo construído para ativar memória afetiva e fazer as pessoas quererem voltar. Resultado: identificação com o público e fortalecimento da marca como ponto de encontro.",
      },
    ],
    gallery: [],
    results: [
      "Conteúdos mais próximos e reais",
      "Maior identificação com o público local",
      "Marca reforçada como ponto de encontro de Vilamoura",
      "Experiência traduzida em memória: o Patacas virou lugar para voltar",
    ],
  },
  {
    slug: "oporto-tavern",
    client: "Oporto Tavern",
    logo: "/logos/oporto-tavern.png",
    logoSize: "lg",
    year: "2023–2024",
    sector: "Wine Bar / Restauração",
    scope: [
      "Audiovisual",
      "Direção Sensorial de Conteúdo",
      "Cobertura de Eventos",
    ],
    heroImage: "/cases-img/oporto-ok/cover.webp",
    isRestaurant: true,
    challenge:
      "O Oporto Tavern tinha algo raro: ambiente intimista, proposta bem definida, experiência forte ao vivo. Mas tinha um problema clássico de espaços assim: isso não estava a ser sentido no digital. Conteúdo que não transmitia a atmosfera real, eventos pouco explorados. Quem não estava lá, não entendia o valor. E pior, não sentia vontade de ir.",
    approach:
      "A mudança foi simples e estratégica: parar de registar eventos, começar a traduzir experiência. Um wine bar como o Oporto Tavern não se explica. Sente-se. Saímos do óbvio, entrámos no detalhe (luz, ambiente, proximidade, expressão das pessoas). Cada conteúdo com um papel: fazer quem vê decidir ir.",
    description:
      "O Oporto Tavern é um wine bar localizado no centro de Vilamoura, Algarve. Espaço intimista conduzido por Bruno, combina vinho, boa música e encontros marcantes.",
    services: [
      {
        title: "Direção Sensorial de Conteúdo",
        description:
          "Foco no detalhe: luz, ambiente, proximidade, expressão. Cada conteúdo precisava fazer o espectador sentir: 'eu queria estar ali agora'. Não é sobre mostrar. É sobre puxar.",
        media: [
          "/cases-img/oporto-ok/252841ed33.webp",
          "/cases-img/oporto-ok/03.webp",
        ],
      },
      {
        title: "Captação de Momentos Reais",
        description:
          "Nada encenado. Conversas, brindes, música, olhares. A experiência como ela é. A produção valoriza luz natural, ambiente íntimo, proximidade entre as pessoas, traduzindo a identidade intimista do wine bar.",
        media: [
          {
            src: "/cases-img/oporto-ok/videos/1.mp4",
            poster: "/cases-img/oporto-ok/videos/1.webp",
          },
          {
            src: "/cases-img/oporto-ok/videos/2.mp4",
            poster: "/cases-img/oporto-ok/videos/2.webp",
          },
          {
            src: "/cases-img/oporto-ok/videos/3.mp4",
            poster: "/cases-img/oporto-ok/videos/3.webp",
          },
          "/cases-img/oporto-ok/02.webp",
          "/cases-img/oporto-ok/c5ff5031ae.webp",
        ],
      },
      {
        title: "Cobertura de Eventos",
        description:
          "Cobertura fotográfica e em vídeo de noites com música e momentos especiais: registo do ambiente, detalhes e atmosfera, com foco em traduzir a experiência única de cada evento.",
        image: "/cases-img/oporto-ok/04.webp",
      },
    ],
    gallery: [],
    results: [
      "Conteúdos com mais sensação e profundidade",
      "Maior conexão com o público certo do wine bar",
      "Presença digital alinhada com a experiência real",
      "Espaço posicionado como destino, não só opção",
    ],
  },
  {
    slug: "agua-qlub",
    client: "Água Qlub",
    logo: "/logos/aguaqlub.png",
    logoSize: "sm",
    year: "2022–2023",
    sector: "Restauração Premium / Beach Club",
    scope: [
      "Audiovisual",
      "Cobertura de Experiência",
      "Direção de Conteúdo",
    ],
    heroImage: "/cases-img/agua-qlub-ok/104ce16528.webp",
    isRestaurant: true,
    challenge:
      "O Água Qlub já tinha tudo que muitos restaurantes sonham: localização premium, ambiente sofisticado, experiência forte. Mas isso não estava a ser traduzido no digital. Conteúdo bonito mas sem impacto real. O restaurante existia, mas não dominava a mente do cliente.",
    approach:
      "A decisão foi clara: parar de “mostrar o espaço”, começar a fazer as pessoas sentirem o espaço. Direção de conteúdo baseada em experiência, produção audiovisual estratégica (uso de luz, movimento e som como sensação, não estética), tradução do lifestyle premium: verão, exclusividade, experiência à beira-mar.",
    description:
      "O Água Qlub é um restaurante à beira-mar reconhecido pela atmosfera exclusiva e experiências premium no Algarve, integrado no Grupo Nosolo. A parceria decorreu durante os verões de 2022 e 2023.",
    services: [
      {
        title: "Direção de Conteúdo Baseada em Experiência",
        description:
          "Nada de fotos genéricas. Conteúdo focado em ambiente real, energia do espaço, interação das pessoas. Cada peça respondia: 'isto faz-me querer estar aqui agora?'.",
        image: "/cases-img/agua-qlub-ok/9143aaea6d.webp",
      },
      {
        title: "Produção Audiovisual Estratégica",
        description:
          "Vídeos verticais para redes, captação de momentos reais, uso de luz, movimento e som. Não era estética. Era sensação. O objetivo: gerar desejo antes mesmo da chegada.",
        media: [
          {
            src: "/cases-img/agua-qlub-ok/videos/1.mp4",
            poster: "/cases-img/agua-qlub-ok/videos/1.webp",
            wide: true,
          },
          {
            src: "/cases-img/agua-qlub-ok/videos/2.mp4",
            poster: "/cases-img/agua-qlub-ok/videos/2.webp",
          },
          {
            src: "/cases-img/agua-qlub-ok/videos/3.mp4",
            poster: "/cases-img/agua-qlub-ok/videos/3.webp",
          },
        ],
      },
      {
        title: "Tradução do Lifestyle Premium",
        description:
          "Foco deixou de ser o restaurante e passou a ser o estilo de vida que ele representa: verão, exclusividade, experiência à beira-mar. Conteúdos que reforçam o nível do espaço.",
      },
    ],
    gallery: [
      "/cases-img/agua-qlub-ok/104ce16528.webp",
      "/cases-img/agua-qlub-ok/9143aaea6d.webp",
    ],
    results: [
      "Conteúdos mais impactantes e desejáveis",
      "Aumento da percepção de valor e exclusividade",
      "Maior conexão com o público premium do Algarve",
      "Presença digital alinhada com o nível do espaço",
    ],
  },

  // ──────────────────────────────────────────────────────
  // FITNESS
  // ──────────────────────────────────────────────────────
  {
    slug: "active-body",
    client: "Active Body",
    logo: "/logos/active-body-cutout.png",
    year: "2023–2025",
    sector: "Fitness / Personal Training",
    scope: [
      "Social Media",
      "Website & SEO",
      "Aplicação Mobile",
      "Gestão de Tráfego",
      "CRM",
    ],
    heroImage: "/cases-img/active-body/cover.webp",
    website: "https://goactivebody.pt",
    challenge:
      "O Active Body precisava de se posicionar como referência de treino personalizado no Algarve. Sem presença digital estruturada, comunicação genérica e processos internos manuais, o ginásio não conseguia diferenciar-se da concorrência nem converter o interesse online em novos alunos.",
    approach:
      "A Fyze assumiu toda a estratégia digital do Active Body, desde a construção de autoridade nas redes sociais até ao desenvolvimento tecnológico e comercial. O trabalho abrangeu social media, website, aplicação, gestão de tráfego e implementação de CRM, criando um ecossistema digital completo e integrado.",
    description:
      "O Active Body é um ginásio de treino personalizado localizado em Quarteira, no Algarve. Com uma metodologia própria e equipa de personal trainers qualificados, oferece uma experiência de treino diferenciada e orientada a resultados.",
    services: [
      {
        title: "Social Media & Conteúdo",
        description:
          "Ao longo de 2 anos, a Fyze desenvolveu toda a estratégia de Social Media, posicionando o Active Body como marca pioneira em conteúdo de treino no Algarve. A linha editorial inclui Reels educativos, treinos completos semanais no YouTube, depoimentos de alunos e carrosséis educativos, distribuídos em 5 plataformas: Instagram, Facebook, TikTok, YouTube e YouTube Shorts.",
        image: "/cases/active-body-social-1.jpg",
      },
      {
        title: "Website & SEO",
        description:
          "Website de alta performance com 100% no Lighthouse, totalmente otimizado para SEO e posicionamento orgânico no Google. A estrutura foi preparada para receber campanhas de Google Ads e Meta Ads, com tracking completo e análise de dados para otimização contínua do funil de conversão.",
        image: "/cases/active-body-website.jpg",
      },
      {
        title: "Aplicação & Sistema de Gestão",
        description:
          "Desenvolvimento de uma aplicação completa para alunos (com treinos, dietas, marcações e acompanhamento de evolução) e uma plataforma de gestão interna para controlo de alunos, presenças, financeiro e organização de turmas e horários.",
        image: "/cases/active-body-app.jpg",
      },
      {
        title: "Gestão de Tráfego",
        description:
          "Campanhas estruturadas em Google Ads (pesquisa, display e YouTube) e Meta Ads (reconhecimento, geração de leads e aquisição), desenhadas para captar potenciais alunos qualificados e alimentar continuamente o funil de vendas do ginásio.",
        image: "/cases-img/active-body/ads-1.webp",
      },
      {
        title: "CRM & Gestão Comercial",
        description:
          "Implementação de CRM com funil de vendas completo, desde a captação do lead até ao fechamento da matrícula, incluindo treinamento do time comercial para maximizar a taxa de conversão. O sistema está integrado com campanhas de tráfego e website.",
        image: "/cases/active-body-crm.jpg",
      },
    ],
    gallery: ["/cases/active-body-web-hero.jpg", "/cases/active-body-web-2.jpg"],
    results: [
      "Crescimento de 1.000 para 5.000 seguidores",
      "+290.000 visualizações mensais orgânicas",
      "100% de performance no Lighthouse",
      "App completa para alunos e gestão",
      "CRM com funil de vendas estruturado",
      "Geração contínua de leads qualificados",
    ],
  },
  {
    slug: "charruafit",
    client: "CharruaFit",
    logo: "/logos/charruafit.png",
    year: "2024",
    sector: "Fitness / Hybrid Training",
    scope: [
      "Audiovisual",
      "Cobertura de Eventos",
      "Direção de Conteúdo",
    ],
    heroImage: "/cases-img/charruafit-ok/cover.webp",
    challenge:
      "O CharruaFit é um movimento de treino focado em Hybrid Training, HYROX e performance: uma comunidade que une treino, superação e mentalidade de alta performance. O desafio: traduzir em conteúdo audiovisual a intensidade real, o esforço e a energia da comunidade, sem cair em fórmulas genéricas de fitness.",
    approach:
      "Produção e direção de conteúdo guiada por uma linha clara: captar movimento, velocidade e intensidade. Mostrar esforço real e momentos de superação. Valorizar a comunidade e o espírito de grupo. Traduzir a experiência de treino em imagem: conteúdo que faz sentir o treino, não só ver.",
    description:
      "O CharruaFit é um movimento de treino focado em Hybrid Training, HYROX e performance em Portugal, liderado por Rubens Useche. Mais do que um ginásio: uma comunidade.",
    services: [
      {
        title: "Cobertura Fotográfica de Eventos",
        description:
          "Registo da intensidade e dinâmica dos exercícios, energia da comunidade, momentos de competição e superação. Material para redes sociais e divulgação do movimento.",
        media: [
          "/cases-img/charruafit-ok/0ea213ab58.webp",
          "/cases-img/charruafit-ok/433227a078.webp",
        ],
      },
      {
        title: "Captação de Vídeos de Treinos e Competições",
        description:
          "Vídeos verticais e horizontais que captam movimento, velocidade e esforço real. Foco em transmitir energia, superação e a experiência coletiva, não só mostrar exercícios.",
        media: [
          {
            src: "/cases-img/charruafit-ok/videos/1.mp4",
            poster: "/cases-img/charruafit-ok/videos/1.webp",
          },
          {
            src: "/cases-img/charruafit-ok/videos/2.mp4",
            poster: "/cases-img/charruafit-ok/videos/2.webp",
          },
          {
            src: "/cases-img/charruafit-ok/videos/3.mp4",
            poster: "/cases-img/charruafit-ok/videos/3.webp",
          },
        ],
      },
      {
        title: "Direção de Conteúdo",
        description:
          "Linha editorial focada em performance e comunidade. No fitness, as pessoas não compram só treino: compram evolução. Conteúdo construído para mostrar exatamente isso.",
        image: "/cases-img/charruafit-ok/be1667ed21.webp",
      },
    ],
    gallery: [
      "/cases-img/charruafit-ok/0a1ab2b874.webp",
      "/cases-img/charruafit-ok/0ea213ab58.webp",
      "/cases-img/charruafit-ok/433227a078.webp",
      "/cases-img/charruafit-ok/be1667ed21.webp",
    ],
    results: [
      "Conteúdos que reforçam a identidade do movimento",
      "Maior envolvimento da comunidade nas redes sociais",
      "Valorização da experiência coletiva e da performance",
      "Posicionamento do CharruaFit como referência em Hybrid Training",
    ],
  },

  // ──────────────────────────────────────────────────────
  // SERVIÇOS
  // ──────────────────────────────────────────────────────
  {
    slug: "desentuup-clean",
    client: "Desentuup Clean",
    logo: "/logos/desentuup-clean.png",
    logoSize: "lg",
    logoAlignBottom: true,
    year: "2024",
    sector: "Canalização / Controle de Pragas",
    scope: ["Website", "SEO", "Identidade Digital"],
    heroImage: "/cases-img/desentuup-clean-ok/cover.webp",
    website: "https://desentuupclean.pt",
    challenge:
      "A Desentuup Clean precisava de visibilidade digital para captar clientes em Portugal. Sem presença online estruturada, perdia oportunidades para concorrentes que já apareciam nos resultados de pesquisa do Google.",
    approach:
      "A Fyze desenvolveu um website profissional com SEO completo, otimizado para posicionamento orgânico nos motores de pesquisa. A estrutura foi pensada para apresentar os serviços de forma clara e converter visitantes em contactos diretos via telefone e WhatsApp.",
    description:
      "A Desentuup Clean é uma empresa portuguesa especializada em serviços de canalização, desentupimentos e controle de pragas. Com atendimento rápido e profissional, atua em diversas regiões de Portugal.",
    services: [
      {
        title: "Website Profissional",
        description:
          "Desenvolvimento de um website completo, com design profissional e estrutura clara para apresentação de todos os serviços. O site foi construído com foco em velocidade, usabilidade e conversão direta.",
        image: "/cases/desentuup-web-1.jpg",
      },
      {
        title: "SEO & Posicionamento",
        description:
          "Toda a estrutura do site foi otimizada para motores de pesquisa, com palavras-chave estratégicas, meta tags, estrutura de URLs e conteúdo pensado para ranqueamento orgânico no Google em pesquisas relacionadas a desentupimentos e canalização em Portugal.",
        image: "/cases/desentuup-web-2.jpg",
      },
    ],
    gallery: [
      "/cases-img/desentuup-clean-ok/cover.webp",
      "/cases-img/desentuup-clean-ok/extra.webp",
      "/cases-img/desentuup-clean-ok/2f762fc35e.webp",
    ],
    results: [
      "Website otimizado com SEO completo",
      "Posicionamento orgânico no Google",
      "Conversão direta via telefone e WhatsApp",
      "Presença digital profissional e confiável",
    ],
  },
];
