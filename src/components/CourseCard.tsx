import { ICourse } from "../types/types";
import { Tilt } from "react-tilt";
import { defaultOptions } from "../settings";
import { urlFor } from "../server/client";
import { motion } from "framer-motion";
import { fadeCardAnimate } from "../utils/motion";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
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
        <Link to="/contact" state={{ course: item.url }}>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl my-5 truncate">{item.name}</h3>
            <span className="flex gap-2 text-2xl">
              {item?.stack?.map((s, index) => (
                <LazyLoadImage
                  effect="blur"
                  className="w-10 rounded-full object-cover hover:scale-110 transition-all duration-300 cursor-pointer"
                  key={index}
                  src={urlFor(s).url()}
                  alt={s?._type}
                />
              ))}
            </span>
            <span className="text-xl my-2 ">
              {" "}
              O'qituvchi:
              <span className="text-main text-2xl font-medium">
                {" "}
                {item?.mentor}
              </span>
            </span>
            <span className="text-xl">
              Davomiyligi:
              <span className="text-main text-2xl font-medium">
                {" "}
                {item?.duration}
              </span>
            </span>
          </div>
        </Link>
      </Tilt>
    </motion.div>
  );
};
export default CourseCard;