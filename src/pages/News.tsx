import { useEffect } from "react";
import Remount from "../loadings/Remount";
const News = () => {
  useEffect(() => {
    document.title = "Yangiliklar";
  }, []);
  return (
    <section id="news" className="dark:bg-dark flex flex-col bg-gray-100">
      <div className="title py-5 flex dark:text-white items-center flex-col">
        <h2 className="text-3xl capitalize">Yangiliklar</h2>
      </div>
      <div className="container mx-auto flex-grow flex flex-col">
        <Remount />
      </div>
    </section>
  );
};
export default News;