import { useDisclosure } from "@mantine/hooks";
import { Button, Group, Modal, Text } from "@mantine/core";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCourse } from "../../api/api.course";
import { useRef, MutableRefObject } from "react";
import { notifications } from "@mantine/notifications";
import { Check, X } from "lucide-react";
import { useAppSelector } from "../../../hooks/redux";
const DeleteCourseModal = ({ id }: { id: number }) => {
  const { admin } = useAppSelector((state) => state.admin);
  const [opened, { open, close }] = useDisclosure(false);
  const _id: MutableRefObject<string | undefined> = useRef();
  const client = useQueryClient();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: () => deleteCourse(id, admin?.token || ""),
    onSuccess: (response) => {
      client.invalidateQueries({ queryKey: ["courses"] });
      close();
      notifications.update({
        id: _id.current,
        title: "Course o'chirish.",
        message: response?.message,
        color: "white",
        autoClose: 3000,
        position: "top-right",
        icon: <Check color="#93CE03" />,
      });
    },
    onError: (error) => {
      notifications.update({
        id: _id.current,
        title: "Course o'chirishda xato bo'ldi.",
        message: error?.message,
        color: "red",
        autoClose: 3000,
        position: "top-right",
        icon: <X color="white" />,
      });
    },
  });
  const handleClick = async () => {
    _id.current = notifications.show({
      loading: isPending,
      title: "Ma'lumotlar o'chirilyapti.",
      message: "Iltimos ma'lumot o'chirilguncha kutib turing!",
      color: "blue",
      position: "top-right",
      withCloseButton: true,
    });
    await mutateAsync();
  };
  return (
    <>
      <Button onClick={open} color="red" size="xs" variant="outline">
        O'chirish 🗑️
      </Button>
      <Modal
        centered
        opened={opened}
        onClose={close}
        title="O'qituvchini o'chirish"
      >
        <Text size="md" className="text-center">
          Siz ushbu Kurni o'chirishni xohlaysizmi?
        </Text>
        <Group mt={20} justify="end" gap="10">
          <Button
            loading={isPending}
            disabled={isPending}
            type="button"
            color="green"
            onClick={handleClick}
          >
            Ha
          </Button>
          <Button
            type="button"
            disabled={isPending}
            color="red"
            variant="outline"
            onClick={close}
          >
            Yo'q
          </Button>
        </Group>
      </Modal>
    </>
  );
};
export default DeleteCourseModal;