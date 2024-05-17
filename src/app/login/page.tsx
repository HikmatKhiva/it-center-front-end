"use client";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { useState } from "react";
import LoginForm from "./components/LoginForm";
import VerifyForm from "./components/VerifyForm";
import Image from "next/image";
import { motion } from "framer-motion";
const AdminLogin = () => {
  const [content, setContent] = useState<"login" | "verify">("login"); // Specify the type of content
  const tabs: { [key: string]: JSX.Element } = {
    login: <LoginForm />,
    verify: <VerifyForm />,
  };
  return (
    <HeroHighlight>
      <main className="h-screen grid place-items-center">
        <section>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center mb-5 gap-1"
          >
            <Image src="/favicon.png" width={60} height={60} alt="it logo" />
            <h2 className="text-main text-4xl">IT-PARK KHIVA</h2>
          </motion.div>
          {tabs[content]}
        </section>
      </main>
    </HeroHighlight>
  );
};
export default AdminLogin;
