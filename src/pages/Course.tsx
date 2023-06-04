import { useEffect } from "react";
import { Remount } from "../loadings";
const Course = () => {
  useEffect(() => {
    document.title = "Kurslar";
  }, []);
  return (
    <section id="course" className="dark:bg-dark bg-gray-100 flex flex-col">
      <div className="title py-5 dark:text-main flex items-center flex-col">
        <h2 className="text-3xl capitalize">Kurslar</h2>
      </div>
      <div className="container mx-auto flex justify-center flex-wrap flex-grow gap-5">
       <Remount />
      </div>
    </section>
  );
};
export default Course;