import { Outlet, useNavigate } from "react-router-dom";
import { ActionIcon, AppShell, Burger, Group, Menu } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ThemeControl from "../../components/ThemeControl";
import { motion } from "motion/react";
import { AdminIcon } from "../../assets";
import AdminNavbar from "../components/AdminNavbar";
import LogoSVG from "../../motions_components/LogoSVG";
const Admin = () => {
  const [opened, { toggle }] = useDisclosure();
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: { base: 300 },
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group align="center" justify="space-between" h="100%" px="md">
          <div className="flex items-center gap-4">
            <Burger
              opened={opened}
              onClick={toggle}
              size="sm"
              hiddenFrom="sm"
            />
            <LogoSVG />
          </div>
          <div className="flex items-center gap-4">
            <ThemeControl />
            <Menu>
              <Menu.Target>
                <ActionIcon variant="default" size="lg">
                  <motion.img
                    whileTap={{ scale: [1, 0] }}
                    transition={{ duration: 0.8, type: "spring" }}
                    src={AdminIcon}
                    width={30}
                    className="object-cover"
                    alt="icon theme"
                  />
                </ActionIcon>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item onClick={handleLogout}>Logout</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </div>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar className="transition-all duration-300">
        <AdminNavbar />
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};
export default Admin;
