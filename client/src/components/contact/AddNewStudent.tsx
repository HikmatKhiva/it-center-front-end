import {
  Button,
  LoadingOverlay,
  Paper,
  PaperProps,
  Select,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { InputMask } from "@react-input/mask";
import { useForm } from "@mantine/form";
import { addNewStudentValidation } from "../../validation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { addNewStudent } from "../../api/api.newStudent";
import { getAllCourse } from "../../admin/api/api.course";
import { selectData } from "../../utils/helper";
import { notifications } from "@mantine/notifications";
import { course_times } from "../../config";
import { Check, X } from "lucide-react";
import { useRef } from "react";
import { getCourseList } from "../../api/api.helper";
const AddNewStudent = (props: PaperProps) => {
  const id: any = useRef();
  const form = useForm({
    initialValues: {
      full_name: "",
      phone: "+99 (8",
      course_id: "",
      course_time: "Muhim emas",
    } as IAddStudent,
    validate: addNewStudentValidation,
  });
  const { data, isLoading } = useQuery({
    queryFn: getCourseList,
    queryKey: ["courses"],
  });
  const courses = data?.map((course: ICourse) =>
    selectData(course.id, course.name)
  );
  const { mutateAsync, isPending } = useMutation({
    mutationFn: addNewStudent,
    mutationKey: ["newStudent"],
    onSuccess: () => {
      notifications.update({
        id: id.current,
        title: "Ma'lumotlar yuklandi.",
        message: "Biz siz bilan aloqaga chiqamiz!",
        color: "white",
        autoClose: 3000,
        position: "top-right",
        icon: <Check color="#93CE03" />,
      });
      form.reset();
    },
    onError: () => {
      notifications.update({
        id: id.current,
        title: "Ma'lumotlar yuklanishda xato bo'ldi.",
        message: "Iltimos ma'lumot tekshirib qayta yuklang!",
        color: "red",
        autoClose: 3000,
        position: "top-right",
        icon: <X color="white" />,
      });
    },
  });
  const handleSubmit = (student: IAddStudent) => {
    id.current = notifications.show({
      loading: isPending,
      title: "Ma'lumotlar yuklanyapti.",
      message: "Iltimos ma'lumot yuklanguncha kutib turing!",
      color: "blue",
      position: "top-right",
      withCloseButton: true,
    });
    mutateAsync(student);
  };
  return (
    <Paper
      className="md:w-[400px] w-[90%]"
      shadow="md"
      radius="md"
      pos="relative"
      p="lg"
      withBorder
      {...props}
    >
      <LoadingOverlay
        visible={isPending}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
      />

      <Text size="lg" py="10" className="text-center" fw={500}>
        IT-Khiva O'quv kurslariga yozilish
      </Text>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <TextInput
            label="Ismingizni kiriting!"
            placeholder="Hikmat "
            value={form.values.full_name}
            size="sm"
            onChange={(event) =>
              form.setFieldValue("full_name", event.currentTarget.value.trim())
            }
            error={form.errors.full_name && "Ism bo'lishi shart"}
            radius="md"
          />
          <InputMask
            mask="+99 (8__) ___-__-__"
            replacement={{ _: /\d/ }}
            autoComplete="off"
            placeholder="+99 (8__) ___-__-__"
            label="Telefon raqamingizni kiriting!"
            component={TextInput}
            error={form.errors.phone && "Raqam kiriting!"}
            value={form.values.phone}
            onChange={(event) => {
              form.setFieldValue("phone", event.target.value);
            }}
          />
          <Select
            disabled={isLoading}
            label="Kurs turini tanlang"
            onChange={(event) => form.setFieldValue("course_id", event || "")}
            value={form.values.course_id}
            error={form.errors.course_id}
            data={courses}
          />
          <Select
            label="Qaysi vaqt siz uchun qulay"
            value={form.values.course_time}
            onChange={(event) => form.setFieldValue("course_time", event || "")}
            error={form.errors.course_time}
            data={course_times}
          />
        </Stack>
        <Button
          disabled={isPending}
          aria-label="login admin page"
          aria-labelledby="login button"
          size="sm"
          mt="15"
          color="green"
          type="submit"
          radius="sm"
        >
          Kursga yozilish
        </Button>
      </form>
    </Paper>
  );
};
export default AddNewStudent;
