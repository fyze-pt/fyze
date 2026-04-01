import { useEffect, useRef, useState } from "react";

export function FloatingModel() {
  const modelSrc = `${import.meta.env.BASE_URL}y fyze 3d.glb`;
  const modelRef = useRef<HTMLElement>(null);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    let currentRotation = 90;
    let targetRotation = 90;
    let lightAngle = 0;
    let idleAngle = 0;
    let currentScale = 0;
    let targetScale = 0;
    let animationId: number;

    const heroHeight = window.innerHeight;

    const handleScroll = () => {
      targetRotation = 90 + window.scrollY * 0.35;
      const pastHero = window.scrollY > heroHeight * 0.6;
      setIsMinimized(pastHero);
      targetScale = pastHero ? 1 : 0;
    };

    const animate = () => {
      currentRotation += (targetRotation - currentRotation) * 0.08;
      currentScale += (targetScale - currentScale) * 0.08;
      lightAngle += 0.02;
      idleAngle += 0.008;

      const exposure = 1.3 + Math.sin(lightAngle) * 0.5;
      const idleTheta = Math.sin(idleAngle) * 3;
      const idlePhi = Math.cos(idleAngle * 0.7) * 2;

      const el = modelRef.current;
      if (el) {
        el.setAttribute("camera-orbit", `${currentRotation + idleTheta}deg ${75 + idlePhi}deg auto`);
        el.setAttribute("exposure", `${exposure}`);
      }

      // Atualiza o mini container
      const miniEl = document.getElementById("mini-model");
      if (miniEl) {
        miniEl.style.transform = `scale(${currentScale})`;
        miniEl.style.opacity = `${currentScale}`;
      }

      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      id="mini-model"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-24 right-1 sm:bottom-28 sm:right-2 z-30 cursor-pointer"
      style={{
        width: "90px",
        height: "90px",
        transformOrigin: "bottom right",
        transform: "scale(0)",
        opacity: 0,
        transition: "none",
      }}
    >
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(102,252,240,0.2) 0%, rgba(102,252,240,0) 70%)",
        }}
      />
      {/* @ts-expect-error model-viewer web component */}
      <model-viewer
        ref={modelRef}
        src={modelSrc}
        alt="Fyze Logo 3D"
        auto-rotate
        rotation-per-second="20deg"
        disable-zoom
        camera-orbit="90deg 75deg auto"
        interaction-prompt="none"
        exposure="1.5"
        shadow-intensity="0"
        environment-image="neutral"
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
          outline: "none",
          border: "none",
          filter: "sepia(1) hue-rotate(130deg) saturate(3) brightness(1.1)",
        }}
      />
    </div>
  );
}
