import { useQueryData } from "../hooks/useQueryData";
import { news } from "../server/query";
import { TabTitle } from "../utils/TabTitle";
import { NewsCard } from "../components";
import { EmptyPage, FetchLoading } from "../loadings";
import { INews } from "../types/types";
const News = () => {
  TabTitle("Yangiliklar");
  const { data, isLoading } = useQueryData(news, "");
  return (
    <section id="news" className="dark:bg-dark flex flex-col bg-gray-100">
      <div className="title py-5 flex dark:text-white items-center flex-col">
        <h2 className="text-3xl capitalize">Yangiliklar</h2>
      </div>
      <div className="container mx-auto flex-grow justify-center flex gap-5">
        {isLoading ? (
          <FetchLoading />
        ) : Array.isArray(data) && data?.length ? (
          data.map((news: INews, index: number) => (
            <NewsCard key={index} news={news} index={0} />
          ))
        ) : (
          <EmptyPage />
        )}
      </div>
    </section>
  );
};
export default News;