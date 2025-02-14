import {
  ActionIcon,
  Divider,
  Group,
  Image,
  Indicator,
  Modal,
  Table,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Bell, Call, Telegram } from "../../assets";
import { TextAnimate } from "../../animation/text-animation";
const NewOpenedGroup = ({ groupList }: { groupList: IOpenedGroup[] }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const rows = groupList?.map((group: IOpenedGroup) => (
    <Table.Tr key={group.admission_end}>
      <Table.Td>{group.course_name}</Table.Td>
      <Table.Td>{group.group_time}</Table.Td>
      <Table.Td>{group.teacher}</Table.Td>
      <Table.Td>{group.admission_end}</Table.Td>
    </Table.Tr>
  ));
  return (
    <>
      <Modal
        size="lg"
        opened={opened}
        onClose={close}
        title="Yangi Ochilgan Guruhlar 📣"
      >
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Course Nomi</Table.Th>
              <Table.Th>Dars Kunlari</Table.Th>
              <Table.Th>O'qituvchi</Table.Th>
              <Table.Th>Qabul gacha</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
        <Divider my={10} />
        <Text className="text-center" mb="10">
          <TextAnimate animation="slideUp">Qo'shilish uchun aloqa</TextAnimate>
        </Text>
        <Group justify="center" gap="10">
          <ActionIcon
            component="a"
            href="tel:+998912798401"
            size="lg"
            radius="100%"
            variant="default"
          >
            <img src={Call} width={18} alt="call icon" />
          </ActionIcon>
          <ActionIcon
            component="a"
            href="https://t.me/Itparkxiva"
            size="lg"
            radius="100%"
            variant="default"
          >
            <img src={Telegram} width={18} className="" alt="telegram icon" />
          </ActionIcon>
        </Group>
      </Modal>
      <Indicator
        className="notification"
        component={"button"}
        onClick={open}
        processing
        color="#40C057"
      >
        <ActionIcon variant="default" size="lg">
          <Image className="shake" src={Bell} alt="bell 3d" />
        </ActionIcon>
      </Indicator>
    </>
  );
};

export default NewOpenedGroup;
