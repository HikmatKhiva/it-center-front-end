import { Link } from "react-router-dom";
import { fadeCardAnimate } from "../utils/motion";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { defaultOptions } from "../settings";
import { INews } from "../types/types";
import { urlFor } from "../server/client";
const NewsCard = ({ index, news }: { index: number, news: INews }):JSX.Element => {
  return (
    <motion.div
      whileInView={fadeCardAnimate(index * 0.3, 1)}
      className="dark:text-white shadow-card-light dark:shadow-card-dark bg-white w-[350px] rounded-md overflow-hidden dark:bg-light-dark"
    >
      <img
        className="w-full "
        src={news.image[0] && urlFor(news.image[0])}
        alt={news.title}
      />
      <div className="py-3 px-4 flex flex-col">
        <Tilt options={defaultOptions}>
          <h3 className="text-xl">
            {news.title}
          </h3>
          <p className="py-2 min-h-[150px] whitespace-normal">
            {news?.descr.toString()}
          </p>
        </Tilt>
        <Link className="capitalize self-end text-main" to={`/news/${news.slug.current}`}>
          batafsil
        </Link>
      </div>
    </motion.div>
  );
};
export default NewsCard;