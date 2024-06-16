import { z } from "zod";
export const newsFormSchema = z.object({
  title: z.string().trim().min(5, {
    message: "Title must required",
  }),
  description: z.string().trim().min(5,{
    message: "Title must required",
  }),
  content: z.string().trim().min(5),
});
