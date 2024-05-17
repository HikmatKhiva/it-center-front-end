"use client"
import { motion } from "framer-motion";
const Back = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.path
        initial={{ pathLength: 0.5 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6 }}
        stroke="none"
        d="M0 0h24v24H0z"
        fill="none"
      />
      <motion.path
        initial={{ pathLength: 0.5 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6 }}
        d="M5 12l14 0"
      />
      <motion.path
        initial={{ pathLength: 0.5 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6 }}
        d="M5 12l6 6"
      />
      <motion.path
        initial={{ pathLength: 0.5 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6 }}
        d="M5 12l6 -6"
      />
    </motion.svg>
  );
};
export default Back;