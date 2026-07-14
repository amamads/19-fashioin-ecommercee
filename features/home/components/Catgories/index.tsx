import { cn } from "@/lib/utils";
import { H5 } from "@/shared/components/atoms/Typography";
import { Badge } from "@/shared/components/ui/badge";
import { PropsWithClassName } from "@/shared/types";
import Image from "next/image";

export default function Categories({ className }: PropsWithClassName) {
  const categories = [
    {
      name: "پیراهن کوتاه",
      subCategories: ["مجلسی", "مخمل", "ساده", "گیپور"],
      imageUrl: "/category.jpg",
      badges: ["دخترانه", "مناسب مهمانی"],
      order: 1,
    },
    {
      name: "شلوار",
      subCategories: ["کلاسیک", "جین", "مام استایل", "مجلسی"],
      imageUrl: "/category.jpg",
      badges: ["استایل روزمره", "رسمی"],
      order: 2,
    },
    {
      name: "کت و جلیقه",
      subCategories: ["جین", "مازراتی", "رسمی"],
      imageUrl: "/category.jpg",
      badges: ["کلاسیک", "مینیمال"],
      order: 4,
    },
    {
      name: "تاپ و کراپ",
      subCategories: ["جلو زیپ", "ورزشی", "بند دار", "بدون فنر"],
      imageUrl: "/category.jpg",
      badges: ["مجلسی", "روزمره"],
      order: 7,
    },
    {
      name: "سرهمی",
      subCategories: ["جین", "ابر و بادی", "مجلسی"],
      imageUrl: "/category.jpg",
      badges: ["روزمره", "کالکشن جدید"],
      order: 3,
    },
    {
      name: "شومیز و بلوز",
      subCategories: ["بافت", "کبریتی", "نخی", "ساحلی"],
      imageUrl: "/category.jpg",
      badges: ["تمام فصول", "کژوال"],
      order: 6,
    },
    {
      name: "ترنچ کت و پالتو",
      subCategories: ["کلاه‌دار", "بارانی", "کوتاه", "چرم"],
      imageUrl: "/category.jpg",
      badges: ["گرم و سبک", "مدرن"],
      order: 8,
    },
    {
      name: "دامن",
      subCategories: ["راسته", "بلند", "کوتاه"],
      imageUrl: "/category.jpg",
      badges: ["تابستانه", "پاییز"],
      order: 5,
    },
  ].sort((a, b) => a.order - b.order);
  return (
    <div className={cn(className, "space-y-6")}>
      <H5>دسته بندی محصولات</H5>
      <div className="grid grid-cols-2 gap-4">
        {categories.map(({ name, imageUrl, order, badges }) => (
          <div key={order} className="relative">
        {categories.map(({ name, imageUrl, order, badges }) => (
          <div key={order} className="relative">
            <Image
              className="border-primary border rounded-md"
              src={imageUrl}
              alt={name}
              height={920}
              width={640}
            />
            <div className="absolute z-10 bottom-2 right-2 space-y-1">
              <H5>{name}</H5>
              <div className="space-x-1">
                {badges.map((badge) => (
                  <Badge
                    key={badge}
                    variant="outline"
                    className="relative border-background/40 border-2"
                  >
                    <span className="z-10 text-background font-light">
                      {badge}
                    </span>
                    <div className="absolute inset-0 bg-background/15 backdrop-blur-lg" />
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
