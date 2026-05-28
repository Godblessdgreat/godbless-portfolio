"use client";

import { motion } from "framer-motion";

import {
  Reveal,
  fadeUpSmall,
  stagger,
  staggerFast,
} from "@/components/motion/reveal";
import { EXPERIENCE } from "@/lib/constants";

export function Experience() {
  return (
    <section
      id="experience"
      aria-label="Past collaborators"
      className="border-t border-border"
    >
      <Reveal
        variants={stagger}
        className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 py-16 md:gap-10 md:px-16 md:py-20"
      >
        <motion.span
          variants={fadeUpSmall}
          className="text-[11px] font-medium uppercase tracking-[0.1em] text-text-secondary"
        >
          {EXPERIENCE.eyebrow}
        </motion.span>

        <motion.ul
          variants={staggerFast}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 md:gap-x-16"
        >
          {EXPERIENCE.companies.map((company) => (
            <motion.li
              key={company}
              variants={fadeUpSmall}
              className="font-display text-base font-bold uppercase tracking-tight text-text-secondary md:text-lg"
            >
              {company}
            </motion.li>
          ))}
        </motion.ul>
      </Reveal>
    </section>
  );
}
