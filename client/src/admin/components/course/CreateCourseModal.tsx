import { Button, Modal, Stack, TextInput, Select } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createCourseValidation } from "../../../validation";
import { createCourse } from "../../api/api.course";
import { Pencil } from "lucide-react";
import { useAppSelector } from "../../../hooks/redux";
import { adminFormData } from "../../api/api.admin";
const CreateCourseModal = () => {
  const { admin } = useAppSelector((state) => state.admin);
  const [opened, { open, close }] = useDisclosure(false);
  const { data, isLoading } = useQuery({
    queryFn: () => adminFormData(admin?.token || ""),
    queryKey: ["admin", "form", "data"],
  });
  const client = useQueryClient();
  const form = useForm({
    initialValues: {
      name: "",
      price: 100000,
      teacher_id: "",
    } as INewCourse,
    validate: createCourseValidation,
  });
  const { isPending, mutateAsync } = useMutation({
    mutationFn: (course: INewCourse) =>
      createCourse(course, admin?.token || ""),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["courses"] });
      close();
      form.reset();
    },
  });
  const handleSubmit = async (course: INewCourse) => {
    mutateAsync(course);
  };
  return (
    <>
      <Button
        onClick={open}
        rightSection={<Pencil />}
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
              disabled={isLoading}
              label="O'qituvchini tanlang..."
              placeholder="O''qituvchini tanlang..."
              {...form.getInputProps("teacher_id")}
              data={data?.teachers}
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
