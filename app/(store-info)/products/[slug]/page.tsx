import ProductGallery from "@/features/products/components/ProductGallery";
import ProductInfo from "@/features/products/components/ProductInfo";
import { Size } from "@/generated/prisma/enums";

const product = {
    id: "cmrfaq5qv0028j87csyh9evfa",
    categoryId: "cmrfaq5is0001j87c6f8ut333",
    comparePrice: 1111000,
    createdAt: "2026-07-10T18:55:42.487+00:00",
    description: "لباس میدی دکلته الی با طراحی الهام گرفته از استایل‌های کلاسیک و مدرن، انتخابی بی‌نظیر برای خانم‌هایی است که به دنبال ظاهری شیک و همزمان راحت هستند...",
    isPublished: true, // تبدیل ۱ به مقدار بولین true
    name: "لباس میدی دکلته الی",
    price: 989000,
    shortDescription: "لباس مِیدی دکلته الی یکی از آیتم‌های شیک و جذاب در دنیای مد زنانه است.",
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
            url: "/banner-1.png",
            alt: "لباس میدی دکلته الی - نمای جلو",
            order: 1,
        },
        {
            url: "/banner-2.png",
            alt: "لباس میدی دکلته الی - نمای پشت",
            order: 2,
        },
        {
            url: "/banner-3.png",
            alt: "لباس میدی دکلته الی - نمای بغل",
            order: 3,
        },
        {
            url: "/banner-4.png",
            alt: "لباس میدی دکلته الی - جزئیات پارچه",
            order: 4,
        },
        {
            url: "/banner-4.png",
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

export default function ProductDetailsPage() {
    return (
        <div className="space-y-4 pb-9">
            <ProductGallery images={product.images} />
            <ProductInfo />
        </div>
    );
}