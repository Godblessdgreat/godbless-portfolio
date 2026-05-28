# Project Brief — Godbless Uduak Portfolio

## What we're building

A personal portfolio website for **Godbless Uduak** — a Lagos-based AI Web Developer & Product Designer. Editorial, premium, dark-mode-default, magazine-grade typography. Built to attract recruiters (Shopify, Bending Spoons tier) and AI web dev / design clients.

## Stack (locked — do not change)

- Next.js 15 (App Router, TypeScript)
- Tailwind CSS v4
- shadcn/ui
- Framer Motion
- Lenis (@studio-freight/lenis)
- next-themes
- next-mdx-remote + gray-matter
- lucide-react
- Hosted on Vercel free subdomain

## Skills

Two skill files live in `.claude/skills/`:
- `frontend-design/SKILL.md` — design system, tokens, typography, animation patterns
- `nextjs-app-router/SKILL.md` — Next.js 15 patterns, file structure, OG images, MDX

**ALWAYS read both skill files before doing any work.** They contain the locked design tokens and code patterns.

## Current state

Scaffold complete. Project has:
- Next.js 15 + TypeScript + Tailwind v4 installed
- shadcn/ui initialized, `button` and `sheet` components added
- Folder structure per `nextjs-app-router` skill
- `theme-provider.tsx` and `lenis-provider.tsx` created and wired in `app/layout.tsx`
- `app/globals.css` has design tokens
- `app/page.tsx` shows placeholder "Portfolio scaffold ready."
- `lib/constants.ts` exists but is empty — needs content (see below)

## Locked Content (single source of truth)

Populate `lib/constants.ts` with this content as a typed export. All UI components should import from this file — never hardcode content.

```ts
export const SITE = {
  name: 'Godbless Uduak',
  monogram: 'GU.',
  wordmark: 'UDUAK.',
  url: 'https://godblessuduak.vercel.app',
  email: 'godblessuduak7@gmail.com',
  calLink: 'https://cal.com/godblessuduak/discovery-call', // verify exact URL
  tagline: 'AI Web Developer & Product Designer',
  description: 'I design and build digital products that ship — faster, sharper, beautifully crafted with modern AI tools.',
};

export const NAV = {
  links: [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Process', href: '#process' },
    { label: 'Ventures', href: '#ventures' },
  ],
  cta: { label: "Let's Talk", href: '#cta' },
};

export const HERO = {
  eyebrow: "Hey, I'm Godbless —",
  headline: {
    line1: 'AI Web Developer',
    connector: '&', // italic serif accent
    line2: 'Product Designer',
  },
  bio: "I design and build digital products that ship — faster, sharper, beautifully crafted with modern AI tools. Product design background, AI-first builds, and a long IT support track record running Gee'stech on the side.",
  ctaPrimary: { label: 'Book a call', href: '#cta' },
  ctaSecondary: { label: 'See my work', href: '#work' },
};

export const STATS = [
  { label: 'DESIGN', value: '2+ Years' },
  { label: 'AI DEVELOPMENT', value: 'Shipping in 2026' },
  { label: 'IT SUPPORT', value: '6+ Years' },
  { label: 'STATUS', value: 'Open to Work' },
];

export const SERVICES = {
  eyebrow: 'SERVICES',
  heading: { text: 'Design, ', accent: 'Development,', tail: ' and Strategy. All-in-one.' }, // accent is italic serif
  subhead: 'I take products from idea to live URL — design, code, and ship.',
  items: [
    {
      number: '01',
      title: 'AI WEB DEVELOPMENT',
      description: 'Vibe coding with Lovable, Cursor, and Claude. Production-ready in days, not months.',
    },
    {
      number: '02',
      title: 'PRODUCT DESIGN (UI/UX)',
      description: 'Interfaces, design systems, and user flows that feel inevitable.',
    },
    {
      number: '03',
      title: 'BRAND & VISUAL IDENTITY',
      description: 'Logos, type systems, and brand foundations for digital-first brands.',
    },
  ],
};

export const EXPERIENCE = {
  eyebrow: 'COLLABORATED WITH',
  companies: ['ADOM LABS', 'TECHNOVILLE', 'STEM HALL', "GEE'STECH"],
};

export const WORK = {
  heading: { text: 'Selected ', accent: 'Work' },
  viewAll: 'See all projects',
  featured: {
    slug: 'space-and-time',
    tags: ['AI WEB DEV', '2025'],
    title: 'Space & Time Design Concepts',
    description: 'A complete digital identity for a Lagos architecture and construction studio expanding across West Africa. Editorial typography, three-pillar service architecture, and a conversion-focused brief intake form.',
    image: '/work/space-and-time.jpg',
    liveUrl: 'https://space-and-time-website.vercel.app/',
  },
  cards: [
    {
      slug: 'mayoral-hotels',
      tags: ['AI WEB DEV', 'HOSPITALITY'],
      title: 'Mayoral Hotels & Suites',
      image: '/work/mayoral.jpg',
      liveUrl: '', // pending fix of 401 error
      status: 'live',
    },
    {
      slug: 'iko-nnyin',
      tags: ['COMING SOON'],
      title: 'Iko-Nnyin',
      image: '/work/iko-nnyin-placeholder.jpg',
      liveUrl: '',
      status: 'coming-soon',
    },
  ],
};

export const PROCESS = {
  eyebrow: 'PROCESS',
  heading: { text: 'How I ', accent: 'Work' },
  subhead: 'A simple four-step process from idea to launch.',
  steps: [
    { number: '01', title: 'Discovery', description: 'Free 30-minute call to understand your goals, audience, and scope.' },
    { number: '02', title: 'Design', description: 'Wireframes, user flows, and visual direction shaped in Figma and Stitch.' },
    { number: '03', title: 'Build', description: 'Production-ready code shipped fast with Lovable, Cursor, and Claude.' },
    { number: '04', title: 'Launch', description: 'QA, deploy, and handoff — with clean docs and a working URL.' },
  ],
};

export const ABOUT = {
  eyebrow: 'ABOUT',
  heading: { text: 'Building with ', accent: 'Intention', tail: ' and Modern Tools.' },
  portrait: '/portrait-illustrated.jpg',
  portraitCaption: 'Lagos, Nigeria — 2026',
  paragraphs: [
    "Hey, I'm Godbless — a product designer and AI web developer based in Lagos. I've been designing interfaces for over two years across fintech and SaaS, and in 2026 I went all-in on building with AI tools like Lovable, Cursor, and Claude.",
    "Before design, I built a six-year track record in IT support — knowledge that still shapes how I think about systems, users, and what actually breaks in production. I also run Gee'stech, my IT services brand based in Lagos.",
    "When I'm not designing or building, I'm thinking about ways to help Nigerian creators and founders ship faster with AI.",
  ],
};

export const VENTURES = {
  eyebrow: 'ALSO BUILDING',
  heading: { text: 'Powering digital life ', accent: 'beyond', tail: ' the screen.' },
  card: {
    logo: '/geestech-logo-dark.svg', // light-mode version uses /geestech-logo-light.svg
    logoText: "GEE'STECH.",
    tagline: 'Powering your digital life.',
    description: 'A Lagos-based tech service brand specializing in laptop, desktop, and game console repair, sales, and maintenance.',
    cta: { label: 'Visit Gee\'stech', href: '#' }, // update with real URL when available
  },
};

export const CTA = {
  headline: { line1: "Let's Build", accent: 'Something', line2: 'Together.' },
  subhead: 'Currently taking on select AI web development and product design projects.',
  ctaPrimary: { label: 'Start a Project', href: 'https://cal.com/godblessuduak/discovery-call' }, // verify
  ctaSecondary: { label: 'Copy Email', value: 'godblessuduak7@gmail.com' },
};

export const FOOTER = {
  wordmark: 'UDUAK.',
  socials: [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/godbless-uduak' },
    { label: 'Dribbble', href: '#' }, // update
    { label: 'GitHub', href: '#' }, // update
    { label: 'Instagram', href: '#' }, // update
  ],
  copyright: '© 2026 Godbless Uduak. All rights reserved.',
  tagline: 'Built with AI & Intentionality.',
};
```

## Section order on homepage (single page)

1. Nav
2. Hero (centered, typographic-only, NO portrait)
3. Stats Strip
4. Services (3 services)
5. Experience Strip
6. Selected Work (1 featured + 2 standard, Iko-Nnyin is Coming Soon)
7. How I Work (Process)
8. About (portrait LEFT 4:5 ratio, text RIGHT, 2-column)
9. Ventures (Gee'stech)
10. CTA
11. Footer

## Build order (one section at a time)

Build sections in the order above, one at a time. After each section, stop and let me review before moving to the next.

For each section:
- Read the `frontend-design` skill for design tokens
- Read the `nextjs-app-router` skill for any Next.js patterns
- Import content from `lib/constants.ts` — never hardcode
- Use Server Components by default, Client Components only when needed (Framer Motion, hooks, etc.)
- Match the locked design system exactly (no improvisation on tokens)

## Assets needed (place in `/public/`)

- `portrait-illustrated.jpg` — B&W illustrated portrait of Godbless (for About section)
- `geestech-logo-dark.svg` — Gee'stech logo, dark text (for light mode)
- `geestech-logo-light.svg` — Gee'stech logo, white text (for dark mode)
- `work/space-and-time.jpg` — Space & Time hero screenshot
- `work/mayoral.jpg` — Mayoral Hotels hero screenshot (pending 401 fix)
- `work/iko-nnyin-placeholder.jpg` — Iko-Nnyin "Coming Soon" placeholder (can be CSS-only)

## Case studies (MDX files in `/content/work/`)

- `space-and-time.mdx` — drafted, ready to populate
- `mayoral-hotels.mdx` — to draft after 401 is fixed
- `iko-nnyin.mdx` — placeholder for now

Each MDX file uses frontmatter with: title, slug, client, year, type, role, stack, liveUrl, timeline, tags, heroImage, description.

## What to build first

Once you've read this brief and both SKILL.md files, ask me:
"Ready to build. Should I start with Section 1 (Nav)?"

Wait for confirmation before generating code.

## Notes

- Email link uses `mailto:` for "Copy Email" button — copies to clipboard with toast confirmation, not actual mailto
- Cal.com URL needs final confirmation from user
- Mayoral Hotels live URL pending 401 fix on Vercel deployment protection
- Web3Forms access key for contact form: user will provide as `WEB3FORMS_KEY` env variable
- All dates and "2026" references are intentional (current year)