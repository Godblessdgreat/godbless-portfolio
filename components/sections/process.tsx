"use client";

import { motion } from "framer-motion";

import { Reveal, fadeUp, stagger } from "@/components/motion/reveal";
import { PROCESS } from "@/lib/constants";

export function Process() {
  return (
    <section id="process" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-16 md:py-32">
        <Reveal variants={stagger} className="flex flex-col gap-6">
          <motion.span
            variants={fadeUp}
            className="text-[11px] font-medium uppercase tracking-[0.1em] text-text-secondary"
          >
            {PROCESS.eyebrow}
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="max-w-5xl font-display text-[40px] font-bold leading-[1.05] tracking-tight text-text-primary text-balance sm:text-[44px] md:text-[56px] lg:text-[64px] xl:text-[72px]"
          >
            {PROCESS.heading.text}
            <span className="font-serif font-normal italic">
              {PROCESS.heading.accent}
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg"
          >
            {PROCESS.subhead}
          </motion.p>
        </Reveal>

        <Reveal
          as="ol"
          variants={stagger}
          className="mt-16 grid grid-cols-1 gap-12 md:mt-20 md:grid-cols-4 md:gap-8"
        >
          {PROCESS.steps.map((step) => (
            <motion.li
              key={step.number}
              variants={fadeUp}
              className="flex gap-6 md:flex-col md:gap-6"
            >
              <span className="font-display text-[40px] font-bold leading-none tracking-tight tabular-nums text-text-secondary">
                {step.number}
              </span>
              <div className="flex flex-1 flex-col gap-2">
                <h3 className="font-display text-xl font-bold leading-tight tracking-tight text-text-primary md:text-2xl">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary md:text-base">
                  {step.description}
                </p>
              </div>
            </motion.li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
