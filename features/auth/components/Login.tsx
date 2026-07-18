"use client";

import { signIn, signUp } from "@/lib/auth-client";
import FormTextInput from "@/shared/components/FormTextInput";
import { Button } from "@/shared/components/ui/button";
import { FieldError, FieldGroup } from "@/shared/components/ui/field";
import paths from "@/shared/paths";
import { loginSchema, LoginSchemaType } from "@/shared/schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

export default function Login() {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    setError,
    formState: { isSubmitting, errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      // name: "amamads",
      // email: "amir.1rpm@gmail.com",
    },
  });

  async function submitFrom(data: LoginSchemaType) {
    await signIn.email(
      {
        email: data.email,
        password: data.password,
      },
      {
        onError(res) {
          const { error } = res;
          let message = "ورود با خطا مواجه شد. لطفاً دوباره تلاش کنید.";

          if (
            error.status === 401 ||
            error.code === "INVALID_EMAIL_OR_PASSWORD"
          ) {
            message = "ایمیل یا رمز عبور اشتباه است.";
          } else if (error.status === 403) {
            message = "حساب کاربری شما فعال یا تایید نشده است.";
          }

          toast.error(message);
          setError("root", { type: "server", message });
        },
        onSuccess() {
          toast.success("خوش آمدید! ورود با موفقیت انجام شد.");
          router.replace(paths.home);
        },
      },
    );
  }
  return (
    <form onSubmit={handleSubmit(submitFrom)}>
      <FieldGroup>
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormTextInput
              {...field}
              floatingLabel="ایمیل"
              errors={error}
              showAlwaysFloatingLabel
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormTextInput
              {...field}
              floatingLabel="رمز عبور"
              errors={error}
              showAlwaysFloatingLabel
              passwordInput
            />
          
          )}
        />
      </FieldGroup>

      <Button type="submit" className="w-full mt-4" disabled={isSubmitting}>
        {isSubmitting ? "در حال ورود..." : "ورود"}
      </Button>
      {errors.root && (
        <FieldError className="mt-5">{errors.root?.message}</FieldError>
      )}
    </form>
  );
}
