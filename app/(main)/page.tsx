"use client";
import { faSlugify } from "@/lib/utils";
import Image from "next/image";

export default function HomePage() {
  console.log(
    [
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
    })),
  );
  return (
    <div>
      - hero - Product categoreis - Discounted product - promo banner - comments
      {/* <Button onClick={singInGoogle}>google</Button> */}
      <Image
        src="https://m0fcr61pbt.ufs.sh/f/W80dIrnUS5cJoyEgGwlX2WrIiaB6c5PgbuOvYDAy0kExwtod"
        alt="dress"
        width={200}
        height={100}
      />
      <Image src="/banner 1.png" alt="dress" width={200} height={100} />
    </div>
  );
}
