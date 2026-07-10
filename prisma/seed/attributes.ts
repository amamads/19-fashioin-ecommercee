import db from "@/db";

const attributes = [
  {
    name: "نوع لباس",
    slug: "type",
    values: ["لباس مجلسی", "پیراهن کوتاه", "کت و شلوار", "شومیز", "شلوار"],
  },
  {
    name: "جنس پارچه",
    slug: "material",
    values: ["پنبه", "ساتن", "مخمل", "لینن", "گیپور"],
  },
  {
    name: "فرم بدن",
    slug: "body-shape",
    values: ["ساعت شنی", "گلابی", "سیب", "مستطیل", "مثلث وارونه"],
  },
  {
    name: "طرح لباس",
    slug: "pattern",
    values: ["ساده", "گل‌دار", "راه‌راه", "طرح‌دار", "براق", "مات"],
  },
];

export default async function seedAttributes() {
  for (const { name, slug, values } of attributes) {
    await db.attribute.create({
      data: {
        name,
        slug,
        values: {
          create: values.map((value) => ({ value })),
        },
      },
    });
  }
}
