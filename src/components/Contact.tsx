import { zodResolver } from "@hookform/resolvers/zod";
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
import { Textarea } from "@/components/ui/textarea";
import { submitContactForm } from "@/lib/actions";
import { contactFormSchema, ContactFormValues } from "@/lib/schema";
import { FormFieldInput } from "./composition/FormInput";

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
      className="w-full max-w-xl mx-auto p-6 space-y-8 border rounded-lg shadow-md mb-16"
    >
      <div className="flex justify-center mb-6 relative pr-12">
        <div className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-green-500 w-32 h-7"></div>
        <div className="relative w-40 h-40">
          <img
            src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg"
            alt="Profile"
            className="rounded-full object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 mb-6">
        <div className="bg-green-500 p-3 rounded-sm">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.0696 12.7456L31.0699 12.7456L31.0673 12.7381C31.06 12.7168 31.0495 12.6969 31.0434 12.6851C31.0359 12.6705 31.0327 12.6638 31.0309 12.6587L31.0286 12.6518L31.0258 12.6465C31.0257 12.6459 31.0249 12.6435 31.0232 12.6376C31.0219 12.6333 31.0192 12.6241 31.0148 12.6143C31.0102 12.604 31.0021 12.5892 30.9878 12.5753C30.9772 12.565 30.9663 12.5579 30.9585 12.5535C30.932 12.5228 30.9006 12.5019 30.8796 12.4883C30.8522 12.4639 30.8154 12.4411 30.7762 12.4284C30.7461 12.4187 30.7267 12.4122 30.7163 12.4071L30.7167 12.4062L30.7034 12.4019C30.6755 12.3929 30.6316 12.3812 30.5908 12.3796C30.5891 12.379 30.587 12.3782 30.5847 12.3774C30.5777 12.375 30.5635 12.3706 30.5453 12.3706H28.3719V1.44118C28.3719 1.13607 28.1242 0.9 27.8172 0.9H4.17396C3.86697 0.9 3.61928 1.13607 3.61928 1.44118V12.3706H1.44588C1.42772 12.3706 1.41347 12.375 1.40652 12.3774C1.40416 12.3782 1.40202 12.379 1.40036 12.3796C1.36738 12.3811 1.33357 12.3899 1.30949 12.3962C1.30414 12.3976 1.29927 12.3988 1.295 12.3999L1.29493 12.3996L1.2878 12.4019L1.20596 12.4284C1.16014 12.4432 1.12875 12.4714 1.11051 12.489C1.08887 12.503 1.0568 12.5246 1.03036 12.5564C1.02413 12.5606 1.01266 12.5694 1.00261 12.5833C0.995655 12.5929 0.990626 12.6032 0.987293 12.6137C0.983083 12.6232 0.980445 12.6309 0.978644 12.6361L0.978472 12.6366C0.977578 12.6392 0.97701 12.6408 0.976566 12.642C0.953862 12.6773 0.942101 12.7116 0.933917 12.7354L0.933004 12.7381C0.923282 12.7664 0.91028 12.8122 0.909435 12.8545L0.908007 12.8603L0.907834 12.861C0.906795 12.865 0.904984 12.8721 0.903535 12.8796C0.901939 12.8878 0.900298 12.8989 0.900298 12.9118V30.5571C0.890049 30.8648 1.14038 31.1 1.44588 31.1H30.5453C30.8523 31.1 31.1 30.8639 31.1 30.5588V12.9118C31.1 12.8989 31.0984 12.8878 31.0968 12.8796C31.0953 12.872 31.0935 12.865 31.0925 12.861L31.0923 12.8603L31.0909 12.8547V12.8421L31.0855 12.8263C31.0841 12.8222 31.0829 12.8169 31.0806 12.8024C31.0785 12.7892 31.0755 12.7688 31.0696 12.7456ZM4.72863 14.6256V1.98235H27.2626V14.6256L20.5108 19.5368L20.5108 19.5368L15.9956 22.8292L4.72863 14.6256ZM28.3719 13.4529H28.8739L28.3719 13.8183V13.4529ZM3.61928 13.4529V13.8183L3.11728 13.4529H3.61928ZM2.00056 30.0176V13.9906L15.6626 23.9328C15.6628 23.933 15.6631 23.9331 15.6633 23.9333C15.7643 24.0092 15.8767 24.0412 15.9956 24.0412C16.1145 24.0412 16.2269 24.0092 16.3279 23.9333C16.3281 23.9331 16.3284 23.933 16.3286 23.9328L29.9906 13.9906V30.0176H2.00056ZM7.81138 5.51176H18.7237C19.0307 5.51176 19.2784 5.2757 19.2784 4.97059C19.2784 4.66548 19.0307 4.42941 18.7237 4.42941H7.81138C7.5044 4.42941 7.25671 4.66548 7.25671 4.97059C7.25671 5.2757 7.5044 5.51176 7.81138 5.51176ZM7.81138 9.04118H24.1798C24.4868 9.04118 24.7345 8.80511 24.7345 8.5C24.7345 8.19489 24.4868 7.95882 24.1798 7.95882H7.81138C7.5044 7.95882 7.25671 8.19489 7.25671 8.5C7.25671 8.80511 7.5044 9.04118 7.81138 9.04118ZM7.81138 12.5706H24.1798C24.4868 12.5706 24.7345 12.3345 24.7345 12.0294C24.7345 11.7243 24.4868 11.4882 24.1798 11.4882H7.81138C7.5044 11.4882 7.25671 11.7243 7.25671 12.0294C7.25671 12.3345 7.5044 12.5706 7.81138 12.5706ZM24.7345 15.5588C24.7345 15.2537 24.4868 15.0176 24.1798 15.0176H7.81138C7.5044 15.0176 7.25671 15.2537 7.25671 15.5588C7.25671 15.8639 7.5044 16.1 7.81138 16.1H24.1798C24.4868 16.1 24.7345 15.8639 24.7345 15.5588Z"
              fill="white"
              stroke="white"
              stroke-width="0.2"
            />
          </svg>
        </div>

        <h2 className="text-xl">
          <text className="font-regular">GET IN</text>
          <br />
          <span className="font-bold">TOUCH</span>
        </h2>
      </div>

      <Form {...form}>
        <form
          className="space-y-6"
          onSubmit={form.handleSubmit(onSubmit)}
          noValidate
        >
          <FormFieldInput
            name="name"
            label="Your name"
            placeholder="type your name here..."
          />
          <div className="flex gap-4">
            <div className="flex-1">
              <FormFieldInput
                name="email"
                label="Email"
                placeholder="example@example.com"
                type="email"
              />
            </div>
            <div className="flex-1">
              <FormFieldInput
                name="telephone"
                label="Telephone"
                placeholder="(  ) ____-____"
              />
            </div>
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <label htmlFor="message" className="text-sm font-medium">
                  Message*
                </label>
                <FormControl>
                  <Textarea
                    id="message"
                    required
                    placeholder="Type what you want to say to us"
                    {...field}
                    className="resize-none"
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="mt-4 text-center">
            <Button
              className="w-full shadow-lg hover:shadow-2xl"
              type="submit"
              disabled={isPending}
            >
              {isPending ? "SENDING..." : "SEND NOW"}
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
}
