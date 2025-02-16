import { useDisclosure } from "@mantine/hooks";
import { Button, Group, Modal, Text } from "@mantine/core";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteGroup } from "../../api/api.group";
import { useAppSelector } from "../../../hooks/redux";
const DeleteGroupModal = ({
  id,
  disabled,
}: {
  id: number;
  disabled: boolean;
}) => {
  const { admin } = useAppSelector((state) => state.admin);
  const [opened, { open, close }] = useDisclosure(false);
  const client = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: (id: number) => deleteGroup(id, admin?.token || ""),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["groups"] });
      close();
    },
  });
  const handleDelete = async () => {
    await mutateAsync(id);
  };
  return (
    <>
      <Button
        disabled={disabled}
        onClick={open}
        color="red"
        size="xs"
        variant="outline"
      >
        O'chirish 🗑️
      </Button>
      <Modal
        centered
        opened={opened}
        onClose={close}
        title="O'qituvchini o'chirish"
      >
        <Text size="md" className="text-center">
          Siz ushbu Guruhni o'chirishni xohlaysizmi?
        </Text>
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
export default DeleteGroupModal;
