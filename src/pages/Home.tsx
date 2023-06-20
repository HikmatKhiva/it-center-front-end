import { heroImg } from "../assets";
import { motion } from "framer-motion";
import { fadeTitle, heroImage } from "../utils/motion";
import { Tilt } from "react-tilt";
import { defaultOptions } from "../settings";
import { AboutUs } from "../sections";
import { TabTitle } from "../utils/TabTitle";
const Home = () => {
  TabTitle('Asosiy')
  return (
    <>
      <section
        id="home"
        className="home bg-gray-100 center dark:bg-dark min-h-[700px]"
      >
        <div className="container mx-auto flex flex-wrap lg:justify-between justify-center items-center">
          <h1 className="title">
            <motion.span
              variants={fadeTitle("left", 1, 2)}
              initial="hidden"
              animate="visible"
              className="xl:text-6xl sm:text-4xl lg:text-start text-center lg:text-4xl text-2xl dark:text-white"
            >
              Sizning <span className="text-main">IT</span>
              karyerangizni <br /> shu yerdan boshlang!
            </motion.span>
          </h1>
          <Tilt options={defaultOptions}>
            <motion.img
              variants={heroImage}
              initial="initial"
              animate="finished"
              className="hero-img"
              src={heroImg}
              alt="programming"
            />
          </Tilt>
        </div>
      </section>
      <AboutUs />
    </>
  );
};
export default Home;
