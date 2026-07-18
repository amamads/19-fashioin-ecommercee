"use client";

import { signUp } from "@/lib/auth-client";
import FormTextInput from "@/shared/components/FormTextInput";
import { Button } from "@/shared/components/ui/button";
import { FieldError, FieldGroup } from "@/shared/components/ui/field";
import paths from "@/shared/paths";
import {
  registerSchema,
  RegisterSchemaType,
} from "@/shared/schemas/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

export default function Register() {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    setError,
    formState: { isSubmitting, errors },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
    },
  });

  async function submitFrom(data: RegisterSchemaType) {
    await signUp.email(
      {
        email: data.email,
        password: data.password,
        name: data.name,
      },
      {
        onError: (res) => {
          const { error } = res;
          let message = "ثبت‌ نام با خطا مواجه شد. لطفاً دوباره تلاش کنید.";

          if (error.code === "USER_ALREADY_EXISTS" || error.status === 422) {
            message = "کاربری با این ایمیل قبلاً ثبت نام کرده است.";

            setError("email", { type: "server", message });
            toast.error(message);
            return;
          }

          if (error.code === "PASSWORD_TOO_SHORT") {
            message = "رمز عبور بسیار کوتاه است.";
            setError("password", { type: "server", message });
            toast.error(message);
            return;
          }

          toast.error(message);
          setError("root", { type: "server", message });
        },
        onSuccess: () => {
          toast.success("ثبت‌نام شما با موفقیت انجام شد.");
          router.replace(paths.home);
        },
      },
    );
  }
  return (
    <form onSubmit={handleSubmit(submitFrom)}>
      <FieldGroup>
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormTextInput
              showAlwaysFloatingLabel
              {...field}
              floatingLabel="نام یا نام مستعار"
              errors={error}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormTextInput
              showAlwaysFloatingLabel
              {...field}
              floatingLabel="ایمیل"
              errors={error}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormTextInput
              showAlwaysFloatingLabel
              {...field}
              floatingLabel="رمز عبور"
              errors={error}
              passwordInput
            />
          )}
        />
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormTextInput
              showAlwaysFloatingLabel
              {...field}
              floatingLabel="رمز عبور مجدد"
              errors={error}
              passwordInput
            />
          )}
        />
      </FieldGroup>

      <Button type="submit" className="w-full mt-4" disabled={isSubmitting}>
        {isSubmitting ? "در حال ثبت نام..." : "ثبت نام"}
      </Button>
      {errors.root && (
        <FieldError className="mt-5">{errors.root?.message}</FieldError>
      )}
    </form>
  );
}
