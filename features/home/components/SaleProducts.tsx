"use client";

import { H5 } from "@/shared/components/atoms/Typography";
import Product from "@/shared/components/Product";
import ScrollXAreaWithBtns from "@/shared/components/ScrollXAreaWithBtns";
import { PropsWithClassName } from "@/shared/types";
import { BadgePercent } from "lucide-react";

export default function SaleProducts({ className }: PropsWithClassName) {
  return (
    <ScrollXAreaWithBtns className={className} header={
      <H5 className="flex gap-2">
        <BadgePercent className="size-5" />
        <span>محصولات تخفیف‌دار</span>
      </H5>
    }>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
        <Product key={i} />
      ))}
    </ScrollXAreaWithBtns>
  );
}