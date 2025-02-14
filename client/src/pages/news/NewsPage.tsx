import { Container, Group, Pagination, Text } from "@mantine/core";
import NewsCard from "../../components/news/NewsCard";
import { TextAnimate } from "../../animation/text-animation";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getNews } from "../../api/api.helper";
const NewsPage = () => {
  const [activePage, setPage] = useState(1);
  const { data: newsData } = useQuery({
    queryFn: getNews,
    queryKey: ["news"],
  });
  const totalCount = parseInt(newsData?.total_count) || 0;
  const totalPages = Math.ceil(totalCount / 10);
  return (
    <section>
      <Container>
        <Text mt={30} fz={{ sm: "lg", md: "30px" }} className="text-center">
          <TextAnimate animation="fadeIn">Yangiliklar</TextAnimate>
        </Text>
        <Group mt={30}>
          {newsData?.news?.map((news: INews) => {
            return <NewsCard news={news} key={news.id} />;
          })}
        </Group>
        <Pagination
          className="ml-auto pb-5"
          color="#40C057"
          total={totalPages}
          value={activePage}
          onChange={setPage}
          mt="sm"
        />
      </Container>
    </section>
  );
};
export default NewsPage;
