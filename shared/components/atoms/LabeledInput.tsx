import React, { useId } from "react";
import { Field, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

export default function LabeledInput({
  floatingLabel,
  className,
  ...props
}: {
  floatingLabel: string;
} & React.ComponentProps<typeof Input>) {
  const inputId = useId();
  return (
    <Field className="relative">
      <Input className={cn(className, "peer")} id={inputId} {...props} />

      <FieldLabel
        htmlFor={inputId}
        className="absolute text-neutral-10 right-5 top-1/2 -translate-y-1/2 bg-background px-1 transition-all opacity-0 peer-focus:opacity-100 peer-focus:top-0 peer-focus:text-xs max-w-fit"
      >
        {floatingLabel}
      </FieldLabel>
    </Field>
  );
}
