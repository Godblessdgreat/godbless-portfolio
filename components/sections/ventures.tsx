"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

import { Reveal, fadeUp, stagger } from "@/components/motion/reveal";
import { VENTURES } from "@/lib/constants";

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

function useIsHydrated() {
  return useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
}

export function Ventures() {
  const isHydrated = useIsHydrated();
  const { resolvedTheme } = useTheme();
  const ctaHref = VENTURES.card.cta.href;
  const isExternal = ctaHref.startsWith("http");

  // Default to the dark-mode (light-text) logo until hydration resolves the
  // theme; defaultTheme is "dark" so this matches the initial SSR paint.
  const isLight = isHydrated && resolvedTheme === "light";
  const logoSrc = isLight ? VENTURES.card.logo : VENTURES.card.logoLight;
  // Workaround: JPGs carry a baked-in white background. Brightness(0) forces
  // the artwork to a single channel; invert flips it for dark mode. Replace
  // with an SVG and drop this once one is available.
  const logoFilter = isLight ? "brightness(0)" : "brightness(0) invert(1)";

  return (
    <section
      id="ventures"
      className="border-t border-border bg-accent/[0.06]"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-16 md:py-32">
        <Reveal
          variants={stagger}
          className="mb-12 flex flex-col gap-6 md:mb-16"
        >
          <motion.span
            variants={fadeUp}
            className="text-[11px] font-medium uppercase tracking-[0.1em] text-text-secondary"
          >
            {VENTURES.eyebrow}
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="max-w-5xl font-display text-[40px] font-bold leading-[1.05] tracking-tight text-text-primary text-balance sm:text-[44px] md:text-[56px] lg:text-[64px] xl:text-[72px]"
          >
            {VENTURES.heading.text}
            <span className="font-serif font-normal italic">
              {VENTURES.heading.accent}
            </span>
            {VENTURES.heading.tail}
          </motion.h2>
        </Reveal>

        <Reveal variants={stagger}>
          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-border bg-surface p-8 md:p-12"
          >
            <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-12 lg:gap-16">
              <div className="flex flex-col gap-4 md:w-2/5">
                <div className="flex h-20 items-center md:h-24">
                  <Image
                    src={logoSrc}
                    alt={VENTURES.card.logoText}
                    width={240}
                    height={64}
                    className="h-auto w-auto max-h-16"
                    style={{ filter: logoFilter }}
                  />
                </div>
                <p className="text-base font-medium text-text-secondary md:text-lg">
                  {VENTURES.card.tagline}
                </p>
              </div>

              <div className="flex flex-1 flex-col gap-6 md:gap-8">
                <p className="text-base leading-relaxed text-text-secondary md:text-lg">
                  {VENTURES.card.description}
                </p>
                <a
                  href={ctaHref}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="group inline-flex items-center gap-2 self-start rounded-full border border-border bg-transparent px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-[var(--bg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                >
                  {VENTURES.card.cta.label}
                  <ArrowUpRight
                    size={16}
                    aria-hidden="true"
                    className="text-accent transition-transform duration-200 ease-out group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </motion.article>
        </Reveal>
      </div>
    </section>
  );
}
