import { Divider, TextInput, Group, Text } from "@mantine/core";
import CourseTable from "../../components/course/CourseTable";
import { BookOpenText, Search } from "lucide-react";
import CreateCourseModal from "../../components/course/CreateCourseModal";
import { useState } from "react";
const AdminCourse = () => {
  const [search, setSearch] = useState<string>("");
  return (
    <section>
      <Group pb="20" justify="space-between">
        <Group>
          <Text size="lg" fw="bold">
            Kurslar boshqaruv bo'limi
          </Text>
          <BookOpenText />
        </Group>
        <Group>
          <TextInput
            rightSection={<Search />}
            onChange={(event) => setSearch(event.target.value)}
            value={search}
            placeholder="Kurs qidirish."
          />
          <CreateCourseModal />
        </Group>
      </Group>
      <Divider py={10} />
      <CourseTable search={search} />
    </section>
  );
};

export default AdminCourse;
