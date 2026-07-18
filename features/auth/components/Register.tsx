"use client";

import FormTextInput from "@/shared/components/FormTextInput";
import { Button } from "@/shared/components/ui/button";
import { FieldGroup } from "@/shared/components/ui/field";
import {
  registerSchema,
  RegisterSchemaType,
} from "@/shared/schemas/register.schema";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { APIError } from "better-auth";
import { toast } from "sonner";
import { signUp } from "@/lib/auth-client";

export default function Register() {
  const {
    control,
    handleSubmit,
    setError,
    formState: { isSubmitting },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "amamads",
      email: "amir.1rpm@gmail.com",
      password: "amir1385",
      confirmPassword: "amir1385",
    },
  });

  // 1️⃣ تابع به async تبدیل شد تا خطاهای Promise به درستی catch شوند
  async function submitFrom(data: RegisterSchemaType) {
    try {
      // 2️⃣ اضافه کردن await برای کنترل درست پردازش سرور
      await signUp.email({
        email: data.email,
        password: data.password,
        name: data.name,
        // اگر فیلدهای دیگری در بهتر-آث دارید اینجا مپ کنید
      });
      
      toast.success("ثبت‌نام با موفقیت انجام شد!");
    } catch (err) {
      let message = "ثبت‌نام با خطا مواجه شد. لطفاً دوباره تلاش کنید.";

      // 3️⃣ اصلاح منطقی و سینتکسی بلاک شرطی خطاها
      if (err instanceof APIError) {
        if (err.message === "USER_ALREADY_EXISTS" || err.status === 400) {
          message = "کاربری با این ایمیل قبلاً ثبت نام کرده است.";
        }
      } else if (err instanceof Error) {
        message = "ارتباط با سرور برقرار نشد. لطفاً بعداً تلاش کنید.";
      }

      setError("root", { type: "server", message });
      toast.error(message);
    }
  }

  return (
    <form onSubmit={handleSubmit(submitFrom)}>
      <FieldGroup>
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormTextInput
              {...field}
              floatingLabel="نام یا نام مستعار"
              // 4️⃣ ارسال صرفاً پیام خطا به جای خود شیء برای هماهنگی با تغییرات قبلی
              errors={error?.message} 
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormTextInput 
              {...field} 
              floatingLabel="ایمیل" 
              errors={error?.message} 
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
              errors={error?.message} 
            />
          )}
        />
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormTextInput
              {...field}
              floatingLabel="رمز عبور مجدد"
              errors={error?.message}
            />
          )}
        />
      </FieldGroup>

      <Button type="submit" className="w-full mt-4" disabled={isSubmitting}>
        {isSubmitting ? "در حال ثبت نام..." : "ثبت نام"}
      </Button>
    </form>
  );
}