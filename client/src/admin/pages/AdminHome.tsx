import { Card, Group, Stack, Text } from "@mantine/core";
import {
  StudentSVG,
  CourseSVG,
  GroupSVG,
  TeacherSVG,
} from "../../motions_components";
const AdminHome = () => {
  return (
    <section>
      <Text mt="10" size="24px">
        IT-Khiva Boshqaruv Paneli
      </Text>
      <div className="flex flex-wrap ">
        <Card w="280" shadow="lg" padding="xl" radius="lg" className="m-5">
          <Stack justify="space-between">
            <Group align="center" justify="space-between">
              <Text size="xl">Talabalar</Text>
              <StudentSVG />
            </Group>
            <Text size="xl">100</Text>
          </Stack>
        </Card>
        <Card w="280" shadow="lg" padding="xl" radius="lg" className="m-5">
          <Stack justify="space-between">
            <Group align="center" justify="space-between">
              <Text size="xl">Guruhlar</Text>
              <GroupSVG />
            </Group>
            <Text size="xl">100</Text>
          </Stack>
        </Card>
        <Card w="280" shadow="lg" padding="xl" radius="lg" className="m-5">
          <Stack justify="space-between">
            <Group align="center" justify="space-between">
              <Text size="xl">O'qituvchilar</Text>
              <TeacherSVG />
            </Group>
            <Text size="xl">100</Text>
          </Stack>
        </Card>
        <Card w="280" shadow="lg" padding="xl" radius="lg" className="m-5">
          <Stack justify="space-between">
            <Group align="center" justify="space-between">
              <Text size="xl">Kurslar</Text>
              <CourseSVG />
            </Group>
            <Text size="xl">100</Text>
          </Stack>
        </Card>
      </div>
    </section>
  );
};
export default AdminHome;
