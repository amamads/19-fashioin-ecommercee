import Categories from "@/features/home/components/Catgories";
import Comments from "@/features/home/components/Comments";
import SaleProducts from "@/features/home/components/SaleProduct";
import Hero from "@/features/home/components/Hero";
import WhyUsSection from "@/features/home/components/WhyUsSection";

export default function HomePage() {
  return (
    <div className="py-8 space-y-16">
      <Hero />
      <Categories />
      <SaleProducts />
      <WhyUsSection />
      <Comments />
    </div>
  );
}
