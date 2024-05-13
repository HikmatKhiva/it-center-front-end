"use client";
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
// import ThemeMode from "../components/ThemeMode";
import Logo from "../components/icons/Logo";
import { useState } from "react";
const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarContent className="sm:hidden" justify="center">
        <NavbarBrand>
          <Link href="/">
            <Logo />
          </Link>
        </NavbarBrand>
        {/* <ThemeMode /> */}

        <NavbarMenu>
          {navLinks.map((link, index) => (
            <NavbarMenuItem
              onClick={() => setIsMenuOpen(false)}
              key={`${link.id}-${index}`}
            >
              <Link href={link.path}> {link.title}</Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Link href="/">
            <Logo />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="sm:flex hidden" justify="end">
        {navLinks.map((link, index) => (
          <NavbarItem key={`${link.id}-${index}`}>
            <Link href={link.path}> {link.title}</Link>
          </NavbarItem>
        ))}
        {/* <ThemeMode /> */}
      </NavbarContent>
    </Navbar>
  );
};
export default MainHeader;
