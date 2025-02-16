import { useQuery } from "@tanstack/react-query";
import NewStudentsTable from "../../components/newStudents/NewStudentsTable";
import { getAllNewStudents } from "../../api/api.new.student";
import {
  Divider,
  Group,
  Pagination,
  Select,
  Text,
  Loader,
  Avatar,
  Indicator,
} from "@mantine/core";
import {
  BookOpenText,
  CalendarFold,
  Filter,
} from "lucide-react";
import { course_times, selectMonths } from "../../../config";
import { useState } from "react";
import { useAppSelector } from "../../../hooks/redux";
const Students = () => {
  const [activePage, setPage] = useState(1);
  const { admin } = useAppSelector((state) => state.admin);
  const [queryData, setQueryData] = useState<IQueryStudent>({
    is_attend: "pending",
    month: (new Date().getMonth() + 1).toString(),
    course_time: "Ertalab 9:00",
  });
  const [courseName, setCourseName] = useState<string>("");
  const { data, isLoading } = useQuery({
    queryFn: () =>
      getAllNewStudents({
        queryData,
        limit: 10,
        offset: (activePage - 1) * 10,
        token: admin?.token || "",
      }),
    queryKey: [
      "newStudents",
      queryData.course_time,
      queryData.is_attend,
      queryData.month,
    ],
  });
  const course = data?.course?.map((c: any) => {
    return {
      label: c.label,
      value: c.label,
    };
  });
  const totalCount = data?.total_count || 0;
  const totalPages = Math.ceil(totalCount / 10);
  return (
    <section>
      <Group mb="20" align="center" justify="space-between">
        <Group align="end">
          <Text>Yangi o'quvchilar</Text>
          <Indicator inline label={data?.total_new} processing size={16}>
            <Avatar size={25} />
          </Indicator>
        </Group>
        <Group>
          <Select
            w={160}
            size="xs"
            leftSection={<Filter />}
            data={[
              { label: "Kelmaydigan O'quvchilar", value: "reject" },
              { label: "Keladigan O'quvchilar", value: "success" },
              { label: "Telefon qilinmagan", value: "pending" },
            ]}
            value={queryData.is_attend}
            onChange={(value) =>
              setQueryData({ ...queryData, is_attend: value || "" })
            }
          />
          <Select
            w={130}
            size="xs"
            leftSection={<BookOpenText />}
            disabled={isLoading}
            data={course}
            value={courseName}
            onChange={(value) => setCourseName(value || "")}
          />
          <Select
            size="xs"
            leftSection={<CalendarFold />}
            w={130}
            data={selectMonths}
            value={queryData.month}
            onChange={(value) =>
              setQueryData({ ...queryData, month: value || "" })
            }
          />
          <Select
            value={queryData.course_time}
            size="xs"
            w={130}
            onChange={(value) =>
              setQueryData({ ...queryData, course_time: value || "" })
            }
            data={course_times}
          />
        </Group>
      </Group>
      <Divider />
      {isLoading ? (
        <Loader
          pos="absolute"
          top="50%"
          className="translate-x-[50%] "
          left="55%"
          color="green"
          size="xl"
          type="dots"
        />
      ) : (
        <NewStudentsTable
          newStudents={data?.students?.filter((s: IAddStudents) =>
            s.course_name.includes(courseName)
          )}
        />
      )}
      <Pagination
        className="ml-auto pb-5"
        hiddenFrom={totalCount <= 1 ? "lg" : "sm"}
        color="#40C057"
        total={totalPages}
        value={activePage}
        onChange={setPage}
        mt="sm"
      />
    </section>
  );
};
export default Students;
