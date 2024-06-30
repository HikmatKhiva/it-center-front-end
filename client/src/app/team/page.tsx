"use client";
import React from "react";
import Image from "next/image";
import { it_park } from "@/assets";
import MainHeader from "@/layouts/MainHeader";
import { HeroHighlight } from "@/components/ui/hero-highlight";
const TeamPage = () => {
  return (
    <>
      <MainHeader />
      <main>
        <HeroHighlight className="min-h-screen">
          <section>
            <div className=" flex flex-col items-center p-5 rounded mx-auto mt-10">
              <Image
                priority={true}
                width={100}
                height={70}
                src={it_park}
                alt="logo"
              />
              <h2 className="text-4xl">IT-Park Khiva</h2>
            </div>
          </section>
        </HeroHighlight>
      </main>
    </>
  );
};

export default TeamPage;
