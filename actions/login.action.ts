"use server";

import { auth } from "@/lib/auth";
import { signIn } from "@/lib/auth-client";
import paths from "@/shared/paths";
import { loginSchema, LoginSchemaType } from "@/shared/schemas/login.schema";
import { ToFormState } from "@/shared/types";
import { APIError } from "better-auth/api";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { headers } from "next/headers";
import { redirect } from "next/navigation";


type LoginFormState = ToFormState<LoginSchemaType>;


export async function loginAction(
    formState: LoginFormState,
    formData: FormData,
): Promise<LoginFormState> {
    const rawFields = Object.fromEntries(formData);

    const { success, error, data } = loginSchema.safeParse(rawFields);

    if (!success)
        return {
            errors: error.flatten().fieldErrors,
            values: { email: rawFields.email as string }
        };

    const { email, password } = data;

    try {
        await signIn.email({email,password})
        // const response = await auth.api.signInEmail({
        //     body: { email, password },
        //     asResponse: true,
        //     headers: await headers()
        // });

        // const setCookie = response.headers.get("set-cookie");
        // if (setCookie) {
        //     const { cookies } = await import("next/headers");
        //     const cookieStore = await cookies();

        //     cookieStore.set({
        //         name: "better-auth.session_token",
        //         value: setCookie.split(";")[0].split("=")[1],
        //         httpOnly: true,
        //         secure: process.env.NODE_ENV === "production",
        //         sameSite: "lax",
        //         path: "/",
        //     });
        // }

    } catch (err) {

        if (isRedirectError(err)) {
            throw err;
        }


        let message = "ورود با خطا مواجه شد. لطفاً دوباره تلاش کنید.";


        if (err instanceof APIError) {

            if (
                err.message === "INVALID_EMAIL_OR_PASSWORD" ||
                err.status === 401 ||
                err.status === 400
            ) {
                message = "ایمیل یا رمز عبور اشتباه است.";
            }
        } else if (err instanceof Error) {
            console.error("Login Core Error:", err.message);
            message = "ارتباط با سرور برقرار نشد. لطفاً بعداً تلاش کنید.";
        }

        return {
            errors: {
                _form: [message],
            },
            values: { email }
        };
    }

    redirect(paths.home);
}