"use client";

import { motion } from "framer-motion";

import { Reveal, fadeUp, stagger } from "@/components/motion/reveal";
import { FOOTER } from "@/lib/constants";

function FooterLink({ href, label }: { href: string; label: string }) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group relative inline-block text-sm font-medium text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-bg"
    >
      {label}
      <span
        aria-hidden="true"
        className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent transition-[width] duration-200 ease-out group-hover:w-full"
      />
    </a>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-16 md:py-20">
        <Reveal variants={stagger} className="flex flex-col gap-12 md:gap-16">
          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between md:gap-12"
          >
            <span className="font-display text-[56px] font-extrabold leading-none tracking-tight text-text-primary md:text-[88px] lg:text-[120px] xl:text-[160px]">
              {FOOTER.wordmark}
            </span>

            <nav
              aria-label="Social links"
              className="flex flex-wrap gap-x-6 gap-y-3 md:flex-col md:items-end md:gap-3"
            >
              {FOOTER.socials.map((social) => (
                <FooterLink
                  key={social.label}
                  href={social.href}
                  label={social.label}
                />
              ))}
            </nav>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-3 border-t border-border pt-8 text-sm text-text-secondary md:flex-row md:items-center md:justify-between md:pt-10"
          >
            <span>{FOOTER.copyright}</span>
            <span>{FOOTER.tagline}</span>
          </motion.div>
        </Reveal>
      </div>
    </footer>
  );
}
