import { Size } from "@/generated/prisma/enums";
import { cn } from "@/lib/utils";
import { BodyXs, Caption, CaptionSm, H4, H6 } from "@/shared/components/atoms/Typography";
import { Button } from "@/shared/components/ui/button";
import { PropsWithClassName } from "@/shared/types";
import { Heart, Share, ShoppingCart } from "lucide-react";
import ColorCheckbox from "../atoms/ColorCheckbox";
import { SizeCheckbox } from "../atoms/SizeCheckbox";
import ProductRating from "./ProductRating";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shared/components/ui/accordion";
import Comments from "@/features/home/components/Comments";

const product = {
    id: "cmrfaq5qv0028j87csyh9evfa",
    categoryId: "cmrfaq5is0001j87c6f8ut333",
    comparePrice: 1111000,
    createdAt: "2026-07-10T18:55:42.487+00:00",
    description: "لباس میدی دکلته الی با طراحی الهام‌گرفته از استایل‌های کلاسیک و مدرن، انتخابی بی‌نظیر برای خانم‌هایی است که به دنبال ظاهری شیک و همزمان راحت هستند. این لباس از پارچه‌ای نرم و لطیف تهیه شده که به زیبایی روی بدن می‌نشیند. طراحی بدون شانه (دکلته) با خطوطی ساده و جذاب، جلوه‌ای زنانه و ظریف به لباس می‌بخشد.با استفاده از جزئیات مینیمال و ظریفی، این لباس به راحتی با استایل‌های مختلف قابل ترکیب است. این لباس می‌تواند در موقعیت‌های متنوع و مهمانی‌های نیمه‌رسمی، شما را همراهی کند و به استایل شما جلوه‌ای خاص ببخشد.",
    isPublished: true, // تبدیل ۱ به مقدار بولین true
    name: "لباس میدی دکلته الی",
    price: 989000,
    shortDescription: "لباس میدی دکلته الی یکی از آیتم‌های شیک و جذاب در دنیای مد زنانه است که به‌طور خاص برای مهمانی‌ها و مناسبت‌های خاص طراحی شده است.",
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


export default function ProductInfo({ className }: PropsWithClassName) {
    const { name, price, comparePrice, description, variants, shortDescription, features } = product

    return (

        <div className={cn("col-flex gap-4", className)}>
            <header className="space-y-1">
                <div className="flex justify-between items-center">
                    <H4>{name}</H4>
                    <div className="space-x-2">
                        <Button variant="outline" size='icon'><Share /></Button>
                        <Button variant="outline" size='icon'><Heart /></Button>
                    </div>
                </div>
                <div className="flex gap-2">
                    <ProductRating value={4} />
                    <Caption>(۵۶ نظر)</Caption>
                </div>
            </header>
            <div className="flex gap-2 items-center">
                {comparePrice &&
                    <CaptionSm className="line-through">{comparePrice.toLocaleString()}</CaptionSm>
                }
                <H6>
                    <span>{price.toLocaleString()}</span>
                    {' '}
                    <span>تومان</span>
                </H6>
            </div>
            <div className="space-y-2">
                <BodyXs>
                    {shortDescription}

                </BodyXs>
                <div className="col-flex gap-1">
                    {features.map(({ title, value }) => (
                        <CaptionSm key={title}>
                            <span>{title}</span>
                            :
                            <span>{value}</span>
                        </CaptionSm>
                    ))}
                </div>
            </div>
            <div className="space-y-1.5">
                <BodyXs>رنگ بندی:</BodyXs>
                <div className="flex gap-2">
                    {variants.map(({ hex }) => (
                        <ColorCheckbox hex={hex} key={hex} />
                    ))}
                </div>
            </div>
            <div className="space-y-1.5">
                <BodyXs>سایز بندی:</BodyXs>
                <div className="flex gap-2">
                    {variants.map(({ size }) => (
                        <SizeCheckbox size={size} key={size} />
                    ))}
                </div>
            </div>
            <Button className="">
                <ShoppingCart className="size-5" />
                <span>افزودن به سبد خرید</span>
            </Button>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="description">
                    <AccordionTrigger>توضیحات محصول</AccordionTrigger>
                    <AccordionContent>{description}</AccordionContent>
                </AccordionItem>
                <AccordionItem value="comments">
                    <AccordionTrigger>نظرات مشتریان</AccordionTrigger>
                    <AccordionContent>
                        <Comments />
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}