"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Reveal, fadeUp, stagger } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";
import { WORK } from "@/lib/constants";

// Slugs whose screenshots exist in /public/work/. Add to this set as new
// images land; until a slug is listed here, its card renders the placeholder.
const IMAGES_AVAILABLE = new Set<string>(["space-and-time"]);

type WorkProject = {
  slug: string;
  tags: readonly string[];
  title: string;
  description?: string;
  image: string;
  liveUrl: string;
  status?: "live" | "coming-soon";
};

function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <div className="grid h-8 grid-cols-[auto_1fr_auto] items-center gap-3 border-b border-border bg-surface px-4">
        <div className="flex items-center gap-1.5">
          <span
            className="block h-2.5 w-2.5 rounded-full bg-[#FF5F57]"
            aria-hidden="true"
          />
          <span
            className="block h-2.5 w-2.5 rounded-full bg-[#FEBC2E]"
            aria-hidden="true"
          />
          <span
            className="block h-2.5 w-2.5 rounded-full bg-[#28C840]"
            aria-hidden="true"
          />
        </div>
        <div className="mx-auto h-4 w-2/3 max-w-xs rounded-full bg-[var(--bg)]" />
        <div className="w-12" aria-hidden="true" />
      </div>
      {children}
    </div>
  );
}

function WorkCard({
  project,
  featured = false,
}: {
  project: WorkProject;
  featured?: boolean;
}) {
  const isComingSoon = project.status === "coming-soon";
  const isLinked = !!project.liveUrl && !isComingSoon;
  const hasImage = IMAGES_AVAILABLE.has(project.slug);

  const visual = (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border transition-colors duration-300",
        isComingSoon
          ? "border-dashed border-border opacity-60"
          : "border-border",
        isLinked &&
          "group-hover:border-accent/30 group-hover:shadow-[0_0_30px_-10px_rgba(29,161,242,0.25)]",
      )}
    >
      <BrowserFrame>
        <div
          className={cn(
            "relative w-full overflow-hidden",
            featured ? "aspect-[16/9]" : "aspect-[4/3]",
          )}
        >
          {hasImage ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className={cn(
                "object-cover",
                isLinked &&
                  "transition-transform duration-[400ms] ease-out group-hover:scale-105",
              )}
              sizes={
                featured
                  ? "(min-width: 1280px) 1280px, 100vw"
                  : "(min-width: 768px) 50vw, 100vw"
              }
              priority={featured}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-[var(--bg)]">
              {isComingSoon ? (
                <span className="font-display text-2xl font-bold uppercase tracking-tight text-text-secondary md:text-3xl">
                  Coming Soon
                </span>
              ) : (
                <span className="text-[11px] uppercase tracking-[0.1em] text-text-secondary">
                  {project.title}
                </span>
              )}
            </div>
          )}
        </div>
      </BrowserFrame>
    </div>
  );

  const metadata = (
    <div className="mt-6 flex flex-col gap-3 md:mt-8 md:gap-4">
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-full border border-border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.05em] text-text-secondary"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3
        className={cn(
          "font-display font-bold leading-[1.05] tracking-tight text-text-primary",
          featured
            ? "text-[32px] md:text-[44px] lg:text-[56px] xl:text-[64px]"
            : "text-2xl md:text-[28px]",
        )}
      >
        {project.title}
      </h3>
      {featured && project.description && (
        <p className="max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
          {project.description}
        </p>
      )}
      {featured && isLinked && (
        <span className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-text-primary">
          View project
          <ArrowUpRight
            size={16}
            aria-hidden="true"
            className="text-accent transition-transform duration-200 ease-out group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </span>
      )}
    </div>
  );

  if (isLinked) {
    return (
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-bg"
      >
        {visual}
        {metadata}
      </a>
    );
  }

  return (
    <div className="group">
      {visual}
      {metadata}
    </div>
  );
}

export function Work() {
  return (
    <section id="work" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-16 md:py-32">
        <Reveal
          variants={stagger}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-[40px] font-bold leading-[1.05] tracking-tight text-text-primary sm:text-[44px] md:text-[56px] lg:text-[64px] xl:text-[72px]"
          >
            {WORK.heading.text}
            <span className="font-serif font-normal italic">
              {WORK.heading.accent}
            </span>
          </motion.h2>
          <motion.span
            variants={fadeUp}
            className="font-display text-sm font-medium uppercase tracking-[0.1em] text-text-secondary md:self-end"
          >
            {WORK.viewAll}
          </motion.span>
        </Reveal>

        <Reveal variants={stagger} className="mt-16 md:mt-20">
          <motion.div variants={fadeUp}>
            <WorkCard project={WORK.featured} featured />
          </motion.div>
        </Reveal>

        <Reveal
          variants={stagger}
          className="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:grid-cols-2 md:gap-10"
        >
          {WORK.cards.map((card) => (
            <motion.div key={card.slug} variants={fadeUp}>
              <WorkCard project={card} />
            </motion.div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
