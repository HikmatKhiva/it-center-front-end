import { useDisclosure } from "@mantine/hooks";
import {
  Drawer,
  Button,
  Text,
  Group,
  RingProgress,
  Stack,
  ActionIcon,
  Center,
} from "@mantine/core";
import { Check, ReceiptText } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getPayments } from "../../api/api.student";
import PaymentTable from "./PaymentTable";
import { useAppSelector } from "../../../hooks/redux";
const PaymentsHistory = ({
  student,
  total_cost,
}: {
  student: IStudent;
  total_cost: string;
}) => {
  const { admin } = useAppSelector((state) => state.admin);
  const [opened, { open, close }] = useDisclosure(false);
  const { data } = useQuery({
    queryKey: ["payments", student?.id],
    queryFn: () => getPayments(student?.id, admin?.token || ""),
    enabled: !!student?.id && !!admin?.token,
  });
  const payments =
    Array.isArray(data) && data.length > 0 ? data[0].payments : [];
  const total_paid = payments.reduce(
    (accumulator: number, payment: IPayments) => {
      return accumulator + payment.amount;
    },
    0
  );
  const percentage_paid = (total_paid / parseInt(total_cost)) * 100;
  return (
    <>
      <Drawer opened={opened} onClose={close} title={`${student?.first_name}`}>
        <Stack justify="space-between" h={"100%"}>
          <PaymentTable payments={payments} />
          <Group justify="center">
            <RingProgress
              sections={[
                {
                  value: percentage_paid,
                  color: percentage_paid === 100 ? "teal" : "blue",
                },
              ]}
              rootColor="red"
              label={
                <Center>
                  {percentage_paid === 100 ? (
                    <ActionIcon
                      color="teal"
                      variant="light"
                      radius="xl"
                      size="xl"
                    >
                      <Check size={22} />
                    </ActionIcon>
                  ) : (
                    <Text c="red" fw={700} ta="center" size="md">
                      {student.debt} <br />
                      {!isNaN(percentage_paid)
                        ? `${Math.floor(percentage_paid)}%`
                        : ""}
                    </Text>
                  )}
                </Center>
              }
            />
          </Group>
        </Stack>
      </Drawer>
      <Button size="xs" variant="default" onClick={open}>
        <ReceiptText size={16} />
      </Button>
    </>
  );
};
export default PaymentsHistory;