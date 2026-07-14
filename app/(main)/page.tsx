import Categories from "@/features/home/components/Catgories";
import SaleProducts from "@/features/home/components/DiscountedProduct";
import Hero from "@/features/home/components/Hero";

export default function HomePage() {
  return (
    <div className="py-8 space-y-16">
      {/* <Hero />
      <Categories /> */}
      <SaleProducts />
      {/* - hero - Product categoreis - Discounted product - promo banner -
        comments */}
    </div>
  );
}
