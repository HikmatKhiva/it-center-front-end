import { ActionIcon, Avatar, Indicator, Table } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import DeleteGroupModal from "./DeleteGroupModal";
const GroupTable = ({
  data,
  isLoading,
  status,
}: {
  data: IGroup[];
  isLoading: boolean;
  status: boolean;
}) => {
  const navigate = useNavigate();
  const rows = data?.map((group: IGroup) => (
    <Table.Tr key={group.code}>
      <Table.Td>{group.code}</Table.Td>
      <Table.Td>{group.name}</Table.Td>
      <Table.Td>{group.course_name}</Table.Td>
      <Table.Td>{group.teacher_name}</Table.Td>
      <Table.Td>{group.students.length}</Table.Td>
      <Table.Td>{group.created_at}</Table.Td>
      <Table.Td>
        <div className="relative w-[40px] h-[40px]">
          <Indicator
            withBorder
            color={group.is_group_finished ? "red" : "green"}
            processing={!group.is_group_finished}
          >
            <Avatar />
          </Indicator>
        </div>
      </Table.Td>
      <Table.Td>
        <ActionIcon
          onClick={() => navigate(`/admin/group/${group.id}`)}
          aria-label="edit"
          aria-labelledby="edit"
          variant="filled"
          size="md"
          color="green"
        >
          ✏️
        </ActionIcon>
      </Table.Td>
      {!group?.is_group_finished && (
        <Table.Td>
          <DeleteGroupModal disabled={group?.is_group_finished} id={group.id} />
        </Table.Td>
      )}
    </Table.Tr>
  ));
  return (
    <Table verticalSpacing="md" highlightOnHover>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Guruh code</Table.Th>
          <Table.Th>Guruh nomi</Table.Th>
          <Table.Th>Kurs nomi</Table.Th>
          <Table.Th>O'qitivchisi</Table.Th>
          <Table.Th>Bolalar soni</Table.Th>
          <Table.Th>Boshlangan sana</Table.Th>
          <Table.Th>Guruh holati</Table.Th>
          <Table.Th>Sozlash</Table.Th>
          {!status && <Table.Th>O'chirish</Table.Th>}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{!isLoading && rows}</Table.Tbody>
    </Table>
  );
};
export default GroupTable;
