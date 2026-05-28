"use client";

import { motion } from "framer-motion";

import { Reveal, fadeUp, stagger } from "@/components/motion/reveal";
import { SERVICES } from "@/lib/constants";

export function Services() {
  return (
    <section id="services" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-16 md:py-32">
        <Reveal variants={stagger} className="flex flex-col gap-6">
          <motion.span
            variants={fadeUp}
            className="text-[11px] font-medium uppercase tracking-[0.1em] text-text-secondary"
          >
            {SERVICES.eyebrow}
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="max-w-5xl font-display text-[40px] font-bold leading-[1.05] tracking-tight text-text-primary text-balance sm:text-[44px] md:text-[56px] lg:text-[64px] xl:text-[72px]"
          >
            {SERVICES.heading.text}
            <span className="font-serif font-normal italic">
              {SERVICES.heading.accent}
            </span>
            {SERVICES.heading.tail}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg"
          >
            {SERVICES.subhead}
          </motion.p>
        </Reveal>

        <Reveal
          as="ul"
          variants={stagger}
          className="mt-16 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-3 md:gap-8"
        >
          {SERVICES.items.map((service) => (
            <motion.li
              key={service.number}
              variants={fadeUp}
              className="flex flex-col gap-6 rounded-2xl border border-border bg-surface p-6 md:p-8"
            >
              <span className="text-[11px] font-medium uppercase tracking-[0.1em] tabular-nums text-text-secondary">
                {service.number}
              </span>
              <h3 className="font-display text-2xl font-bold leading-tight tracking-tight text-text-primary md:text-[28px]">
                {service.title}
              </h3>
              <p className="text-base leading-relaxed text-text-secondary">
                {service.description}
              </p>
            </motion.li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
