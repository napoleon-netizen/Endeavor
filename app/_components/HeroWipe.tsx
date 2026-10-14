"use client";

import { useEffect, useRef } from "react";

/**
 * Squeegee wipe: as the visitor scrolls, a squeegee sweeps across the hero
 * photo and the slightly hazy image behind it is revealed crisp and clean.
 * Progress is driven by scroll position; respects prefers-reduced-motion.
 */
export default function HeroWipe() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.setProperty("--wipe", "100%");
      el.classList.add("hero-wipe--done");
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const distance = Math.max(window.innerHeight * 0.45, 260);
      const progress = Math.min(Math.max(window.scrollY / distance, 0), 1);
      el.style.setProperty("--wipe", `${(progress * 108).toFixed(2)}%`);
      el.classList.toggle("hero-wipe--done", progress >= 1);
      el.classList.toggle("hero-wipe--active", progress > 0 && progress < 1);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="hero-wipe" ref={ref} aria-hidden="true">
      <div className="hero-wipe__haze" />
      <div className="hero-wipe__squeegee">
        <span className="hero-wipe__blade" />
        <span className="hero-wipe__handle" />
      </div>
    </div>
  );
}
