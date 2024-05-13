import { MotionValue, motion } from "framer-motion";
import Image from "next/image";
import { Meteors } from "./ui/meteors";
export const HeroNewsCard = ({
  translate,
  index,
}: {
  translate: MotionValue<number>;
  index: number;
}) => {
  return (
    <motion.figure
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      className="group/product rounded-md max-w-sm relative overflow-hidden flex-shrink-0  bg-[#fbfbfb] shadow-md dark:bg-background/70  backdrop-saturate-150"
    >
      <a href="#">
        <Image
          width={300}
          height={300}
          className="rounded-t-lg w-full"
          src="https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png"
          alt=""
        />
      </a>
      <figcaption className="p-5 relative">
        <a href="#">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
        >
          Ko'proq o'qish
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
        <Meteors />
      </figcaption>
    </motion.figure>
  );
};
