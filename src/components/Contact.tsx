import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitContactForm } from "@/lib/actions";
import { contactFormSchema, ContactFormValues } from "@/lib/schema";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [isPending, setIsPending] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      telephone: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setIsPending(true);
    try {
      const result = await submitContactForm(values);

      if (result.error) {
        console.error(result.error);
        return;
      }

      alert("Succceded");
      form.reset();
    } catch (error) {
      console.error(error, "Something went wrong. Please try again.");
    } finally {
      setIsPending(false);
    }
  }

  return (
    <section
      id="contact"
      className="w-full max-w-md mx-auto p-6 space-y-8 border rounded-lg shadow-md mb-5"
    >
      {/* Profile Photo Section */}
      <div className="flex justify-center mb-6">
        <div className="relative w-32 h-32">
          <img
            src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg"
            alt="Profile"
            className="rounded-full object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 mb-6">
        <Mail className="h-6 w-6 text-green-500" />
        <h2 className="text-xl font-semibold tracking-tight">
          GET IN <span className="font-bold">TOUCH</span>
        </h2>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Type your name here..."
                    {...field}
                    className={cn(
                      "h-12",
                      form.formState.errors.name && "border-red-500"
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="example@example.com"
                      type="email"
                      {...field}
                      className={cn(
                        "h-12",
                        form.formState.errors.email && "border-red-500"
                      )}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="telephone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="(+55) _____-____"
                      type="tel"
                      {...field}
                      className={cn(
                        "h-12",
                        form.formState.errors.telephone && "border-red-500"
                      )}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Type what you want to say to us"
                    className={cn(
                      "min-h-[120px] resize-none",
                      form.formState.errors.message && "border-red-500"
                    )}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full h-12 bg-green-500 hover:bg-green-600"
            disabled={isPending}
          >
            {isPending ? "SENDING..." : "SEND NOW"}
          </Button>
        </form>
      </Form>
    </section>
  );
}
