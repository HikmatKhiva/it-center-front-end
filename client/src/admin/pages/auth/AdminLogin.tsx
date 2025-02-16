import {
  Button,
  Paper,
  PaperProps,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Group,
  Image,
  Stepper,
  PinInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import ThemeControl from "../../../components/ThemeControl";
import { Link, useNavigate } from "react-router-dom";
import { Manager } from "../../../assets";
import { adminValidation, tokenValidation } from "../../../validation";
import { MutableRefObject, useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { adminLogin, adminVerify } from "../../api/api.admin";
import { notifications } from "@mantine/notifications";
import { Check, X } from "lucide-react";
import { useAppDispatch } from "../../../hooks/redux";
import { login } from "../../../lib/redux/reducer/admin";
const AdminLogin = (props: PaperProps) => {
  const id: MutableRefObject<string | undefined> = useRef();
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const nextStep = () =>
    setActive((current) => (current < 2 ? current + 1 : current));
  // const prevStep = () =>
  //   setActive((current) => (current > 0 ? current - 1 : current));
  const loginMutation = useMutation({
    mutationFn: adminLogin,
    mutationKey: ["admin", "login"],
    onSuccess: (success) => {
      if (success.nextStep) {
        notifications.update({
          id: id.current,
          title: "Birinchi tekshiruvdan muoffaqiyatli o'tdingiz.",
          message: success?.message,
          color: "white",
          autoClose: 4000,
          position: "top-right",
          icon: <Check color="#93CE03" />,
        });
        nextStep();
      }
    },
    onError: (error) => {
      notifications.update({
        id: id.current,
        title: "Admin sahifaga kirishda muamo bo'ldi.",
        message: error?.message,
        color: "red",
        autoClose: 3000,
        position: "top-right",
        icon: <X color="white" />,
      });
    },
  });
  const verifyMutation = useMutation({
    mutationFn: adminVerify,
    mutationKey: ["admin", "verify"],
    onSuccess: (success) => {
      notifications.update({
        id: id.current,
        title: "Boshqaruv paneliga xush keldingiz.",
        message: success?.message,
        color: "white",
        autoClose: 4000,
        position: "top-right",
        icon: <Check color="#93CE03" />,
      });
      dispatch(login(success.admin));
      navigate("/admin");
    },
    onError: (error) => {
      notifications.update({
        id: id.current,
        title: "Admin sahifaga kirishda muamo bo'ldi.",
        message: error?.message,
        color: "red",
        autoClose: 3000,
        position: "top-right",
        icon: <X color="white" />,
      });
    },
  });

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    } as IAdminLogin,
    validate: adminValidation,
  });
  const form2FA = useForm({
    initialValues: {
      token: "",
    } as I2FAData,
    validate: tokenValidation,
  });
  const handleSubmit = async (data: IAdminLogin) => {
    id.current = notifications.show({
      loading: loginMutation.isPending,
      title: "Ma'lumotlar tekshirilyapti.",
      message: "Iltimos kutib turing!",
      color: "blue",
      position: "top-right",
      withCloseButton: true,
    });
    await loginMutation.mutateAsync(data);
  };

  const handleSubmit2FA = async (data: I2FAData) => {
    id.current = notifications.show({
      loading: loginMutation.isPending,
      title: "Ma'lumotlar tekshirilyapti.",
      message: "Iltimos kutib turing!",
      color: "blue",
      position: "top-right",
      withCloseButton: true,
    });
    await verifyMutation.mutateAsync({ email: form.values.email, ...data });
  };
  return (
    <section className="w-screen h-screen flex-col flex justify-center items-center">
      <Paper
        className="w-[400px]"
        shadow="md"
        radius="md"
        p="lg"
        withBorder
        {...props}
      >
        <Image w={50} m="0 auto" src={Manager} />
        <Text size="xl" py="10" className="text-center" fw={500}>
          Welcome to Admin Page
        </Text>
        <Group justify="center">
          <ThemeControl />
        </Group>
        <Stepper
          active={active}
          onStepClick={setActive}
          allowNextStepsSelect={false}
          color="green"
        >
          <Stepper.Step>
            <form onSubmit={form.onSubmit(handleSubmit)}>
              <Stack>
                <TextInput
                  label="Email"
                  placeholder="admin@it-khiva.uz"
                  value={form.values.email}
                  size="md"
                  onChange={(event) =>
                    form.setFieldValue("email", event.currentTarget.value)
                  }
                  error={form.errors.email}
                  radius="md"
                />
                <PasswordInput
                  size="md"
                  label="Password"
                  placeholder="Your password"
                  value={form.values.password}
                  onChange={(event) =>
                    form.setFieldValue("password", event.currentTarget.value)
                  }
                  error={form.errors.password}
                  radius="md"
                />
              </Stack>
              <Button
                loading={loginMutation.isPending}
                disabled={loginMutation.isPending}
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
          </Stepper.Step>
          <Stepper.Step>
            <form onSubmit={form2FA.onSubmit(handleSubmit2FA)}>
              <Stack justify="center" pb="10">
                <Text fz={{ sm: "md", md: "xl" }} ta="center">
                  Authenticator codeni kiriting.
                </Text>
                <PinInput
                  color="green"
                  type="number"
                  error={!!form2FA.errors.token}
                  oneTimeCode
                  onChange={(value) => {
                    form2FA.setValues({ token: value });
                  }}
                  length={6}
                  m="0 auto"
                />
                <Button
                  loading={verifyMutation.isPending}
                  aria-label="login admin page"
                  aria-labelledby="login button"
                  size="sm"
                  disabled={!!form2FA.errors.token || verifyMutation.isPending}
                  m="15px auto 10px"
                  color="green"
                  type="submit"
                  radius="md"
                >
                  Tasdiqlash
                </Button>
              </Stack>
            </form>
          </Stepper.Step>
        </Stepper>
      </Paper>
      <Link className="mt-5 underline pb-1" to="/">
        Back to main page...
      </Link>
    </section>
  );
};
export default AdminLogin;
