import { HeroHighlight } from "@/components/ui/hero-highlight";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { products } from "@/constant";
import Application from "../components/Application";
import { AboutSection } from "@/sections/AboutSection";
import HeroSectionMobile from "@/sections/mobile/HeroSectionMobile";
export default function Home() {
  return (
    <main className="relative">
      <HeroHighlight className="">
        <div className="lg:block hidden">
          <HeroParallax products={products} />
        </div>
        <HeroSectionMobile />
        <AboutSection />
        <Application />
      </HeroHighlight>
    </main>
  );
}
