import { Skeleton, Table } from "@mantine/core";
export const loadingTeachers = [1, 2, 3, 4]?.map((loading: number) => (
  <Table.Tr key={loading}>
    <Table.Td>
      <Skeleton height={16} w={16} radius={4} mb="xl" />
    </Table.Td>
    <Table.Td>
      <Skeleton height={16} w={150} radius={4} mb="xl" />
    </Table.Td>
    <Table.Td>
      <Skeleton height={16} w={150} radius={4} mb="xl" />
    </Table.Td>
    <Table.Td>
      <Skeleton height={16} w={100} radius={4} mb="xl" />
    </Table.Td>
    <Table.Td>
      <Skeleton height={16} w={100} radius={4} mb="xl" />
    </Table.Td>
  </Table.Tr>
));
