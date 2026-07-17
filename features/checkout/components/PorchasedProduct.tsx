import { Size } from "@/generated/prisma/enums";
import { DiscountCalculation } from "@/lib/utils";
import ColoredSquare from "@/shared/ColoredSquare";
import { Caption, CaptionSm } from "@/shared/components/atoms/Typography";
import { Badge } from "@/shared/components/ui/badge";
import Image from "next/image";
import ProductBtns from "./ProductBtn";

const product = {
  id: "cmrfaq5qv0028j87csyh9evfa",
  categoryId: "cmrfaq5is0001j87c6f8ut333",
  comparePrice: 1111000,
  createdAt: "2026-07-10T18:55:42.487+00:00",
  description:
    "لباس میدی دکلته الی با طراحی الهام‌گرفته از استایل‌های کلاسیک و مدرن، انتخابی بی‌نظیر برای خانم‌هایی است که به دنبال ظاهری شیک و همزمان راحت هستند. این لباس از پارچه‌ای نرم و لطیف تهیه شده که به زیبایی روی بدن می‌نشیند. طراحی بدون شانه (دکلته) با خطوطی ساده و جذاب، جلوه‌ای زنانه و ظریف به لباس می‌بخشد.با استفاده از جزئیات مینیمال و ظریفی، این لباس به راحتی با استایل‌های مختلف قابل ترکیب است. این لباس می‌تواند در موقعیت‌های متنوع و مهمانی‌های نیمه‌رسمی، شما را همراهی کند و به استایل شما جلوه‌ای خاص ببخشد.",
  isPublished: true, // تبدیل ۱ به مقدار بولین true
  name: "لباس میدی دکلته الی",
  price: 989000,
  shortDescription:
    "لباس میدی دکلته الی یکی از آیتم‌های شیک و جذاب در دنیای مد زنانه است که به‌طور خاص برای مهمانی‌ها و مناسبت‌های خاص طراحی شده است.",
  slug: "midi-strapless-dress-eli",
  stock: 25,
  updatedAt: "2026-07-10T18:55:42.487+00:00",
  CollectionProduct: null, // به دلیل خالی بودن در ستون مربوطه
  ProductAttribute: null,
  ProductFeature: null,
  ProductImage: null,
  ProductVariant: null,
  Review: null,
  Wishlist: null,
  images: {
    url: "/product-sample.png",
    alt: "لباس میدی دکلته الی - نمای جلو",
    order: 1,
  },
  features: [
    { title: "قابلیت شستشو", value: "با ماشین لباسشویی یا دست" },
    { title: "جنس پارچه", value: "با کیفیت بالا و ضد چروک" },
    { title: "مقاومت", value: "مقاومت در برابر آب" },
  ],
  variants: { hex: "#E86A6A", size: Size.M, stock: 8 },
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

export default function PorchasedProduct() {
  const { name, price, images, comparePrice, variants } = product;

  return (
    <div className="flex gap-2">
      <div className="w-22">
        <Image src={images.url} alt={images.alt} width={150} height={270} />
      </div>
      <div className="space-y-3.75 flex-1">
        <Caption className="font-semibold">{name}</Caption>
        <div className="flex gap-4">
          <CaptionSm>سایز: {variants.size}</CaptionSm>
          <CaptionSm className="flex gap-2">
            <span>رنگ:</span>
            <ColoredSquare hex={variants.hex} />
          </CaptionSm>
        </div>

        <div className="flex justify-between w-full">
          <div>
            <div className="space-x-1">
              <CaptionSm>{comparePrice}</CaptionSm>
              <Badge>{DiscountCalculation(price, comparePrice)}%</Badge>
            </div>
            <Caption>
              <span>{price.toLocaleString()}</span> <span>تومان</span>
            </Caption>
          </div>
          <ProductBtns count={2} />
        </div>
      </div>
    </div>
  );
}
