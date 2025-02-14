import { Table } from "@mantine/core";
import UpdateTeacherModal from "./UpdateTeacherModal";
import DeleteTeacherModal from "./DeleteTeacherModal";
import { loadingTeachers } from "../../loading/TableSkeleton";
const TeachersTable = ({
  teachers,
  isLoading,
}: {
  teachers: ITeacher[];
  isLoading: boolean;
}) => {
  const rows =
    Array.isArray(teachers) &&
    teachers?.map((teacher: ITeacher) => (
      <Table.Tr key={teacher.id}>
        <Table.Td>{teacher.id}</Table.Td>
        <Table.Td>{teacher.first_name}</Table.Td>
        <Table.Td>{teacher.second_name}</Table.Td>
        <Table.Td>
          <UpdateTeacherModal teacher={teacher} />
        </Table.Td>
        <Table.Td>
          <DeleteTeacherModal id={+teacher.id} />
        </Table.Td>
      </Table.Tr>
    ));
  return (
    <>
      <Table verticalSpacing="md" highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>O'qituvchi id</Table.Th>
            <Table.Th>O'qituvchi ism</Table.Th>
            <Table.Th>O'qituvchi familiyasi</Table.Th>
            <Table.Th>O'zgartirish</Table.Th>
            <Table.Th>O'chirish</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{isLoading ? loadingTeachers : rows}</Table.Tbody>
      </Table>
    </>
  );
};
export default TeachersTable;
