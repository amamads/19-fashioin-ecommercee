"use client";

import { cn } from "@/lib/utils";
import { H5 } from "@/shared/components/atoms/Typography";
import { Button } from "@/shared/components/ui/button";
import { PropsWithClassName } from "@/shared/types";
import { ArrowLeft, ArrowRight, BadgePercent } from "lucide-react";
import { PropsWithChildren, useRef } from "react";

export default function ScrollXAreaWithBtns({ className, children }: PropsWithClassName & PropsWithChildren) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const scrollRight = () =>
        scrollRef.current?.scrollBy({
            behavior: "smooth",
            left: 200,
        });
    const scrollLeft = () =>
        scrollRef.current?.scrollBy({
            behavior: "smooth",
            left: -200,
        });
    return (
        <div className={cn(className, "col-flex gap-6")}>
            <header className="flex justify-between items-center">
                <H5 className="flex gap-2">
                    <BadgePercent className="size-5" />
                    <span>محصولات تخفیف‌دار</span>
                </H5>
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="icon"
                        className="border-neutral-8 text-neutral-11"
                        onClick={scrollRight}
                    >
                        <ArrowRight />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="border-neutral-8 text-neutral-11"
                        onClick={scrollLeft}
                    >
                        <ArrowLeft />
                    </Button>
                </div>
            </header>
            <div
                className="flex overflow-x-auto gap-3 no-scrollbar"
                ref={scrollRef}
            >
                {children}
            </div>
        </div>
    );
}
