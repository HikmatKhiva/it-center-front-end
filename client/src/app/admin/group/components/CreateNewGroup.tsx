"use client";
import { HoverBorder } from "@/components/ui/hoverBorder";
import { Input } from "@/components/ui/input";
import { courses } from "@/data";
import { Button } from "@nextui-org/button";
import { DatePicker } from "@nextui-org/date-picker";
import { Select, SelectItem } from "@nextui-org/select";
import React from "react";
const CreateNewGroup = () => {
  return (
    <>
      <h2 className="text-2xl text-center">Yangi Guruh yaratish</h2>
      <form className="w-full px-5 pt-5 mx-auto flex flex-col ">
        <Input placeholder="Yangi guruh nomi" />
        <HoverBorder>
          <Select
            items={courses}
            placeholder="Kursni tanlash "
            aria-label="courses"
            aria-labelledby="courses"
            labelPlacement="outside"
            classNames={{
              label: "dark:bg-background/90  ",
              trigger: "dark:bg-background/90",
              listboxWrapper: "dark:bg-background/90 ",
              listbox: "dark:bg-background/90 p-0 shadow-md ",
              popoverContent: "dark:bg-background/90 ",
            }}
            className="w-full border rounded-md dark:border-none dark:bg-background/70"
          >
            {(item) => (
              <SelectItem
                aria-label={item.name}
                aria-labelledby=""
                key={item.id}
                textValue={item.name}
              >
                <div className="flex gap-2 items-center">
                  <div className="flex flex-col">
                    <span className="text-small">{item.name}</span>
                    <span className="text-tiny text-default-400">
                      {item.value}
                    </span>
                  </div>
                </div>
              </SelectItem>
            )}
          </Select>
        </HoverBorder>
        <HoverBorder>
          <DatePicker
            classNames={{
              innerWrapper: "border-none focus-visible:border-none",
              helperWrapper: "border-none focus-visible:border-none",
            }}
            variant="bordered"
          />
        </HoverBorder>
        <Button radius="sm" color="success" className="mt-2 text-white">Yaratish</Button>
      </form>
    </>
  );
};
export default CreateNewGroup;