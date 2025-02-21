import { Avatar, Divider, Group } from "@mantine/core";
import {
  BookOpenText,
  House,
  Mails,
  Newspaper,
  User,
  UserRoundPlus,
  Users,
} from "lucide-react";
import { NavLink } from "react-router-dom";
// import { useAppSelector } from "../../hooks/redux";
// import { CoolMode } from "../../animation/cool-mode";
// import AdminConfigure from "./admin/AdminConfigure";
const AdminNavbar = ({ close }: { close: () => void }) => {
  // const { admin } = useAppSelector((state) => state.admin);
  return (
    <div className="flex flex-col admin-navbar">
      <Group align="center" gap="5" className="pt-5 pb-3">
        <h3 className="text-xl px-4 ">Boshqaruv Paneli </h3>
        {/* <CoolMode>
        <AdminConfigure />
        </CoolMode> */}
          {/* <Avatar src={admin?.photo_url} alt={`${admin?.username} photo`} /> */}
      </Group>
      <Divider />
      <NavLink
        onClick={close}
        className="w-full py-2 px-4 flex items-center gap-2  text-lg"
        to="/admin/main"
      >
        <House />
        Bosh sahifa
      </NavLink>
      <NavLink
        onClick={close}
        className="w-full py-2 px-4 flex items-center gap-2  text-lg"
        to="/admin/group"
      >
        <Users />
        Guruhlar
      </NavLink>

      <NavLink
        onClick={close}
        className="w-full py-2 px-4 flex items-center gap-2  text-lg"
        to="/admin/news"
      >
        <Newspaper />
        Yangiliklar
      </NavLink>
      <NavLink
        onClick={close}
        className="w-full py-2 px-4 flex items-center gap-2  text-lg"
        to="/admin/course"
      >
        <BookOpenText />
        Kurslar
      </NavLink>
      <NavLink
        onClick={close}
        className="w-full py-2 px-4 flex items-center gap-2  text-lg"
        to="/admin/teachers"
      >
        <User />
        O'qituvchilar
      </NavLink>
      <NavLink
        onClick={close}
        className="w-full py-2 px-4 flex items-center gap-2  text-lg"
        to="/admin/messages"
      >
        <Mails />
        Xabarlar
      </NavLink>
      <NavLink
        onClick={close}
        className="w-full py-2 px-4 flex items-center gap-2  text-lg"
        to="/admin/students"
      >
        <UserRoundPlus />
        Yangi o'quvchilar
      </NavLink>
    </div>
  );
};
export default AdminNavbar;
