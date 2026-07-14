"use client";

import { cn } from "@/lib/utils";
import { H5 } from "@/shared/components/atoms/Typography";
import Product from "@/shared/components/Product";
import { Button } from "@/shared/components/ui/button";
import { PropsWithClassName } from "@/shared/types";
import { ArrowLeft, ArrowRight, BadgePercent } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function SaleProducts({ className }: PropsWithClassName) {
  // const scrollRef = useRef<HTMLDivElement>(null);
  // const scrollRight = () =>
  //   scrollRef.current?.scrollBy({
  //     behavior: "smooth",
  //     left: 200,
  //   });
  // const scrollLeft = () =>
  //   scrollRef.current?.scrollBy({
  //     behavior: "smooth",
  //     left: -200,
  //   });

  // const [canScrollLeft, setCanScrollLeft] = useState(true);
  // const [canScrollRight, setCanScrollRight] = useState(false);

  // const updateButtons = () => {
  //   const el = scrollRef.current;
  //   if (!el) return;

  //   setCanScrollLeft(el.scrollLeft > 0);

  //   setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  // };

  // useEffect(() => {
  //   const el = scrollRef.current;
  //   if (!el) return;

  //   updateButtons();

  //   el.addEventListener("scroll", updateButtons);
  //   window.addEventListener("resize", updateButtons);

  //   return () => {
  //     el.removeEventListener("scroll", updateButtons);
  //     window.removeEventListener("resize", updateButtons);
  //   };
  // }, []);
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
            // onClick={scrollRight}
            // disabled={!canScrollRight}
          >
            <ArrowRight />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="border-neutral-8 text-neutral-11"
            // onClick={scrollLeft}
            // disabled={!canScrollLeft}
          >
            <ArrowLeft />
          </Button>
        </div>
      </header>
      <div
        className="flex overflow-x-auto gap-3 no-scrollbar"
        ref={scrollRef}
        dir="rtl"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <div key={i} dir="rtl">
            <Product key={i} />
          </div>
        ))}
      </div>
    </div>
  );
}
