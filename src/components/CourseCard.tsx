import { ICourse } from "../types/types";
import { Tilt } from "react-tilt";
import { defaultOptions } from "../settings";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { urlFor } from "../server/client";
import { motion } from "framer-motion";
import { fadeCardAnimate } from "../utils/motion";
const CourseCard = ({
  item,
  index,
}: {
  item: ICourse;
  index: number;
}): JSX.Element => {
  return (
    <motion.div
      key={index}
      whileInView={fadeCardAnimate(index * 0.6, 1)}
      className="dark:text-white p-5 h-[280px] shadow-card-light dark:shadow-card-dark bg-white w-[350px] rounded-md overflow-hidden dark:bg-light-dark"
    >
      <Tilt options={defaultOptions}>
        <div className="flex flex-col items-center">
          <h3 className="text-3xl my-5">{item.name}</h3>
          <div className="flex  gap-2 text-2xl">
            {/* {item?.stack?.map((s, index) => (
              <img
                className="w-10 object-cover hover:scale-110 transition-all duration-300 cursor-pointer"
                key={index}
                src={urlFor(s)}
                alt={s?._type}
              />
            ))} */}
          </div>
          <h3 className="text-xl my-2 ">
            {" "}
            O'qituvchi:
            <span className="text-main text-2xl font-medium">
              {" "}
              {item?.mentor}
            </span>
          </h3>
          <h3 className="text-xl">
            Davomiyligi:
            <span className="text-main text-2xl font-medium">
              {" "}
              {item?.duration}
            </span>
          </h3>
        </div>
      </Tilt>
    </motion.div>
  );
};
export default CourseCard;
