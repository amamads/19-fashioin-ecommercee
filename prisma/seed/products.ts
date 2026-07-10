import db from "@/db";
import { Product, Size } from "@/generated/prisma/client";

const category = {
  name: "مجلسی",
  slug: "pyrahn-kwtah-mjlsy",
};

const product = {
  name: "لباس میدی دکلته الی",
  slug: "midi-strapless-dress-eli",
  shortDescription:
    "لباس مِیدی دکلته الی یکی از آیتم‌های شیک و جذاب در دنیای مد زنانه است.",
  description:
    "لباس میدی دکلته الی با طراحی الهام گرفته از استایل‌های کلاسیک و مدرن، انتخابی بی‌نظیر برای خانم‌هایی است که به دنبال ظاهری شیک و همزمان راحت هستند...",
  price: 989000,
  comparePrice: 1111000,
  stock: 25,
  isPublished: true,
  // category,
  images: [
    {
      url: "/product-image.png",
      alt: "لباس میدی دکلته الی - نمای جلو",
      order: 1,
    },
    {
      url: "/product-image.png",
      alt: "لباس میدی دکلته الی - نمای پشت",
      order: 2,
    },
    {
      url: "/product-image.png",
      alt: "لباس میدی دکلته الی - نمای بغل",
      order: 3,
    },
    {
      url: "/product-image.png",
      alt: "لباس میدی دکلته الی - جزئیات پارچه",
      order: 4,
    },
    {
      url: "/product-image.png",
      alt: "لباس میدی دکلته الی - نمای کامل لباس",
      order: 5,
    },
  ],
  features: [
    { title: "قابلیت شستشو", value: "با ماشین لباسشویی یا دست" },
    { title: "جنس پارچه", value: "با کیفیت بالا و ضد چروک" },
    { title: "مقاومت", value: "مقاومت در برابر آب" },
  ],
  variants: [
    { hex: "#2A0505", size: Size.M, stock: 8 },
    { hex: "#7C6666", size: Size.L, stock: 5 },
    { hex: "#A77A78", size: Size.M, stock: 6 },
    { hex: "#F6A68B", size: Size.XL, stock: 6 },
  ],
  attributes: [
    {
      name: "نوع لباس",
      value: "لباس مجلسی",
    },
    {
      name: "جنس پارچه",
      value: "پنبه",
    },
    {
      name: "فرم بدن",
      value: "ساعت شنی",
    },
    {
      name: "طرح لباس",
      value: "ساده",
    },
  ],
};

const { images, features, variants, attributes, ...directData } = product;

export default async function seedProducts() {
  await db.product.create({
    data: {
      ...directData,
      category: {
        connect: {
          slug: category.slug,
        },
      },

      images: {
        create: images,
      },

      features: {
        create: features,
      },

      variants: {
        create: variants.map((variant) => ({
          stock: variant.stock,
          size: variant.size,
          color: {
            connect: {
              hex: variant.hex,
            },
          },
        })),
      },
    },
  });
}
