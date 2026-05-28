"use client";

import { motion } from "framer-motion";

import { Reveal, fadeUp, stagger } from "@/components/motion/reveal";
import { STATS } from "@/lib/constants";

export function Stats() {
  return (
    <section
      id="stats"
      aria-label="At a glance"
      className="border-t border-border"
    >
      <Reveal
        variants={stagger}
        className="mx-auto grid max-w-7xl grid-cols-2 gap-x-8 gap-y-12 px-6 py-20 md:grid-cols-4 md:px-16 md:py-24"
      >
        {STATS.map((stat) => (
          <motion.div
            key={stat.label}
            variants={fadeUp}
            className="flex flex-col gap-3"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.1em] text-text-primary">
              {stat.label}
            </span>
            <span className="font-display text-2xl font-bold leading-tight tracking-tight text-text-primary md:text-[28px]">
              {stat.value}
            </span>
          </motion.div>
        ))}
      </Reveal>
    </section>
  );
}
