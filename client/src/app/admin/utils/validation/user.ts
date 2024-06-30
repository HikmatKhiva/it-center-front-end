import { z } from "zod";
export const schemaUser = z.object({
  name: z.string().trim().min(3, {
    message: "Ism kiriting shart",
  }),
  surname: z.string().trim().min(3, {
    message: "Familya kiriting shart",
  }),
  gender: z.string().trim().min(3, {
    message: "Jinsi tanlash shart",
  }),
  phone: z.string().nullable(),
  course: z.string().trim().min(1, {
    message: "Coursni tanlash shart",
  }),
  date: z.string().trim().min(3, {
    message: "Tu'g'ilgan sana kiritish shart",
  }),
});
