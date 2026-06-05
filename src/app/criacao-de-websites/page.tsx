import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ContactModalProvider } from "@/components/ContactModal";
import { SiteFormModalProvider } from "@/components/SiteFormModal";
import { BeliefBreaker } from "@/components/BeliefBreaker";
import { WebsitesCases } from "@/components/websites/WebsitesCases";
import { WebsitesHero } from "@/components/websites/Hero";
import { WebsitesReposicionamento } from "@/components/websites/Reposicionamento";
import { WebsitesMecanismo } from "@/components/websites/Mecanismo";
import {
  WebsitesCasesIntro,
  WebsitesCasesClosing,
} from "@/components/websites/CasesIntro";
import { WebsitesFaq } from "@/components/websites/Faq";
import { WebsitesOfertaFinal } from "@/components/websites/OfertaFinal";
import { websitesCopy } from "@/data/websites-copy";

const VARIANT = "websites-lp";

export const metadata: Metadata = {
  title: "Criação de Websites | Fyze — Você só paga se gostar",
  description:
    "A Fyze cria a primeira versão completa do seu site antes de você pagar. Estrutura focada em conversão. Sem risco. Se não gostar, não paga.",
  openGraph: {
    title: "Criação de Websites | Fyze",
    description:
      "Você vê a primeira versão do seu site antes de pagar. Estrutura pensada pra gerar clientes.",
    type: "website",
  },
};

export default function CriacaoDeWebsitesPage() {
  return (
    <ContactModalProvider variant={VARIANT}>
      <SiteFormModalProvider variant={VARIANT}>
      <main className="bg-zinc-950 min-h-screen" data-page="websites-lp">
        <Navbar />
        <WebsitesHero copy={websitesCopy.hero} />
        <BeliefBreaker copy={websitesCopy.beliefBreaker} />
        <WebsitesReposicionamento copy={websitesCopy.reposicionamento} />
        <WebsitesMecanismo copy={websitesCopy.mecanismo} />
        <WebsitesCasesIntro copy={websitesCopy.casesIntro} />
        <WebsitesCases />
        <WebsitesCasesClosing copy={websitesCopy.casesIntro} />
        <WebsitesFaq copy={websitesCopy.faq} />
        <WebsitesOfertaFinal copy={websitesCopy.ofertaFinal} />
        <Footer />
        <WhatsAppButton variant={VARIANT} />
      </main>
      </SiteFormModalProvider>
    </ContactModalProvider>
  );
}
