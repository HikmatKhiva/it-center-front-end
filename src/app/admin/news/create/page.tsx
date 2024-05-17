import React from "react";
import BackButton from "../../components/BackButton";
import { Input } from "@/components/ui/input";
const AdminNewsCreatePage = () => {
  return (
    <div>
      <BackButton />
      <h2 className="text-2xl text-center">Yangilik Yaratish</h2>
      <form className="w-1/2 mx-auto mt-5 flex flex-col gap-3">
        <Input className="dark:bg-background/70" placeholder="Yangilik sarlavhasini kiriting" />
        <Input className="dark:bg-background/70" placeholder="Yangilik uchun qiqa ma'lumot kiriting" />
      </form>
    </div>
  );
};
export default AdminNewsCreatePage;
