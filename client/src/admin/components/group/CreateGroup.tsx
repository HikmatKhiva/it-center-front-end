import { Button, Modal, Stack, TextInput, Select } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { useMutation } from "@tanstack/react-query";
import { createGroup } from "../../api/group";
const CreateGroup = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const form = useForm({
    initialValues: {
      name: "",
      course_id: "",
      teacher_id: "",
    } as INewGroup,
  });
  const { isPending, mutateAsync } = useMutation({
    mutationFn: createGroup,
    onSuccess: () => {
      close();
    },
  });
  const handleSubmit = async (group: INewGroup) => {
    mutateAsync(group);
  };
  return (
    <>
      <span onClick={open}> Yaratish</span>
      <Modal opened={opened} onClose={close} title="Guruh yaratish">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack>
            <TextInput
              label="Guruh nomini kiriting"
              placeholder="Dasturlash"
              size="sm"
              value={form.values.name}
              onChange={(event) =>
                form.setFieldValue("name", event.target.value)
              }
              error={form.errors.name && "Iltimos ma'lumotni to'g'ri kiriting."}
              radius="md"
            />
            <Select
              label="Kursni tanlang..."
              placeholder="Kursni tanlang..."
              {...form.getInputProps("course_id")}
              data={[
                { value: "1", label: "Front-End" },
                { value: "2", label: "Backend" },
              ]}
            />
            <Select
              label="O'qituvchini tanlang..."
              placeholder="O''qituvchini tanlang..."
              {...form.getInputProps("teacher_id")}
              data={[{ value: "2", label: "Hikmat Bekturdiyev" }]}
            />
          </Stack>
          <Button
            loading={isPending}
            aria-labelledby="create new group button"
            aria-label="create new group"
            size="sm"
            mt="15"
            color="green"
            type="submit"
            radius="md"
          >
            Yaratish
          </Button>
        </form>
      </Modal>
    </>
  );
};
export default CreateGroup;
