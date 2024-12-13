'use server'

import { contactFormSchema } from "./schema"

export async function submitContactForm(values: unknown) {
  const result = contactFormSchema.safeParse(values)

  if (!result.success) {
    return { error: "Invalid form data" }
  }
  await new Promise((resolve) => setTimeout(resolve, 1000))

  console.log("Form submitted:", result.data)

  return { success: true }
}

