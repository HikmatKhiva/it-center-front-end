import {
  Modal,
  Avatar,
  Tabs,
  FloatingIndicator,
  Group,
  FileButton,
  Button,
  ActionIcon,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { MutableRefObject, useRef, useState } from "react";
import classes from "./tabs.module.css";
import AdminProfilePreview from "./AdminProfilePreview";
import AdminProfileUpdate from "./AdminProfileUpdate";
import { Check, X } from "lucide-react";
import { updateProfilePicture } from "../../../lib/redux/reducer/admin";
import { useMutation } from "@tanstack/react-query";
import { uploadImage } from "../../api/api.admin";
import { notifications } from "@mantine/notifications";
const AdminConfigure = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const { admin } = useAppSelector((state) => state.admin);
  const idNotification: MutableRefObject<string | undefined> = useRef();
  const dispatch = useAppDispatch();
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [value, setValue] = useState<string | null>("1");
  const [file, setFile] = useState<File | null>();
  const [controlsRefs, setControlsRefs] = useState<
    Record<string, HTMLButtonElement | null>
  >({});
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: FormData) => uploadImage(data, admin?.token || ""),
    onSuccess: (response) => {
      notifications.update({
        id: idNotification.current,
        title: "Surat muoffaqiyatli saqlandi.",
        message: response?.message,
        color: "white",
        autoClose: 3000,
        position: "top-right",
        icon: <Check color="#93CE03" />,
      });
      dispatch(updateProfilePicture(response.photo_url));
      setFile(null);
    },
    onError: (error) => {
      notifications.update({
        id: idNotification.current,
        title: "Surat saqlanishda xato bo'ldi.",
        message: error?.message,
        color: "red",
        autoClose: 3000,
        position: "top-right",
        icon: <X color="white" />,
      });
    },
  });
  const setControlRef = (val: string) => (node: HTMLButtonElement) => {
    controlsRefs[val] = node;
    setControlsRefs(controlsRefs);
  };
  const clearFile = () => setFile(null);
  const handleSaveImage = async () => {
    idNotification.current = notifications.show({
      loading: isPending,
      title: "Surat saqlanyapti",
      message: "Iltimos surat saqlanguncha kutib turing!",
      color: "blue",
      position: "top-right",
      withCloseButton: true,
    });
    if (file) {
      const form = new FormData();
      form.append("image", file);
      form.append("email", admin?.email || "");
      mutateAsync(form);
    }
  };
  return (
    <>
      <ActionIcon
        onClick={open}
        variant="default"
        size="lg"
        aria-label="Toggle open modal admin"
      >
        <Avatar size={28} src={admin?.photo_url} alt={admin?.username} />
      </ActionIcon>
      <Modal
        aria-label="Admin update"
        aria-labelledby="Admin update"
        opened={opened}
        onClose={close}
      >
        <Group justify="center" mb={10}>
          <FileButton onChange={setFile} accept="image/png,image/jpeg">
            {(props) => (
              <Avatar
                {...props}
                size={60}
                src={file ? URL.createObjectURL(file) : admin?.photo_url}
                alt={admin?.username}
              />
            )}
          </FileButton>
        </Group>
        <Group hidden={!file} justify="center" gap="1" mb="10">
          <Button
            onClick={handleSaveImage}
            disabled={isPending}
            loading={isPending}
            size="xs"
            color="green"
            variant="outline"
          >
            <Check size="16" />
          </Button>
          <Button
            disabled={isPending}
            onClick={clearFile}
            size="xs"
            color="red"
            variant="outline"
          >
            <X size="16" />
          </Button>
        </Group>
        <Tabs variant="none" value={value} onChange={setValue}>
          <Tabs.List ref={setRootRef} className={classes.list}>
            <Tabs.Tab
              value="1"
              ref={setControlRef("1")}
              className={classes.tab}
            >
              Hisob
            </Tabs.Tab>
            <Tabs.Tab
              value="2"
              ref={setControlRef("2")}
              className={classes.tab}
            >
              Yangilash
            </Tabs.Tab>
            <FloatingIndicator
              target={value ? controlsRefs[value] : null}
              parent={rootRef}
              className={classes.indicator}
            />
          </Tabs.List>

          <Tabs.Panel value="1">
            <AdminProfilePreview />
          </Tabs.Panel>
          <Tabs.Panel value="2">
            <AdminProfileUpdate />
          </Tabs.Panel>
        </Tabs>
      </Modal>
    </>
  );
};
export default AdminConfigure;
