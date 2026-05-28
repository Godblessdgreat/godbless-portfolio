---
name: frontend-design
description: Design system, tokens, typography, animation patterns, and component conventions for the Godbless Uduak portfolio. Use whenever building, modifying, or styling any UI component, page section, layout, or visual element. Triggers on any task involving Tailwind classes, colors, typography, spacing, animation, hover states, or component structure.
---

# Frontend Design System — Godbless Uduak Portfolio

This document is the single source of truth for visual design on this project. Before writing any UI code, read this file in full. Do not deviate from these tokens without explicit user approval.

## Brand Voice

Editorial, premium, calm, confident. Magazine-grade typography meets modern tech. Generous whitespace. Quiet luxury, never loud.

## Color Tokens

### Dark Mode (default)

```css
--bg: #0A0A0C;            /* page background */
--surface: #141417;       /* cards, raised sections */
--border: #2A2A2E;        /* dividers, card borders */
--text-primary: #F5F5F2;  /* headlines, body */
--text-secondary: #8A8A85;/* captions, secondary text */
--accent: #1DA1F2;        /* electric blue — use sparingly */
```

### Light Mode

```css
--bg: #F1EFE7;            /* warm cream */
--surface: #FFFFFF;
--border: #E5E3DA;
--text-primary: #1A1A18;
--text-secondary: #7A7770;
--accent: #1DA1F2;        /* same accent across modes */
```

### Accent Color Rules

The electric blue (`#1DA1F2`) is precious. Use it ONLY for:
- The "&" connector in the hero headline
- Active nav link underline (2px, ~70% link width)
- Small directional arrows on links/buttons (e.g., `→`)
- The italic serif accent word "Something" in the CTA headline
- Card hover glow at 20% opacity
- The Ventures section background tint at 6% opacity
- The "Let's Talk" CTA in the nav (filled accent button — this is the one large-fill exception)

DO NOT use the accent for primary buttons elsewhere, large fills, body text, or backgrounds outside the rules above.

## Typography

### Fonts (loaded via next/font/google)

```ts
import { Inter_Tight, Instrument_Serif, Inter } from 'next/font/google';

const displaySans = Inter_Tight({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const italicSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: 'italic',
  variable: '--font-serif',
  display: 'swap',
});

const bodySans = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
  display: 'swap',
});
```

### Type Scale (desktop)

| Use case | Size | Weight | Font |
|----------|------|--------|------|
| Hero headline | 120-160px | 800 | Inter Tight |
| Section heading | 64-96px | 700 | Inter Tight |
| CTA mega-headline | 120px | 700 | Inter Tight |
| Card title (featured work) | 56-72px | 700 | Inter Tight |
| Card title (standard) | 20-28px | 700 | Inter Tight |
| Body large | 18px | 400 | Inter |
| Body | 16px | 400 | Inter |
| Eyebrow / label | 12px uppercase, 0.1em tracking | 500 | Inter |
| Caption | 14px | 400 | Inter |

### Mobile Type Scale

Reduce by ~40% on mobile:
- Hero headline: 56-72px
- Section heading: 40-48px
- CTA mega-headline: 56-72px
- Card titles: scale proportionally

### The Italic Serif Accent Rule

Italic Instrument Serif is used ONLY for connector words inside section headings. Examples from this project:

- "AI Web Developer *&* Product Designer" — only "&"
- "Design, *Development,* and Strategy"
- "Selected *Work*"
- "How I *Work*"
- "Building with *Intention* and Modern Tools"
- "Powering digital life *beyond* the screen"
- "Let's Build *Something* Together"

NEVER italicize whole headlines, body text, or paragraphs. The italic is a punctuation device.

## Spacing

```css
--section-padding-y-desktop: 96px to 128px;
--section-padding-y-mobile: 64px;
--max-content-width: 1280px;
--gutter-desktop: 64px;
--gutter-mobile: 24px;
```

Tailwind translation:
- Standard sections: `py-24 md:py-32`
- CTA section: `py-32 md:py-48`
- Max width container: `mx-auto max-w-7xl px-6 md:px-16`

## Border Radius

```css
--radius-card: 16px;     /* work cards, ventures card */
--radius-input: 8px;     /* form fields */
--radius-pill: 9999px;   /* nav, buttons, tags */
```

Tailwind: `rounded-2xl` (16px), `rounded-lg` (8px), `rounded-full` (pill).

## Component Patterns

### Buttons

**Primary pill (filled):**
- Background: `bg-[#1DA1F2]` (accent) for "Let's Talk" / "Start a Project", OR `bg-[var(--text-primary)]` for "Book a call" (high-contrast dark fill)
- Text: white
- Padding: `px-6 py-3`
- Radius: `rounded-full`
- Hover: arrow shifts 4px right (transition 200ms ease-out)

**Secondary pill (outlined):**
- Background: transparent
- Border: 1px solid `var(--border)`
- Text: `var(--text-primary)`
- Same padding and radius as primary

**Text link:**
- Color: `var(--text-primary)`
- Underline on hover (animated, expanding from left, 200ms)
- Optional small arrow that shifts on hover

### Cards

**Default card (services, ventures):**
- Background: `var(--surface)`
- Border: 1px solid `var(--border)`
- Radius: `rounded-2xl`
- Padding: `p-8` desktop, `p-6` mobile

**Work card (Selected Work section):**
- No internal padding — image fills the card
- `rounded-2xl` with `overflow-hidden`
- Hover: image scales to 1.05 over 400ms ease-out
- Card border glows at 20% accent opacity on hover
- The Iko-Nnyin "Coming Soon" card uses a dashed border and 60% opacity to differentiate

**Browser-frame wrapper (for project mockups):**
- Wrap raw project screenshot in a CSS-only browser frame
- Top bar: 32px tall, `var(--surface)` color, with 3 traffic light dots (red `#FF5F57`, yellow `#FEBC2E`, green `#28C840`), and a faux URL bar (rounded pill, slightly darker than surface)
- Bottom: screenshot image with `object-cover`
- This makes any screenshot look professional

### Nav (floating centered pill)

- Fixed top, 16px from edge
- Width: ~720px max, responsive
- Background: `var(--surface)` with thin `var(--border)`
- Soft shadow: `shadow-lg shadow-black/20`
- Layout: logo "GU." (left) — nav links (center) — theme toggle + "Let's Talk" button (right)
- Active link: 2px accent underline, ~70% of link width, centered

### Tags / Pills

- Small uppercase 11px text, 0.05em tracking
- Border: 1px solid `var(--border)`
- Padding: `px-3 py-1`
- Radius: `rounded-full`
- Background: transparent (or `var(--surface)` on dark image overlays)

## Animation Patterns (Framer Motion)

```ts
// Stagger fade-up entrance (hero, sections on scroll)
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

// Stagger children container
const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};
```

**Section reveals on scroll:** use `useInView` with `once: true, amount: 0.2`. Sections fade up when 20% in view, only animate once per page load.

**Smooth scroll:** Lenis initialized in root layout (client island). Default settings:
```ts
new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  smoothTouch: false,
});
```

**Reduce motion:** Always check `prefers-reduced-motion`. If user has motion reduced, skip Framer animations and disable Lenis.

```ts
const prefersReducedMotion = typeof window !== 'undefined' && 
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;
```

**Theme transition:** 300ms smooth fade between modes. Do NOT disable transitions on theme change.

## Anti-Patterns (Do NOT Do)

- ❌ Don't use `rounded-md` on cards — always `rounded-2xl` (16px)
- ❌ Don't use accent color for large fills or body text (one exception: "Let's Talk" nav CTA)
- ❌ Don't italicize entire headlines — only connector words
- ❌ Don't add gradient backgrounds — design is flat and editorial
- ❌ Don't use drop shadows on text — flat typography only
- ❌ Don't use emoji icons — use Lucide React icons or custom SVG
- ❌ Don't use `text-center` on body paragraphs — always left-aligned (except CTA section, which is centered)
- ❌ Don't put a portrait in the hero — portrait lives in the About section only
- ❌ Don't use Tailwind's default `gray-*` palette — always use the defined CSS variable tokens
- ❌ Don't add hover effects on every element — reserve hover for interactive elements (buttons, links, cards)
- ❌ Don't use box-shadow on cards by default — only on the nav pill and on hover states
- ❌ Don't auto-play any animations infinitely — entrance animations run once

## Responsive Breakpoints

- Mobile: `<768px`
- Tablet: `768px - 1279px`
- Desktop: `1280px+`

Tailwind: use `md:` for tablet+, `lg:` for desktop+. Default styles are mobile-first.

### Mobile-Specific Behaviors

- Hero: centered, headline reduces to 56-72px
- Stats strip: becomes 2×2 grid instead of 4 columns
- Services: single column stack
- Selected Work: featured card stays full-width, smaller cards stack into single column
- Process steps: stack vertically (number on left, content on right of each step)
- About: stacks (portrait above text)
- Ventures: stacks
- Nav: collapses to hamburger inside the pill, opens sheet from right

## Accessibility Minimums

- All interactive elements: visible focus ring (2px accent color, 2px offset)
- Color contrast: text-primary on bg passes AAA, text-secondary passes AA
- All images: meaningful `alt` text or empty alt for decorative
- All buttons: real `<button>` elements (not divs)
- Theme toggle: announces state via `aria-label`
- Keyboard navigation: tab order matches visual order
- Skip-to-content link at top of page
- Respect `prefers-reduced-motion`

## Project-Specific Content Reference

The locked content for all sections lives in `/lib/constants.ts`. NEVER hardcode content in components — always import from constants. This is the single source of truth.

Section order on homepage:
1. Nav
2. Hero (centered, typographic-only, NO portrait)
3. Stats Strip
4. Services (3 services, not 4)
5. Experience Strip
6. Selected Work (1 featured + 2 standard, including Iko-Nnyin Coming Soon)
7. How I Work (Process)
8. About (portrait LEFT, text RIGHT, 2-column)
9. Ventures (Gee'stech)
10. CTA
11. Footer

Footer socials: LinkedIn · Dribbble · GitHub · Instagram (in that order).
