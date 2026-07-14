import { cn } from "@/lib/utils";
import { PropsWithClassName } from "../types";
import Image from "next/image";
import { BodySm } from "./atoms/Typography";
import { Heart } from "lucide-react";

export default function Product({ className }: PropsWithClassName) {
  const colors = [
      { name: "مشکی", hex: "#2A0505" },
      { name: "قهوه‌ای", hex: "#7C6666" },
      { name: "قهوه‌ای روشن", hex: "#A77A78" },
      { name: "گلبهی", hex: "#F6A68B" },
    ],
    price = 3_502_000;
  return (
    <div className={cn(className, "space-y-2.5")} dir="rtl">
      <div className="relative">
        <Image
          src="/product-image2.png"
          alt="product"
          className="min-w-41.75"
          width={167}
          height={239}
        />
        <button className="absolute top-3 right-3">
          <Heart className="size-6 text-neutral-8" />
        </button>
      </div>
      <BodySm>لباس میدی مدرن رایا</BodySm>
      <div className="flex gap-1">
        {colors.map(({ hex }) => (
          <div
            key={hex}
            className="size-5 rounded-xs"
            style={{ backgroundColor: hex }}
          />
        ))}
      </div>
      <BodySm>
        <span>{price.toLocaleString("fa")}</span>
        <span>تومان</span>
      </BodySm>
    </div>
  );
}
