import { Button, Modal, Stack, TextInput, Select } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCourseValidation } from "../../../validation";
import { createCourse } from "../../api/api.course";
const CreateCourseModal = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const client = useQueryClient();
  const form = useForm({
    initialValues: {
      name: "",
      price: 10000,
      teacher_id: "",
    } as INewCourse,
    validate: createCourseValidation,
  });
  const { isPending, mutateAsync } = useMutation({
    mutationFn: createCourse,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["courses"] });
      close();
    },
  });
  const handleSubmit = async (course: INewCourse) => {
    mutateAsync(course);
  };
  return (
    <>
      <Button
        onClick={open}
        aria-label="open course create modal"
        aria-labelledby="open course create modal"
        color="green"
        type="button"
        variant="filled"
      >
        Kurs Yaratish
      </Button>
      <Modal
        aria-label="course create modal"
        aria-labelledby="course create modal"
        opened={opened}
        onClose={close}
        title="Kurs yaratish"
      >
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack>
            <TextInput
              label="Kurs nomini kiriting"
              placeholder="Dasturlash"
              size="sm"
              value={form.values.name}
              onChange={(event) =>
                form.setFieldValue("name", event.target.value)
              }
              error={form.errors.name}
              radius="md"
            />
            <TextInput
              label="Kurs bahosini kiriting"
              placeholder="100000"
              size="sm"
              value={form.values.price}
              onChange={(event) => {
                const value = event.target.value;
                if (/^\d*$/.test(value)) {
                  form.setFieldValue("price", +value);
                }
              }}
              error={form.errors.price}
              radius="md"
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

export default CreateCourseModal;
