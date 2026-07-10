import db from "@/db";
import { faSlugify } from "@/lib/utils";

export const categories = [
  {
    name: "پیراهن کوتاه",
    subCategories: ["مجلسی", "مخمل", "ساده", "گیپور"],
  },
  {
    name: "شلوار",
    subCategories: ["کلاسیک", "جین", "مام استایل", "مجلسی"],
  },
  {
    name: "کت و جلیقه",
    subCategories: ["جین", "مازراتی", "رسمی"],
  },
  {
    name: "تاپ و کراپ",
    subCategories: ["جلو زیپ", "ورزشی", "بند دار", "بدون فنر"],
  },
  {
    name: "سرهمی",
    subCategories: ["جین", "ابر و بادی", "مجلسی"],
  },
  {
    name: "شومیز و بلوز",
    subCategories: ["بافت", "کبریتی", "نخی", "ساحلی"],
  },
  {
    name: "ترنچ کت و پالتو",
    subCategories: ["کلاه‌دار", "بارانی", "کوتاه", "چرم"],
  },
  {
    name: "دامن",
    subCategories: ["راسته", "بلند", "کوتاه"],
  },
].map(({ name, subCategories }) => ({
  name,
  slug: faSlugify(name),
  subCategories: subCategories.map((subName) => ({
    name: subName,
    slug: `${faSlugify(name)}-${faSlugify(subName)}`,
  })),
}));

export default async function seedCategories() {
  for (const { name, slug, subCategories } of categories) {
    const parentCategory = await db.category.upsert({
      where: { slug },
      update: {},
      create: {
        name,
        slug,
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
