"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowLeft, Play } from "lucide-react";
import type { CaseStudy } from "@/data/cases";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

function CaseVideo({ src, poster }: { src: string; poster: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [showOverlay, setShowOverlay] = useState(true);

  return (
    <div className="relative group">
      <video
        ref={ref}
        src={src}
        poster={poster}
        controls
        playsInline
        preload="none"
        onPlay={(e) => {
          setShowOverlay(false);
          const me = e.currentTarget;
          document.querySelectorAll("video").forEach((v) => {
            if (v !== me && !v.paused) v.pause();
          });
        }}
        onPause={() => setShowOverlay(true)}
        onEnded={() => setShowOverlay(true)}
        className="w-full h-auto rounded-2xl bg-zinc-900 border border-white/5"
      />
      {showOverlay && (
        <button
          type="button"
          onClick={() => ref.current?.play()}
          aria-label="Reproduzir vídeo"
          className="absolute inset-0 flex items-center justify-center bg-black/15 hover:bg-black/25 transition-colors rounded-2xl"
        >
          <span className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-fyze/95 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
            <Play className="w-6 h-6 sm:w-8 sm:h-8 text-zinc-950 fill-zinc-950 translate-x-0.5" />
          </span>
        </button>
      )}
    </div>
  );
}

export function CaseStudyContent({ caseData }: { caseData: CaseStudy }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [caseData.slug]);

  return (
    <main className="bg-zinc-950 min-h-screen">
      <section className="pt-12 sm:pt-16 pb-16 sm:pb-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-10 sm:mb-14"
          >
            <Link
              href="/#showcase"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors font-bold text-sm uppercase tracking-widest"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para cases
            </Link>
          </motion.div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 sm:mb-14 gap-6">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-none text-white"
              style={{ transform: "scaleY(1.1)", transformOrigin: "bottom" }}
            >
              {caseData.client}
            </motion.h1>

            {caseData.website && (
              <motion.a
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                href={caseData.website}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-bold hover:bg-white hover:text-zinc-950 transition-colors text-sm sm:text-base"
              >
                Ir para website
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full aspect-video rounded-3xl overflow-hidden bg-zinc-900"
          >
            {caseData.heroFit === "contain" && (
              <div
                aria-hidden
                className="absolute inset-0 bg-center bg-cover blur-2xl scale-110 opacity-40"
                style={{ backgroundImage: `url(${caseData.heroImage})` }}
              />
            )}
            <img
              src={caseData.heroImage}
              alt={caseData.client}
              className={`relative w-full h-full ${
                caseData.heroFit === "contain"
                  ? "object-contain"
                  : "object-cover object-top"
              }`}
              loading="eager"
            />
          </motion.div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-start h-16 sm:h-20 px-5 sm:px-6 rounded-xl bg-zinc-900/80 border border-white/10 backdrop-blur-sm mb-6 sm:mb-8">
                <img
                  src={caseData.logo}
                  alt={`${caseData.client} logo`}
                  className="max-h-10 sm:max-h-12 w-auto object-contain"
                />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-5 tracking-tight">
                Desafio
              </h2>
              <p className="text-zinc-400 text-base sm:text-lg leading-relaxed font-medium">
                {caseData.challenge}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-5 tracking-tight">
                Abordagem
              </h2>
              <p className="text-zinc-400 text-base sm:text-lg leading-relaxed font-medium">
                {caseData.approach}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-lg font-black text-white mb-1">Cliente</h3>
                <p className="text-zinc-400 font-medium">{caseData.client}</p>
              </div>
              <div>
                <h3 className="text-lg font-black text-white mb-1">Ano</h3>
                <p className="text-zinc-400 font-medium">{caseData.year}</p>
              </div>
              <div>
                <h3 className="text-lg font-black text-white mb-1">
                  Nicho/Setor
                </h3>
                <p className="text-zinc-400 font-medium">{caseData.sector}</p>
              </div>
              <div>
                <h3 className="text-lg font-black text-white mb-1">Escopo</h3>
                {caseData.scope.map((s) => (
                  <p key={s} className="text-zinc-400 font-medium">
                    {s}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {caseData.services.length > 0 && (
        <section className="pb-20 sm:pb-28">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-14 sm:mb-20 tracking-tight"
            >
              O que fizemos
            </motion.h2>

            <div className="space-y-24 sm:space-y-32">
              {caseData.services.map((service, i) => {
                const hasMediaArray = service.media && service.media.length > 0;
                const hasSingleImage = !hasMediaArray && service.image;
                const sideBySide = hasSingleImage; // single image fica lado-a-lado
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7 }}
                    className={
                      sideBySide
                        ? "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
                        : ""
                    }
                  >
                    <div className={sideBySide && i % 2 !== 0 ? "lg:order-2" : ""}>
                      <span className="text-fyze text-sm font-black uppercase tracking-widest mb-3 block">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black text-white mb-5 tracking-tight">
                        {service.title}
                      </h3>
                      <p
                        className={`text-zinc-400 text-base sm:text-lg leading-relaxed font-medium ${
                          sideBySide ? "" : "max-w-3xl"
                        }`}
                      >
                        {service.description}
                      </p>
                    </div>

                    {hasSingleImage && (
                      <div
                        className={`rounded-3xl overflow-hidden bg-zinc-900 ${
                          i % 2 !== 0 ? "lg:order-1" : ""
                        }`}
                      >
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-auto object-cover"
                          loading="lazy"
                        />
                      </div>
                    )}

                    {hasMediaArray && (() => {
                      const len = service.media!.length;
                      const gridCols =
                        len === 1
                          ? "grid-cols-1"
                          : len === 2
                          ? "grid-cols-1 sm:grid-cols-2"
                          : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
                      return (
                        <div className={`mt-8 sm:mt-10 grid gap-4 sm:gap-6 ${gridCols}`}>
                          {service.media!.map((m, mi) => {
                            const isVideo = typeof m === "object";
                            const wide = isVideo && m.wide;
                            return (
                              <div key={mi} className={wide ? "sm:col-span-full" : ""}>
                                {isVideo ? (
                                  <CaseVideo src={m.src} poster={m.poster} />
                                ) : (
                                  <img
                                    src={m}
                                    alt={`${service.title} ${mi + 1}`}
                                    loading="lazy"
                                    className="w-full h-auto rounded-2xl bg-zinc-900 border border-white/5"
                                  />
                                )}
                              </div>
                            );
                          })}
                        </div>
                      );
                    })()}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {caseData.results && (
        <section className="pb-20 sm:pb-28">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-10 tracking-tight">
                Resultados
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {caseData.results.map((result, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="p-6 rounded-2xl bg-zinc-900 border border-white/5"
                  >
                    <p className="text-white font-bold text-base leading-snug">
                      {result}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      <section className="pb-20 sm:pb-28">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-zinc-400 text-lg sm:text-xl leading-relaxed font-medium"
          >
            {caseData.description}
          </motion.p>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/#showcase"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-bold hover:bg-white hover:text-zinc-950 transition-colors text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para cases
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
