import React from "react";
import LabeledInput from "./atoms/LabeledInput";
import { Field, FieldError } from "./ui/field";
import { FieldError as FieldErrorType } from "react-hook-form";

export default function FormTextInput({
  errors,
  floatingLabel,
  passwordInput,
  ...props
}: {
  name: string;
  errors: string[] | undefined | FieldErrorType;
  defaultValue?: string;
  floatingLabel: string;
  passwordInput?: boolean;
} & React.ComponentProps<typeof LabeledInput>) {
  return (
    <Field>
      <LabeledInput
        className={errors && "border-destructive"}
        {...props}
        floatingLabel={floatingLabel}
        placeholder={`${floatingLabel} وارد کنید`}
        passwordInput={passwordInput}
      />
      {!errors ? null : Array.isArray(errors) ? (
        <FieldError>{errors.join(", ")}</FieldError>
      ) : (
        <FieldError errors={[errors]} />
      )}
    </Field>
  );
}
