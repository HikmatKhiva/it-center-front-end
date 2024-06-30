import AddUser from "@/components/icons/AddUser";
import Users from "@/components/icons/Users";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import React from "react";
const AdminGroup = () => {
  const router = useRouter();
  return (
    <div className="border w-[300px] p-5 pt-10 rounded-md relative">
      <h2 className="text-xl">Kompyuter Savodxonligi</h2>
      <div className="flex items-center gap-2">
        <div className="flex flex-col items-center absolute bg-green-500 w-14 h-14 rounded-full -top-5 -right-5 gap-1 p-1">
          <Users />
          <p className="text-sm font-medium">10</p>
        </div>
        <Button
        type="button"
        onClick={()=>router.push('group/1')}
        >
          <AddUser />
          <span>O`quvchi qo`shish</span>
        </Button>
      </div>
      <span className="bg-slate-700 p-2 rounded-md absolute -top-2 left-0  hover:translate-x-0 cursor-pointer text-sm transition-all duration-300">
        15/05/2024
      </span>
    </div>
  );
};
export default AdminGroup;
