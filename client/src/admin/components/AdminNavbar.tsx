import { NavLink as ManTineLink, Text } from "@mantine/core";
import { Divider, Group } from "@mantine/core";
import {
  BookOpenText,
  CircleUser,
  House,
  Mails,
  Newspaper,
  User,
  Users,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import CreateGroup from "./group/CreateGroup";
const AdminNavbar = () => {
  return (
    <div className="flex flex-col admin-navbar">
      <Group align="center" gap="5" className="pt-5 pb-3">
        <h3 className="text-xl px-4 ">Boshqaruv Paneli</h3>
        <CircleUser />
      </Group>
      <Divider />
      <NavLink
        className="w-full py-2 px-4 flex items-center gap-2  text-lg"
        to="/admin/main"
      >
        <House />
        Bosh sahifa
      </NavLink>
      <ManTineLink
        label="Guruhlar"
        className="nav-link"
        leftSection={<Users />}
      >
        <NavLink
          to="/admin/group"
          className="w-full bg-none hover:bg-none flex items-center gap-2  text-lg"
        >
          Barcha Guruhlar
        </NavLink>
        <Text size="lg" py="8" className="w-full cursor-pointer hovered">
          <CreateGroup />
        </Text>
      </ManTineLink>
      <NavLink
        className="w-full py-2 px-4 flex items-center gap-2  text-lg"
        to="/admin/news"
      >
        <Newspaper />
        Yangiliklar
      </NavLink>
      <NavLink
        className="w-full py-2 px-4 flex items-center gap-2  text-lg"
        to="/admin/course"
      >
        <BookOpenText />
        Kurslar
      </NavLink>
      <NavLink
        className="w-full py-2 px-4 flex items-center gap-2  text-lg"
        to="/admin/teachers"
      >
        <User />
        O'qituvchilar
      </NavLink>
      <NavLink
        className="w-full py-2 px-4 flex items-center gap-2  text-lg"
        to="/admin/messages"
      >
        <Mails />
        Xabarlar
      </NavLink>
    </div>
  );
};

export default AdminNavbar;
