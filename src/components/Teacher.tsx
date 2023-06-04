import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { defaultOptions } from "../settings";
import { fadeCardAnimate } from "../utils/motion";
import { ITeam } from "../types/types";
import Social from "./Social";
const Teacher = ({ index, teacher }: { index: number, teacher: ITeam }) => {
  return (
    <motion.div whileInView={fadeCardAnimate(index * .5, 1)} className="dark:text-white team py-5 shadow-card-light dark:shadow-card-dark bg-white w-[350px] rounded-md overflow-hidden dark:bg-light-dark">
      <Tilt options={defaultOptions}>
        <div className="flex flex-col items-center">
          {<teacher.img size={50} />}
          <div className="py-3 px-4 flex flex-col">
            <h4 className="text-2xl text-center text-main">{teacher.profession}</h4>
            <div className="text-center">
              <h5>{teacher.name}</h5>
              <div className="flex justify-center   pt-2 gap-3">
                {teacher?.social.map((social, index) => <Social key={index} social={social} index={index} />)}
              </div>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  )
}
export default Teacher;