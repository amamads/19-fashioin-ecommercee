"use client";

import { registerAction } from "@/actions/register.action";
import FormTextInput from "@/shared/components/FormTextInput";
import { Button } from "@/shared/components/ui/button";
import { FieldError, FieldGroup } from "@/shared/components/ui/field";
import useFormValidation from "@/shared/hooks/useFormValidation";
import { registerSchema } from "@/shared/schemas/register.schema";
import { useActionState } from "react";

export default function Register2() {
  const [state, action, isPending] = useActionState(registerAction, {
    errors: {},
    values: {
      name: "amamads",
      email: "amir.1rpm@gmail.com",
    },
  });
  const [handleInputChange, errors] = useFormValidation(registerSchema, state);
  const values = state.values;

  return (
    <form action={action}>
      <FieldGroup>
        <FormTextInput
          name="name"
          errors={errors.name}
          defaultValue={values?.name}
          floatingLabel="نام یا نام مستعار"
          onChange={handleInputChange}
          showAlwaysFloatingLabel
        />
        <FormTextInput
          name="email"
          errors={errors.email}
          defaultValue={values?.email}
          floatingLabel="ایمیل"
          onChange={handleInputChange}
          showAlwaysFloatingLabel
        />
        <FormTextInput
          name="password"
          errors={errors.password}
          floatingLabel="رمز عبور"
          type="password"
          onChange={handleInputChange}
          showAlwaysFloatingLabel
        />
        <FormTextInput
          name="confirmPassword"
          errors={errors.confirmPassword}
          floatingLabel="رمز عبور مجدد"
          type="password"
          onChange={handleInputChange}
          showAlwaysFloatingLabel
        />
      </FieldGroup>

      <Button type="submit" className="w-full mt-4">
        {isPending ? "در حال ثبت نام..." : "ثبت نام"}
      </Button>

      {errors._form && <FieldError>{errors._form.join(", ")}</FieldError>}
    </form>
  );
}
