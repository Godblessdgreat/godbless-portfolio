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
    { label: "Tools", href: "#tools" },
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
  viewAll: "(2025, 2026)",
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
      liveUrl: "https://mayoral-hotel-suites.vercel.app",
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

type ToolItem = {
  name: string;
  slug: string | null;
  label?: string;
};

const TOOLS_ITEMS: readonly ToolItem[] = [
  { name: "Figma", slug: "figma" },
  { name: "Stitch", slug: null, label: "Stitch" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "Vercel", slug: "vercel" },
  { name: "GitHub", slug: "github" },
  { name: "VS Code", slug: "visualstudiocode" },
  { name: "Claude", slug: "claude" },
  { name: "Cursor", slug: "cursor" },
  { name: "Lovable", slug: null, label: "Lovable" },
  { name: "ChatGPT", slug: "openai" },
];

export const TOOLS = {
  eyebrow: "TOOLS I USE",
  heading: { text: "The stack I ", accent: "build", tail: " with." },
  subhead:
    "A mix of design, development, and AI tools, refined to ship faster without sacrificing craft.",
  items: TOOLS_ITEMS,
};

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
    "I'm eager about AI and currently learning prompt engineering, AI systems, and how to build with the next wave of tools, through Oracle's Foundations of Artificial Intelligence programme and hands-on shipping.",
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
    cta: { label: "Visit Gee'stech", href: "/ventures/geestech" },
  },
} as const;

export const GEESTECH = {
  contact: {
    whatsappUrl: "https://wa.me/2349020149082",
    whatsappLabel: "+234 902 014 9082",
    phoneLabel: "+234 915 311 5683",
    phoneHref: "tel:+2349153115683",
    heroEmail: "stay@geestech.ng",
    contactEmail: "godblessuduak7@gmail.com",
    heading: "Need a repair, an upgrade, or a fresh setup?",
    subhead: "Reach out. We respond fast.",
  },
  hero: {
    eyebrow: "VENTURE · 2025, PRESENT",
    headline: { lead: "Powering your ", accent: "digital", tail: " life." },
    subhead:
      "Gee'stech is my IT services brand based in Lagos, laptop, desktop, and game console repair, sales, and maintenance for individuals, students, small businesses, and gamers.",
    ctaPrimary: "WhatsApp us",
    ctaSecondary: "Email Gee'stech",
  },
  about: {
    heading: "Fast-rising. Founder-led. Built for Lagos.",
    paragraphs: [
      "Gee'stech is a fast-rising tech service provider specializing in the repair, sales, and maintenance of laptops, desktops, PlayStations, and game consoles, as well as a wide range of computer accessories. We're committed to fast, reliable, and professional solutions that meet the evolving needs of our customers.",
      "Based in Lagos, we serve a growing base of customers, from students and small business owners to corporate organizations and tech enthusiasts. Our goal: become the premier hub for technology needs within our community and beyond.",
    ],
  },
  services: {
    eyebrow: "WHAT WE DO",
    heading: "Services we provide.",
    items: [
      {
        number: "01",
        title: "LAPTOP & DESKTOP SERVICES",
        description:
          "Professional repairs, upgrades, and maintenance. From hardware replacements to software installations.",
      },
      {
        number: "02",
        title: "SALES OF LAPTOPS & ACCESSORIES",
        description:
          "Affordable brand-new and fairly used laptops, plus chargers, keyboards, storage, and accessories.",
      },
      {
        number: "03",
        title: "TECH SUPPORT & CONSULTATION",
        description:
          "Expert advice and troubleshooting for individuals and small businesses. Informed decisions on tech purchases, setups, and digital strategies.",
      },
      {
        number: "04",
        title: "GAME CONSOLE & PLAYSTATION SERVICES",
        description:
          "Repairs, upgrades, and maintenance for PlayStations and a wide range of gaming consoles. Reliable solutions for uninterrupted entertainment.",
      },
    ],
  },
  audiences: {
    heading: "Who we serve.",
    items: [
      {
        label: "CORPORATE ORGANIZATIONS",
        body: "Bulk solutions, maintenance contracts, professional IT support.",
      },
      {
        label: "STUDENTS & PROFESSIONALS",
        body: "Affordable laptops, accessories, and repair services for learning, productivity, and career growth.",
      },
      {
        label: "SMALL BUSINESS OWNERS",
        body: "Reliable tech solutions that keep businesses running smoothly.",
      },
      {
        label: "GAMERS & TECH ENTHUSIASTS",
        body: "Console repairs, upgrades, and accessories tailored to high-performance needs.",
      },
    ],
  },
  vision: {
    heading: { lead: "Where we're ", accent: "headed", tail: "." },
    columns: [
      {
        title: "Empowering through technology",
        body: "Our vision is to create a world where access to technology is seamless and affordable, enabling individuals and businesses to reach their fullest potential. We aim to be more than a service provider; we aspire to be a trusted partner in driving innovation and digital growth.",
      },
      {
        title: "Becoming a tech hub",
        body: "We're building Gee'stech as a center for technology, a place where repair, innovation, training, and collaboration intersect. From everyday solutions to pioneering initiatives, we want to be at the heart of technological progress in our community and beyond.",
      },
    ],
  },
  future: {
    eyebrow: "THE FUTURE OF GEE'STECH",
    heading: "What's next.",
    items: [
      {
        number: "01",
        title: "TECHNOLOGY CENTER",
        description:
          "A modern facility featuring a Tech Gym for healthy living, an Event Hall for tech gatherings, and a Training Center for skill development.",
      },
      {
        number: "02",
        title: "TECH AGENCY",
        description:
          "Driving innovation by building software, apps, and digital solutions for global markets.",
      },
      {
        number: "03",
        title: "CO-WORKING SPACE",
        description:
          "A creative environment with high-speed internet for freelancers, entrepreneurs, and tech enthusiasts.",
      },
      {
        number: "04",
        title: "E-COMMERCE EXPANSION",
        description:
          "Seamless access to quality tech products and services online.",
      },
      {
        number: "05",
        title: "STRATEGIC PARTNERSHIPS",
        description:
          "Collaborating with local and international brands to scale our impact.",
      },
      {
        number: "06",
        title: "YOUTH EMPOWERMENT",
        description:
          "Programs that foster digital literacy, entrepreneurship, and community development.",
      },
    ],
  },
  team: {
    heading: { lead: "Meet the ", accent: "team", tail: "." },
    members: [
      {
        name: "Godbless Uduak",
        role: "Founder",
        bio: "Visionary leader driving Gee'stech with a focus on innovation, customer experience, and long-term growth. Oversees strategy, branding, and business development.",
      },
      {
        name: "Israel Thompson",
        role: "Head of Technical Operations",
        bio: "Skilled hardware technician and computer engineer leading the technical wing of Gee'stech. Responsible for repair services, maintenance operations, and ensuring top-notch product quality and reliability.",
      },
    ],
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
