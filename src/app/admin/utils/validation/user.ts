import { z } from "zod";
export const schemaUser = z.object({
  name: z.string(),
  surname: z.string(),
  gender: z.string(),
  phone: z.string(),
  course: z.string(),
  date: z.string(),
});
