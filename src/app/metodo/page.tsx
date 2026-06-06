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
import { getMetodoCopy } from "@/data/metodo-copy";
import { getLocale } from "@/lib/locale.server";
import { getUICopy } from "@/data/ui-copy";

const VARIANT = "metodo-lp";

export async function generateMetadata(): Promise<Metadata> {
  const ui = getUICopy(await getLocale());
  return {
    title: ui.meta.metodo.title,
    description: ui.meta.metodo.description,
    openGraph: {
      title: ui.meta.metodo.ogTitle,
      description: ui.meta.metodo.ogDescription,
      type: "website",
    },
  };
}

export default async function MetodoPage() {
  const locale = await getLocale();
  const copy = getMetodoCopy(locale);

  return (
    <ContactModalProvider variant={VARIANT}>
      <main className="bg-zinc-950 min-h-screen" data-page="metodo-lp">
        <Navbar />
        <MetodoHero copy={copy.hero} />
        <MetodoVerdadeMercado copy={copy.verdadeMercado} />
        <MetodoErroCustaCaro copy={copy.erroCustaCaro} />
        <MetodoMetodoFyze copy={copy.metodoFyze} />
        <MetodoOrdemImporta copy={copy.ordemImporta} />
        <MetodoFazCerto copy={copy.fazCerto} />
        <MetodoContraMercado copy={copy.contraMercado} />
        <Filtro
          headline={copy.filtro.headline}
          body={copy.filtro.body}
        />
        <MetodoFinalCta copy={copy.finalCta} />
        <Footer />
        <WhatsAppButton variant={VARIANT} />
      </main>
    </ContactModalProvider>
  );
}
