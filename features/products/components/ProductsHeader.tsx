'use client'

import { cn } from "@/lib/utils";
import { Caption, H5 } from "@/shared/components/atoms/Typography";
import { Button } from "@/shared/components/ui/button";
import { PropsWithClassName } from "@/shared/types";
import { ArrowDownNarrowWide, ArrowRight, Funnel } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProductsHeader({ className }: PropsWithClassName) {
    const router = useRouter();
    return (
        <div className={cn(className, 'space-y-2')}>
            <H5 className="flex gap-2 items-center">
                <button onClick={() => router.back()}>
                    <ArrowRight className="size-6 text-neutral-11" />
                </button>
                <span>لباس مجلسی میدی</span>
            </H5>
            <div className="flex justify-between items-center">
                <Caption>
                    تعداد محصولات: ۵۶ کالا
                </Caption>
                <div className="space-x-2">
                    <Button variant='outline' size='icon' className="border-neutral-11">
                        <Funnel className="text-neutral-11" />
                    </Button>
                    <Button variant='outline' size='icon' className="border-neutral-11">
                        <ArrowDownNarrowWide className="text-neutral-11" />
                    </Button>
                </div>
            </div>
        </div>
    );
}