import db from "@/db";
import { faSlugify } from "@/lib/utils";

const categories = [
  {
    name: "پیراهن کوتاه",
    slug: faSlugify("پیراهن کوتاه"),
  },
  {
    name: "پیراهن بلند",
    slug: faSlugify("پیراهن بلند"),
  },
  {
    name: "شلوار",
    slug: faSlugify("شلوار"),
  },
  {
    name: "دامن",
    slug: faSlugify("دامن"),
  },
  {
    name: "کت و جلیقه",
    slug: faSlugify("کت و جلیقه"),
  },
  {
    name: "تاپ و کراپ",
    slug: faSlugify("تاپ و کراپ"),
  },
  {
    name: "سرهمی",
    slug: faSlugify("سرهمی"),
  },
  {
    name: "شومیز و بلوز",
    slug: faSlugify("شومیز و بلوز"),
  },
  {
    name: "ترنچ کت و پالتو",
    slug: faSlugify("ترنچ کت و پالتو"),
  },
  {
    name: "هودی و سویشرت",
    slug: faSlugify("هودی و سویشرت"),
  },
  {
    name: "بافت و پلیور",
    slug: faSlugify("بافت و پلیور"),
  },
  {
    name: "ست لباس",
    slug: faSlugify("ست لباس"),
  },
  {
    name: "لباس راحتی",
    slug: faSlugify("لباس راحتی"),
  },
  {
    name: "لباس ورزشی",
    slug: faSlugify("لباس ورزشی"),
  },
];

export default async function seedCategories() {
  await db.category.createMany({
    data: categories,
  });
}
