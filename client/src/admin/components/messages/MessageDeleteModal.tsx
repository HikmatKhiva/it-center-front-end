import { useDisclosure } from "@mantine/hooks";
import { ActionIcon, Button, Group, Modal, Text } from "@mantine/core";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Check, Trash2, X } from "lucide-react";
import { deleteMessage } from "../../api/api.message";
import { notifications } from "@mantine/notifications";
import { useRef } from "react";
import { useAppSelector } from "../../../hooks/redux";
const MessageDeleteModal = ({ id }: { id: number }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const { admin } = useAppSelector((state) => state.admin);
  const client = useQueryClient();
  const _id: any = useRef();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: () =>
      admin?.token ? deleteMessage(id, admin.token || "") : Promise.reject(),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["message"] });
      notifications.update({
        id: _id.current,
        title: "Ma'lumotlar o'chirildi",
        message: "Biz siz bilan aloqaga chiqamiz!",
        color: "white",
        autoClose: 3000,
        position: "top-right",
        icon: <Check color="#93CE03" />,
      });
      close();
    },
    onError: (error) => {
      notifications.update({
        id: _id.current,
        title: "Ma'lumotlar o'chirishda xato bo'ldi.",
        message: error?.message,
        color: "red",
        autoClose: 3000,
        position: "top-right",
        icon: <X color="white" />,
      });
    },
  });
  const handleDelete = () => {
    _id.current = notifications.show({
      loading: isPending,
      title: "Ma'lumotlar o'chirilyapti.",
      message: "Iltimos ma'lumot o'chirilguncha kutib turing!",
      color: "blue",
      position: "top-right",
      withCloseButton: true,
    });
    mutateAsync();
  };
  return (
    <>
      <ActionIcon
        onClick={open}
        bottom="0px"
        right="0px"
        color="red"
        pos="absolute"
        p="3"
      >
        <Trash2 />
      </ActionIcon>
      <Modal
        centered
        opened={opened}
        onClose={close}
        title="Xabarni o'chirish." // Optional title for clarity
      >
        <Text size="md" className="text-center">
          Siz ushbu Xabarni o'chirishni xohlaysizmi?
        </Text>
        {/* Confirmation message */}
        <Group mt={20} justify="end" gap="10">
          <Button color="green" onClick={handleDelete}>
            Ha
          </Button>
          <Button color="red" variant="outline" onClick={close}>
            Yo'q
          </Button>
        </Group>
      </Modal>
    </>
  );
};

export default MessageDeleteModal;
