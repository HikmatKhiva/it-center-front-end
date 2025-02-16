import { Table, Text } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { getDebtorStudents } from "../../api/api.student";
import { useAppSelector } from "../../../hooks/redux";
const DebtorStudents = () => {
  const { admin } = useAppSelector((state) => state.admin);
  const { data } = useQuery({
    queryFn: () => getDebtorStudents(admin?.token || ""),
    queryKey: ["debtors"],
    enabled: !!admin?.token,
  });
  const currentMonth = new Date().toLocaleString("default", { month: "long" });
  const rows =
    Array.isArray(data) &&
    data?.map((student: IDebtors, index: number) => (
      <Table.Tr key={index}>
        <Table.Td>{student.student_full_name}</Table.Td>
        <Table.Td>{student.teacher_name}</Table.Td>
        <Table.Td>{student.group_price}</Table.Td>
        <Table.Td>{student.passport_id}</Table.Td>
        <Table.Td>{student.last_payment_date}</Table.Td>
        <Table.Td>{student.total_paid_this_month}</Table.Td>
      </Table.Tr>
    ));
  return (
    <>
      <Text fz={{ sm: "md", md: "20px" }} mb="20">
        {currentMonth} oy qarzdor o'quvchilar ro'yxati
      </Text>
      <Table  title="Qarzdorlar ro'yxati.">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>O'quvchini ismi</Table.Th>
            <Table.Th>O'qituvchini ismi</Table.Th>
            <Table.Th>Kursni oylik puli</Table.Th>
            <Table.Th>Passport ID</Table.Th>
            <Table.Th>Oxirgi to'lov sanasi</Table.Th>
            <Table.Th>Oxirgi to'lov miqdori</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </>
  );
};
export default DebtorStudents;