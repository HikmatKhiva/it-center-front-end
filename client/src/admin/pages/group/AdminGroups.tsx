import GroupTable from "../../components/group/GroupTable";
import { Divider, TextInput, Group, Text, Select } from "@mantine/core";
import { Filter, LoaderCircle, Search, Users } from "lucide-react";
import CreateGroup from "../../components/group/CreateGroupModal";
import { useQuery } from "@tanstack/react-query";
import { getAllGroup } from "../../api/api.group";
import { useState } from "react";
import { useAppSelector } from "../../../hooks/redux";
const AdminGroups = () => {
  const [name, setName] = useState<string>("");
  const { admin } = useAppSelector((state) => state.admin);
  const [status, setStatus] = useState<boolean>(false);
  const { data, isLoading } = useQuery<IGroup[]>({
    queryKey: ["groups", name, status],
    queryFn: () => getAllGroup(name, admin?.token || "", status),
    enabled: !!admin?.token
  });
  return (
    <section>
      <Group pb="20" justify="space-between">
        <Group>
          <Text size="lg" fw="bold">
            O'qituvchi boshqaruv bo'limi
          </Text>
          <Users />
        </Group>
        <Group>
          <Select
            defaultValue="false"
            rightSection={<Filter />}
            onChange={(value: string | null) => setStatus(value === "true")}
            data={[
              { value: "true", label: "Yakunlangan Guruhlar" },
              { value: "false", label: "Aktiv Guruhlar" },
            ]}
          />
          <TextInput
            w={230}
            value={name}
            fz="xs"
            rightSection={
              isLoading ? (
                <LoaderCircle size={16} className="animate-spin" />
              ) : (
                <Search size={16} />
              )
            }
            onChange={(event) => setName(event.target.value.trim())}
            placeholder="Guruh nomi orqali qidirish..."
          />
          <CreateGroup />
        </Group>
      </Group>
      <Divider py={10} />
      <GroupTable status={status} data={data || []} isLoading={isLoading} />
    </section>
  );
};
export default AdminGroups;
