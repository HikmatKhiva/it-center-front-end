import { ActionIcon, AppShell } from "@mantine/core";
import { Link, NavLink } from "react-router-dom";
import { Burger, Container, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import headers from "./header.module.css";
import ITKhiva from "../assets/IT_Khiva2.svg";
import ThemeControl from "../components/ThemeControl";
import { navLinks } from "../config";
const Header = () => {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      className="position-sticky top-0 z-50"
    >
      <AppShell.Header>
        <Container size="xl" p="0" className="h-full">
          <Group h="100%" px="md">
            <Link to="/">
              <img src={ITKhiva} width="120" alt="brand" />
            </Link>
            <Group justify="center" align="center" style={{ flex: 1 }}>
              <Group
                className="-translate-x-1/2"
                pos="fixed"
                left="50%"
                ml="xl"
                gap={20}
                visibleFrom="sm"
              >
                {navLinks?.map((link: ILinks) => (
                  <NavLink key={link.id} to={link.link}>
                    {link.label}
                  </NavLink>
                ))}
              </Group>
            </Group>
            <ThemeControl />
            <ActionIcon
              onClick={toggle}
              variant="default"
              size="lg"
              aria-label="menu-bars"
              aria-labelledby="menu-bars"
              className={headers.bars}
            >
              <span>
                <Burger
                  aria-label="burger button"
                  aria-labelledby="burger button"
                  opened={opened}
                  hiddenFrom="sm"
                  size="sm"
                />
              </span>
            </ActionIcon>
          </Group>
        </Container>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        {navLinks?.map((link: ILinks) => (
          <NavLink className="p-2" key={link.id} to={link.link}>
            {link.label}
          </NavLink>
        ))}
      </AppShell.Navbar>
    </AppShell>
  );
};
export default Header;
