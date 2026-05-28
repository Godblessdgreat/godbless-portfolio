import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { Services } from "@/components/sections/services";
import { Experience } from "@/components/sections/experience";
import { Work } from "@/components/sections/work";
import { Process } from "@/components/sections/process";
import { About } from "@/components/sections/about";
import { Ventures } from "@/components/sections/ventures";
import { Cta } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Stats />
        <Services />
        <Experience />
        <Work />
        <About />
        <Process />
        <Ventures />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
