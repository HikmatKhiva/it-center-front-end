import { useDisclosure } from "@mantine/hooks";
import { Button, Modal, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTeacher } from "../../api/api.teachers";
import { useAppSelector } from "../../../hooks/redux";
const UpdateTeacherModal = ({ teacher }: { teacher: ITeacher }) => {
  const { admin } = useAppSelector((state) => state.admin);
  const client = useQueryClient();
  const [opened, { open, close }] = useDisclosure(false);
  const { mutateAsync } = useMutation({
    mutationFn: (data: ITeacher)=>updateTeacher(data,admin?.token || ""),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["teachers"] });
      close();
    },
  });
  const form = useForm({
    initialValues: {
      id: teacher?.id,
      first_name: teacher?.first_name,
      second_name: teacher?.second_name,
    } as ITeacher,
  });
  const handleSubmit = async (data: ITeacher) => {
    mutateAsync(data);
  };
  return (
    <>
      <Button onClick={open} color="green" size="xs" variant="outline">
        O'zgartirish ✏️
      </Button>
      <Modal opened={opened} onClose={close} title="O'qituvchini o'zgartirish">
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
          </Stack>
          <Button
            aria-labelledby="update a teacher button"
            aria-label="update a teacher"
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

export default UpdateTeacherModal;
