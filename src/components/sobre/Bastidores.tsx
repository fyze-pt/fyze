"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { SobreCopy } from "@/data/sobre-copy";

const BASTIDORES_IMAGES = [
  {
    src: "/cases-img/sobre/making-of.webp",
    alt: "Making of — equipa Fyze em produção",
  },
  {
    src: "/cases-img/sobre/producao-video-1.webp",
    alt: "Produção de vídeo em estúdio",
  },
  {
    src: "/cases-img/sobre/producao-imagens.webp",
    alt: "Produção de imagens",
  },
  {
    src: "/cases-img/sobre/producao-video-2.webp",
    alt: "Produção de vídeo em campo",
  },
  {
    src: "/cases-img/sobre/producao-video-3.webp",
    alt: "Bastidores de gravação",
  },
];

const AUTO_SCROLL_PX_PER_SEC = 50;
const PAUSE_AFTER_INTERACTION_MS = 5000;

export function SobreBastidores({
  copy,
}: {
  copy: SobreCopy["bastidores"];
}) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dragStateRef = useRef({
    isDown: false,
    startX: 0,
    startScroll: 0,
  });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let rafId = 0;
    let last = performance.now();

    const tick = (ts: number) => {
      const dt = ts - last;
      last = ts;
      if (!pausedRef.current && !draggingRef.current) {
        const px = (AUTO_SCROLL_PX_PER_SEC * dt) / 1000;
        track.scrollLeft += px;
        const half = track.scrollWidth / 2;
        if (track.scrollLeft >= half) track.scrollLeft -= half;
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const pauseTemporarily = (ms = PAUSE_AFTER_INTERACTION_MS) => {
    pausedRef.current = true;
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    pauseTimerRef.current = setTimeout(() => {
      pausedRef.current = false;
    }, ms);
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;
    dragStateRef.current = {
      isDown: true,
      startX: e.clientX,
      startScroll: track.scrollLeft,
    };
    draggingRef.current = true;
    track.classList.add("cursor-grabbing");
    track.classList.remove("cursor-grab");
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    const s = dragStateRef.current;
    if (!track || !s.isDown) return;
    const dx = e.clientX - s.startX;
    track.scrollLeft = s.startScroll - dx;
  };

  const endDrag = () => {
    const track = trackRef.current;
    if (track) {
      track.classList.remove("cursor-grabbing");
      track.classList.add("cursor-grab");
    }
    dragStateRef.current.isDown = false;
    draggingRef.current = false;
    pauseTemporarily();
  };

  const scrollByCard = (direction: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-bastidores-card]");
    const cardWidth = card?.offsetWidth ?? 320;
    const step = cardWidth + 16;
    track.scrollBy({
      left: direction === "right" ? step : -step,
      behavior: "smooth",
    });
    pauseTemporarily(7000);
  };

  return (
    <section className="py-20 sm:py-28 bg-zinc-950 border-t border-white/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14 max-w-3xl"
        >
          <div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.95] text-white mb-5 text-balance">
              {copy.headline}
            </h2>
            <div className="space-y-1">
              {copy.subhead.map((line, i) => (
                <p
                  key={i}
                  className="text-base sm:text-lg md:text-xl text-zinc-400 font-medium leading-snug"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="flex items-center justify-end gap-3 mb-6 sm:mb-8">
          <button
            type="button"
            onClick={() => scrollByCard("left")}
            aria-label="Imagem anterior"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/15 flex items-center justify-center text-white hover:bg-fyze hover:text-zinc-950 hover:border-fyze transition-colors"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard("right")}
            aria-label="Próxima imagem"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/15 flex items-center justify-center text-white hover:bg-fyze hover:text-zinc-950 hover:border-fyze transition-colors"
          >
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="absolute top-0 left-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

        <div
          ref={trackRef}
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onWheel={() => pauseTemporarily()}
          onTouchStart={() => pauseTemporarily()}
          className="flex gap-3 sm:gap-4 px-4 sm:px-8 overflow-x-auto scrollbar-none select-none cursor-grab"
          style={{ scrollbarWidth: "none" }}
        >
          {[...BASTIDORES_IMAGES, ...BASTIDORES_IMAGES].map((img, idx) => (
            <div
              key={`${img.src}-${idx}`}
              data-bastidores-card
              className="relative aspect-[4/5] w-[260px] sm:w-[320px] shrink-0 rounded-2xl overflow-hidden bg-zinc-900 border border-white/5"
            >
              <img
                src={img.src}
                alt={img.alt}
                draggable={false}
                loading="lazy"
                className="w-full h-full object-cover pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mt-12 sm:mt-16"
        >
          <div className="space-y-1 mb-8">
            {copy.body.map((line, i) => (
              <p
                key={i}
                className="text-lg sm:text-xl text-zinc-300 font-medium leading-snug"
              >
                {line}
              </p>
            ))}
          </div>
          <p className="text-xl sm:text-2xl md:text-3xl font-black italic text-fyze leading-tight">
            {copy.quote}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
