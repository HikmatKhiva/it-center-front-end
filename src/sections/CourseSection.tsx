import { HoverEffect } from "@/components/ui/hover-effect";
import { courses } from "@/constant";
const CourseSection = () => {
  return (
    <section>
      <h2 className="text-center text-2xl md:text-4xl">Bizning Kurslar</h2>
      <div className="container mx-auto">
        <HoverEffect items={courses} />
      </div>
    </section>
  );
};
export default CourseSection;
