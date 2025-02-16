import { Chip, Table } from "@mantine/core";
import OptionsMenu from "./OptionsMenu";
import React from "react";
import { Check, Clock3, X } from "lucide-react";
const NewStudentsTable = ({ newStudents }: { newStudents: IAddStudents[] }) => {
  const rows =
    Array.isArray(newStudents) &&
    newStudents?.map((student: IAddStudents, index: number) => (
      <Table.Tr key={index}>
        <Table.Td>{index + 1}</Table.Td>
        <Table.Td>
          <CheckStudent isChecked={student.is_attend}>
            {student?.full_name}
          </CheckStudent>
        </Table.Td>
        <Table.Td>
          <a href={`tel:${student?.phone}`}>{student?.phone}</a>
        </Table.Td>
        <Table.Td>{student?.created_at}</Table.Td>
        <Table.Td>{student?.course_name}</Table.Td>
        <Table.Td>{student?.course_time}</Table.Td>
        <Table.Td>
          <OptionsMenu id={student.id} />
        </Table.Td>
      </Table.Tr>
    ));
  return (
    <>
      <Table verticalSpacing="md" highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Soni</Table.Th>
            <Table.Th>To'liq ismi</Table.Th>
            <Table.Th>Telefon raqami</Table.Th>
            <Table.Th>Yozilgan sanasi</Table.Th>
            <Table.Th>Kurs nomi</Table.Th>
            <Table.Th>Vaqt</Table.Th>
            <Table.Th>Sozlash</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </>
  );
};

export default NewStudentsTable;
const CheckStudent = ({
  isChecked,
  children,
}: {
  isChecked: string;
  children: React.ReactNode;
}) => {
  if (isChecked === "pending")
    return (
      <Chip
        color="blue"
        variant="filled"
        icon={<Clock3 size={14} />}
        checked={isChecked === "pending"}
      >
        {children}
      </Chip>
    );
  if (isChecked === "reject")
    return (
      <Chip
        color="red"
        variant="filled"
        icon={<X size={14} />}
        checked={isChecked === "reject"}
      >
        {children}
      </Chip>
    );
  return (
    <Chip checked={true} color="green" icon={<Check />}>
      {children}
    </Chip>
  );
};
