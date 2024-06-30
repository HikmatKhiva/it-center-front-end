"use client";
import { Avatar } from "@nextui-org/avatar";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import Link from "next/link";
const AdminUser = () => {
  return (
    <div className="self-center">
      <Dropdown>
        <DropdownTrigger>
          <Avatar name="Admin" />
        </DropdownTrigger>
        <DropdownMenu aria-label="admin avatar menu">
          <DropdownItem>
            <Link href="/">Foydalanuchilar sahifasi</Link>
          </DropdownItem>
          <DropdownItem>Logout</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default AdminUser;
