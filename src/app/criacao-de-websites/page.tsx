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
import { getWebsitesCopy } from "@/data/websites-copy";
import { getLocale } from "@/lib/locale.server";
import { getUICopy } from "@/data/ui-copy";

const VARIANT = "websites-lp";

export async function generateMetadata(): Promise<Metadata> {
  const ui = getUICopy(await getLocale());
  return {
    title: ui.meta.websites.title,
    description: ui.meta.websites.description,
    openGraph: {
      title: ui.meta.websites.ogTitle,
      description: ui.meta.websites.ogDescription,
      type: "website",
    },
  };
}

export default async function CriacaoDeWebsitesPage() {
  const locale = await getLocale();
  const copy = getWebsitesCopy(locale);

  return (
    <ContactModalProvider variant={VARIANT}>
      <SiteFormModalProvider variant={VARIANT}>
      <main className="bg-zinc-950 min-h-screen" data-page="websites-lp">
        <Navbar />
        <WebsitesHero copy={copy.hero} />
        <BeliefBreaker copy={copy.beliefBreaker} />
        <WebsitesReposicionamento copy={copy.reposicionamento} />
        <WebsitesMecanismo copy={copy.mecanismo} />
        <WebsitesCasesIntro copy={copy.casesIntro} />
        <WebsitesCases />
        <WebsitesCasesClosing copy={copy.casesIntro} />
        <WebsitesFaq copy={copy.faq} />
        <WebsitesOfertaFinal copy={copy.ofertaFinal} />
        <Footer />
        <WhatsAppButton variant={VARIANT} />
      </main>
      </SiteFormModalProvider>
    </ContactModalProvider>
  );
}
