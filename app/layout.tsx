import type { Metadata } from "next";
import { Space_Grotesk, Instrument_Serif, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { LenisProvider } from "@/components/lenis-provider";
import "./globals.css";

const displaySans = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const italicSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-serif",
  display: "swap",
});

const bodySans = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Godbless Uduak, AI Web Developer & Product Designer",
  description:
    "I design and build digital products that ship, faster, sharper, beautifully crafted with modern AI tools.",
  metadataBase: new URL("https://godbless-portfolio.vercel.app"),
  openGraph: {
    title: "Godbless Uduak, AI Web Developer & Product Designer",
    description:
      "Lagos-based product designer and AI web developer. Available for projects.",
    url: "https://godbless-portfolio.vercel.app",
    siteName: "Godbless Uduak",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Godbless Uduak, AI Web Developer & Product Designer",
    description:
      "Lagos-based product designer and AI web developer. Available for projects.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
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
