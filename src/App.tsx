import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Clients } from "./components/Clients";
import { Services } from "./components/Services";
import { Showcase } from "./components/Showcase";
import { RiskFreeOffer } from "./components/RiskFreeOffer";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { FloatingModel } from "./components/FloatingModel";

export default function App() {
  return (
    <main className="bg-zinc-950 min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Clients />
      <RiskFreeOffer />
      <Showcase />
      <About />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <FloatingModel />
    </main>
  );
}

