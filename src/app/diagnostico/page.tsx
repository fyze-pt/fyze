import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ContactModalProvider } from "@/components/ContactModal";
import { DiagnosticoHero } from "@/components/diagnostico/Hero";
import { DiagnosticoRealidade } from "@/components/diagnostico/Realidade";
import { DiagnosticoParaQuem } from "@/components/diagnostico/ParaQuem";
import { DiagnosticoOqueAcontece } from "@/components/diagnostico/OqueAcontece";
import { DiagnosticoComoFunciona } from "@/components/diagnostico/ComoFunciona";
import { DiagnosticoExperiencia } from "@/components/diagnostico/Experiencia";
import { DiagnosticoDiferencial } from "@/components/diagnostico/Diferencial";
import { Filtro } from "@/components/shared/Filtro";
import { DiagnosticoForm } from "@/components/diagnostico/Form";
import { getDiagnosticoCopy } from "@/data/diagnostico-copy";
import { getLocale } from "@/lib/locale.server";
import { getUICopy } from "@/data/ui-copy";

const VARIANT = "diagnostico-lp";

export async function generateMetadata(): Promise<Metadata> {
  const ui = getUICopy(await getLocale());
  return {
    title: ui.meta.diagnostico.title,
    description: ui.meta.diagnostico.description,
    openGraph: {
      title: ui.meta.diagnostico.ogTitle,
      description: ui.meta.diagnostico.ogDescription,
      type: "website",
    },
  };
}

export default async function DiagnosticoPage() {
  const locale = await getLocale();
  const copy = getDiagnosticoCopy(locale);

  return (
    <ContactModalProvider variant={VARIANT}>
      <main className="bg-zinc-950 min-h-screen" data-page="diagnostico-lp">
        <Navbar />
        <DiagnosticoHero copy={copy.hero} />
        <DiagnosticoRealidade copy={copy.realidade} />
        <DiagnosticoParaQuem copy={copy.paraQuem} />
        <DiagnosticoOqueAcontece copy={copy.oQueAcontece} />
        <DiagnosticoComoFunciona copy={copy.comoFunciona} />
        <DiagnosticoExperiencia copy={copy.experiencia} />
        <DiagnosticoDiferencial copy={copy.diferencial} />
        <Filtro
          headline={copy.filtroFinal.headline}
          body={copy.filtroFinal.body}
        />
        <DiagnosticoForm copy={copy.finalCta} />
        <Footer />
        <WhatsAppButton variant={VARIANT} />
      </main>
    </ContactModalProvider>
  );
}
