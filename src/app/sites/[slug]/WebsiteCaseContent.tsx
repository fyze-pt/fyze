"use client";

import Link from "next/link";
import { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, ExternalLink, Check, Sparkles } from "lucide-react";
import type { WebsiteCase } from "@/data/websites-cases";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useLocale } from "@/components/LocaleProvider";
import { trackEvent } from "@/lib/analytics";

const VARIANT = "site-case";

export function WebsiteCaseContent({ caseData }: { caseData: WebsiteCase }) {
  const { ui } = useLocale();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [caseData.slug]);

  return (
    <main className="bg-zinc-950 min-h-screen">
      <Navbar />

      <section className="pt-28 sm:pt-32 pb-12 sm:pb-16 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-fyze/8 rounded-full blur-[140px] mix-blend-screen pointer-events-none" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8 sm:mb-12"
          >
            <Link
              href="/criacao-de-websites"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors font-bold text-xs sm:text-sm uppercase tracking-widest"
            >
              <ArrowLeft className="w-4 h-4" />
              {ui.websiteCase.backToWebsites}
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-10 sm:mb-14">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <p className="text-fyze text-xs sm:text-sm font-black uppercase tracking-widest mb-4">
                {caseData.scope}
              </p>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.95] text-white mb-6">
                {caseData.client}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-zinc-300 font-medium leading-snug max-w-2xl text-pretty">
                {caseData.shortDescription}
              </p>
            </motion.div>

            {caseData.url && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-5 lg:pt-4"
              >
                <a
                  href={caseData.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent("case_view", {
                      slug: caseData.slug,
                      client: caseData.client,
                      location: "site_case_visit",
                      variant: VARIANT,
                    })
                  }
                  className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-zinc-900 border border-fyze/40 text-white px-6 sm:px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest transition-all hover:bg-fyze hover:text-zinc-950 hover:border-fyze hover:shadow-[0_0_40px_rgba(0,240,255,0.35)]"
                >
                  {ui.websiteCase.visitSite}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl"
          >
            <img
              src={caseData.heroImage}
              alt={`Site ${caseData.client}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-zinc-950 border-t border-white/5">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-fyze text-xs font-black uppercase tracking-widest mb-4">
              {ui.websiteCase.challenge}
            </p>
            <div className="space-y-4">
              {caseData.challenge.map((p, i) => (
                <p
                  key={i}
                  className="text-base sm:text-lg text-zinc-300 font-medium leading-relaxed text-pretty"
                >
                  {p}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-fyze text-xs font-black uppercase tracking-widest mb-4">
              {ui.websiteCase.solution}
            </p>
            <ul className="space-y-3">
              {caseData.solution.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base text-white font-medium leading-snug"
                >
                  <Check className="w-5 h-5 text-fyze shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {caseData.gallery.length > 1 && (
        <section className="py-16 sm:py-24 bg-zinc-900 border-t border-white/5">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-fyze text-xs font-black uppercase tracking-widest mb-8 text-center">
              {ui.websiteCase.gallery}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-start">
              {caseData.gallery.slice(1).map((src, i) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="rounded-2xl overflow-hidden bg-zinc-950 border border-white/10"
                >
                  <img
                    src={src}
                    alt={`Site ${caseData.client} ${i + 1}`}
                    loading="lazy"
                    className="block w-full h-auto"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 sm:py-24 bg-zinc-950 border-t border-white/5">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-900/60 border border-fyze/30 rounded-3xl p-8 sm:p-10">
            <p className="text-fyze text-xs font-black uppercase tracking-widest mb-5 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              {ui.websiteCase.highlights}
            </p>
            <ul className="space-y-3">
              {caseData.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-3 text-base sm:text-lg text-white font-medium leading-snug"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-fyze mt-2.5 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-28 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-fyze/10 rounded-full blur-[160px] mix-blend-screen pointer-events-none" />

        <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.95] text-white mb-6 text-balance">
            {ui.websiteCase.finalTitle}
          </h2>
          <p className="text-lg sm:text-xl text-zinc-300 font-medium leading-snug mb-10 max-w-2xl mx-auto text-pretty">
            {ui.websiteCase.finalSubtitle}
          </p>
          <Link
            href="/diagnostico"
            onClick={() =>
              trackEvent("cta_click", {
                location: "site_case_final",
                slug: caseData.slug,
                variant: VARIANT,
              })
            }
            className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-fyze text-zinc-950 px-8 sm:px-12 py-5 sm:py-6 rounded-full text-sm md:text-base font-black uppercase tracking-[0.16em] sm:tracking-widest transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(0,240,255,0.5)]"
          >
            {ui.websiteCase.finalCta}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton variant={VARIANT} />
    </main>
  );
}
