"use client";
import { faSlugify } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Button } from "../../ui/button";
import { useRouter } from "next/navigation";
import paths from "@/shared/paths";
import { useNavbarStore, selectCloseMenus } from "@/shared/stores/navbarStore";
import React from "react";

export default function CategoryMenu() {
  const router = useRouter();
  const closeMenus = useNavbarStore(selectCloseMenus);

  const categories = [
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

  function btnOnClick(slug: string) {
    // router.push(paths.main.store.productShow(slug));
    router.push(paths.main.store.products);
    closeMenus();
  }

  return (
    <div className="col-flex">
      <Accordion type="single" collapsible>
        {categories.map(({ name, subCategories, order }) => (
          <AccordionItem value={name} key={order}>
            <AccordionTrigger>{name}</AccordionTrigger>
            <AccordionContent className="grid justify-start">
              {subCategories.map(({ name, slug }) => (
                <Button
                  onClick={btnOnClick.bind(null, slug)}
                  variant="ghost"
                  className="w-full px-4"
                  key={slug}
                >
                  {name}
                </Button>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
