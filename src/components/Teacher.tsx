import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { defaultOptions } from "../settings";
import { fadeCardAnimate } from "../utils/motion";
import { ISocial, ITeam } from "../types/types";
import Social from "./Social";
import { urlFor } from "../server/client";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Teacher = ({ index, teacher }: { index: number; teacher: ITeam }) => {
  return (
    <motion.div
      whileInView={fadeCardAnimate(index * 0.5, 1)}
      className="dark:text-white team py-5 shadow-card-light dark:shadow-card-dark bg-white w-[350px] rounded-md overflow-hidden dark:bg-light-dark min-h-[280px] max-h-[320px]"
    >
      <Tilt options={defaultOptions}>
        <div className="flex flex-col items-center">
          <LazyLoadImage
            className="w-32 rounded-full bg-transparent "
            effect="blur"
            src={teacher.image ? urlFor(teacher.image).url() : ""}
            alt={teacher.name}
          />
          <div className="py-3 px-4 flex flex-col">
            <h4 className="text-2xl text-center text-main w-full truncate">
              {teacher?.occupation ? teacher?.occupation:"Kompyuter mutaxassisi"}
            </h4>
            <div className="text-center">
              <h5 className="font-medium">{teacher.name}</h5>
              <div className="flex justify-center pt-2 gap-3">
                {teacher.stacks &&
                  teacher?.stacks.map((social: ISocial, index: number) => (
                    <Social key={index} social={social} index={index} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};
export default Teacher;
