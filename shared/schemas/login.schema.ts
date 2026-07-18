import { z } from "zod";

export const loginSchema = z.object({
    email: z
        .string()
        .min(1, "ایمیل نمی‌تواند خالی باشد")
        .email("فرمت ایمیل وارد شده معتبر نیست"),

    password: z
        .string()
        .min(1, "رمز عبور نمی‌تواند خالی باشد")
        .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد")
        .regex(
            /^(?=.*[A-Za-z])(?=.*\d)/,
            "رمز عبور باید شامل حداقل یک حرف انگلیسی و یک عدد باشد"
        ),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;