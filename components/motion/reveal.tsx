"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

export const fadeUpSmall: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

export const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export const staggerFast: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  /** Pixels before the bottom of the viewport at which to trigger. Default 100. */
  triggerOffset?: number;
  /** Render-as tag for the wrapper element. Defaults to "div". */
  as?: "div" | "section" | "ul" | "ol" | "header" | "footer" | "article";
};

export function Reveal({
  children,
  className,
  variants = stagger,
  triggerOffset = 100,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [hasScrolledIntoView, setHasScrolledIntoView] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const check = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const inView =
        rect.top < window.innerHeight - triggerOffset && rect.bottom > 0;
      if (inView) {
        setHasScrolledIntoView(true);
        window.removeEventListener("scroll", check);
        window.removeEventListener("resize", check);
      }
    };

    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [shouldReduceMotion, triggerOffset]);

  const visible = shouldReduceMotion || hasScrolledIntoView;
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      ref={ref as React.Ref<HTMLDivElement>}
      initial="hidden"
      animate={visible ? "show" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
