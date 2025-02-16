import { useDisclosure } from "@mantine/hooks";
import { Button, Group, Modal, Text } from "@mantine/core";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { generateGroupCertificate } from "../../api/api.group";
import { Check, X } from "lucide-react";
import confetti from "canvas-confetti";
import { useAppSelector } from "../../../hooks/redux";
import { MutableRefObject, useRef } from "react";
import { notifications } from "@mantine/notifications";
const FinishGroupModal = ({ id }: { id: string }) => {
  const idNotification: MutableRefObject<string | undefined> = useRef();
  const { admin } = useAppSelector((state) => state.admin);
  const [opened, { open, close }] = useDisclosure(false);
  const client = useQueryClient();
  const frame = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;
    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };
  const { mutateAsync, isPending } = useMutation({
    mutationFn: () => generateGroupCertificate(id, admin?.token || ""),
    onSuccess(response) {
      client.invalidateQueries({ queryKey: ["students", id] });
      frame();
      notifications.update({
        id: idNotification.current,
        title: "Certificatelar muoffaqriyatli yaratildi.",
        message: response?.message,
        color: "white",
        autoClose: 3000,
        position: "top-right",
        icon: <Check color="#93CE03" />,
      });
      close();
    },
    onError: (error) => {
      notifications.update({
        id: idNotification.current,
        title: "Certificate yaratishda xato bo'ldi.",
        message: error?.message,
        color: "red",
        autoClose: 3000,
        position: "top-right",
        icon: <X color="white" />,
      });
      close();
    },
  });
  const handleSubmit = async () => {
    idNotification.current = notifications.show({
      loading: isPending,
      title: "Ma'lumotlar uzatilyapti.",
      message: "Iltimos ma'lumot o'uzatilguncha kutib turing!",
      color: "blue",
      position: "top-right",
      withCloseButton: true,
    });
    await mutateAsync();
  };
  return (
    <>
      <Button
        onClick={open}
        aria-label="finish group button"
        aria-labelledby="finish group button"
        color="green"
        variant="outline"
        fz={"xs"}
        rightSection={<Check size={16} />}
      >
        Guruhni yakunlash
      </Button>
      <Modal centered opened={opened} onClose={close} title="Guruhni yakunlash">
        <Text size="md" className="text-center">
          Siz ushbu guruhni yakunlashni xohlaysizmi?
        </Text>
        <Group mt={20} justify="end" gap="10">
          <Button loading={isPending} color="green" onClick={handleSubmit}>
            Ha
          </Button>
          <Button color="red" variant="outline" onClick={close}>
            Yo'q
          </Button>
        </Group>
      </Modal>
    </>
  );
};
export default FinishGroupModal;
