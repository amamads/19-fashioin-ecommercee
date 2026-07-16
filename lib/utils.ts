import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import slugify from "slugify";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const faSlugify = (slug: string) =>
  slugify(slug, { lower: true, strict: true });

export const generateNumbers  = (length:number)=>Array.from({ length }, (_, i) => i+1)
