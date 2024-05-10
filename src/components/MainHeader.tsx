import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import Link from "next/link";
import { navLinks } from "@/constant";
const MainHeader = () => {
  return (
    <Navbar isBordered>
      <NavbarContent className="sm:hidden">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarMenu>
          {navLinks.map((link, index) => (
            <NavbarMenuItem key={`${link.id}-${index}`}>
              <Link href={link.path}> {link.title}</Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="sm:flex hidden" justify="end">
        {navLinks.map((link, index) => (
          <NavbarItem key={`${link.id}-${index}`}>
            <Link href={link.path}> {link.title}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
};
export default MainHeader;