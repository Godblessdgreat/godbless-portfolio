"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Reveal, fadeUp, stagger } from "@/components/motion/reveal";
import { ABOUT } from "@/lib/constants";

const HAS_PORTRAIT = true;

export function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-16 md:py-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16 lg:gap-20">
          <Reveal variants={stagger} className="md:col-span-5">
            <motion.figure variants={fadeUp}>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-surface">
                {HAS_PORTRAIT ? (
                  <Image
                    src={ABOUT.portrait}
                    alt="Black-and-white illustrated portrait of Godbless Uduak"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1280px) 533px, (min-width: 768px) 40vw, 100vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[11px] uppercase tracking-[0.1em] text-text-secondary">
                      Portrait pending
                    </span>
                  </div>
                )}
              </div>
              <figcaption className="mt-4 text-sm text-text-secondary">
                {ABOUT.portraitCaption}
              </figcaption>
            </motion.figure>
          </Reveal>

          <Reveal
            variants={stagger}
            className="flex flex-col gap-6 md:col-span-7"
          >
            <motion.span
              variants={fadeUp}
              className="text-[11px] font-medium uppercase tracking-[0.1em] text-text-secondary"
            >
              {ABOUT.eyebrow}
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="font-display text-[32px] font-bold leading-[1.1] tracking-tight text-text-primary text-balance md:text-[40px] lg:text-[48px] xl:text-[56px]"
            >
              {ABOUT.heading.text}
              <span className="font-serif font-normal italic">
                {ABOUT.heading.accent}
              </span>
              {ABOUT.heading.tail}
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="mt-2 flex flex-col gap-5"
            >
              {ABOUT.paragraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed text-text-secondary md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
