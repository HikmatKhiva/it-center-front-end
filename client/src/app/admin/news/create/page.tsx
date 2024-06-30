"use client";
import React, { ChangeEvent, useState } from "react";
import BackButton from "../../components/BackButton";
import { Input } from "@/components/ui/input";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Image from "next/image";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsFormSchema } from "../../utils/validation/newsFormSchema";
import { z } from "zod";
import { HoverBorder } from "@/components/ui/hoverBorder";
import { modules } from "../../utils/richTextModule";
import { Button } from "@nextui-org/button";
const AdminNewsCreatePage = () => {
  const [image, setImage] = useState<null | File>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<z.output<typeof newsFormSchema>>({
    resolver: zodResolver(newsFormSchema),
    defaultValues: {
      title: "",
      description: "",
      content: "",
    },
  });
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImage(event.target.files[0]);
    }
  };
  const onSubmit = async (data: z.output<typeof newsFormSchema>) => {
    const formData = new FormData();
    if (image) {
      formData.append("image", image);
    }
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("content", data.content);
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <BackButton />
        <h2 className="text-2xl text-center">Yangilik Yaratish</h2>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-[90%] mx-auto mt-5 flex flex-col gap-3"
        >
          <div className="flex flex-col justify-center items-center ">
            <label
              htmlFor="image"
              className="w-[200px] h-[200px] mx-auto text-center flex flex-col justify-center items-center rounded border dark:bg-background/70"
            >
              {!image ? (
                <span>
                  Surat <br /> yuklash
                </span>
              ) : (
                <>
                  <Image
                    src={URL.createObjectURL(image)}
                    alt="upload image"
                    width={150}
                    height={150}
                  />{" "}
                  <br />
                </>
              )}

              <Input
                id="image"
                onChange={handleFileChange}
                name="image"
                accept=".png,.jpg"
                className="dark:bg-background/70 hidden"
                type="file"
                placeholder="Yangilik uchun qiqa ma'lumot kiriting"
              />
            </label>
            {image && <span className="font-semibold">{image.name}</span>}
          </div>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    className="dark:bg-background/70"
                    placeholder="Yangilik sarlavhasini kiriting"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    className="dark:bg-background/70"
                    placeholder="Yangilik sarlavhasini kiriting"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <HoverBorder>
                    <ReactQuill
                      {...field}
                      className="min-h-20 dark:bg-background/70 border-black"
                      modules={modules}
                      theme="snow"
                    />
                  </HoverBorder>
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <Button
            radius="sm"
            className="bg-green-500 hover:bg-green-600"
            type="submit"
          >
            Saqlash
          </Button>
        </form>
      </Form>
    </div>
  );
};
export default AdminNewsCreatePage;
