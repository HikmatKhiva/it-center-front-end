import { Button, Table } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { getAllCourse } from "../../api/api.course";
const CourseTable = () => {
  const { data, isLoading } = useQuery<ICourse[]>({
    queryKey: ["courses"],
    queryFn: getAllCourse,
  });
  const rows = data?.map((course: ICourse) => (
    <Table.Tr key={course.id}>
      <Table.Td>{course.name}</Table.Td>
      <Table.Td>{course.teacher_name}</Table.Td>
      <Table.Td>{course.created_at}</Table.Td>
      <Table.Td>
        <Button color="green" size="xs" variant="outline">
          O'zgartirish ✏️
        </Button>
      </Table.Td>
      <Table.Td>
        <Button color="red" size="xs" variant="outline">
          O'chirish 🗑️
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
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{!isLoading && rows}</Table.Tbody>
    </Table>
  );
};

export default CourseTable;
