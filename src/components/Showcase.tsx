"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cases, type CaseStudy } from "@/data/cases";
import { trackEvent } from "@/lib/analytics";

const AUTO_SCROLL_PX_PER_SEC = 60; // velocidade do auto-scroll
const PAUSE_AFTER_INTERACTION_MS = 5000;

export function Showcase() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dragStateRef = useRef({
    isDown: false,
    startX: 0,
    startScroll: 0,
    moved: false,
  });

  // Auto-scroll contínuo via rAF, sem state changes (não dispara re-render)
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
      moved: false,
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
    if (Math.abs(dx) > 15) s.moved = true;
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
    const card = track.querySelector<HTMLElement>("[data-case-card]");
    const cardWidth = card?.offsetWidth ?? 340;
    const step = cardWidth + 24;
    track.scrollBy({
      left: direction === "right" ? step : -step,
      behavior: "smooth",
    });
    pauseTemporarily(7000);
  };

  return (
    <section
      id="showcase"
      className="py-20 sm:py-24 bg-zinc-950 relative border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-none text-white"
            style={{ transform: "scaleY(1.2)", transformOrigin: "bottom" }}
          >
            CASES
          </motion.h2>
          <p className="text-zinc-500 text-xs sm:text-sm font-medium mt-3 uppercase tracking-widest">
            Arraste ou use as setas para ver mais
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 shrink-0"
        >
          <button
            type="button"
            onClick={() => scrollByCard("left")}
            aria-label="Caso anterior"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-fyze hover:text-zinc-950 hover:border-fyze transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard("right")}
            aria-label="Próximo caso"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-fyze hover:text-zinc-950 hover:border-fyze transition-colors"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>

      <div
        className="relative w-full"
        onMouseEnter={() => {
          pausedRef.current = true;
        }}
        onMouseLeave={() => {
          pausedRef.current = false;
        }}
      >
        <div className="absolute top-0 left-0 bottom-0 w-12 sm:w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-12 sm:w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

        <div
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onWheel={() => pauseTemporarily()}
          onTouchStart={() => pauseTemporarily()}
          className="flex gap-5 sm:gap-6 px-4 sm:px-8 overflow-x-auto scrollbar-none select-none cursor-grab"
          style={{ scrollbarWidth: "none" }}
        >
          {[...cases, ...cases].map((item, idx) => (
            <CaseCard key={`${item.slug}-${idx}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseCard({ item }: { item: CaseStudy }) {
  const router = useRouter();
  const downRef = useRef<{ x: number; y: number } | null>(null);

  const navigate = () => {
    trackEvent("case_view", { slug: item.slug, client: item.client });
    router.push(`/cases/${item.slug}`);
  };

  return (
    <a
      href={`/cases/${item.slug}`}
      onPointerDown={(e) => {
        downRef.current = { x: e.clientX, y: e.clientY };
      }}
      onClick={(e) => {
        // Allow modifier-key clicks (open in new tab) to behave natively.
        if (e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0) return;

        e.preventDefault();
        const down = downRef.current;
        const dx = down ? Math.abs(e.clientX - down.x) : 0;
        const dy = down ? Math.abs(e.clientY - down.y) : 0;
        const movedOnCard = dx > 12 || dy > 12;
        if (movedOnCard) return;

        navigate();
      }}
      onDragStart={(e) => e.preventDefault()}
      data-case-card
      className="group block shrink-0 w-[260px] sm:w-[340px] cursor-pointer"
    >
      <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-zinc-900">
        <img
          src={item.heroImage}
          alt={item.client}
          draggable={false}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 max-w-[55%] pointer-events-none">
          <p className="text-white/90 text-[11px] sm:text-xs font-bold uppercase tracking-widest leading-tight drop-shadow-md">
            {item.scope.slice(0, 3).join(" / ")}
          </p>
        </div>
        <img
          src={item.logo}
          alt={item.client}
          draggable={false}
          className={`absolute right-3 sm:right-5 ${
            item.logoSize === "lg"
              ? "bottom-2 sm:bottom-3 max-h-16 sm:max-h-20 max-w-[50%]"
              : item.logoSize === "sm"
              ? "bottom-3 sm:bottom-5 max-h-9 sm:max-h-12 max-w-[28%]"
              : "bottom-3 sm:bottom-5 max-h-12 sm:max-h-16 max-w-[40%]"
          } w-auto ${item.logoAlignBottom ? "object-bottom" : ""} object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] transition-transform duration-500 group-hover:scale-105 pointer-events-none`}
        />
      </div>
    </a>
  );
}
