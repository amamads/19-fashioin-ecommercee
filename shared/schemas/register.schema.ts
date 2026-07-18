import { z } from "zod";

export const registerSchema = z.object({
    name: z
        .string()
        .min(1, "نام کاربری نمی‌تواند خالی باشد")
        .min(3, "نام کاربری باید حداقل ۳ کاراکتر باشد"),

    email: z
        .string()
        .min(1, "ایمیل نمی‌تواند خالی باشد")
        .email("فرمت ایمیل وارد شده معتبر نیست"),

    password: z
        .string()
        .min(1, "رمز عبور نمی‌تواند خالی باشد")
        .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد")
        .regex(
            /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            "رمز عبور باید حداقل شامل یک حرف انگلیسی و یک عدد باشد"
        ),
    confirmPassword: z
        .string()
        .min(1, "تکرار رمز عبور نمی‌تواند خالی باشد"),
})
    .refine((data) => data.password === data.confirmPassword, {
        message: "رمز عبور و تکرار آن با هم مطابقت ندارند",
        path: ["confirmPassword"]
    });
export type RegisterSchemaType = z.infer<typeof registerSchema>;