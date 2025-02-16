import { Button, Table } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { getAllCourse } from "../../api/api.course";
import UpdatedCourseModal from "./UpdatedCourseModal";
import DeleteCourseModal from "./DeleteCourseModal";
import { useAppSelector } from "../../../hooks/redux";
import { Eye } from "lucide-react";
const CourseTable = ({ search }: { search: string }) => {
  const { admin } = useAppSelector((state) => state.admin);
  const { data, isLoading } = useQuery<ICourse[]>({
    queryKey: ["courses"],
    queryFn: () => getAllCourse(admin?.token || ""),
  });
  const rows =
    Array.isArray(data) &&
    data
      ?.filter((course: ICourse) =>
        course.name.toLowerCase().includes(search.trim().toLowerCase())
      )
      .map((course: ICourse) => (
        <Table.Tr key={course.id}>
          <Table.Td>{course.name}</Table.Td>
          <Table.Td>{course.teacher.first_name}</Table.Td>
          <Table.Td>{course.created_at}</Table.Td>
          <Table.Td>
            <UpdatedCourseModal course={course} />
          </Table.Td>
          <Table.Td>
            <DeleteCourseModal id={course?.id} />
          </Table.Td>
          <Table.Td>
            <Button
              variant="outline"
              color="green"
              size="xs"
              aria-label="see certificate URL"
            >
              <Eye />
            </Button>
          </Table.Td>
        </Table.Tr>
      ));
  return (
    <Table verticalSpacing="md" highlightOnHover>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Course Nomi</Table.Th>
          <Table.Th>O'qitivchisi</Table.Th>
          <Table.Th>Yaratilgan sanasi</Table.Th>
          <Table.Th>O'zgartirish</Table.Th>
          <Table.Th>O'chirish</Table.Th>
          <Table.Th>Demo certificate</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{!isLoading && rows}</Table.Tbody>
    </Table>
  );
};
export default CourseTable;
