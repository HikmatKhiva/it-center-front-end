import {
  Button,
  Table,
  Group,
  Divider,
  TextInput,
  Text,
  ActionIcon,
  Tooltip,
} from "@mantine/core";
import {
  ArrowLeft,
  CalendarOff,
  CalendarPlus,
  Eye,
  Search,
} from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import CreateStudent from "../../components/student/CreateStudentModal";
import { getGroup } from "../../api/api.group";
import { useQuery } from "@tanstack/react-query";
import DeleteStudentModal from "../../components/student/DeleteStudentModal";
import UpdateStudentModal from "../../components/student/UpdateStudentModal";
import FinishGroupModal from "../../components/group/FinishGroupModal";
import PaymentsHistory from "../../components/student/PaymentsHistory";
import UploadPayment from "../../components/student/UploadPayment";
import { useAppSelector } from "../../../hooks/redux";
import { useState } from "react";
const AdminGroupId = () => {
  const navigate = useNavigate();
  const { admin } = useAppSelector((state) => state.admin);
  const [search, setSearch] = useState<string>("");
  const URL = import.meta.env.VITE_BACKEND_URL;
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ["students", id],
    queryFn: () => {
      if (id) {
        return getGroup(id, admin?.token || "");
      }
    },
    enabled: !!id && !!admin?.token,
  });

  const rows = data?.students
    ?.filter((student: IStudent) =>
      student.first_name.includes(search.trim().toLowerCase())
    )
    .map((student: IStudent) => (
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
        {data?.is_group_finished && (
          <Table.Td>
            <Link
              to={`${URL}certificate?code=${student?.certificate_url}`}
              target="__blank"
            >
              <Button
                variant="outline"
                color="green"
                size="xs"
                aria-label="see certificate URL"
              >
                <Eye />
              </Button>
            </Link>
          </Table.Td>
        )}
        <Table.Td>
          <PaymentsHistory total_cost={data?.total_cost} student={student} />
        </Table.Td>
        <Table.Td>
          <UploadPayment
            data={{ group_id: id || "", student_id: student.id, amount: 0 }}
          />
        </Table.Td>
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
            size="md"
          >
            <ArrowLeft size={16} />
          </ActionIcon>
          <Text fz="14">
            Guruh code: <b>{data?.code}</b>
          </Text>
          <Tooltip label="Boshlangan sana!">
            <Text className="flex gap-1 items-center" fz="14">
              <CalendarPlus size="16" />
              <b>{data?.created_at}</b>
            </Text>
          </Tooltip>
          <Tooltip label="Tugash sana!">
            <Text className="flex gap-1 items-center" fz="14">
              <CalendarOff size="16" />
              <b>{data?.finish_date}</b>
            </Text>
          </Tooltip>
        </Group>
        <Group>
          <TextInput
            rightSection={<Search />}
            placeholder="O'quvchi qidirish."
            onChange={(event) => setSearch(event.target.value)}
            value={search}
          />
          {data?.course_id && data?.id && !data?.is_group_finished && (
            <CreateStudent course_id={data?.course_id} group_id={data?.id} />
          )}
          {!data?.is_group_finished && <FinishGroupModal id={id || "1"} />}
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
            {data?.is_group_finished && <Table.Th>Certificate URL</Table.Th>}
            {!data?.is_group_finished && <Table.Th>O'zgartirish</Table.Th>}
            {!data?.is_group_finished && <Table.Th>O'chirish</Table.Th>}
            <Table.Th>To'lov tarixi</Table.Th>
            <Table.Th>To'lov qo'shish</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </section>
  );
};
export default AdminGroupId;
