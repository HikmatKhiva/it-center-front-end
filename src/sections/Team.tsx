import { motion } from "framer-motion";
import { container, fadeTitle } from "../utils/motion";
const Team = () => {
  return (
    <section id="team" className="bg-gray-100 py-10 dark:bg-dark">
      <div className="title flex flex-col items-center">
        <motion.h2
          variants={fadeTitle("bottom", 1, 2)}
          initial="hidden"
          animate="visible"
          className="text-4xl dark:text-white"
        >
          <span className="text-main">Bizning Jamomiz</span>
        </motion.h2>
      </div>
      <motion.div variants={container} className="container mx-auto py-10 justify-center flex flex-wrap gap-5">
      </motion.div>
    </section>
  )
}
export default Team;