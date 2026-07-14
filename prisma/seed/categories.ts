import db from "@/db";
import { faSlugify } from "@/lib/utils";

export const categories = [
  {
    name: "پیراهن کوتاه",
    subCategories: ["مجلسی", "مخمل", "ساده", "گیپور"],
    imageUrl: "./sample.png",
    badges: ["دخترانه", "مناسب مهمنای"],
    order: 1,
  },
  {
    name: "شلوار",
    subCategories: ["کلاسیک", "جین", "مام استایل", "مجلسی"],
    imageUrl: "./sample.png",
    badges: ["استایل روزمره", "رسمی"],
    order: 2,
  },
  {
    name: "کت و جلیقه",
    subCategories: ["جین", "مازراتی", "رسمی"],
    imageUrl: "./sample.png",
    badges: ["کلاسیک", "مینیمال"],
    order: 4,
  },
  {
    name: "تاپ و کراپ",
    subCategories: ["جلو زیپ", "ورزشی", "بند دار", "بدون فنر"],
    imageUrl: "./sample.png",
    badges: ["مجلسی", "روزمره"],
    order: 7,
  },
  {
    name: "سرهمی",
    subCategories: ["جین", "ابر و بادی", "مجلسی"],
    imageUrl: "./sample.png",
    badges: ["روزمره", "کالکشن جدید"],
    order: 3,
  },
  {
    name: "شومیز و بلوز",
    subCategories: ["بافت", "کبریتی", "نخی", "ساحلی"],
    imageUrl: "./sample.png",
    badges: ["تمام فصول", "کژوال"],
    order: 6,
  },
  {
    name: "ترنچ کت و پالتو",
    subCategories: ["کلاه‌دار", "بارانی", "کوتاه", "چرم"],
    imageUrl: "./sample.png",
    badges: ["گرم و سبک", "مدرن"],
    order: 8,
  },
  {
    name: "دامن",
    subCategories: ["راسته", "بلند", "کوتاه"],
    imageUrl: "./sample.png",
    badges: ["تابستانه", "پاییز"],
    order: 5,
  },
].map(({ name, subCategories, badges, order }) => ({
  name,
  badges,
  order,
  slug: faSlugify(name),
  subCategories: subCategories.map((subName) => ({
    name: subName,
    slug: `${faSlugify(name)}-${faSlugify(subName)}`,
  })),
}));

export default async function seedCategories() {
  for (const { name, slug, subCategories, badges, order } of categories) {
    const parentCategory = await db.category.upsert({
      where: { slug },
      update: {},
      create: {
        name,
        slug,
        badges,
        order,
      },
    });

    if (subCategories && subCategories.length) {
      for (const sub of subCategories) {
        await db.category.upsert({
          where: { slug: sub.slug },
          update: {},
          create: {
            name: sub.name,
            slug: sub.slug,
            parentId: parentCategory.id,
          },
        });
      }
    }
  }
}
