import { HeroHighlight } from "@/components/ui/hero-highlight";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { products } from "@/constant";
import Application from "../components/Application";
import { AboutSection } from "@/sections/AboutSection";
import HeroSectionMobile from "@/sections/mobile/HeroSectionMobile";
import MainHeader from "@/layouts/MainHeader";
// import CourseSection from "@/sections/CourseSection";
import { Suspense } from "react";
// import { FollowerPointerCard } from "@/components/ui/following-pointer";
export default function Home() {
  return (
    <>
      <MainHeader />
      <main className="relative">
        <HeroHighlight className="">
          <div className="lg:block hidden">
            <HeroParallax products={products} />
          </div>
          <HeroSectionMobile />
          <AboutSection />
          {/* <CourseSection /> */}
          <Suspense fallback={"loading"}>
            <Application />
          </Suspense>
        </HeroHighlight>
      </main>
    </>
  );
}
