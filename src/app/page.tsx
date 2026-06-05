import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BeliefBreaker } from "@/components/BeliefBreaker";
import { RealProblem } from "@/components/RealProblem";
import { Method } from "@/components/Method";
import { MethodClose } from "@/components/MethodClose";
import { Showcase } from "@/components/Showcase";
import { FaqAntiAgency } from "@/components/FaqAntiAgency";
import { Clients } from "@/components/Clients";
import { RiskFreeOffer } from "@/components/RiskFreeOffer";
import { Authority } from "@/components/Authority";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FloatingModel } from "@/components/FloatingModel";
import { ContactModalProvider } from "@/components/ContactModal";
import { SiteFormModalProvider } from "@/components/SiteFormModal";
import { getVariant } from "@/lib/variant";
import { getHomeCopy } from "@/data/home-copy";

export const dynamic = "force-dynamic";

export default async function Home() {
  const variant = await getVariant();
  const copy = getHomeCopy(variant);

  return (
    <ContactModalProvider variant={variant}>
      <SiteFormModalProvider variant={variant}>
      <main className="bg-zinc-950 min-h-screen" data-variant={variant}>
        <Navbar />
        <Hero copy={copy} variant={variant} />
        <BeliefBreaker copy={copy.beliefBreaker} />
        <RealProblem copy={copy.realProblem} />
        <Method copy={copy.method} />
        <MethodClose copy={copy.methodClose} variant={variant} />
        <Showcase />
        <FaqAntiAgency />
        <Clients />
        <RiskFreeOffer copy={copy.riskFree} variant={variant} />
        <Authority copy={copy.authority} />
        <FinalCta copy={copy.finalCta} variant={variant} />
        <Footer />
        <WhatsAppButton variant={variant} />
        <FloatingModel />
      </main>
      </SiteFormModalProvider>
    </ContactModalProvider>
  );
}
