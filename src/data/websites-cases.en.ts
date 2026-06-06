export type WebsiteCaseTextOverlay = {
  scope?: string;
  shortDescription?: string;
  challenge?: string[];
  solution?: string[];
  highlights?: string[];
};

export const websitesCasesEn: Record<string, WebsiteCaseTextOverlay> = {
  "boteco-dona-luzia": {
    scope: "Website + Local SEO + Digital Menu",
    shortDescription:
      "A website optimized for local SEO in Lisbon, with dedicated pages for each location and a digital menu integrated via QR Code at the tables.",
    challenge: [
      "Boteco Dona Luzia didn't just need a website — it needed a platform that would represent the brand, generate visibility on Google, and support traffic campaigns.",
      "More than that: the digital had to serve the physical, helping right inside the restaurant itself.",
    ],
    solution: [
      "Optimization for local searches such as \"Brazilian restaurant Lisbon\"",
      "Dedicated pages for each of the group's 3 locations",
      "Performance: fast navigation with clear action buttons (book, visit, contact)",
      "A digital menu accessible by QR Code at the tables, with centralized updates",
      "Integration with visual identity and paid traffic campaigns",
    ],
    highlights: [
      "An institutional website turned into a functional tool",
      "Local SEO working for the entire group",
      "A digital menu that reduces friction in service",
    ],
  },
  "active-body": {
    scope: "Website + SEO + Performance 100",
    shortDescription:
      "A high-performance website scoring 100% on Lighthouse, fully optimized for organic SEO and ready for Google Ads and Meta campaigns.",
    challenge: [
      "Active Body needed a digital presence that wasn't merely institutional — but an active tool for acquiring new members for the gym in Quarteira/Vilamoura.",
      "To present the training methodology and convert visitors into leads, with a solid foundation to receive paid traffic.",
    ],
    solution: [
      "Modern technology with 100% performance on Lighthouse",
      "A page structure optimized for local SEO in the Algarve",
      "Strategic keywords for the personal training market",
      "Complete tracking ready for Google Ads and Meta Ads",
      "Continuous data analysis to optimize the conversion funnel",
    ],
    highlights: [
      "100% Lighthouse across all metrics",
      "Ready for paid traffic from day 1",
      "Organic positioning on Google",
    ],
  },
  "desentuup-clean": {
    scope: "Website + SEO + Direct Conversion",
    shortDescription:
      "A professional website with complete SEO, focused on organic ranking and direct conversion via WhatsApp and phone.",
    challenge: [
      "Desentuup Clean needed digital visibility to capture clients in Portugal. Without a structured online presence, it was losing opportunities to competitors who already appeared in Google search results.",
    ],
    solution: [
      "A complete website with professional design and a clear structure for every service",
      "A focus on speed, usability, and direct conversion",
      "Complete SEO: keywords, meta tags, URL structure, and ranking-oriented content",
      "Direct conversion to WhatsApp and phone — a short path to contact",
    ],
    highlights: [
      "Organic positioning for searches such as \"drain unclogging Portugal\"",
      "Immediate conversion via WhatsApp",
      "A structure ready to scale with paid traffic",
    ],
  },
};
