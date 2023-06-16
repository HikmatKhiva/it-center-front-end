import { useEffect } from "react";
import useGetData from "../hooks/useGetData";
import { courseQ } from "../server/query";
import { EmptyPage, Error, FetchLoading } from "../loadings";
import CourseCard from "../components/CourseCard";
import { ICourse } from "../types/types";
const Course = () => {
  useEffect(() => {
    document.title = "Kurslar";
  }, []);
  const { data, loading, error } = useGetData(courseQ);
  return (
    <section id="course" className="dark:bg-dark bg-gray-100 flex flex-col">
      <div className="title py-5 dark:text-main flex items-center flex-col">
        <h2 className="text-3xl capitalize">Kurslar</h2>
      </div>
      <div className="container mx-auto flex justify-center flex-wrap flex-grow gap-5">
        {data && !loading && !error ? (
          data?.map((course: ICourse, index: number) => (
            <CourseCard key={course.name} item={course} index={index} />
          ))
        ) : error ? (
          <Error error={error} />
        ) : data?.length === 0 ? (
          <EmptyPage />
        ) : (
          <FetchLoading />
        )}
      </div>
    </section>
  );
};
export default Course;
