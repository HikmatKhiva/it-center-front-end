import { Button, Modal, Stack, TextInput, Select } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createStudent } from "../../api/api.student";
import { Check, Pencil, X } from "lucide-react";
import { studentValidation } from "../../../validation";
import { useAppSelector } from "../../../hooks/redux";
import { MutableRefObject, useRef } from "react";
import { notifications } from "@mantine/notifications";
const CreateStudent = ({
  course_id,
  group_id,
}: {
  course_id: string;
  group_id: string;
}) => {
  const { admin } = useAppSelector((state) => state.admin);
  const idNotification: MutableRefObject<string | undefined> = useRef();
  const [opened, { open, close }] = useDisclosure(false);
  const client = useQueryClient();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (student: INewStudent) =>
      createStudent(student, admin?.token || ""),
    onSuccess: (response) => {
      client.invalidateQueries({ queryKey: ["students"] });
      notifications.update({
        id: idNotification.current,
        title: "O'quvchi qo'shish.",
        message: response?.message,
        color: "white",
        autoClose: 3000,
        position: "top-right",
        icon: <Check color="#93CE03" />,
      });
      close();
    },
    onError: (error: any) => {
      notifications.update({
        id: idNotification.current,
        title: "O'quvchi yaratishda xato bo'ldi.",
        message: error?.detail,
        color: "red",
        autoClose: 3000,
        position: "top-right",
        icon: <X color="white" />,
      });
    },
  });
  const form = useForm({
    initialValues: {
      first_name: "",
      second_name: "",
      passport_id: "",
      gender: "",
      course_id,
      group_id,
    } as INewStudent,
    validate: studentValidation,
  });
  const handleSubmit = async (student: INewStudent) => {
    idNotification.current = notifications.show({
      loading: isPending,
      title: "Ma'lumotlar uzatilyapti.",
      message: "Iltimos ma'lumot o'uzatilguncha kutib turing!",
      color: "blue",
      position: "top-right",
      withCloseButton: true,
    });
    mutateAsync(student);
  };
  return (
    <>
      <Button
        onClick={open}
        fz={"xs"}
        rightSection={<Pencil size={14} />}
        color="green"
      >
        Yangi O'quvchi Qo'shish
      </Button>
      <Modal opened={opened} onClose={close} title=" Yangi O'quvchi Qo'shish">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack>
            <TextInput
              onChange={(e) =>
                form.setFieldValue("first_name", e.currentTarget.value.trim())
              }
              value={form.values.first_name}
              error={form.errors.first_name}
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
              error={form.errors.second_name}
              label="Familiyasini kiriting!"
              placeholder="Polvonov"
              size="md"
              radius="md"
            />
            <TextInput
              label="Passport seriyasini kiriting!"
              placeholder="FA123456"
              maxLength={9}
              onChange={(e) =>
                form.setFieldValue(
                  "passport_id",
                  e.currentTarget.value.trim().toUpperCase()
                )
              }
              error={form.errors.passport_id}
              value={form.values.passport_id}
              size="md"
              radius="md"
            />

            <Select
              label="Jinsni Tanlang"
              placeholder="Erkak"
              error={form.errors.gender}
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
            Qo'shish
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default CreateStudent;
