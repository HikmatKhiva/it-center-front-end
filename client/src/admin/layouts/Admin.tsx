import { Outlet } from "react-router-dom";
import { AppShell, Burger, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ThemeControl from "../../components/ThemeControl";
import AdminNavbar from "../components/AdminNavbar";
import LogoSVG from "../../motions_components/LogoSVG";
import AdminConfigure from "../components/admin/AdminConfigure";
const Admin = () => {
  const [opened, { toggle, close }] = useDisclosure();
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
            <AdminConfigure />
            <ThemeControl />
          </div>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar className="transition-all duration-300 " h="100vh">
        <AdminNavbar close={close} />
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};
export default Admin;
