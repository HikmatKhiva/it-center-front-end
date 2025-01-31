import { Outlet, useNavigate } from "react-router-dom";
import { ActionIcon, AppShell, Burger, Group, Menu } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ThemeControl from "../../components/ThemeControl";
import { Avatar } from "@mantine/core";
import AdminNavbar from "../components/AdminNavbar";
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
            <ActionIcon
              variant="default"
              size="md"
              aria-label="menu-bars"
              hiddenFrom="sm"
            >
              <Burger
                opened={opened}
                onClick={toggle}
                size="sm"
                hiddenFrom="sm"
              />
            </ActionIcon>
            <h2>Logo</h2>
          </div>
          <div className="flex items-center gap-4">
            <ThemeControl />
            <Menu>
              <Menu.Target>
                <Avatar radius="md" />
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
