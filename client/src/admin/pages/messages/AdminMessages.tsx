import { Group, Pagination, Stack } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { getMessages } from "../../api/api.message";
import { useState } from "react";
import MessageCard from "../../components/messages/MessageCard";
import { useAppSelector } from "../../../hooks/redux";
const AdminMessages = () => {
  const { admin } = useAppSelector((state) => state.admin);
  const [activePage, setPage] = useState(1);
  const { data } = useQuery({
    queryFn: () =>
      getMessages({
        limit: 6,
        offset: (activePage - 1) * 6,
        token: admin?.token || "",
      }),
    queryKey: ["message", activePage],
    enabled: !!admin?.token,
  });
  const totalCount = parseInt(data?.total_count) || 0;
  const totalPages = Math.ceil(totalCount / 4);
  return (
    <section className="h-[calc(100vh_-_100px)]">
      <Stack justify="space-between" h="100%">
        <Group>
          {data?.messages?.map((m: IMessage) => (
            <MessageCard message={m} key={m.id} />
          ))}
        </Group>
        <Pagination
          className="ml-auto pb-5"
          color="#40C057"
          total={totalPages}
          value={activePage}
          onChange={setPage}
          mt="sm"
        />
      </Stack>
    </section>
  );
};
export default AdminMessages;