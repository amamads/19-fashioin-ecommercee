"use server";

import { auth } from "@/lib/auth";
import paths from "@/shared/paths";
import { registerSchema, RegisterSchemaType } from "@/shared/schemas/register.schema";
import { ToFormState } from "@/shared/types";
import { APIError } from "better-auth/api";
import { redirect } from "next/navigation";

type RegisterFormState = ToFormState<RegisterSchemaType>;

export async function registerAction(
    formState: RegisterFormState,
    formData: FormData,
): Promise<RegisterFormState> {
    const rawFields = Object.fromEntries(formData);

    const { success, error, data } = registerSchema.safeParse(rawFields);

    if (!success)
        return {
            errors: error.flatten().fieldErrors,
            values: rawFields as Partial<RegisterSchemaType>
        };

    const { name, email, password } = data;

    try {
        await auth.api.signUpEmail({
            body: {
                name, email, password,
            }
        })
    } catch (err) {
        let message = "ثبت‌نام با خطا مواجه شد. لطفاً دوباره تلاش کنید.";

        if (err instanceof APIError) {
            if (err.message === "USER_ALREADY_EXISTS" || err.status === 400) {
                message = "کاربری با این ایمیل قبلاً ثبت نام کرده است.";
            }
        } else if (err instanceof Error) {
            console.error("Registration Core Error:", err.message);
            message = "ارتباط با سرور دیتابیس برقرار نشد. لطفاً بعداً تلاش کنید.";
        }

        return {
            errors: {
                _form: [message],
            },
            values: { name, email }
        };
    }

    redirect(paths.home)
}
