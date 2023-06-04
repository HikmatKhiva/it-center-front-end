import { useEffect } from "react";
import { motion } from "framer-motion";
import Remount from "../loadings/Remount";
const About = () => {
  useEffect(() => {
    document.title = "Biz-Haqimizda";
  }, []);
  return (
    <section id="about" className="dark:bg-dark bg-gray-100 ">
      <div className="title py-5 dark:text-main flex items-center flex-col">
        <h2 className="text-3xl capitalize">Biz haqimizda</h2>
      </div>
      <motion.div className="container mx-auto gap-5">
        <Remount />
      </motion.div>
    </section>
  );
};
export default About;