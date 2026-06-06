export const WHATSAPP_NUMBER = "351915709951";

export const WHATSAPP_MESSAGE = `Olá, vim pelo site da Fyze.

Quero identificar onde o meu negócio está a perder oportunidades no digital e perceber como posso gerar mais clientes de forma previsível.`;

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

/** Builds a wa.me URL with a locale-specific prefilled message. */
export function buildWhatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
