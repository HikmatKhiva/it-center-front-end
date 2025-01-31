import { useDisclosure } from "@mantine/hooks";
import { Button, Group, Modal, Text } from "@mantine/core";
import { useMutation } from "@tanstack/react-query";
import { deleteStudent } from "../../api/api.student";

const DeleteStudentModal = ({ id }: { id: number }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const { mutateAsync } = useMutation({
    mutationFn: deleteStudent,
    onSuccess: () => {},
  });
  return (
    <>
      <Button onClick={open} color="red" size="xs" variant="outline">
        O'chirish 🗑️
      </Button>
      <Modal
        centered
        opened={opened}
        onClose={close}
        title="O'quvchini o'chirish" // Optional title for clarity
      >
        <Text size="md" className="text-center">
          Siz ushbu o'quvchini o'chirishni xohlaysizmi?
        </Text>
        {/* Confirmation message */}
        <Group mt={20} justify="end" gap="10">
          <Button
            color="green"
            onClick={async () => {
              await mutateAsync(id);
              close();
            }}
          >
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
export default DeleteStudentModal;
