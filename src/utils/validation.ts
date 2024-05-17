import { z } from "zod";
export const applicationSchema = z.object({
  name: z.string({ message: "Bu maydoni to'ldirish shart!" }).min(3),
  phone: z
    .string({ message: "raqam to'g'ri to'ldirish shart!" })
    .regex(
      /^\+998([- ])?(90|91|93|94|95|97|98|99|33|77|88|55)([- ])?(\d{3})([- ])?(\d{2})([- ])?(\d{2})$/
    ),
  courses: z.string({ message: "Kursni tanlash shart!" }),
});

export const adminLoginSchema = z.object({
  email: z.string({ message: "maydon bo'sh bo'lmasligi kerak" }).min(3).email(),
  password: z.string({message:"maydon bo'sh bo'lmasligi kerak"}).min(6),
});
