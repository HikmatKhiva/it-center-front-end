import {
  Button,
  Table,
  Group,
  Divider,
  TextInput,
  Text,
  ActionIcon,
} from "@mantine/core";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import CreateStudent from "../../components/student/CreateStudent";
import { getGroup } from "../../api/group";
import { useQuery } from "@tanstack/react-query";
import DeleteStudentModal from "../../components/student/DeleteStudentModal";
import UpdateStudentModal from "../../components/student/UpdateStudentModal";

const AdminGroupId = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ["students", id],
    queryFn: () => {
      if (id) {
        return getGroup(id);
      }
    },
    enabled: !!id,
  });
  const rows = data?.students.map((student: IStudent) => (
    <Table.Tr key={student.id}>
      <Table.Td>{student.id}</Table.Td>
      <Table.Td>{student.first_name}</Table.Td>
      <Table.Td>{student.second_name}</Table.Td>
      <Table.Td>{student.passport_id}</Table.Td>
      <Table.Td>{student?.gender === "male" ? "Erkak" : "Ayol"}</Table.Td>
      {!data?.is_group_finished && (
        <Table.Td>
          <UpdateStudentModal student={student} />
        </Table.Td>
      )}
      {!data?.is_group_finished && (
        <Table.Td>
          <DeleteStudentModal id={student?.id} />
        </Table.Td>
      )}
    </Table.Tr>
  ));
  return (
    <section>
      <Group pb="20" justify="space-between">
        <Group gap="20">
          <ActionIcon
            onClick={() => navigate(-1)}
            color="red"
            variant="outline"
            size="lg"
          >
            <ArrowLeft />
          </ActionIcon>
          <Text>Guruh code: <b>{data?.code}</b></Text>
          <Text>Boshlangan sana: <b>{data?.created_at}</b></Text>
        </Group>
        <Group>
          <TextInput className="" placeholder="O'quvchi qidirish" />
          {data?.course_id && data?.id && (
            <CreateStudent course_id={data?.course_id} group_id={data?.id} />
          )}
          <Button color="green" variant="outline">
            Guruhni yakunlash
          </Button>
        </Group>
      </Group>
      <Divider py={10} />
      <Table verticalSpacing="md" highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>id</Table.Th>
            <Table.Th>Ism</Table.Th>
            <Table.Th>Familiyasi</Table.Th>
            <Table.Th>Passport</Table.Th>
            <Table.Th>Jins</Table.Th>
            {!data?.is_group_finished && <Table.Th>O'zgartirish</Table.Th>}
            {!data?.is_group_finished && <Table.Th>O'chirish</Table.Th>}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </section>
  );
};
export default AdminGroupId;
