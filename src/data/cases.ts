export interface ServiceSection {
  title: string;
  description: string;
  image?: string;
}

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
  gallery: string[];
  results?: string[];
}

export const cases: CaseStudy[] = [
  {
    slug: "active-body",
    client: "Active Body",
    logo: "/logos/active-body.png",
    year: "2023–2025",
    sector: "Fitness / Personal Training",
    scope: [
      "Social Media",
      "Website & SEO",
      "Aplicação Mobile",
      "Gestão de Tráfego",
      "CRM",
    ],
    heroImage: "/cases/active-body-web-hero.jpg",
    website: "https://goactivebody.pt",
    challenge:
      "O Active Body precisava de se posicionar como referência de treino personalizado no Algarve. Sem presença digital estruturada, comunicação genérica e processos internos manuais, o ginásio não conseguia diferenciar-se da concorrência nem converter o interesse online em novos alunos.",
    approach:
      "A Fyze assumiu toda a estratégia digital do Active Body — desde a construção de autoridade nas redes sociais até ao desenvolvimento tecnológico e comercial. O trabalho abrangeu social media, website, aplicação, gestão de tráfego e implementação de CRM, criando um ecossistema digital completo e integrado.",
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
          "Desenvolvimento de uma aplicação completa para alunos — com treinos, dietas, marcações e acompanhamento de evolução — e uma plataforma de gestão interna para controlo de alunos, presenças, financeiro e organização de turmas e horários.",
        image: "/cases/active-body-app.jpg",
      },
      {
        title: "Gestão de Tráfego",
        description:
          "Campanhas estruturadas em Google Ads (pesquisa, display e YouTube) e Meta Ads (reconhecimento, geração de leads e aquisição), desenhadas para captar potenciais alunos qualificados e alimentar continuamente o funil de vendas do ginásio.",
      },
      {
        title: "CRM & Gestão Comercial",
        description:
          "Implementação de CRM com funil de vendas completo — desde a captação do lead até ao fechamento da matrícula — incluindo treinamento do time comercial para maximizar a taxa de conversão. O sistema está integrado com campanhas de tráfego e website.",
        image: "/cases/active-body-crm.jpg",
      },
    ],
    gallery: [
      "/cases/active-body-web-hero.jpg",
      "/cases/active-body-web-2.jpg",
    ],
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
    slug: "desentuup-clean",
    client: "Desentuup Clean",
    logo: "/logos/desentuup-clean.png",
    year: "2024",
    sector: "Canalização / Controle de Pragas",
    scope: ["Website", "SEO", "Identidade Digital"],
    heroImage: "/cases/desentuup-web-hero.jpg",
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
      "/cases/desentuup-web-hero.jpg",
      "/cases/desentuup-web-2.jpg",
    ],
    results: [
      "Website otimizado com SEO completo",
      "Posicionamento orgânico no Google",
      "Conversão direta via telefone e WhatsApp",
      "Presença digital profissional e confiável",
    ],
  },
];
