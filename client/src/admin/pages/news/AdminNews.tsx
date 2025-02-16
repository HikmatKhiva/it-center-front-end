import {
  Divider,
  TextInput,
  Group,
  Text,
  Button,
  Pagination,
} from "@mantine/core";
import { Newspaper, Pencil, Search } from "lucide-react";
import AdminNewsCard from "../../components/news/AdminNewsCard";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAllNews } from "../../api/api.news";
import { useState } from "react";
const AdminNews = () => {
  const [activePage, setPage] = useState(1);
  const [search, setSearch] = useState<string>("");
  const { data } = useQuery({
    queryFn: () =>
      getAllNews({ limit: 6, offset: (activePage - 1) * 6, search }),
    queryKey: ["news", search],
  });
  const totalCount = parseInt(data?.total_count) || 0;
  const totalPages = Math.ceil(totalCount / 4);
  return (
    <section>
      <Group pb="20" justify="space-between">
        <Group>
          <Text size="lg" fw="bold">
            Yangiliklar boshqaruv bo'limi
          </Text>
          <Newspaper />
        </Group>
        <Group>
          <TextInput
            rightSection={<Search size={16} />}
            fz={"xs"}
            onChange={(event) => setSearch(event.target.value)}
            value={search}
            placeholder="Izlash..."
          />
          <Link to="/admin/news/create">
            <Button
              rightSection={<Pencil size={16} />}
              fz={"xs"}
              aria-label="navigate create news"
              aria-labelledby="navigate create news"
              color="green"
              type="button"
              variant="filled"
            >
              Yangilik Yaratish
            </Button>
          </Link>
        </Group>
      </Group>
      <Divider py={10} />
      <div className="flex flex-wrap gap-5">
        {data?.news?.map((news: INews) => (
          <AdminNewsCard news={news} key={news.id} />
        ))}
      </div>
      <Pagination
        className="ml-auto pb-5"
        color="#40C057"
        total={totalPages}
        value={activePage}
        onChange={setPage}
        mt="sm"
      />
    </section>
  );
};
export default AdminNews;
