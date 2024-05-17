import React from "react";
import SearchGroupForm from "./components/SearchGroupForm";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import Users from "@/components/icons/Users";
import AddUser from "@/components/icons/AddUser";
const AdminGroupPage = () => {
  return (
    <div>
      <div className="flex justify-between">
        <Button radius="sm" color="success" className="text-white">
          <Link href="/admin/group/new">Yangi Guruh yaratish</Link>
        </Button>
        <SearchGroupForm />
      </div>
      {/* <div className="flex mt-5">
        <div className="border w-[300px] p-5 overflow-hidden rounded-md relative">
          <h2 className="text-xl">Kompyuter Savodxonligi</h2>
          <div className="flex items-center gap-2">
            <div className="flex gap-2">
              <Users />
              <p className="text-xl">10</p>
            </div>
            <Button >
              <AddUser />
              <span>O`quvchi qo`shish</span>
            </Button>
          </div>
          <span className="bg-slate-700 p-2 rounded-md absolute bottom-2 right-0 translate-x-[70px] hover:translate-x-0 cursor-pointer text-sm transition-all duration-300">
            15/05/2024
          </span>
        </div>
      </div> */}
    </div>
  );
};
export default AdminGroupPage;
