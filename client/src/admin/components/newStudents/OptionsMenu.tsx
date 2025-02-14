import { Button, Menu } from "@mantine/core";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Check, Ellipsis, Trash2, X } from "lucide-react";
import { useState } from "react";
import {
  deleteNewStudentStatus,
  updateNewStudentStatus,
} from "../../api/api.new.student";
import { useAppSelector } from "../../../hooks/redux";
const OptionsMenu = ({ id }: { id: number }) => {
  const { admin } = useAppSelector((state) => state.admin);
  const [opened, setOpened] = useState(false);
  const client = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: (status: string) =>
      updateNewStudentStatus(id, status, admin?.token || ""),
    mutationKey: ["updateNewStudent", id],
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["newStudents"] });
    },
  });
  const handleUpdateStatus = async (status: string) => {
    await mutateAsync(status);
  };
  const handleDelete = async () => {
    await deleteNewStudentStatus(id, admin?.token || "");
    client.invalidateQueries({ queryKey: ["newStudents"] });

  };
  return (
    <Menu opened={opened} onChange={setOpened} shadow="md">
      <Menu.Target>
        <Button size="xs" variant="default">
          <Ellipsis size="16" />
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          onClick={() => handleUpdateStatus("success")}
          rightSection={<Check size={14} />}
          color="green"
        >
          Darsga qatnashadigan
        </Menu.Item>
        <Menu.Item
          onClick={() => handleUpdateStatus("reject")}
          rightSection={<X size={14} />}
          color="red"
        >
          Darsga qatnashmaydigan
        </Menu.Item>
        <Menu.Item
          onClick={handleDelete}
          rightSection={<Trash2 size={14} />}
          color="red"
        >
          Ro'yxatdan o'chirish
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
export default OptionsMenu;
