import { TabTitle } from "../utils/TabTitle";
import { notFound } from "../assets";
const NotFound = () => {
  TabTitle("Biz-Haqimizda");
  return (
    <section className=" not-found bg-notFound dark:bg-dark grid place-items-center">
      <div className="text-center flex flex-col items-center dark:text-main">
        <img className="md:w-80" src={notFound} alt="not found gif" />
        <h2 className="text-4xl">
          Sahifa Topilmadi <br />
          404
        </h2>
      </div>
    </section>
  );
};
export default NotFound;
