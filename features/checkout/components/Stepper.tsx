import { cn } from "@/lib/utils";
import { ShoppingBag } from "lucide-react";
import { FaRegCreditCard } from "react-icons/fa";
import { TbPencilPlus } from "react-icons/tb";
export default function Stepper({ step }: { step: 1 | 2 | 3 }) {
    return (
        <div className="flex text-neutral-6 items-center gap-2">
            <ShoppingBag className={cn("size-5", step >= 1 && 'text-primary')} />

            <div className={cn("border-b-2 border-dashed flex-1", step >= 2 && 'border-primary')} />

            <TbPencilPlus className={cn("size-5", step >= 2 && 'text-primary')} />

            <div className={cn("border-b-2 border-dashed flex-1", step >= 3 && 'border-primary')} />

            <FaRegCreditCard className={cn("size-5", step >= 3 && 'text-primary')} />

        </div>
    );
}