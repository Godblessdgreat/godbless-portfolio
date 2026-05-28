"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Reveal, fadeUp, stagger } from "@/components/motion/reveal";
import { CTA } from "@/lib/constants";

export function Cta() {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CTA.ctaSecondary.value);
      setCopied(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — fall back silently. Real fallback could
      // show the email inline; skipped to keep the surface area minimal.
    }
  };

  return (
    <section id="cta" className="border-t border-border">
      <Reveal
        variants={stagger}
        className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-32 text-center md:gap-12 md:px-16 md:py-48"
      >
        <motion.h2
          variants={fadeUp}
          className="font-display text-[44px] font-bold leading-[1.0] tracking-tight text-text-primary text-balance sm:text-[56px] md:text-[72px] lg:text-[88px] xl:text-[112px]"
        >
          {CTA.headline.line1}
          <br />
          <span className="font-serif font-normal italic text-accent">
            {CTA.headline.accent}
          </span>
          <br />
          {CTA.headline.line2}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg"
        >
          {CTA.subhead}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4"
        >
          <a
            href={CTA.ctaPrimary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            {CTA.ctaPrimary.label}
            <ArrowRight
              size={16}
              aria-hidden="true"
              className="transition-transform duration-200 ease-out group-hover:translate-x-1"
            />
          </a>

          <button
            type="button"
            onClick={handleCopy}
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-transparent px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            <span aria-hidden="true">
              {copied ? "Email copied" : CTA.ctaSecondary.label}
            </span>
            {copied ? (
              <Check
                size={16}
                aria-hidden="true"
                className="text-accent"
              />
            ) : (
              <Copy
                size={16}
                aria-hidden="true"
                className="text-accent transition-transform duration-200 ease-out group-hover:scale-110"
              />
            )}
            <span className="sr-only" aria-live="polite">
              {copied
                ? `Email copied to clipboard: ${CTA.ctaSecondary.value}`
                : `Copy email ${CTA.ctaSecondary.value} to clipboard`}
            </span>
          </button>
        </motion.div>
      </Reveal>
    </section>
  );
}
