"use client";
import React from "react";
import SearchGroupForm from "./components/SearchGroupForm";
import { Button } from "@nextui-org/button";
import Users from "@/components/icons/Users";
import AddUser from "@/components/icons/AddUser";
import { Modal, ModalContent, useDisclosure } from "@nextui-org/modal";
import { IconEdit } from "@tabler/icons-react";
import CreateNewGroup from "./components/CreateNewGroup";
import GroupCard from "./components/GroupCard";
const AdminGroupPage = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div>
      <div className="flex justify-between">
        <Button
          onClick={onOpen}
          radius="sm"
          color="success"
          type="button"
          className="text-white"
        >
          Yangi Guruh yaratish
        </Button>
        <SearchGroupForm />
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="py-5 min-w-[600px]">
          <CreateNewGroup />
        </ModalContent>
      </Modal>
      <div className="flex gap-5 flex-wrap mt-5">
        <GroupCard />
        <GroupCard />
        <GroupCard />
      </div>
    </div>
  );
};
export default AdminGroupPage;
