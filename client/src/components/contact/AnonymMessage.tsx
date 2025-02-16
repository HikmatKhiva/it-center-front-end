import {
  Button,
  LoadingOverlay,
  Paper,
  PaperProps,
  Stack,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { anonymMessageValidation } from "../../validation";
import { useMutation } from "@tanstack/react-query";
import { anonymMessage } from "../../api/api.newStudent";
import { notifications } from "@mantine/notifications";
import { Check, X } from "lucide-react";
import { useRef } from "react";
const AnonymMessage = (props: PaperProps) => {
  const id = useRef<string | undefined>(undefined);
  const { mutateAsync, isPending } = useMutation({
    mutationFn: anonymMessage,
    mutationKey: ["anonym", "message"],
    onSuccess: () => {
      notifications.update({
        id: id.current,
        loading: false,
        title: "Ma'lumotlar yuklandi.",
        message: "Sizning xabaringizni o'rganib chiqamiz!",
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
        loading: false,
        title: "Ma'lumotlar yuklanishda xato bo'ldi.",
        message: "Iltimos ma'lumot tekshirib qayta yuklang!",
        color: "red",
        autoClose: 3000,
        position: "top-right",
        icon: <X color="white" />,
      });
    },
  });
  const form = useForm({
    initialValues: {
      full_name: "",
      message: "",
    } as IAnonymMessage,
    validate: anonymMessageValidation,
  });
  const handleSubmit = (student: IAnonymMessage) => {
    id.current = notifications.show({
      loading: true,
      title: "Ma'lumotlar yuklanyapti.",
      message: "Iltimos ma'lumot yuklanguncha kutib turing!",
      color: "blue",
      position: "top-right",
      withCloseButton: true,
    });
    mutateAsync(student);
  };
  return (
    <>
      <Paper
        className="md:w-[400px] w-full"
        shadow="md"
        radius="md"
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
          Shikoyat yoki taklif qoldiring.
        </Text>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack>
            <TextInput
              label="Ismini kiriting!"
              placeholder="Hikmat Front End ustoz"
              value={form.values.full_name}
              size="sm"
              onChange={(event) =>
                form.setFieldValue(
                  "full_name",
                  event.currentTarget.value.trim()
                )
              }
              error={form.errors.full_name}
              radius="md"
            />
            <Textarea
              value={form.values.message}
              onChange={(event) =>
                form.setFieldValue("message", event.currentTarget.value.trim())
              }
              error={form.errors.message}
              label="Shikoyat xabaringizni yozing!"
              size="sm"
              placeholder="Shikoyat yoki taklif xabarini kiriting..."
              rows={5}
            />
          </Stack>
          <Button
            disabled={isPending}
            aria-label="login admin page"
            aria-labelledby="login button"
            size="sm"
            fz="sm"
            mt="15"
            color="green"
            type="submit"
            radius="sm"
          >
            Xabarni yuborish
          </Button>
        </form>
      </Paper>
    </>
  );
};
export default AnonymMessage;