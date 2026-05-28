"use client";

import Lenis from "@studio-freight/lenis";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  type ReactNode,
} from "react";

type ScrollTarget = number | string | HTMLElement;
type ScrollOptions = { offset?: number; duration?: number };

type LenisContextValue = {
  scrollTo: (target: ScrollTarget, options?: ScrollOptions) => void;
};

const LenisContext = createContext<LenisContextValue>({
  scrollTo: () => {},
});

export function useLenis() {
  return useContext(LenisContext);
}

export function LenisProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const instance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = instance;

    let frameId = requestAnimationFrame(function raf(time) {
      instance.raf(time);
      frameId = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(frameId);
      instance.destroy();
      lenisRef.current = null;
    };
  }, []);

  const value = useMemo<LenisContextValue>(
    () => ({
      scrollTo: (target, options) => {
        const lenis = lenisRef.current;
        if (lenis) {
          lenis.scrollTo(target, options);
          return;
        }
        if (typeof target === "number") {
          window.scrollTo({ top: target, behavior: "smooth" });
          return;
        }
        const el =
          typeof target === "string"
            ? (document.querySelector(target) as HTMLElement | null)
            : target;
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      },
    }),
    [],
  );

  return (
    <LenisContext.Provider value={value}>{children}</LenisContext.Provider>
  );
}
