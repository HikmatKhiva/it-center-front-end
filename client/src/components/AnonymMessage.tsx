import {
  Button,
  Paper,
  PaperProps,
  Stack,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { addNewStudentValidation } from "../validation";
const AnonymMessage = (props: PaperProps) => {
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
    <>
      <Paper
        className="w-[400px]"
        shadow="md"
        radius="md"
        p="lg"
        withBorder
        {...props}
      >
        <Text size="xl" py="10" className="text-center" fw={500}>
          Shikoyat yoki taklif qoldiring.
        </Text>

        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack>
            <TextInput
              required
              label="Ismini kiriting!"
              placeholder="Hikmat Front End ustoz"
              value={form.values.name}
              size="md"
              onChange={(event) =>
                form.setFieldValue("name", event.currentTarget.value.trim())
              }
              error={form.errors.name && "Ism bo'lishi shart"}
              radius="md"
            />
            <Textarea
              label="Shikoyat xabaringizni yozing!"
              placeholder="Shikoyat yoki taklif xabarini kiriting..."
              rows={5}
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
            Xabarni yuborish
          </Button>
        </form>
      </Paper>

    </>
  );
};

export default AnonymMessage;
