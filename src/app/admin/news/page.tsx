import React from "react";
import SearchForm from "./components/SearchForm";
import AdminNewsCard from "./components/AdminNewsCard";
import { Button } from "@nextui-org/button";
import Link from "next/link";
const AdminNews = () => {
  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center">
        <Button color="success" radius="sm" type="button">
          <Link className="text-white" href="/admin/news/create">Yangilik yaratish</Link>
        </Button>
        <SearchForm />
      </div>
      <div className="flex flex-wrap gap-5 mt-5">
        <AdminNewsCard />
        <AdminNewsCard />
        <AdminNewsCard />
        <AdminNewsCard />
      </div>
    </div>
  );
};
export default AdminNews;
