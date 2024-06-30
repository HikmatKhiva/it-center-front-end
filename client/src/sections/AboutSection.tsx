"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { aboutContent } from "@/constant";
export function AboutSection() {
  return (
    <section>
      <div className="py-10 container mx-auto">
        <h2 className="text-center text-2xl md:text-4xl pb-10">
          Bizning Afzaligimiz
        </h2>
        <StickyScroll content={aboutContent} />
      </div>
    </section>
  );
}
