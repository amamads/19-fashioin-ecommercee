import { useState } from "react";
import { z } from "zod";
import { ToFormState } from "../types";

export default function useFormValidation<T extends z.ZodTypeAny>(
    schema: T,
    serverErrors: ToFormState<z.infer<T>>
) {
    const [clientErrors, setClientErrors] = useState<
        Record<string, string[] | undefined>
    >({});

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;

        const formElement = e.target.form;
        if (!formElement) return;

        const formData = new FormData(formElement);
        const rawFields = Object.fromEntries(formData);

        rawFields[name] = value;

        const result = schema.safeParse(rawFields);

        if (!result.success) {
            const fieldErrors = result.error.flatten().fieldErrors as Record<string, string[] | undefined>;

            setClientErrors((prev) => ({
                ...prev,
                [name]: fieldErrors[name],
            }));
        } else {
            setClientErrors((prev) => ({
                ...prev,
                [name]: undefined,
            }));
        }
    }

    const baseErrors: Record<string, string[] | undefined> = {
        ...serverErrors.errors,
    };

    for (const key in clientErrors) {
        if (clientErrors[key] === undefined) {
            delete baseErrors[key];
        } else {
            baseErrors[key] = clientErrors[key];
        }
    }

    const mergedErrors = baseErrors as ToFormState<z.infer<T>>["errors"];
    return [onChange, mergedErrors] as const;
}