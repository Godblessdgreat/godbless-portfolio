import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import { Footer } from "@/components/sections/footer";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import type { WorkFrontmatter } from "@/lib/mdx";

function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-border">
      <div className="grid h-9 grid-cols-[auto_1fr_auto] items-center gap-3 border-b border-border bg-surface px-4">
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

export function CaseStudyLayout({
  frontmatter,
  children,
}: {
  frontmatter: WorkFrontmatter;
  children: React.ReactNode;
}) {
  const isComingSoon = frontmatter.status === "coming-soon";
  const hasLiveUrl = !!frontmatter.liveUrl && !isComingSoon;
  const stackLine = frontmatter.stack?.join(" · ");
  const metaLine = [frontmatter.year, frontmatter.type, frontmatter.role]
    .filter(Boolean)
    .join(" · ")
    .toUpperCase();

  return (
    <>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 pt-24 md:px-16 md:pt-28">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        >
          <ArrowLeft
            size={14}
            aria-hidden="true"
            className="transition-transform duration-200 ease-out group-hover:-translate-x-1"
          />
          Back to portfolio
        </Link>
        <ThemeToggle />
      </div>

      <main>
        <article>
          {/* HEADER */}
          <header className="border-b border-border">
            <div className="mx-auto max-w-7xl px-6 pt-12 pb-16 md:px-16 md:pt-16 md:pb-20">
              <div className="flex flex-col gap-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-text-secondary">
                    {metaLine}
                  </span>
                  {isComingSoon && (
                    <span className="inline-flex items-center rounded-full border border-dashed border-border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.1em] text-text-secondary">
                      Coming soon
                    </span>
                  )}
                </div>

                <h1 className="font-display text-[40px] font-bold leading-[1.05] tracking-tight text-text-primary text-balance sm:text-[44px] md:text-[56px] lg:text-[64px] xl:text-[72px]">
                  {frontmatter.title}
                </h1>

                <p className="max-w-[720px] text-base leading-relaxed text-text-secondary md:text-lg">
                  {frontmatter.description}
                </p>

                <dl className="mt-4 grid grid-cols-1 gap-8 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="flex flex-col gap-2">
                    <dt className="text-[11px] font-medium uppercase tracking-[0.1em] text-text-secondary">
                      Client
                    </dt>
                    <dd className="text-base text-text-primary md:text-lg">
                      {frontmatter.client}
                    </dd>
                  </div>
                  <div className="flex flex-col gap-2">
                    <dt className="text-[11px] font-medium uppercase tracking-[0.1em] text-text-secondary">
                      Timeline
                    </dt>
                    <dd className="text-base text-text-primary md:text-lg">
                      {frontmatter.timeline}
                    </dd>
                  </div>
                  <div className="flex flex-col gap-2 lg:col-span-2">
                    <dt className="text-[11px] font-medium uppercase tracking-[0.1em] text-text-secondary">
                      Stack
                    </dt>
                    <dd className="text-base text-text-primary md:text-lg">
                      {stackLine}
                    </dd>
                  </div>
                </dl>

                {hasLiveUrl && (
                  <div>
                    <a
                      href={frontmatter.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--text-primary)] px-6 py-3 text-sm font-medium text-[var(--bg)] transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                    >
                      Visit live site
                      <ArrowUpRight
                        size={16}
                        aria-hidden="true"
                        className="text-accent transition-transform duration-200 ease-out group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </header>

          {/* HERO IMAGE */}
          {frontmatter.heroImage && (
            <div className="border-b border-border">
              <div className="mx-auto max-w-7xl px-6 py-16 md:px-16 md:py-20">
                <BrowserFrame>
                  <div
                    className={cn(
                      "relative w-full overflow-hidden bg-[var(--bg)]",
                      "aspect-[16/9]",
                    )}
                  >
                    <Image
                      src={frontmatter.heroImage}
                      alt={frontmatter.title}
                      fill
                      sizes="(min-width: 1280px) 1280px, 100vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                </BrowserFrame>
              </div>
            </div>
          )}

          {/* MDX BODY */}
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-16 md:py-28">
            <div
              className={cn(
                "prose prose-lg max-w-none",
                "prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-text-primary",
                "prose-h1:hidden",
                "prose-h2:text-[28px] prose-h2:leading-[1.2] prose-h2:mt-16 prose-h2:mb-6 md:prose-h2:text-[36px]",
                "prose-h3:text-[22px] prose-h3:leading-[1.25] prose-h3:mt-10 prose-h3:mb-4 md:prose-h3:text-[26px]",
                "prose-p:max-w-[720px] prose-p:text-text-secondary prose-p:text-lg prose-p:leading-relaxed",
                "prose-strong:font-bold prose-strong:text-text-primary",
                "prose-em:font-serif prose-em:text-text-primary",
                "prose-blockquote:max-w-[720px] prose-blockquote:not-italic prose-blockquote:border-l-2 prose-blockquote:border-accent prose-blockquote:pl-6 prose-blockquote:font-serif prose-blockquote:text-xl prose-blockquote:text-text-secondary md:prose-blockquote:text-2xl",
                "prose-ul:max-w-[720px] prose-ul:text-text-secondary prose-li:text-lg prose-li:leading-relaxed prose-li:my-2",
                "prose-ol:max-w-[720px] prose-ol:text-text-secondary",
                "prose-a:text-text-primary prose-a:underline prose-a:decoration-accent prose-a:underline-offset-4 hover:prose-a:opacity-70",
                "prose-hr:border-border prose-hr:my-16 prose-hr:max-w-[720px]",
                "prose-code:text-text-primary prose-code:bg-surface prose-code:rounded prose-code:px-1.5 prose-code:py-0.5 prose-code:text-[0.9em] prose-code:font-normal prose-code:before:content-none prose-code:after:content-none",
              )}
            >
              {children}
            </div>
          </div>
        </article>

        {/* BOTTOM CTA */}
        <section className="border-t border-border">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 py-24 text-center md:px-16 md:py-32">
            <h2 className="font-display text-[32px] font-bold leading-[1.1] tracking-tight text-text-primary text-balance md:text-[40px] lg:text-[48px]">
              Have a project in mind?
            </h2>
            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href="/#cta"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                Start a Project
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform duration-200 ease-out group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/#work"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-transparent px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                View all work
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="text-accent transition-transform duration-200 ease-out group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
