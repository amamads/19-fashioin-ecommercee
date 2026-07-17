import ProductsHeader from "@/features/products/components/ProductsHeader";
import ProductsList from "@/features/products/components/ProductsList";

export default function ProductsPage() {
    return (
        <div className="pt-3 pb-16 space-y-6">
            <ProductsHeader />
            <ProductsList />
        </div>
    );
}