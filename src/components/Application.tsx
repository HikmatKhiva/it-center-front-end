"use client"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
import { courses } from "@/data";
import { Button } from "@nextui-org/button";
import { Select, SelectItem } from "@nextui-org/select";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { applicationSchema } from "@/utils/validation";
import { z } from "zod";
import { HoverBorder } from "./ui/hoverBorder";
const Application = () => {
  const memoCourses = useMemo(() => {
    return courses;
  }, []);
  const form = useForm<z.infer<typeof applicationSchema>>({
    resolver: zodResolver(applicationSchema),
  });
  const onSubmit = (data: z.infer<typeof applicationSchema>) => {
    console.log(data);
  };
  return (
    <div className="w-full flex flex-col items-center pb-10 ">
      <div className="dark:bg-background/50 backdrop-saturate-150 p-5 w-[300px] mx-auto sm:w-[450px] rounded-lg	">
        <h2 className="md:text-4xl text-2xl mb-3 text-center">
          Kursga yozilish
        </h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" flex flex-col gap-2 w-full md:w-[360px] mx-auto relative z-10"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <HoverBorder>
                      <input
                        onChange={field.onChange}
                        autoComplete="off"
                        name={field.name}
                        ref={field.ref}
                        value={field.value || ""}
                        placeholder="Ismingizni Kiriting"
                        className=" w-full dark:bg-background/70 outline-none focus-visible:border-blue-500 border border-transparent py-2 px-3 rounded"
                      />
                    </HoverBorder>
                  </FormControl>
                  <FormMessage className="text-red-500 text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <HoverBorder>
                      <input
                        onChange={field.onChange}
                        autoComplete="off"
                        name={field.name}
                        ref={field.ref}
                        value={field.value || ""}
                        className=" w-full dark:bg-background/70 outline-none focus-visible:border-blue-500 border border-transparent py-2 px-3 rounded"
                        placeholder="Telefon raqamingizni Kiriting"
                      />
                    </HoverBorder>
                  </FormControl>
                  <FormMessage className="text-red-500 text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="courses"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <HoverBorder>
                      <Select
                        items={memoCourses}
                        placeholder="Kursni tanlash "
                        aria-label="courses"
                        name={field.name}
                        ref={field.ref}
                        onChange={field.onChange}
                        value={field.value}
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
                  </FormControl>
                  <FormMessage className="text-red-500 text-xs" />
                </FormItem>
              )}
            />
            <Button
              className="rounded-md"
              type="submit"
              color="primary"
              isLoading={false}
            >
              Yuborish
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
export default Application;
