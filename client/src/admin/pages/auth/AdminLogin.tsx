import {
  Button,
  Paper,
  PaperProps,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Group,
  ActionIcon,
  Tooltip,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import ThemeControl from "../../components/ThemeControl";
import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
const AdminLogin = (props: PaperProps) => {
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });
  return (
    <section className="w-screen h-screen flex justify-center items-center">
      <Paper
        className="w-[400px]"
        shadow="md"
        radius="md"
        p="lg"
        withBorder
        {...props}
      >
        <Text size="xl" py="10" className="text-center" fw={500}>
          Welcome to Admin Page
        </Text>
        <Group py={5} justify="center">
          <ActionIcon
            onClick={() => navigate(-1)}
            variant="default"
            size="lg"
            aria-label="move left"
          >
            <Tooltip label="Orqaga qaytish" position="top">
              <MoveLeft />
            </Tooltip>
          </ActionIcon>
          <ThemeControl />
        </Group>
        <form onSubmit={form.onSubmit(() => {})}>
          <Stack>
            <TextInput
              required
              label="Email"
              placeholder="hello@mantine.dev"
              value={form.values.email}
              size="md"
              onChange={(event) =>
                form.setFieldValue("email", event.currentTarget.value)
              }
              error={form.errors.email && "Invalid email"}
              radius="md"
            />

            <PasswordInput
              required
              size="md"
              label="Password"
              placeholder="Your password"
              value={form.values.password}
              onChange={(event) =>
                form.setFieldValue("password", event.currentTarget.value)
              }
              error={
                form.errors.password &&
                "Password should include at least 6 characters"
              }
              radius="md"
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
            Kirish
          </Button>
        </form>
      </Paper>
    </section>
  );
};
export default AdminLogin;
