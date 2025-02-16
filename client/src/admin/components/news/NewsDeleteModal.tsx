import { useDisclosure } from "@mantine/hooks";
import { ActionIcon, Button, Group, Modal, Text } from "@mantine/core";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteNews } from "../../api/api.news";
import { Trash2 } from "lucide-react";
import { useAppSelector } from "../../../hooks/redux";
const NewsDeleteModal = ({ id }: { id: number }) => {
  const { admin } = useAppSelector((state) => state.admin);
  const [opened, { open, close }] = useDisclosure(false);
  const client = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: () => deleteNews(id, admin?.token || ""),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["news"] });
      close();
    },
  });
  const handleDelete = async () => {
    mutateAsync();
  };
  return (
    <>
      <ActionIcon
        pos="absolute"
        onClick={open}
        color="red"
        right="0"
        size="md"
        variant="filled"
      >
        <Trash2 size="16" />
      </ActionIcon>
      <Modal
        centered
        opened={opened}
        onClose={close}
        title="Yangilikni o'chirish" // Optional title for clarity
      >
        <Text size="md" className="text-center">
          Siz ushbu yangilikni o'chirishni xohlaysizmi?
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
export default NewsDeleteModal;
