import { Avatar, Card, Group, Text } from "@mantine/core";
import MessageDeleteModal from "./MessageDeleteModal";
const MessageCard = ({ message }: { message: IMessage }) => {
  return (
    <Card pos="relative" shadow="lg">
      <MessageDeleteModal id={message.id} />
      <Group>
        <Avatar />
        <Text>{message.created_at}</Text>
      </Group>
      <Card.Section p={10} pb={30}>
        <Text>{message.full_name}</Text>
        <Text>{message.message}</Text>
      </Card.Section>
    </Card>
  );
};

export default MessageCard;
