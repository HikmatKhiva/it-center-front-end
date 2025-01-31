import { Button, Divider, TextInput, Group, Text } from "@mantine/core";
import CourseTable from "../../components/course/CourseTable";
import { BookOpenText } from "lucide-react";
import CreateCourseModal from "../../components/course/CreateCourseModal";

const AdminCourse = () => {
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
          <TextInput className="" placeholder="Kurs qidirish" />
          <CreateCourseModal />
          {/* <Button color="green" variant="filled">
            Kurs Yaratish
          </Button> */}
        </Group>
      </Group>
      <Divider py={10} />
      <CourseTable />
    </section>
  );
};

export default AdminCourse;
