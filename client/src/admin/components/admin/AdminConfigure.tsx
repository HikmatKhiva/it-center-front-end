import { Button, Modal, Avatar } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useAppSelector } from "../../../hooks/redux";
const AdminConfigure = () => {
  const [opened, { open, close }] = useDisclosure(true);
  const { admin } = useAppSelector((state) => state.admin);
  return (
    <>
      <Button
        onClick={open}
        rightSection={
          <Avatar size={24} src={admin?.photo_url} alt={admin?.username} />
        }
        aria-label="open update admin modal"
        aria-labelledby="open update admin modal"
        type="button"
        bd={0}
        variant="default"
      >
        {admin?.username}
      </Button>
      <Modal
        aria-label="Admin update"
        aria-labelledby="Admin update"
        opened={opened}
        onClose={close}
        title={`${admin?.username} ma'lumotlarni yangilash`}
      >
        
      </Modal>
    </>
  );
};
export default AdminConfigure;
