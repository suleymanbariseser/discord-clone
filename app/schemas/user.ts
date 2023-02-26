import { z } from "zod";

export const passwordSchema = z.object({
    password: z
      .string()
      .min(8)
      .max(50)
      .regex(/[0-9]+/, "must contain at least 1 number")
      .regex(/[a-z]+/, "must contain at least 1 lowercase")
      .regex(/[A-Z]+/, "must contain at least 1 uppercase")
      .regex(
        /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/,
        "must contain at least 1 special character"
      ),
  })

export const loginSchema = z.object({
    email: z.string().email(),
}).merge(passwordSchema);