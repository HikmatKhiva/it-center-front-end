import { Card, Image, Text, ActionIcon } from "@mantine/core";
import { Eye, Pen } from "lucide-react";
import { CoolMode } from "../../../animation/cool-mode";
import { useNavigate } from "react-router-dom";
import NewsDeleteModal from "./NewsDeleteModal";
const AdminNewsCard = ({ news }: { news: INews }) => {
  const navigate = useNavigate();
  return (
    <Card w="300" shadow="sm" padding="0" radius="md" withBorder pos="relative">
      <CoolMode>
        <ActionIcon
          onClick={() => navigate(`/admin/news/${news?.id}`)}
          size="md"
          top="0px"
          p="2"
          right="60px"
          pos="absolute"
          color="green"
        >
          <Eye />
        </ActionIcon>
      </CoolMode>
      <ActionIcon
        onClick={() => navigate(`/admin/news/update/${news?.id}`)}
        size="md"
        top="0px"
        p="2"
        color="violet"
        right="30px"
        pos="absolute"
      >
        <Pen />
      </ActionIcon>
      <NewsDeleteModal id={news?.id || 0} />
      <Image src={news?.photo_url} h={250} alt="Norway" />
      <Card.Section p="lg">
        <Text fw={500}>{news.news_title}</Text>
        <Text size="sm" c="dimmed">
          {news.news_description}
        </Text>
      </Card.Section>
    </Card>
  );
};
export default AdminNewsCard;
