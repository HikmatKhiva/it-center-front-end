import { motion } from "framer-motion";
import { fadeTitle } from "../utils/motion";
import NewsCard from "./NewsCard";
import { container } from "../utils/motion";
import useGetData from "../hooks/useGetData";
import { news } from "../server/query";
import { INews } from "../types/types";
const LatestNews = () => {
  const { data } = useGetData(news);
  return (
    <section className="latest-news bg-gray-100 py-10 dark:bg-dark">
      <div className="title flex flex-col items-center">
        <motion.h2
          variants={fadeTitle("bottom", 1, 2)}
          initial="hidden"
          animate="visible"
          className="text-4xl dark:text-white"
        >
          So'ngi <span className="text-main">Yangiliklar</span>
        </motion.h2>
      </div>
      <motion.div variants={container} className="container mx-auto">
        <div className="py-10 flex justify-center">
          {data ? (
            data.map((news: INews, index: number) => <NewsCard key={index} news={news} index={index} />)
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </motion.div>
    </section>
  );
};
export default LatestNews;