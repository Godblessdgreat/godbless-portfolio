"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { useLenis } from "@/components/lenis-provider";
import { NAV, SITE } from "@/lib/constants";

function useScrollSpy(ids: readonly string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (ids.length === 0) return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const insideBand = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            insideBand.add(entry.target.id);
          } else {
            insideBand.delete(entry.target.id);
          }
        }
        const next = ids.find((id) => insideBand.has(id)) ?? null;
        setActiveId(next);
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 1],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollTo } = useLenis();
  const ids = NAV.links.map((link) => link.href.replace("#", ""));
  const activeId = useScrollSpy(ids);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith("#")) return;
    const id = href.slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    setMobileOpen(false);
    scrollTo(target, { offset: -80 });
  };

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 md:px-6">
      <nav
        aria-label="Primary"
        className="flex w-full max-w-3xl items-center justify-between gap-3 rounded-full border border-border bg-surface/95 px-3 py-2 shadow-lg shadow-black/20 backdrop-blur supports-[backdrop-filter]:bg-surface/80"
      >
        <Link
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            scrollTo(0);
          }}
          className="px-2 font-display text-lg font-bold tracking-tight text-text-primary"
          aria-label={`${SITE.name} home`}
        >
          {SITE.monogram}
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV.links.map((link) => {
            const id = link.href.slice(1);
            const isActive = activeId === id;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  aria-current={isActive ? "true" : undefined}
                  className="relative inline-flex items-center px-3 py-2 text-sm font-medium text-text-primary transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-underline"
                      className="absolute -bottom-0.5 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-accent"
                      style={{ width: "70%" }}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <Link
            href={NAV.cta.href}
            onClick={(e) => handleAnchorClick(e, NAV.cta.href)}
            className="hidden items-center rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface md:inline-flex"
          >
            {NAV.cta.label}
          </Link>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              render={
                <button
                  type="button"
                  aria-label="Open menu"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full text-text-primary transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface md:hidden"
                />
              }
            >
              <Menu size={18} aria-hidden="true" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-surface text-text-primary border-l border-border"
            >
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="flex h-full flex-col gap-2 px-6 pt-16 pb-8">
                <nav aria-label="Mobile" className="flex flex-col gap-1">
                  {NAV.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleAnchorClick(e, link.href)}
                      className="block py-3 font-display text-2xl font-bold tracking-tight text-text-primary transition-opacity hover:opacity-70"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto pt-6">
                  <Link
                    href={NAV.cta.href}
                    onClick={(e) => handleAnchorClick(e, NAV.cta.href)}
                    className="inline-flex w-full items-center justify-center rounded-full bg-accent px-4 py-3 text-base font-medium text-white transition-opacity hover:opacity-90"
                  >
                    {NAV.cta.label}
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
