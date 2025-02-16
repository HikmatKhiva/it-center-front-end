import { Button, Modal, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTeacher } from "../../api/api.teachers";
import { Pencil } from "lucide-react";
import { useAppSelector } from "../../../hooks/redux";
const CreateTeacherModal = () => {
  const { admin } = useAppSelector((state) => state.admin);
  const [opened, { open, close }] = useDisclosure(false);
  const client = useQueryClient();
  const form = useForm({
    initialValues: {
      first_name: "",
      second_name: "",
    } as ITeacher,
  });
  const { isPending, mutateAsync } = useMutation({
    mutationFn: (teacher: ITeacher) =>
      createTeacher(teacher, admin?.token || ""),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["teachers"] });
      close();
      form.reset();
    },
  });
  const handleSubmit = async (teacher: ITeacher) => {
    mutateAsync(teacher);
  };
  return (
    <>
      <Button
        rightSection={<Pencil size={16} />}
        onClick={open}
        fz="xs"
        aria-label="open course create modal"
        aria-labelledby="open course create modal"
        color="green"
        type="button"
        variant="filled"
      >
        O'qituvchi Yaratish
      </Button>
      <Modal
        aria-label="course create modal"
        aria-labelledby="course create modal"
        opened={opened}
        onClose={close}
        title="O'qituvchi yaratish"
      >
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
            loading={isPending}
            aria-labelledby="create new teacher button"
            aria-label="create new teacher"
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
export default CreateTeacherModal;
