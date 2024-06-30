"use client"
import Back from "@/components/icons/Back";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import React from "react";
const BackButton = () => {
  const { back } = useRouter();
  return (
    <Button onClick={back} className="font-medium" color="danger" radius="sm">
      <Back />
      Orqaga
    </Button>
  );
};

export default BackButton;
