import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cases } from "../data/cases";

export function Showcase() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const currentIndexRef = useRef(0);

  const getCardWidth = () => {
    if (!carouselRef.current) return 0;
    return carouselRef.current.clientWidth * 0.84 + 16;
  };

  const goToIndex = (index: number) => {
    if (!carouselRef.current) return;

    const nextIndex = (index + cases.length) % cases.length;
    currentIndexRef.current = nextIndex;

    carouselRef.current.scrollTo({
      left: getCardWidth() * nextIndex,
      behavior: "smooth",
    });
  };

  const scrollCarousel = (direction: "left" | "right") => {
    const offset = direction === "left" ? -1 : 1;
    goToIndex(currentIndexRef.current + offset);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const startAutoplay = () => {
      if (!mediaQuery.matches) return undefined;

      return window.setInterval(() => {
        goToIndex(currentIndexRef.current + 1);
      }, 3500);
    };

    let intervalId = startAutoplay();

    const handleChange = () => {
      if (intervalId) window.clearInterval(intervalId);
      intervalId = startAutoplay();
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      if (intervalId) window.clearInterval(intervalId);
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <section id="showcase" className="py-20 sm:py-24 bg-zinc-950 relative border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-12 gap-6 sm:gap-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-none text-white"
            style={{ transform: "scaleY(1.2)", transformOrigin: "bottom" }}
          >
            CASES
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-3 sm:gap-4 pb-2"
          >
            <button
              type="button"
              onClick={() => scrollCarousel("left")}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-zinc-950 transition-colors md:hidden"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel("right")}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-zinc-950 transition-colors md:hidden"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Mobile carousel */}
        <div
          ref={carouselRef}
          className="md:hidden -mx-4 px-4 flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none"
        >
          {cases.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="snap-center shrink-0 w-[84%]"
            >
              <Link to={`/cases/${item.slug}`} className="group block">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-zinc-900">
                  <img
                    src={item.heroImage}
                    alt={item.client}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={item.logo}
                      alt={item.client}
                      className="h-10 sm:h-12 w-auto brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white/70 text-sm font-medium">
                      {item.scope.slice(0, 2).join(" / ")}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-2 gap-6">
          {cases.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Link to={`/cases/${item.slug}`} className="group block">
                <div className="relative aspect-video rounded-3xl overflow-hidden bg-zinc-900">
                  <img
                    src={item.heroImage}
                    alt={item.client}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={item.logo}
                      alt={item.client}
                      className="h-14 lg:h-16 w-auto brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white/70 text-sm font-medium">
                      {item.scope.slice(0, 3).join(" / ")}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
