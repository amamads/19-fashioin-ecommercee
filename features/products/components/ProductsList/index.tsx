import { cn, generateNumbers } from "@/lib/utils";
import Product from "@/shared/components/Product";
import { PropsWithClassName } from "@/shared/types";

export default function ProductsList({ className }: PropsWithClassName) {
    return (
        <div className={cn(className, 'grid grid-cols-2 gap-x-4 gap-y-6')}>
            {
                generateNumbers(12).map(i => (
                    // [1,2,3].map(i => (
                    <Product key={i} />
                ))
            }
        </div>
    );
}