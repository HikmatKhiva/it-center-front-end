import {
  Button,
  Paper,
  PaperProps,
  Select,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { InputMask } from "@react-input/mask";
import { useForm } from "@mantine/form";
import { addNewStudentValidation } from "../validation";
const AddNewStudent = (props: PaperProps) => {
  const form = useForm({
    initialValues: {
      name: "",
      phone: "",
      course: "",
      time: "",
    } as INewStudent,
    validate: addNewStudentValidation,
  });
  const handleSubmit = (student: INewStudent) => {
    console.log(student);
  };
  return (
    <Paper
      className="md:w-[400px]"
      shadow="md"
      radius="md"
      p="lg"
      withBorder
      {...props}
    >
      <Text
        size="lg"
        py="10"
        className="text-center"
        fw={500}
      >
        IT-Khiva O'quv kurslariga yozilish
      </Text>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <TextInput
            required
            label="Ismingizni kiriting!"
            placeholder="Hikmat "
            value={form.values.name}
            size="md"
            onChange={(event) =>
              form.setFieldValue("name", event.currentTarget.value.trim())
            }
            error={form.errors.name && "Ism bo'lishi shart"}
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
            label="Kurs turini tanlang"
            onChange={(event) => form.setFieldValue("course", event || "")}
            value={form.values.course}
            error={form.errors.course}
            data={["Front-End", "Backend"]}
          />
          <Select
            label="Qaysi vaqt siz uchun qulay"
            value={form.values.time}
            onChange={(event) => form.setFieldValue("time", event || "")}
            error={form.errors.time}
            data={["Ertalab 9:00", "Tushlikdan keyin 13:00", "Muhim emas"]}
          />
        </Stack>
        <Button
          aria-label="login admin page"
          aria-labelledby="login button"
          size="md"
          mt="15"
          color="green"
          type="submit"
          radius="md"
        >
          Kursga yozilish
        </Button>
      </form>
    </Paper>
  );
};
export default AddNewStudent;
