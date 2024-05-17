import { Input } from "@/components/ui/input";
import { Button } from "@nextui-org/button";
import React from "react";
const SearchGroupForm = () => {
  return (
    <form className="w-1/2 flex gap-2 ml-auto justify-end">
      <Input type="search" placeholder="Guruh qidirish" autoComplete="off" />
      <Button color="primary" radius="sm">
        Qidirish
      </Button>
    </form>
  );
};

export default SearchGroupForm;
