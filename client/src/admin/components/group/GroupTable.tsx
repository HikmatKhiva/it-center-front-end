import { ActionIcon, Avatar, Indicator, Table } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getAllGroup } from "../../api/group";
const GroupTable = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useQuery<IGroup[]>({
    queryKey: ["groups"],
    queryFn: getAllGroup,
  });
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
            color={group.is_group_finished ? "red" : "blue"}
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
        >
          ✏️
        </ActionIcon>
      </Table.Td>
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
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{!isLoading && rows}</Table.Tbody>
    </Table>
  );
};
export default GroupTable;