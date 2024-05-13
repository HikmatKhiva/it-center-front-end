"use client";
import React from "react";
import { motion } from "framer-motion";
const HeroSectionMobile = () => {
  return (
    <motion.h1
      initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="mt-8 lg:hidden bg-gradient-to-br from-slate-300 to-slate-500 py-20 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
    >
      Sizning <span className="text-main">IT</span> karyerangizni <br /> shu
      yerdan boshlang!
    </motion.h1>
  );
};
export default HeroSectionMobile;
