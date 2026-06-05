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
import { sobreCopy } from "@/data/sobre-copy";

const VARIANT = "sobre-lp";

export const metadata: Metadata = {
  title: "Sobre a Fyze | Não somos uma agência tradicional",
  description:
    "A Fyze nasceu para resolver um problema simples: negócios que investem no digital, mas não crescem. Construímos sistemas, não fazemos marketing por fazer.",
  openGraph: {
    title: "Sobre a Fyze",
    description:
      "Não somos uma agência tradicional. E isso é intencional.",
    type: "website",
  },
};

export default function SobrePage() {
  return (
    <ContactModalProvider variant={VARIANT}>
      <main className="bg-zinc-950 min-h-screen" data-page="sobre-lp">
        <Navbar />
        <SobreHero copy={sobreCopy.hero} />
        <SobreRealidade copy={sobreCopy.realidade} />
        <SobreComoPensamos copy={sobreCopy.comoPensamos} />
        <SobreBastidores copy={sobreCopy.bastidores} />
        <SobreExperiencia copy={sobreCopy.experiencia} />
        <Filtro
          headline={sobreCopy.filtro.headline}
          body={sobreCopy.filtro.body}
        />
        <SobreFinalCta copy={sobreCopy.finalCta} />
        <Footer />
        <WhatsAppButton variant={VARIANT} />
      </main>
    </ContactModalProvider>
  );
}
