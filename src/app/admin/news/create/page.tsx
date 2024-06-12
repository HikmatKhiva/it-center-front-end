"use client";
import React, { ChangeEvent, Suspense, useState } from "react";
import BackButton from "../../components/BackButton";
import { Input } from "@/components/ui/input";
import RichTextEditor from "../components/RichTextEditor";
import Image from "next/image";

const AdminNewsCreatePage = () => {
  const [news, setNews] = useState<INewsState>({
    title: "",
    description: "",
    image: null,
  });
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "image" && event.target?.files) {
      const image = event.target.files[0];
      setNews((prev) => ({ ...prev, image }));
    }
    setNews((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  console.log(news);

  return (
    <div>
      <BackButton />
      <h2 className="text-2xl text-center">Yangilik Yaratish</h2>
      <form className="w-[90%] mx-auto mt-5 flex flex-col gap-3">
        <div className="flex gap-5">
          <div className="flex-grow flex flex-col justify-between gap-2">
            <Input
              name="title"
              onChange={handleChange}
              className="dark:bg-background/70"
              placeholder="Yangilik sarlavhasini kiriting"
            />
            <Input
              onChange={handleChange}
              name="description"
              className="dark:bg-background/70"
              placeholder="Yangilik uchun qiqa ma'lumot kiriting"
            />
          </div>
          <label
            htmlFor="image"
            className="w-[100px] h-[100px] text-center rounded border flex justify-center items-center dark:bg-background/70"
          >
            {!news.image ? (
              <span>
                Upload <br /> Image
              </span>
            ) : (
              <Image
                src={news.image}
                alt="upload image"
                width={100}
                height={100}
              />
            )}
            <Input
              id="image"
              onChange={handleChange}
              name="image"
              className="dark:bg-background/70 hidden"
              type="file"
              placeholder="Yangilik uchun qiqa ma'lumot kiriting"
            />
          </label>
        </div>
        <Suspense fallback="Loading">
          <RichTextEditor />
        </Suspense>
      </form>
    </div>
  );
};
export default AdminNewsCreatePage;
