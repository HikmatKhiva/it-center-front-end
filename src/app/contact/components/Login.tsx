"use client";
import { Input } from "@/components/ui/input";
import { courses } from "@/data";
import { Select, SelectItem } from "@nextui-org/select";
import { useMemo } from "react";
const Login = () => {
  const memoCourses = useMemo(() => {
    return courses;
  }, []);
  return (
    <div className="w-full flex flex-col items-center">
      <h2>Kursga yozilish</h2>
      <form className="w-[360px] h-[300px] flex flex-col gap-2">
        <Input placeholder="Ismingizni Kiriting" className="" />
        <Input placeholder="Ismingizni Kiriting" className="" />
        <Select
          items={memoCourses}
          placeholder="Select a Course"
          labelPlacement="outside"
          className="w-full"
        >
          {(item) => (
            <SelectItem key={item.id} textValue={item.name}>
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
      </form>
    </div>
  );
};
export default Login;
