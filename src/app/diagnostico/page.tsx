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
import { diagnosticoCopy } from "@/data/diagnostico-copy";

const VARIANT = "diagnostico-lp";

export const metadata: Metadata = {
  title: "Diagnóstico do seu negócio | Fyze",
  description:
    "Identifique onde o seu negócio está a perder clientes no digital. Análise direta, sem call comercial — você sai com clareza, mesmo que não avance connosco.",
  openGraph: {
    title: "Diagnóstico do seu negócio | Fyze",
    description:
      "Identifique onde o seu negócio está a perder clientes no digital.",
    type: "website",
  },
};

export default function DiagnosticoPage() {
  return (
    <ContactModalProvider variant={VARIANT}>
      <main className="bg-zinc-950 min-h-screen" data-page="diagnostico-lp">
        <Navbar />
        <DiagnosticoHero copy={diagnosticoCopy.hero} />
        <DiagnosticoRealidade copy={diagnosticoCopy.realidade} />
        <DiagnosticoParaQuem copy={diagnosticoCopy.paraQuem} />
        <DiagnosticoOqueAcontece copy={diagnosticoCopy.oQueAcontece} />
        <DiagnosticoComoFunciona copy={diagnosticoCopy.comoFunciona} />
        <DiagnosticoExperiencia copy={diagnosticoCopy.experiencia} />
        <DiagnosticoDiferencial copy={diagnosticoCopy.diferencial} />
        <Filtro
          headline={diagnosticoCopy.filtroFinal.headline}
          body={diagnosticoCopy.filtroFinal.body}
        />
        <DiagnosticoForm copy={diagnosticoCopy.finalCta} />
        <Footer />
        <WhatsAppButton variant={VARIANT} />
      </main>
    </ContactModalProvider>
  );
}
