import { FormControl, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Controller, useFormContext } from "react-hook-form";

interface FormFieldInputProps {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  disabled?: boolean;
}

export function FormFieldInput({
  name,
  label,
  placeholder,
  type = "text",
  disabled = false,
}: FormFieldInputProps) {
  const {
    formState: { errors },
    control,
  } = useFormContext();

  return (
    <FormItem>
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <FormControl>
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <Input
              id={name}
              type={type}
              placeholder={placeholder}
              {...field}
              disabled={disabled}
              className={cn(
                "h-12 w-full",
                errors[name]?.message && "border-red-500"
              )}
            />
          )}
        />
      </FormControl>
      <FormMessage>{errors[name]?.message?.toString()}</FormMessage>
    </FormItem>
  );
}
