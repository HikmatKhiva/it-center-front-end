"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { adminLoginSchema } from "@/utils/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@nextui-org/button";
import { Input } from "@/components/ui/input";
const LoginForm = () => {
  const form = useForm<z.infer<typeof adminLoginSchema>>({
    resolver: zodResolver(adminLoginSchema),
  });
  const onSubmit = () => {};
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" flex flex-col gap-2 w-full md:w-[360px] mx-auto relative z-10"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    onChange={field.onChange}
                    autoComplete="off"
                    name={field.name}
                    ref={field.ref}
                    value={field.value || ""}
                    placeholder="Email Kiriting"
                  />
                </FormControl>
                <FormMessage className="text-red-500 text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    onChange={field.onChange}
                    autoComplete="off"
                    name={field.name}
                    type="password"
                    ref={field.ref}
                    value={field.value || ""}
                    placeholder="Parol Kiriting"
                  />
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
    </>
  );
};
export default LoginForm;