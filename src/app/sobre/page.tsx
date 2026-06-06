import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ContactModalProvider } from "@/components/ContactModal";
import { SobreHero } from "@/components/sobre/Hero";
import { SobreRealidade } from "@/components/sobre/Realidade";
import { SobreComoPensamos } from "@/components/sobre/ComoPensamos";
import { SobreBastidores } from "@/components/sobre/Bastidores";
import { SobreExperiencia } from "@/components/sobre/Experiencia";
import { Filtro } from "@/components/shared/Filtro";
import { SobreFinalCta } from "@/components/sobre/FinalCta";
import { getSobreCopy } from "@/data/sobre-copy";
import { getUICopy } from "@/data/ui-copy";
import { getLocale } from "@/lib/locale.server";

const VARIANT = "sobre-lp";

export async function generateMetadata(): Promise<Metadata> {
  const ui = getUICopy(await getLocale());
  return {
    title: ui.meta.sobre.title,
    description: ui.meta.sobre.description,
    openGraph: {
      title: ui.meta.sobre.ogTitle,
      description: ui.meta.sobre.ogDescription,
      type: "website",
    },
  };
}

export default async function SobrePage() {
  const locale = await getLocale();
  const copy = getSobreCopy(locale);

  return (
    <ContactModalProvider variant={VARIANT}>
      <main className="bg-zinc-950 min-h-screen" data-page="sobre-lp">
        <Navbar />
        <SobreHero copy={copy.hero} />
        <SobreRealidade copy={copy.realidade} />
        <SobreComoPensamos copy={copy.comoPensamos} />
        <SobreBastidores copy={copy.bastidores} />
        <SobreExperiencia copy={copy.experiencia} />
        <Filtro
          headline={copy.filtro.headline}
          body={copy.filtro.body}
        />
        <SobreFinalCta copy={copy.finalCta} />
        <Footer />
        <WhatsAppButton variant={VARIANT} />
      </main>
    </ContactModalProvider>
  );
}
