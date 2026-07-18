import React, { useId } from "react";
import { Field, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

export default function LabeledInput({
  floatingLabel,
  className,
  showAlwaysFloatingLabel,
  ...props
}: {
  floatingLabel: string;
  showAlwaysFloatingLabel?: boolean;
} & React.ComponentProps<typeof Input>) {
  const inputId = useId();
  const labelClasses = showAlwaysFloatingLabel
    ? "top-0 -translate-y-1/2 text-xs opacity-100"
    : "top-1/2 -translate-y-1/2 opacity-0 peer-focus:opacity-100 peer-focus:top-0 peer-focus:text-xs peer-[:not(:placeholder-shown)]:opacity-100 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs";
  return (
    <Field className="relative">
      <Input className={cn(className, "peer")} id={inputId} {...props} />
      <FieldLabel
        htmlFor={inputId}
        className={`absolute right-5 bg-background px-1 transition-all duration-200 ease-out text-neutral-10 max-w-fit ${labelClasses}`}
      >
        {floatingLabel}
      </FieldLabel>
    </Field>
  );
}
