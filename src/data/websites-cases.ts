import type { Locale } from "@/lib/locale";
import { websitesCasesEn } from "@/data/websites-cases.en";

export type WebsiteCase = {
  slug: string;
  client: string;
  url?: string;
  scope: string;
  shortDescription: string;
  heroImage: string;
  gallery: string[];
  challenge: string[];
  solution: string[];
  highlights: string[];
};

export const websitesCases: WebsiteCase[] = [
  {
    slug: "boteco-dona-luzia",
    client: "Boteco Dona Luzia",
    scope: "Website + SEO Local + Menu Digital",
    shortDescription:
      "Site otimizado para SEO local em Lisboa, com páginas dedicadas para cada unidade e menu digital integrado por QR Code nas mesas.",
    heroImage: "/cases-img/websites/boteco-dona-luzia-hero.webp",
    gallery: [
      "/cases-img/websites/boteco-dona-luzia-hero.webp",
      "/cases-img/websites/boteco-dona-luzia-1.webp",
      "/cases-img/websites/boteco-dona-luzia-2.webp",
    ],
    challenge: [
      "O Boteco Dona Luzia não precisava apenas de um site — precisava de uma plataforma que representasse a marca, gerasse visibilidade no Google e apoiasse campanhas de tráfego.",
      "Mais do que isso: o digital tinha que servir o físico, ajudando dentro do próprio restaurante.",
    ],
    solution: [
      "Otimização para pesquisas locais como “restaurante brasileiro Lisboa”",
      "Páginas dedicadas para cada uma das 3 unidades do grupo",
      "Performance: navegação rápida com botões de ação claros (reservar, visitar, contactar)",
      "Menu digital acessível por QR Code nas mesas, com atualização centralizada",
      "Integração com identidade visual e campanhas de tráfego pago",
    ],
    highlights: [
      "Site institucional virou ferramenta funcional",
      "SEO local trabalhando para o grupo todo",
      "Menu digital reduz fricção no atendimento",
    ],
  },
  {
    slug: "active-body",
    client: "Active Body",
    url: "https://goactivebody.pt",
    scope: "Website + SEO + Performance 100",
    shortDescription:
      "Site de alta performance com 100% no Lighthouse, totalmente otimizado para SEO orgânico e preparado para campanhas de Google Ads e Meta.",
    heroImage: "/cases-img/websites/active-body-hero.webp",
    gallery: [
      "/cases-img/websites/active-body-hero.webp",
      "/cases-img/websites/active-body-1.webp",
      "/cases-img/websites/active-body-mobile.webp",
    ],
    challenge: [
      "O Active Body precisava de uma presença digital que não fosse apenas institucional — mas uma ferramenta ativa de aquisição de novos alunos para o ginásio em Quarteira/Vilamoura.",
      "Apresentar a metodologia de treino e converter visitantes em leads, com base sólida para receber tráfego pago.",
    ],
    solution: [
      "Tecnologia moderna com 100% de performance no Lighthouse",
      "Estrutura de páginas otimizada para SEO local no Algarve",
      "Palavras-chave estratégicas para o mercado de treino personalizado",
      "Tracking completo preparado para Google Ads e Meta Ads",
      "Análise de dados contínua para otimização do funil de conversão",
    ],
    highlights: [
      "100% Lighthouse em todas as métricas",
      "Pronto para tráfego pago desde o dia 1",
      "Posicionamento orgânico no Google",
    ],
  },
  {
    slug: "desentuup-clean",
    client: "Desentuup Clean",
    url: "https://desentuupclean.pt",
    scope: "Website + SEO + Conversão Direta",
    shortDescription:
      "Site profissional com SEO completo, focado em ranqueamento orgânico e conversão direta via WhatsApp e telefone.",
    heroImage: "/cases-img/websites/desentuup-clean-hero.webp",
    gallery: [
      "/cases-img/websites/desentuup-clean-hero.webp",
      "/cases-img/websites/desentuup-clean-1.webp",
      "/cases-img/websites/desentuup-clean-mobile.webp",
    ],
    challenge: [
      "A Desentuup Clean precisava de visibilidade digital para captar clientes em Portugal. Sem presença online estruturada, perdia oportunidades para concorrentes que já apareciam nos resultados de pesquisa do Google.",
    ],
    solution: [
      "Website completo com design profissional e estrutura clara para todos os serviços",
      "Foco em velocidade, usabilidade e conversão direta",
      "SEO completo: palavras-chave, meta tags, estrutura de URLs e conteúdo orientado a ranqueamento",
      "Conversão direta para WhatsApp e telefone — caminho curto até o contacto",
    ],
    highlights: [
      "Posicionamento orgânico em pesquisas como “desentupimentos Portugal”",
      "Conversão imediata via WhatsApp",
      "Estrutura preparada para escalar com tráfego pago",
    ],
  },
];

/** Merges the English text overlay (websites-cases.en.ts) onto a base case. */
function localizeWebsiteCase(base: WebsiteCase, locale: Locale): WebsiteCase {
  if (locale !== "en") return base;
  const t = websitesCasesEn[base.slug];
  if (!t) return base;
  return {
    ...base,
    scope: t.scope ?? base.scope,
    shortDescription: t.shortDescription ?? base.shortDescription,
    challenge: t.challenge ?? base.challenge,
    solution: t.solution ?? base.solution,
    highlights: t.highlights ?? base.highlights,
  };
}

export function getWebsiteCases(locale: Locale): WebsiteCase[] {
  return websitesCases.map((c) => localizeWebsiteCase(c, locale));
}

export function getWebsiteCase(
  slug: string,
  locale: Locale,
): WebsiteCase | undefined {
  const base = websitesCases.find((c) => c.slug === slug);
  return base ? localizeWebsiteCase(base, locale) : undefined;
}
