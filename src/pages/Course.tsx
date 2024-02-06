import { courseQ } from "../server/query";
import { EmptyPage, FetchLoading } from "../loadings";
import CourseCard from "../components/CourseCard";
import { TabTitle } from "../utils/TabTitle";
import { useQueryData } from "../hooks/useQueryData";
const Course = () => {
  TabTitle("Kurslar");
  const { data, isLoading } = useQueryData(courseQ, '')
  return (
    <section id="course" className="dark:bg-dark bg-gray-100 flex flex-col">
      <div className="title py-5 dark:text-white flex items-center flex-col">
        <h2 className="text-3xl capitalize">Kurslar</h2>
      </div>
      <div className="container mx-auto flex justify-center flex-wrap flex-grow gap-5 pb-3">
        {isLoading ? <FetchLoading /> : Array.isArray(data) && data?.length ? (
          data?.map((course: ICourse, index: number) => (
            <CourseCard key={course.name} item={course} index={index} />
          ))
        ) : <EmptyPage />}
      </div>
    </section>
  );
};
export default Course;