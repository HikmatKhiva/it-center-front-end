import { Button, FileButton, Group, Modal, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Check, ReceiptText, Wallet, X } from "lucide-react";
import { uploadPayment } from "../../api/api.student";
import { createPaymentValidation } from "../../../validation";
import { useRef } from "react";
import { notifications } from "@mantine/notifications";
import { useAppSelector } from "../../../hooks/redux";

const UploadPayment = ({ data }: { data: INewPayment }) => {
  const { admin } = useAppSelector((state) => state.admin);
  const [opened, { open, close }] = useDisclosure(false);
  const id = useRef<string | undefined>(undefined);
  const client = useQueryClient();
  const form = useForm({
    initialValues: {
      amount: data.amount,
      student_id: data.student_id,
      group_id: data.group_id,
    },
    validate: createPaymentValidation,
  });
  const { mutateAsync, isPending } = useMutation({
    mutationFn:(data: INewPayment)=> uploadPayment(data,admin?.token || ""),
    mutationKey: ["payments"],
    onSuccess() {
      client.invalidateQueries({ queryKey: ["payments", data?.student_id] });
      close();
      form.reset();
      notifications.update({
        id: id.current,
        title: "To'lov o'tkazish.",
        message: "Muoffaqiyatli bajarildi.",
        color: "white",
        autoClose: 3000,
        position: "top-right",
        icon: <Check color="green" />,
      });
    },
    onError: (error) => {
      notifications.update({
        id: id.current,
        title: "To'lov yuklashda xato bo'ldi.",
        message: error?.message,
        color: "red",
        autoClose: 3000,
        position: "top-right",
        icon: <X color="white" />,
      });
    },
  });
  const handleSubmit = (data: INewPayment) => {
    id.current = notifications.show({
      loading: isPending,
      title: "To'lov yuklanyapti.",
      message: "Iltimos ma'lumot o'chirilguncha kutib turing!",
      color: "blue",
      position: "top-right",
      withCloseButton: true,
    });
    mutateAsync(data);
  };
  return (
    <>
      <Button type="button" size="xs" onClick={open}>
        <Wallet size={16} />
      </Button>
      <Modal opened={opened} onClose={close} title="To'lovlarni kiritish!">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Group align="end">
            <TextInput
              className="flex-grow"
              placeholder="10000"
              label="Summani Kiriting!"
              value={form.values.amount}
              error={form.errors.amount}
              onChange={(event) => {
                const value = event.target.value;
                if (/^\d*$/.test(value)) {
                  form.setFieldValue("amount", +value);
                }
              }}
            />
            {/* <FileButton onChange={() => {}} accept="image/png,image/jpeg">
              {(props) => (
                <Button {...props}>
                  <ReceiptText />
                </Button>
              )}
            </FileButton> */}
          </Group>
          <Button
            aria-labelledby="upload payment button"
            aria-label="upload payment button"
            size="sm"
            color="green"
            radius="md"
            loading={isPending}
            disabled={isPending}
            type="submit"
            mt={10}
          >
            Saqlash
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default UploadPayment;
