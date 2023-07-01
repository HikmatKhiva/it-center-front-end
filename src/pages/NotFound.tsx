import { TabTitle } from "../utils/TabTitle";
const NotFound = () => {
  TabTitle('Biz-Haqimizda')
  return (
    <section className=" not-found bg-notFound dark:bg-dark grid place-items-center">
      <div className="text-center dark:text-main">
        <h2 className="text-4xl">
          Sahifa Topilmadi <br />
          404
        </h2>
      </div>
    </section>
  );
};
export default NotFound;