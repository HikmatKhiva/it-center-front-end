import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const HeroCertificate = () => {
  return (
    <motion.div
      //   style={{
      //     x: translate,
      //   }}
      whileHover={{
        y: -20,
      }}
      //   key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0 z-20"
    >
      <Image
        src="https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png"
        height="600"
        width="600"
        className="object-cover object-left-top absolute h-full w-full inset-0"
        alt={"product.title"}
      />
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {"product.title"}
      </h2>
    </motion.div>
  );
};
export default HeroCertificate;
