import AddUser from "@/components/icons/AddUser";
import Users from "@/components/icons/Users";
import { Button } from "@nextui-org/button";
import { IconEdit } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
const GroupCard = () => {
  return (
    <div className="border border-gray-500 w-[300px] p-5 overflow-hidden rounded-md relative">
      <h2 className="text-xl">Kompyuter Savodxonligi</h2>
      <div className="flex items-center gap-2">
        <div className="flex gap-2">
          <Users />
          <p className="text-xl">10</p>
        </div>
        <Button radius="sm" type="button">
          <AddUser />
          <Link href={`group/1`} className="text-xs">
            O`quvchi qo`shish
          </Link>
        </Button>
      </div>
      <div className="flex mt-5 items-center gap-2">
        <span className="bg-slate-700 p-2 rounded-md inline-block cursor-pointer text-sm transition-all duration-300">
          15/05/2024
        </span>
        <Button radius="sm" color="secondary" type="button">
          <IconEdit />
          <span className="text-xs">O`zgartirish</span>
        </Button>
      </div>
    </div>
  );
};
export default GroupCard;
