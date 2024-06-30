"use client";
import React from "react";
import { motion } from "framer-motion";
const Users = () => {
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
        d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"
      />
      <motion.path
        initial={{ pathLength: 0.5 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6 }}
        d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"
      />
      <motion.path
        initial={{ pathLength: 0.5 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6 }}
        d="M16 3.13a4 4 0 0 1 0 7.75"
      />
      <motion.path
        initial={{ pathLength: 0.5 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6 }}
        d="M21 21v-2a4 4 0 0 0 -3 -3.85"
      />
    </motion.svg>
  );
};
export default Users;
