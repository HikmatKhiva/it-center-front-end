import { heroImg } from "../assets";
import { motion } from "framer-motion";
import { fadeTitle, heroImage } from "../utils/motion";
import { Tilt } from "react-tilt";
import { defaultOptions } from "../settings";
import { AboutUs } from "../sections";
import { TabTitle } from "../utils/TabTitle";
import { LazyLoadImage } from "react-lazy-load-image-component"
import { Hero } from "../animationElement";
const Home = () => {
  TabTitle('Asosiy')
  return (
    <>
      <section
        id="home"
        className="home bg-gray-100 center dark:bg-dark min-h-[700px]"
      >
        <div className="container mx-auto overflow-x-hidden flex flex-wrap lg:justify-between justify-center items-center">
          <div>
              <h1 className="title it-margin-bottom ">
                <motion.span
                  variants={fadeTitle("left", 1, 2)}
                  initial="hidden"
                  animate="visible"
                  className="xl:text-6xl sm:text-4xl lg:text-start text-center lg:text-4xl text-2xl dark:text-white"
                  >
                  Sizning <span className="text-main">IT </span>
                  karyerangizni <br /> shu yerdan boshlang!
                </motion.span>
              </h1>

              <motion.span
                  variants={fadeTitle("left", 1, 2)}
                  initial="hidden"
                  animate="visible"
                  className="xl:text-6xl sm:text-4xl lg:text-start text-center lg:text-4xl text-2xl dark:text-white"
                  >
                  
                  <a target="_blank" href="https://forms.gle/Pg6UXkVfRjJsLcbr9" className="it-form-btn">Kursga yozilish</a>
                </motion.span>
            </div>
          <Tilt className="lg:hidden" options={defaultOptions}>
            <motion.div
              variants={heroImage}
              initial="initial"
              animate="finished"
            >
              <LazyLoadImage
                className="hero-img object-contain"
                effect="blur"
                src={heroImg}
                alt="programming"
              />
            </motion.div>
          </Tilt>
          <Hero />
        </div>
      </section>
      <AboutUs />
    </>
  );
};
export default Home;
