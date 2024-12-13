import * as z from "zod"

export const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  telephone: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
    message: "Please enter a valid telephone number.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>

