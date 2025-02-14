import { Button, Group, Container, Divider, Text, Image, ActionIcon } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getNews } from "../../admin/api/api.news";
import { Calendar,ArrowLeft } from "../../assets";
const NewsPreview = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useQuery({
    queryFn: () => getNews(id || ""),
    queryKey: ["news", id],
  });
  const news: INews = Array.isArray(data) && data[0];

  return (
    <section className="pt-5">
      <Container>
        <Group justify="space-between">
          <ActionIcon
            onClick={() => navigate('/news')}
            variant="default"
            size="md"
            color="orange"
          >
            <Image src={ArrowLeft} />
            {/* <ArrowLeft size={16} /> */}
          </ActionIcon>
          <Group>
            <Image w={20} src={Calendar} />
            <Text>{news?.created_at}</Text>
          </Group>
        </Group>
        <Divider mt="10" mb="30" />
        <div dangerouslySetInnerHTML={{ __html: news?.content }}></div>
      </Container>
    </section>
  );
};

export default NewsPreview;
