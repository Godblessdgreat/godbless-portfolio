"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { useLenis } from "@/components/lenis-provider";
import { HERO } from "@/lib/constants";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { scrollTo } = useLenis();
  const shouldReduceMotion = useReducedMotion();

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith("#")) return;
    const target = document.getElementById(href.slice(1));
    if (!target) return;
    e.preventDefault();
    scrollTo(target, { offset: -80 });
  };

  const fadeUp: Variants = shouldReduceMotion
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 24 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: EASE },
        },
      };

  const stagger: Variants = shouldReduceMotion
    ? { hidden: {}, show: {} }
    : {
        hidden: {},
        show: {
          transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
      };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-32 pb-16 md:px-16 md:pt-40"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="mx-auto flex max-w-6xl flex-col items-center gap-10 text-center md:gap-12"
      >
        <motion.p
          variants={fadeUp}
          className="text-sm font-medium text-text-secondary md:text-base"
        >
          {HERO.eyebrow}
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="font-display text-[44px] font-extrabold leading-[1.02] tracking-tight text-text-primary text-balance sm:text-[56px] md:text-[72px] lg:text-[88px] xl:text-[112px]"
        >
          {HERO.headline.line1}{" "}
          <span className="font-serif font-normal italic text-accent">
            {HERO.headline.connector}
          </span>
          <br />
          {HERO.headline.line2}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg"
        >
          {HERO.bio}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-2 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4"
        >
          <Link
            href={HERO.ctaPrimary.href}
            onClick={(e) => handleAnchorClick(e, HERO.ctaPrimary.href)}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--text-primary)] px-7 py-3.5 text-base font-medium text-[var(--bg)] transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            {HERO.ctaPrimary.label}
            <ArrowRight
              size={16}
              aria-hidden="true"
              className="text-accent transition-transform duration-200 ease-out group-hover:translate-x-1"
            />
          </Link>

          <Link
            href={HERO.ctaSecondary.href}
            onClick={(e) => handleAnchorClick(e, HERO.ctaSecondary.href)}
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-transparent px-7 py-3.5 text-base font-medium text-text-primary transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            {HERO.ctaSecondary.label}
            <ArrowRight
              size={16}
              aria-hidden="true"
              className="text-accent transition-transform duration-200 ease-out group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
