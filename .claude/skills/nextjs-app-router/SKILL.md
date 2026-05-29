---
name: nextjs-app-router
description: Modern Next.js 15 App Router patterns and conventions for the Godbless Uduak portfolio. Use whenever creating routes, layouts, pages, components, metadata, OG images, fonts, images, or any Next.js-specific code. Triggers on any task involving Next.js, routing, server/client components, metadata, MDX content, or rendering strategy.
---

# Next.js 15 App Router Patterns

Stack: Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + shadcn/ui + Framer Motion + Lenis + next-themes + MDX. Default to Server Components. Use `'use client'` only when genuinely needed.

## When to Use `'use client'`

A component MUST be a Client Component if it uses:
- React hooks (`useState`, `useEffect`, `useReducer`, custom hooks that use these)
- Browser-only APIs (`window`, `document`, `localStorage`, `navigator`)
- Event handlers (`onClick`, `onChange`, `onSubmit`)
- Framer Motion animations
- Context consumers
- `next-themes` `useTheme` hook
- Lenis smooth scroll

Everything else stays a Server Component.

### Common Pattern: Client Island Inside Server Parent

Don't make a whole page client just because one child needs interactivity. Instead:

```tsx
// app/page.tsx (Server Component — default)
import { Hero } from '@/components/sections/hero';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Page() {
  return (
    <>
      <Hero />
      <ThemeToggle />  {/* Client island */}
    </>
  );
}

// components/theme-toggle.tsx
'use client';
import { useTheme } from 'next-themes';
// ...
```

## File Structure Conventions

```
/app
  layout.tsx              → root layout (theme provider, fonts, Lenis init wrapper)
  page.tsx                → homepage (Server Component)
  globals.css             → Tailwind imports + CSS variables
  opengraph-image.tsx     → dynamic OG for homepage
  /work
    /[slug]
      page.tsx            → dynamic case study page
      opengraph-image.tsx → dynamic OG per case study
  /api
    /contact
      route.ts            → Web3Forms proxy
/components
  /sections               → one file per section (nav, hero, stats, services, etc.)
  /ui                     → shadcn primitives (button, sheet, etc.)
  /motion                 → reusable Framer Motion wrappers
  theme-provider.tsx
  theme-toggle.tsx
  lenis-provider.tsx
/content
  /work
    space-and-time.mdx
    mayoral-hotels.mdx
    iko-nnyin.mdx
/lib
  constants.ts            → all content (single source of truth)
  utils.ts                → cn() helper, etc.
  mdx.ts                  → MDX loading utilities
```

## Root Layout Pattern

```tsx
// app/layout.tsx
import type { Metadata } from 'next';
import { Space_Grotesk, Instrument_Serif, Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { LenisProvider } from '@/components/lenis-provider';
import './globals.css';

const displaySans = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
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

export const metadata: Metadata = {
  title: 'Godbless Uduak — AI Web Developer & Product Designer',
  description: 'I design and build digital products that ship — faster, sharper, beautifully crafted with modern AI tools.',
  metadataBase: new URL('https://godblessuduak.vercel.app'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${displaySans.variable} ${italicSerif.variable} ${bodySans.variable}`}
      suppressHydrationWarning
    >
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <LenisProvider>{children}</LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
```

## Metadata API

For every page, export metadata:

```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Godbless Uduak — AI Web Developer & Product Designer',
  description: 'I design and build digital products that ship — faster, sharper, beautifully crafted with modern AI tools.',
  openGraph: {
    title: 'Godbless Uduak',
    description: 'AI Web Developer & Product Designer based in Lagos',
    url: 'https://godblessuduak.vercel.app',
    siteName: 'Godbless Uduak',
    images: [{ url: '/opengraph-image' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Godbless Uduak',
    description: 'AI Web Developer & Product Designer based in Lagos',
  },
};
```

For dynamic case study pages, use `generateMetadata`:

```tsx
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  return {
    title: `${project.title} — Case Study | Godbless Uduak`,
    description: project.description,
  };
}
```

Note: In Next.js 15, `params` is a Promise — always `await` it.

## OG Image Pattern (`next/og`)

```tsx
// app/opengraph-image.tsx
import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0A0C',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
        }}
      >
        <div style={{ fontSize: 32, color: '#8A8A85', letterSpacing: '0.1em' }}>
          GU.
        </div>
        <div style={{ fontSize: 96, color: '#F5F5F2', lineHeight: 1.0, fontWeight: 800 }}>
          AI Web Developer<br />& Product Designer
        </div>
        <div style={{ fontSize: 24, color: '#8A8A85' }}>
          Lagos, Nigeria
        </div>
      </div>
    ),
    size
  );
}
```

## next/image Pattern

ALWAYS use `next/image`. NEVER raw `<img>` tags.

```tsx
import Image from 'next/image';

<Image
  src="/work/space-and-time.jpg"
  alt="Space & Time Design Concepts homepage screenshot"
  width={1920}
  height={1200}
  priority={isAboveFold}
  className="rounded-2xl"
/>
```

For above-the-fold images, set `priority`. For below-fold, default lazy loading is fine.

For fill containers, use `fill` with relative parent:

```tsx
<div className="relative aspect-[4/5] w-full">
  <Image src="..." alt="..." fill className="object-cover" />
</div>
```

For SVGs (like the Gee'stech logos), `next/image` works but you can also import directly:

```tsx
import GeestechLogo from '@/public/geestech-logo-dark.svg';
// ...use as <GeestechLogo /> in components if using SVGR
```

## Theme Setup with `next-themes`

```tsx
// components/theme-provider.tsx
'use client';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
```

```tsx
// components/theme-toggle.tsx
'use client';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-9 h-9" />; // Avoid hydration mismatch

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="..."
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
```

## Lenis Smooth Scroll Setup

```tsx
// components/lenis-provider.tsx
'use client';
import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
}
```

## MDX Case Study Pattern

Each case study lives in `/content/work/*.mdx` with frontmatter:

```mdx
---
title: "Space & Time Design Concepts"
slug: "space-and-time"
client: "Space & Time Design Concepts"
year: "2025"
type: "AI Web Development"
role: "Designer & Developer"
stack: ["Lovable", "Claude", "Vercel"]
liveUrl: "https://space-and-time-website.vercel.app/"
timeline: "2-4 weeks"
tags: ["AI Web Dev", "Architecture", "Editorial"]
heroImage: "/work/space-and-time.jpg"
description: "A complete digital identity for a Lagos architecture and construction studio expanding across West Africa."
---

# Heading

Body content here...
```

Use `gray-matter` + `next-mdx-remote` for parsing:

```tsx
// lib/mdx.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const CONTENT_PATH = path.join(process.cwd(), 'content/work');

export function getAllProjects() {
  const files = fs.readdirSync(CONTENT_PATH);
  return files
    .filter((f) => f.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '');
      const source = fs.readFileSync(path.join(CONTENT_PATH, file), 'utf8');
      const { data } = matter(source);
      return { slug, ...data };
    });
}

export function getProject(slug: string) {
  const source = fs.readFileSync(path.join(CONTENT_PATH, `${slug}.mdx`), 'utf8');
  const { data, content } = matter(source);
  return { ...data, content };
}
```

## API Route Pattern (Contact Form via Web3Forms)

```tsx
// app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_KEY,
        ...body,
      }),
    });
    
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Submission failed' },
      { status: 500 }
    );
  }
}
```

Environment variable `WEB3FORMS_KEY` lives in `.env.local` (gitignored) and in Vercel project settings for production.

## Tailwind CSS v4 Configuration

Tailwind v4 uses CSS-first config. In `app/globals.css`:

```css
@import "tailwindcss";

@theme {
  --color-bg: #0A0A0C;
  --color-surface: #141417;
  --color-border: #2A2A2E;
  --color-text-primary: #F5F5F2;
  --color-text-secondary: #8A8A85;
  --color-accent: #1DA1F2;
  
  --font-display: var(--font-display);
  --font-serif: var(--font-serif);
  --font-body: var(--font-body);
}

:root {
  --bg: #0A0A0C;
  --surface: #141417;
  --border: #2A2A2E;
  --text-primary: #F5F5F2;
  --text-secondary: #8A8A85;
  --accent: #1DA1F2;
}

.light {
  --bg: #F1EFE7;
  --surface: #FFFFFF;
  --border: #E5E3DA;
  --text-primary: #1A1A18;
  --text-secondary: #7A7770;
}

body {
  background: var(--bg);
  color: var(--text-primary);
  transition: background 300ms ease, color 300ms ease;
}
```

## Performance Defaults

- Use Server Components by default — they ship zero JS
- Use `next/image` for all images (automatic optimization)
- Use `next/font` for all fonts (zero CLS, automatic preload)
- Set `priority` on the hero image / above-the-fold images only
- Use dynamic imports for heavy client-only libs when appropriate
- Target Lighthouse 95+ on all four scores

## Anti-Patterns (Do NOT Do)

- ❌ Don't put `'use client'` at the top of every file by default
- ❌ Don't fetch data inside Client Components when a Server Component could fetch it
- ❌ Don't use the Pages Router patterns (`getServerSideProps`, `getStaticProps`) — App Router uses async Server Components instead
- ❌ Don't use `next/head` — use the Metadata API
- ❌ Don't use raw `<img>` or `<a href="/internal-route">` — use `next/image` and `next/link`
- ❌ Don't ship animation libraries to Server Components — Framer Motion needs `'use client'`
- ❌ Don't use `useRouter` from `next/router` — import from `next/navigation` in App Router
- ❌ Don't forget to `await params` and `await searchParams` in Next.js 15 — they're Promises now
- ❌ Don't hardcode content in components — pull from `/lib/constants.ts`
- ❌ Don't commit `.env.local` — environment vars go in Vercel dashboard for production
