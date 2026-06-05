import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ContactModalProvider } from "@/components/ContactModal";
import { MetodoHero } from "@/components/metodo/Hero";
import { MetodoVerdadeMercado } from "@/components/metodo/VerdadeMercado";
import { MetodoErroCustaCaro } from "@/components/metodo/ErroCustaCaro";
import { MetodoMetodoFyze } from "@/components/metodo/MetodoFyze";
import { MetodoOrdemImporta } from "@/components/metodo/OrdemImporta";
import { MetodoFazCerto } from "@/components/metodo/FazCerto";
import { MetodoContraMercado } from "@/components/metodo/ContraMercado";
import { Filtro } from "@/components/shared/Filtro";
import { MetodoFinalCta } from "@/components/metodo/FinalCta";
import { metodoCopy } from "@/data/metodo-copy";

const VARIANT = "metodo-lp";

export const metadata: Metadata = {
  title: "Método Fyze | Sistema de aquisição de clientes",
  description:
    "Pare de perder. Comece a converter. Escale com controlo. O sistema completo da Fyze para gerar clientes com consistência no digital.",
  openGraph: {
    title: "Método Fyze | Sistema de aquisição de clientes",
    description:
      "Pare de perder. Comece a converter. Escale com controlo.",
    type: "website",
  },
};

export default function MetodoPage() {
  return (
    <ContactModalProvider variant={VARIANT}>
      <main className="bg-zinc-950 min-h-screen" data-page="metodo-lp">
        <Navbar />
        <MetodoHero copy={metodoCopy.hero} />
        <MetodoVerdadeMercado copy={metodoCopy.verdadeMercado} />
        <MetodoErroCustaCaro copy={metodoCopy.erroCustaCaro} />
        <MetodoMetodoFyze copy={metodoCopy.metodoFyze} />
        <MetodoOrdemImporta copy={metodoCopy.ordemImporta} />
        <MetodoFazCerto copy={metodoCopy.fazCerto} />
        <MetodoContraMercado copy={metodoCopy.contraMercado} />
        <Filtro
          headline={metodoCopy.filtro.headline}
          body={metodoCopy.filtro.body}
        />
        <MetodoFinalCta copy={metodoCopy.finalCta} />
        <Footer />
        <WhatsAppButton variant={VARIANT} />
      </main>
    </ContactModalProvider>
  );
}
