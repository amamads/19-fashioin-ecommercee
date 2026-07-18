"use client";

import { loginAction } from "@/actions/login.action";
import { registerAction } from "@/actions/register.action";
import FormTextInput from "@/shared/components/FormTextInput";
import { Button } from "@/shared/components/ui/button";
import { FieldError, FieldGroup } from "@/shared/components/ui/field";
import useFormValidation from "@/shared/hooks/useFormValidation";
import { registerSchema } from "@/shared/schemas/register.schema";
import { useActionState } from "react";

export default function Login() {
  const [state, action, isPending] = useActionState(loginAction, {
    errors: {},
    values: {
      email: "amir.1rpm@gmail.com",
    },
  });
  const [handleInputChange, errors] = useFormValidation(registerSchema, state);
  const values = state.values;

  return (
    <form action={action}>
      <FieldGroup>
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
      </FieldGroup>

      <Button type="submit" className="w-full mt-4">
        {isPending ? "در حال ورود ..." : "ورود"}
      </Button>

      {errors._form && <FieldError>{errors._form.join(", ")}</FieldError>}
    </form>
  );
}
