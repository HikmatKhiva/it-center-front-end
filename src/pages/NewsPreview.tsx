import { useParams } from "react-router-dom";
import { useQueryData } from "../hooks/useQueryData";
import { newsQuery } from "../server/query";
import { PageLoading } from "../loadings";
import { PortableText } from "@portabletext/react";
import { PortableTextComponents } from "../components/PortableText";
import NotFound from "./NotFound";
import { INews } from "../types/types";
const NewsPreview = () => {
  const params = useParams();
  const { data, isLoading } = useQueryData(newsQuery, params);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const news: INews[] | any = Array.isArray(data) && data;
  if (isLoading) return <PageLoading />;
  if (!data.length) return <NotFound />;
  return (
    <section className="py-5 dark:bg-dark dark:text-white">
      <div className="shadow-lg container dark:bg-light-dark md:w-[80%] px-6 py-3 w-full mx-auto rounded">
        <h2 className="text-center dark:text-white text-2xl">
          {news[0]?.title || ""}
        </h2>
        <PortableText
          value={news.length ? news[0]?.desc : []}
          components={PortableTextComponents}
        />
        <p className="text-end font-medium">
          {news?.length ? news[0].date : ""}
        </p>
      </div>
    </section>
  );
};
export default NewsPreview;