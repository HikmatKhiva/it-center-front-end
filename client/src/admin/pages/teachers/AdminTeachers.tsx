import TeachersTable from "../../components/teachers/TeachersTable";
import { Divider, TextInput, Group, Text } from "@mantine/core";
import { LoaderCircle, Search, User } from "lucide-react";
import CreateTeacherModal from "../../components/teachers/CreateTeacherModal";
import { useQuery } from "@tanstack/react-query";
import { getAllTeachers } from "../../api/api.teachers";
import { useState } from "react";
import { useAppSelector } from "../../../hooks/redux";
const AdminTeachers = () => {
  const { admin } = useAppSelector((state) => state.admin);
  const [name, setName] = useState<string>("");
  const { data, isLoading } = useQuery<ITeacher[]>({
    queryKey: ["teachers", name],
    queryFn: () => getAllTeachers(name,admin?.token || ""),
  });
  return (
    <section>
      <Group pb="20" justify="space-between">
        <Group>
          <Text size="lg" fw="bold">
            O'qituvchi boshqaruv bo'limi
          </Text>
          <User />
        </Group>
        <Group>
          <TextInput
            fz="sm"
            value={name}
            rightSection={
              isLoading ? (
                <LoaderCircle size={16} className="animate-spin" />
              ) : (
                <Search size={16} />
              )
            }
            onChange={(event) => setName(event.target.value.trim())}
            className=""
            placeholder="O'qituvchi qidirish"
          />
          <CreateTeacherModal />
        </Group>
      </Group>
      <Divider py={10} />
      <TeachersTable teachers={data || []} isLoading={isLoading} />
    </section>
  );
};
export default AdminTeachers;