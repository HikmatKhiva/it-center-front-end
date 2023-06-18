import { useEffect } from "react";
const NotFound = () => {
  useEffect(() => {
    document.title = "Biz-Haqimizda";
  }, []);
  return (
    <section className=" not-found bg-notFound grid place-items-center">
      <div className="text-center text-white dark:text-main">
        <h2 className="text-4xl">Sahifa Topilmadi</h2>
      </div>
    </section>
  );
};
export default NotFound;