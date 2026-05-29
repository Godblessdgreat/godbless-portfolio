"use client";

import { motion } from "framer-motion";

import { Reveal, fadeUp, stagger } from "@/components/motion/reveal";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TOOLS } from "@/lib/constants";

export function Tools() {
  return (
    <section id="tools" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-16 md:py-32">
        <Reveal
          variants={stagger}
          className="mb-12 flex flex-col gap-6 md:mb-16"
        >
          <motion.span
            variants={fadeUp}
            className="text-[11px] font-medium uppercase tracking-[0.1em] text-text-secondary"
          >
            {TOOLS.eyebrow}
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="max-w-5xl font-display text-[40px] font-bold leading-[1.05] tracking-tight text-text-primary text-balance sm:text-[44px] md:text-[56px] lg:text-[64px] xl:text-[72px]"
          >
            {TOOLS.heading.text}
            <span className="font-serif font-normal italic text-accent">
              {TOOLS.heading.accent}
            </span>
            {TOOLS.heading.tail}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg"
          >
            {TOOLS.subhead}
          </motion.p>
        </Reveal>

        <TooltipProvider delay={150}>
          <Reveal variants={stagger}>
            <motion.ul
              variants={fadeUp}
              className="grid grid-cols-4 gap-8 md:grid-cols-6 md:gap-12 lg:grid-cols-12"
            >
              {TOOLS.items.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center justify-center"
                >
                  <Tooltip>
                    <TooltipTrigger
                      render={
                        <button
                          type="button"
                          aria-label={item.name}
                          className="group inline-flex h-10 items-center justify-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-bg"
                        />
                      }
                    >
                      {item.slug ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${item.slug}.svg`}
                          alt=""
                          width={32}
                          height={32}
                          className="h-8 w-8 transition-[filter] duration-200 [filter:brightness(0)_invert(0.55)] group-hover:[filter:brightness(0)_invert(1)] group-focus-visible:[filter:brightness(0)_invert(1)]"
                        />
                      ) : (
                        <span className="font-display text-lg font-bold tracking-tight text-text-secondary transition-colors duration-200 group-hover:text-text-primary group-focus-visible:text-text-primary">
                          {item.label ?? item.name}
                        </span>
                      )}
                    </TooltipTrigger>
                    <TooltipContent>{item.name}</TooltipContent>
                  </Tooltip>
                </li>
              ))}
            </motion.ul>
          </Reveal>
        </TooltipProvider>
      </div>
    </section>
  );
}
