import { useDisclosure } from "@mantine/hooks";
import { Button, Modal, Select, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createCourseValidation } from "../../../validation";
import { updateCourse } from "../../api/api.course";
import { adminFormData } from "../../api/api.admin";
import { useAppSelector } from "../../../hooks/redux";
const UpdatedCourseModal = ({ course }: { course: ICourse }) => {
  const client = useQueryClient();
  const { admin } = useAppSelector((state) => state.admin);
  const [opened, { open, close }] = useDisclosure(false);
  const { data, isLoading } = useQuery({
    queryFn: () => adminFormData(admin?.token || ""),
    queryKey: ["teachers"],
  });
  const { mutateAsync } = useMutation({
    mutationFn: (course: INewCourse) =>
      updateCourse(course, admin?.token || ""),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["courses"] });
      close();
    },
  });
  const form = useForm({
    initialValues: {
      id: course?.id,
      name: course?.name,
      price: course?.price,
      teacher_id: course?.teacher?.id.toString(),
    } as INewCourse,
    validate: createCourseValidation,
  });
  const handleSubmit = async (course: INewCourse) => {
    mutateAsync(course);
  };
  return (
    <>
      <Button onClick={open} color="green" size="xs" variant="outline">
        O'zgartirish ✏️
      </Button>
      <Modal opened={opened} onClose={close} title="Kursni o'zgartirish">
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
export default UpdatedCourseModal;
