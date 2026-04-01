import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";

export function Hero() {
  const modelSrc = `${import.meta.env.BASE_URL}y fyze 3d.glb`;
  const modelRef = useRef<HTMLElement>(null);
  const spinBoostRef = useRef(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    let currentRotation = 90;
    let targetRotation = 90;
    let lightAngle = 0;
    let idleAngle = 0;
    let animationId: number;

    const handleScroll = () => {
      targetRotation = 90 + window.scrollY * 0.35;
    };

    const animate = () => {
      // Spin boost decai suavemente
      spinBoostRef.current *= 0.97;
      currentRotation += (targetRotation - currentRotation) * 0.08 + spinBoostRef.current;
      lightAngle += 0.02;
      idleAngle += 0.012;

      const exposure = 1.3 + Math.sin(lightAngle) * 0.5;
      const idleTheta = Math.sin(idleAngle) * 6;
      const idlePhi = Math.cos(idleAngle * 0.7) * 4;

      const el = modelRef.current;
      if (el) {
        el.setAttribute("camera-orbit", `${currentRotation + idleTheta}deg ${75 + idlePhi}deg auto`);
        el.setAttribute("exposure", `${exposure}`);
      }
      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const handleVerServicos = (e: React.MouseEvent) => {
    e.preventDefault();
    // Bounce: encolhe e volta
    const el = modelRef.current;
    if (el) {
      el.style.transition = "transform 0.15s ease-in";
      el.style.transform = "scale(0.85)";
      setTimeout(() => {
        el.style.transition = "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)";
        el.style.transform = "scale(1)";
      }, 150);
      setTimeout(() => {
        el.style.transition = "";
        el.style.transform = "";
      }, 600);
    }
    // Boost de rotação
    spinBoostRef.current = 8;
    // Delay antes de scrollar
    setTimeout(() => {
      document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" });
    }, 500);
  };

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-24 pb-14 sm:pt-20 sm:pb-20">
      <div className="absolute inset-0 z-0 bg-zinc-950">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='600' height='600' viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36.14 0C35.5 2.5 35 5.2 35 8c0 14.4 11.6 26 26 26 14.4 0 26-11.6 26-26 0-2.8-.5-5.5-1.14-8h-21.7c.54 2.5.84 5.2.84 8 0 9.9-8.1 18-18 18s-18-8.1-18-18c0-2.8.3-5.5.84-8h-21.7zM0 36.14C2.5 35.5 5.2 35 8 35c14.4 0 26 11.6 26 26 0 14.4-11.6 26-26 26-2.8 0-5.5-.5-8-1.14v-21.7c2.5.54 5.2.84 8 .84 9.9 0 18-8.1 18-18s-8.1-18-18-18c-2.8 0-5.5.3-8 .84v-21.7zM600 36.14c-2.5-.64-5.2-1.14-8-1.14-14.4 0-26 11.6-26 26 0 14.4 11.6 26 26 26 2.8 0 5.5-.5 8-1.14v-21.7c-2.5.54-5.2.84-8 .84-9.9 0-18-8.1-18-18s8.1-18 18-18c2.8 0 5.5.3 8 .84v-21.7zM36.14 600c-.64-2.5-1.14-5.2-1.14-8 0-14.4 11.6-26 26-26 14.4 0 26 11.6 26 26 0 2.8-.5 5.5-1.14 8h-21.7c.54-2.5.84-5.2.84-8 0-9.9-8.1-18-18-18s-18 8.1-18 18c0 2.8.3 5.5.84 8h-21.7zM200 300c0 55.2-44.8 100-100 100S0 355.2 0 300s44.8-100 100-100 100 44.8 100 100zm-20 0c0 44.2-35.8 80-80 80s-80-35.8-80-80 35.8-80 80-80 80 35.8 80 80zm-20 0c0 33.1-26.9 60-60 60s-60-26.9-60-60 26.9-60 60-60 60 26.9 60 60zm-20 0c0 22.1-17.9 40-40 40s-40-17.9-40-40 17.9-40 40-40 40 17.9 40 40zm-20 0c0 11-9 20-20 20s-20-9-20-20 9-20 20-20 20 9 20 20zm280 0c0 55.2-44.8 100-100 100s-100-44.8-100-100 44.8-100 100-100 100 44.8 100 100zm-20 0c0 44.2-35.8 80-80 80s-80-35.8-80-80 35.8-80 80-80 80 35.8 80 80zm-20 0c0 33.1-26.9 60-60 60s-60-26.9-60-60 26.9-60 60-60 60 26.9 60 60zm-20 0c0 22.1-17.9 40-40 40s-40-17.9-40-40 17.9-40 40-40 40 17.9 40 40zm-20 0c0 11-9 20-20 20s-20-9-20-20 9-20 20-20 20 9 20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "100px 100px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/80 to-zinc-950" />
        <div className="absolute top-1/4 left-1/4 w-[280px] h-[280px] sm:w-[500px] sm:h-[500px] bg-fyze/10 rounded-full blur-[100px] sm:blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[280px] h-[280px] sm:w-[500px] sm:h-[500px] bg-fyze/5 rounded-full blur-[100px] sm:blur-[120px] mix-blend-screen" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:justify-between gap-4 lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[65%] text-center lg:text-left order-2 lg:order-1"
        >
          <h1 className="text-[15vw] sm:text-[10vw] md:text-[8vw] lg:text-[6vw] xl:text-[5.5vw] font-black tracking-tighter uppercase leading-[0.88] sm:leading-[0.85] mb-6 sm:mb-8 text-white">
            Elevamos <br />
            <span className="text-fyze relative inline-block">
              sua marca
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                className="absolute -bottom-2 md:-bottom-4 left-0 right-0 h-2 md:h-4 bg-fyze origin-left opacity-50"
              />
            </span>
            <br />ao digital
          </h1>

          <p className="mt-4 sm:mt-8 text-base sm:text-lg md:text-2xl text-zinc-400 max-w-3xl lg:max-w-2xl font-medium leading-relaxed lg:mx-0 mx-auto">
            Agência de Marketing Digital focada em resultados exponenciais.
            Atuamos em Lisboa, Algarve e em todo o Portugal.
          </p>

          <div className="mt-6 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-stretch sm:items-center">
            <a
              href="#servicos"
              onClick={handleVerServicos}
              className="group flex w-full sm:w-auto items-center justify-center gap-3 bg-fyze text-zinc-950 px-8 sm:px-10 py-4 sm:py-5 rounded-full text-sm md:text-base font-black uppercase tracking-[0.18em] sm:tracking-widest transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(0,240,255,0.4)]"
            >
              Ver Serviços
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[35%] flex items-center justify-center relative order-1 lg:order-2 -mb-4 lg:mb-0"
        >
          {/* Glow pulsante atrás do modelo */}
          <motion.div
            animate={{ opacity: [0.4, 0.8, 0.4], scale: [0.85, 1.1, 0.85] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute inset-0 m-auto w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(102,252,240,0.3) 0%, rgba(102,252,240,0) 70%)",
            }}
          />
          {/* @ts-expect-error model-viewer web component */}
          <model-viewer
            ref={modelRef}
            src={modelSrc}
            alt="Fyze Logo 3D"
            {...(isDesktop ? { "camera-controls": true } : {})}
            disable-zoom
            disable-pan
            camera-orbit="90deg 75deg auto"
            interaction-prompt="none"
            exposure="1.5"
            shadow-intensity="0"
            environment-image="neutral"
            style={{
              width: "100%",
              backgroundColor: "transparent",
              outline: "none",
              border: "none",
              filter: "sepia(1) hue-rotate(130deg) saturate(3) brightness(1.1)",
            }}
            className="h-[40svh] sm:h-[450px] lg:h-[650px]"
          />
        </motion.div>
      </div>


      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center opacity-50"
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ChevronDown className="w-8 h-8 text-white" />
      </motion.div>
    </section>
  );
}
