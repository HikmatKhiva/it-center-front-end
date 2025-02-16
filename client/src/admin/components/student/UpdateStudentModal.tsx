import { useDisclosure } from "@mantine/hooks";
import { Button, Modal, Select, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { updateStudent } from "../../api/api.student";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAppSelector } from "../../../hooks/redux";
const UpdateStudentModal = ({ student }: { student: IStudent }) => {
  const client = useQueryClient();
  const { admin } = useAppSelector((state) => state.admin);
  const [opened, { open, close }] = useDisclosure(false);
  const { mutateAsync } = useMutation({
    mutationFn:(data: IStudent)=> updateStudent(data,admin?.token || ""),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["students"] });
      close();
    },
  });
  const form = useForm({
    initialValues: {
      id: student?.id,
      first_name: student?.first_name,
      second_name: student?.second_name,
      passport_id: student?.passport_id,
      gender: student?.gender,
    } as IStudent,
  });
  const handleSubmit = async (data: IStudent) => {
    mutateAsync(data);
  };
  return (
    <>
      <Button onClick={open} color="green" size="xs" variant="outline">
        O'zgartirish ✏️
      </Button>
      <Modal opened={opened} onClose={close} title="O'quvchini o'zgartirish">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack>
            <TextInput
              onChange={(e) =>
                form.setFieldValue("first_name", e.currentTarget.value.trim())
              }
              value={form.values.first_name}
              required
              label="Ismini kiriting!"
              placeholder="Xudayshukur"
              size="md"
              radius="md"
            />
            <TextInput
              onChange={(e) =>
                form.setFieldValue("second_name", e.currentTarget.value.trim())
              }
              value={form.values.second_name}
              required
              label="Familiyasini kiriting!"
              placeholder="Polvonov"
              size="md"
              radius="md"
            />
            <TextInput
              required
              label="Passport seriyasini kiriting!"
              placeholder="FA123456"
              onChange={(e) =>
                form.setFieldValue(
                  "passport_id",
                  e.currentTarget.value.trim().toUpperCase()
                )
              }
              value={form.values.passport_id}
              size="md"
              radius="md"
            />

            <Select
              label="Jinsni Tanlang"
              placeholder="Erkak"
              {...form.getInputProps("gender")}
              data={[
                { value: "male", label: "Erkak" },
                { value: "female", label: "Ayol" },
              ]}
            />
          </Stack>
          <Button
            aria-labelledby="create new student button"
            aria-label="create new student"
            size="md"
            mt="15"
            color="green"
            type="submit"
            radius="md"
          >
            Yangilash
          </Button>
        </form>
      </Modal>
    </>
  );
};
export default UpdateStudentModal;
