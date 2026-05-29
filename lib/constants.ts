export const SITE = {
  name: "Godbless Uduak",
  monogram: "GU.",
  wordmark: "UDUAK.",
  url: "https://godblessuduak.vercel.app",
  email: "godblessuduak7@gmail.com",
  calLink: "https://cal.com/godblessuduak/discovery-call",
  tagline: "AI Web Developer & Product Designer",
  description:
    "I design and build digital products that ship. Faster, sharper, beautifully crafted with modern AI tools.",
} as const;

export const NAV = {
  links: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Process", href: "#process" },
    { label: "Ventures", href: "#ventures" },
  ],
  cta: { label: "Let's Talk", href: "#cta" },
} as const;

export const HERO = {
  eyebrow: "Hey, I'm Godbless.",
  headline: {
    line1: "AI Web Developer",
    connector: "&",
    line2: "Product Designer",
  },
  bio: "I design and build digital products that ship. Faster, sharper, beautifully crafted with modern AI tools. Product design background, AI-first builds, and a long IT support track record running Gee'stech on the side.",
  ctaPrimary: { label: "Book a call", href: "#cta" },
  ctaSecondary: { label: "See my work", href: "#work" },
} as const;

export const STATS = [
  { label: "DESIGN", value: "2+ Years" },
  { label: "AI DEVELOPMENT", value: "Shipping in 2026" },
  { label: "IT SUPPORT", value: "6+ Years" },
  { label: "STATUS", value: "Open to Work" },
] as const;

export const SERVICES = {
  eyebrow: "SERVICES",
  heading: {
    text: "Design, ",
    accent: "Development,",
    tail: " and Strategy. All-in-one.",
  },
  subhead: "I take products from idea to live URL: design, code, and ship.",
  items: [
    {
      number: "01",
      title: "AI WEB DEVELOPMENT",
      description:
        "Vibe coding with Lovable, Cursor, and Claude. Production-ready in days, not months.",
    },
    {
      number: "02",
      title: "PRODUCT DESIGN (UI/UX)",
      description:
        "Interfaces, design systems, and user flows that feel inevitable.",
    },
    {
      number: "03",
      title: "BRAND & VISUAL IDENTITY",
      description:
        "Logos, type systems, and brand foundations for digital-first brands.",
    },
  ],
} as const;

export const EXPERIENCE = {
  eyebrow: "COLLABORATED WITH",
  companies: ["ADOM LABS", "TECHNOVILLE", "STEM HALL", "GEE'STECH"],
} as const;

export const WORK = {
  heading: { text: "Selected ", accent: "Work" },
  viewAll: "(2025 — 2026)",
  featured: {
    slug: "space-and-time",
    tags: ["AI WEB DEV", "2025"],
    title: "Space & Time Design Concepts",
    description:
      "A complete digital identity for a Lagos architecture and construction studio expanding across West Africa. Editorial typography, three-pillar service architecture, and a conversion-focused brief intake form.",
    image: "/work/space-and-time.png",
    liveUrl: "https://space-and-time-website.vercel.app/",
  },
  cards: [
    {
      slug: "mayoral-hotels",
      tags: ["AI WEB DEV", "HOSPITALITY"],
      title: "Mayoral Hotels & Suites",
      image: "/work/mayoral.jpg",
      liveUrl: "",
      status: "live",
    },
    {
      slug: "iko-nnyin",
      tags: ["COMING SOON"],
      title: "Iko-Nnyin",
      image: "/work/iko-nnyin-placeholder.jpg",
      liveUrl: "",
      status: "coming-soon",
    },
  ],
} as const;

export const PROCESS = {
  eyebrow: "PROCESS",
  heading: { text: "How I ", accent: "Work" },
  subhead: "A simple four-step process from idea to launch.",
  steps: [
    {
      number: "01",
      title: "Discovery",
      description:
        "Free 30-minute call to understand your goals, audience, and scope.",
    },
    {
      number: "02",
      title: "Design",
      description:
        "Wireframes, user flows, and visual direction shaped in Figma and Stitch.",
    },
    {
      number: "03",
      title: "Build",
      description:
        "Production-ready code shipped fast with Lovable, Cursor, and Claude.",
    },
    {
      number: "04",
      title: "Launch",
      description:
        "QA, deploy, and handoff, with clean docs and a working URL.",
    },
  ],
} as const;

export const ABOUT = {
  eyebrow: "ABOUT",
  heading: {
    text: "Building with ",
    accent: "Intention",
    tail: " and Modern Tools.",
  },
  portrait: "/portrait-illustrated.jpg",
  portraitCaption: "Lagos, Nigeria, 2026",
  paragraphs: [
    "I'm a product designer and AI web developer based in Lagos. I've been designing interfaces for over two years across fintech and SaaS, and in 2026 I went all-in on building with AI tools like Lovable, Cursor, and Claude.",
    "Before design, I built a six-year track record in IT support. That knowledge still shapes how I think about systems, users, and what actually breaks in production. I also run Gee'stech, my IT services brand based in Lagos.",
    "When I'm not designing or building, I'm thinking about ways to help Nigerian creators and founders ship faster with AI.",
  ],
} as const;

export const VENTURES = {
  eyebrow: "ALSO BUILDING",
  heading: {
    text: "Powering digital life ",
    accent: "beyond",
    tail: " the screen.",
  },
  card: {
    logo: "/geestech-logo-dark.jpg",
    logoLight: "/geestech-logo-light.jpg",
    logoText: "GEE'STECH.",
    tagline: "Powering your digital life.",
    description:
      "A Lagos-based tech service brand specializing in laptop, desktop, and game console repair, sales, and maintenance.",
    cta: { label: "Visit Gee'stech", href: "#" },
  },
} as const;

export const CTA = {
  headline: {
    line1: "Let's Build",
    accent: "Something",
    line2: "Together.",
  },
  subhead:
    "Currently taking on select AI web development and product design projects.",
  ctaPrimary: {
    label: "Start a Project",
    href: "https://cal.com/godblessuduak/discovery-call",
  },
  ctaSecondary: {
    label: "Copy Email",
    value: "godblessuduak7@gmail.com",
  },
} as const;

export const FOOTER = {
  wordmark: "UDUAK.",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/godbless-uduak-9585492a3" },
    { label: "Dribbble", href: "https://dribbble.com/Godblessdgreat" },
    { label: "GitHub", href: "https://github.com/Godblessdgreat" },
    { label: "Instagram", href: "https://www.instagram.com/godblessdgreat/" },
  ],
  copyright: "© 2026 Godbless Uduak. All rights reserved.",
  tagline: "Built with AI & Intentionality.",
} as const;
