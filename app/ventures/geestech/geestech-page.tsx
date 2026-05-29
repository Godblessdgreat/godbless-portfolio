"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";

import { Reveal, fadeUp, stagger } from "@/components/motion/reveal";
import { Footer } from "@/components/sections/footer";
import { GEESTECH } from "@/lib/constants";

function useCopy() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const copy = async (value: string, key: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedKey(key);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopiedKey(null), 2000);
    } catch {
      // Clipboard API unavailable — fail silently.
    }
  };

  return { copiedKey, copy };
}

export function GeestechPage() {
  const { copiedKey, copy } = useCopy();
  const heroEmailCopied = copiedKey === "hero-email";
  const contactEmailCopied = copiedKey === "contact-email";

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 pt-24 md:px-16 md:pt-28">
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
      </div>

      <main>
        {/* HERO */}
        <section>
          <div className="mx-auto max-w-7xl px-6 pt-12 pb-24 md:px-16 md:pt-16 md:pb-32">
            <Reveal variants={stagger} className="flex flex-col gap-8 md:gap-10">
              <motion.span
                variants={fadeUp}
                className="text-[11px] font-medium uppercase tracking-[0.1em] text-text-secondary"
              >
                {GEESTECH.hero.eyebrow}
              </motion.span>
              <motion.h1
                variants={fadeUp}
                className="font-display text-[44px] font-bold leading-[1.02] tracking-tight text-text-primary text-balance sm:text-[56px] md:text-[72px] lg:text-[88px] xl:text-[112px]"
              >
                {GEESTECH.hero.headline.lead}
                <span className="font-serif font-normal italic text-accent">
                  {GEESTECH.hero.headline.accent}
                </span>
                {GEESTECH.hero.headline.tail}
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg"
              >
                {GEESTECH.hero.subhead}
              </motion.p>
              <motion.div
                variants={fadeUp}
                className="mt-2 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4"
              >
                <a
                  href={GEESTECH.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--text-primary)] px-7 py-3.5 text-base font-medium text-[var(--bg)] transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  {GEESTECH.hero.ctaPrimary}
                  <ArrowRight
                    size={16}
                    aria-hidden="true"
                    className="text-accent transition-transform duration-200 ease-out group-hover:translate-x-1"
                  />
                </a>
                <button
                  type="button"
                  onClick={() => copy(GEESTECH.contact.heroEmail, "hero-email")}
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-transparent px-7 py-3.5 text-base font-medium text-text-primary transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  <span aria-hidden="true">
                    {heroEmailCopied ? "Email copied" : GEESTECH.hero.ctaSecondary}
                  </span>
                  {heroEmailCopied ? (
                    <Check size={16} aria-hidden="true" className="text-accent" />
                  ) : (
                    <Copy
                      size={16}
                      aria-hidden="true"
                      className="text-accent transition-transform duration-200 ease-out group-hover:scale-110"
                    />
                  )}
                  <span className="sr-only" aria-live="polite">
                    {heroEmailCopied
                      ? `Email copied to clipboard: ${GEESTECH.contact.heroEmail}`
                      : `Copy email ${GEESTECH.contact.heroEmail} to clipboard`}
                  </span>
                </button>
              </motion.div>
            </Reveal>
          </div>
        </section>

        {/* ABOUT */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-24 md:px-16 md:py-32">
            <Reveal
              variants={stagger}
              className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16"
            >
              <motion.h2
                variants={fadeUp}
                className="font-display text-[32px] font-bold leading-[1.1] tracking-tight text-text-primary text-balance md:col-span-5 md:text-[40px] lg:text-[48px] xl:text-[56px]"
              >
                {GEESTECH.about.heading}
              </motion.h2>
              <motion.div
                variants={fadeUp}
                className="flex flex-col gap-5 md:col-span-7"
              >
                {GEESTECH.about.paragraphs.map((paragraph, i) => (
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
        </section>

        {/* WHAT WE DO */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-24 md:px-16 md:py-32">
            <Reveal
              variants={stagger}
              className="mb-12 flex flex-col gap-6 md:mb-16"
            >
              <motion.span
                variants={fadeUp}
                className="text-[11px] font-medium uppercase tracking-[0.1em] text-text-secondary"
              >
                {GEESTECH.services.eyebrow}
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className="max-w-5xl font-display text-[40px] font-bold leading-[1.05] tracking-tight text-text-primary text-balance sm:text-[44px] md:text-[56px] lg:text-[64px] xl:text-[72px]"
              >
                {GEESTECH.services.heading}
              </motion.h2>
            </Reveal>
            <Reveal
              variants={stagger}
              className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4"
            >
              {GEESTECH.services.items.map((service) => (
                <motion.article
                  key={service.number}
                  variants={fadeUp}
                  className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 md:p-8"
                >
                  <span className="font-display text-sm font-medium uppercase tracking-[0.1em] text-text-secondary">
                    {service.number}
                  </span>
                  <h3 className="font-display text-lg font-bold uppercase tracking-tight text-text-primary md:text-xl">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary md:text-base">
                    {service.description}
                  </p>
                </motion.article>
              ))}
            </Reveal>
          </div>
        </section>

        {/* WHO WE SERVE */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-24 md:px-16 md:py-32">
            <Reveal variants={stagger} className="mb-12 md:mb-16">
              <motion.h2
                variants={fadeUp}
                className="max-w-5xl font-display text-[40px] font-bold leading-[1.05] tracking-tight text-text-primary text-balance sm:text-[44px] md:text-[56px] lg:text-[64px] xl:text-[72px]"
              >
                {GEESTECH.audiences.heading}
              </motion.h2>
            </Reveal>
            <Reveal
              variants={stagger}
              className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-4"
            >
              {GEESTECH.audiences.items.map((audience) => (
                <motion.div
                  key={audience.label}
                  variants={fadeUp}
                  className="flex flex-col gap-3"
                >
                  <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-text-secondary">
                    {audience.label}
                  </span>
                  <p className="text-base leading-relaxed text-text-primary md:text-lg">
                    {audience.body}
                  </p>
                </motion.div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* VISION */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-24 md:px-16 md:py-32">
            <Reveal variants={stagger} className="mb-12 md:mb-16">
              <motion.h2
                variants={fadeUp}
                className="max-w-5xl font-display text-[40px] font-bold leading-[1.05] tracking-tight text-text-primary text-balance sm:text-[44px] md:text-[56px] lg:text-[64px] xl:text-[72px]"
              >
                {GEESTECH.vision.heading.lead}
                <span className="font-serif font-normal italic text-accent">
                  {GEESTECH.vision.heading.accent}
                </span>
                {GEESTECH.vision.heading.tail}
              </motion.h2>
            </Reveal>
            <Reveal
              variants={stagger}
              className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16"
            >
              {GEESTECH.vision.columns.map((column) => (
                <motion.div
                  key={column.title}
                  variants={fadeUp}
                  className="flex flex-col gap-4"
                >
                  <h3 className="font-display text-xl font-bold tracking-tight text-text-primary md:text-2xl">
                    {column.title}
                  </h3>
                  <p className="text-base leading-relaxed text-text-secondary md:text-lg">
                    {column.body}
                  </p>
                </motion.div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* WHAT'S NEXT */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-24 md:px-16 md:py-32">
            <Reveal
              variants={stagger}
              className="mb-12 flex flex-col gap-6 md:mb-16"
            >
              <motion.span
                variants={fadeUp}
                className="text-[11px] font-medium uppercase tracking-[0.1em] text-text-secondary"
              >
                {GEESTECH.future.eyebrow}
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className="max-w-5xl font-display text-[40px] font-bold leading-[1.05] tracking-tight text-text-primary text-balance sm:text-[44px] md:text-[56px] lg:text-[64px] xl:text-[72px]"
              >
                {GEESTECH.future.heading}
              </motion.h2>
            </Reveal>
            <Reveal variants={stagger} className="flex flex-col">
              {GEESTECH.future.items.map((item, i) => (
                <motion.div
                  key={item.number}
                  variants={fadeUp}
                  className={`grid grid-cols-[64px_1fr] items-start gap-x-6 gap-y-3 py-8 md:grid-cols-[120px_minmax(0,1fr)_minmax(0,2fr)] md:items-baseline md:gap-x-12 md:py-10 ${
                    i > 0 ? "border-t border-border" : ""
                  }`}
                >
                  <span className="font-display text-2xl font-bold leading-none tracking-tight tabular-nums text-text-secondary md:text-[40px]">
                    {item.number}
                  </span>
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-text-primary md:text-[28px]">
                    {item.title}
                  </h3>
                  <p className="col-span-2 text-base leading-relaxed text-text-secondary md:col-span-1 md:text-lg">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* TEAM */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-24 md:px-16 md:py-32">
            <Reveal variants={stagger} className="mb-12 md:mb-16">
              <motion.h2
                variants={fadeUp}
                className="max-w-5xl font-display text-[40px] font-bold leading-[1.05] tracking-tight text-text-primary text-balance sm:text-[44px] md:text-[56px] lg:text-[64px] xl:text-[72px]"
              >
                {GEESTECH.team.heading.lead}
                <span className="font-serif font-normal italic text-accent">
                  {GEESTECH.team.heading.accent}
                </span>
                {GEESTECH.team.heading.tail}
              </motion.h2>
            </Reveal>
            <Reveal
              variants={stagger}
              className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10"
            >
              {GEESTECH.team.members.map((member) => (
                <motion.article
                  key={member.name}
                  variants={fadeUp}
                  className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-8 md:p-10"
                >
                  <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-text-secondary">
                    {member.role}
                  </span>
                  <h3 className="font-display text-2xl font-bold tracking-tight text-text-primary md:text-[28px]">
                    {member.name}
                  </h3>
                  <p className="text-base leading-relaxed text-text-secondary md:text-lg">
                    {member.bio}
                  </p>
                </motion.article>
              ))}
            </Reveal>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section id="contact" className="border-t border-border">
          <Reveal
            variants={stagger}
            className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-32 text-center md:gap-12 md:px-16 md:py-48"
          >
            <motion.h2
              variants={fadeUp}
              className="font-display text-[40px] font-bold leading-[1.05] tracking-tight text-text-primary text-balance sm:text-[44px] md:text-[56px] lg:text-[64px] xl:text-[72px]"
            >
              {GEESTECH.contact.heading}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg"
            >
              {GEESTECH.contact.subhead}
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-col items-stretch gap-3 sm:items-center md:flex-row md:flex-wrap md:justify-center md:gap-4"
            >
              <a
                href={GEESTECH.contact.phoneHref}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-transparent px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                <Phone size={16} aria-hidden="true" className="text-accent" />
                {GEESTECH.contact.phoneLabel}
              </a>
              <a
                href={GEESTECH.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                <MessageCircle size={16} aria-hidden="true" />
                WhatsApp {GEESTECH.contact.whatsappLabel}
                <ArrowUpRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform duration-200 ease-out group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
              <button
                type="button"
                onClick={() =>
                  copy(GEESTECH.contact.contactEmail, "contact-email")
                }
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-transparent px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                {contactEmailCopied ? (
                  <Check size={16} aria-hidden="true" className="text-accent" />
                ) : (
                  <Mail size={16} aria-hidden="true" className="text-accent" />
                )}
                <span aria-hidden="true">
                  {contactEmailCopied
                    ? "Email copied"
                    : GEESTECH.contact.contactEmail}
                </span>
                <span className="sr-only" aria-live="polite">
                  {contactEmailCopied
                    ? `Email copied to clipboard: ${GEESTECH.contact.contactEmail}`
                    : `Copy email ${GEESTECH.contact.contactEmail} to clipboard`}
                </span>
              </button>
            </motion.div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </>
  );
}
