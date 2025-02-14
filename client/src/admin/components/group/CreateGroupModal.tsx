import { Button, Modal, Stack, TextInput, Select } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createGroup } from "../../api/api.group";
import { Pencil } from "lucide-react";
import { createCourseValidation } from "../../../validation";
import { adminFormData } from "../../api/api.admin";
import { useAppSelector } from "../../../hooks/redux";
const CreateGroup = () => {
  const { admin } = useAppSelector((state) => state.admin);
  const [opened, { open, close }] = useDisclosure(false);
  const client = useQueryClient();
  const form = useForm({
    initialValues: {
      name: "",
      course_id: "",
      teacher_id: "",
      duration: 6,
      price: 100000,
      group_time: "",
    } as INewGroup,
    validate: createCourseValidation,
  });
  const { data, isLoading } = useQuery({
    queryKey: ["admin", "form", "data"],
    queryFn: () => (admin?.token ? adminFormData(admin.token || "") : null),
    enabled: !!admin?.token,
  });
  const { isPending, mutateAsync } = useMutation({
    mutationFn: (group: INewGroup) => createGroup(group, admin?.token || ""),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["groups"] });
      form.reset();
      close();
    },
  });
  const handleSubmit = async (group: INewGroup) => {
    mutateAsync(group);
  };
  return (
    <>
      <Button
        onClick={open}
        aria-label="open group create modal"
        aria-labelledby="open group create modal"
        color="green"
        type="button"
        fz="xs"
        rightSection={<Pencil size={16} />}
        variant="filled"
      >
        Guruh Yaratish
      </Button>
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
              error={form.errors.name}
              radius="md"
            />
            <TextInput
              label="Qancha oy davom etishi belgilang!"
              placeholder="6"
              size="sm"
              value={form.values.duration}
              onChange={(event) => {
                const value = event.target.value;
                if (/^\d*$/.test(value)) {
                  form.setFieldValue("duration", +value);
                }
              }}
              error={form.errors.duration}
              radius="md"
            />
            <TextInput
              label="Oylik To'lov summasini kiriting!"
              placeholder="6"
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
            <TextInput
              label="Guruh vaqtini kiriting"
              placeholder="Juft 14:00"
              size="sm"
              value={form.values.group_time}
              onChange={(event) =>
                form.setFieldValue("group_time", event.target.value)
              }
              error={form.errors?.group_time}
              radius="md"
            />
            <Select
              label="Kursni tanlang..."
              disabled={isLoading}
              placeholder="Kursni tanlang..."
              {...form.getInputProps("course_id")}
              data={data?.courses}
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
export default CreateGroup;