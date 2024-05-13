import { HeroHighlight } from "@/components/ui/hero-highlight";
import { TracingBeam } from "@/components/ui/tracing-beam";
import React from "react";
const NewsDescription = () => {
  return (
    <main>
      <HeroHighlight className="min-h-screen">
        {/* <TracingBeam> */}
        <div className="antialiased container mx-auto pr-10">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <DemoContent key={index} index={index} />
          ))}
        </div>
        {/* </TracingBeam> */}
      </HeroHighlight>
    </main>
  );
};
export default NewsDescription;

const DemoContent = ({ index }: { index: number }) => {
  return (
    <p className={`content-${index} mb-10 pt-10`}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
      voluptatem veniam natus rerum fuga rem soluta corporis deleniti quos quae
      accusamus doloremque maiores itaque accusantium sequi quaerat est
      reiciendis, at eaque ipsam, repellendus laborum, asperiores corrupti
      temporibus? Id quidem at cupiditate, praesentium provident voluptatum
      voluptatibus inventore blanditiis excepturi laboriosam dicta.
    </p>
  );
};
