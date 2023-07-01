import { Link } from "react-router-dom";
import { fadeCardAnimate } from "../utils/motion";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { defaultOptions } from "../settings";
import { INews } from "../types/types";
import { urlFor } from "../server/client";
import { itCenter } from "../assets";
import { LazyLoadImage } from "react-lazy-load-image-component";
const NewsCard = ({
  index,
  news,
}: {
  index: number;
  news: INews;
}): JSX.Element => {
  return (
    <motion.div
      whileInView={fadeCardAnimate(index * 0.3, 1)}
      className="dark:text-white shadow-card-light dark:shadow-card-dark h-[500px] bg-white w-[350px] rounded-md overflow-hidden dark:bg-light-dark"
    >
      <LazyLoadImage
        className="w-full h-[55%] object-cover"
        effect="blur"
        src={news?.image ? urlFor(news.image).url() : itCenter}
        alt={news.title}
      />
      <div className="py-3 h-[45%]  px-4 flex flex-col justify-between overflow-hidden">
        <Tilt options={defaultOptions} className="flex-grow">
          <h3 className="text-xl truncate">{news.title}</h3>
          <p className="py-2 max-h-[150px] overflow-hidden overflow-x-hidden text-ellipsis">
            {news.descr.replace(/\r?\n|\r/g, "")}
          </p>
        </Tilt>
        <div className="flex justify-between mt-4">
          <p>{news?.date}</p>
          <Link
            className="capitalize  text-main"
            to={`/news/${news.slug.current}`}
          >
            batafsil
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
export default NewsCard;