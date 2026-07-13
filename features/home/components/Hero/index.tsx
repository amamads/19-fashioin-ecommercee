import HeroBadges from "@/features/home/components/Hero/HeroBadges";
import { cn } from "@/lib/utils";
import { BodyXs, H2 } from "@/shared/components/atoms/Typography";
import { Button } from "@/shared/components/ui/button";
import { PropsWithClassName } from "@/shared/types";
import HeroBanners from "./HeroBanners";

export default function Hero({ className }: PropsWithClassName) {
  return (
    <div>
      <H2 className={cn(className)}>
        لباس‌هایی که <span className="bg-primary-tint-1 px-1">داستان</span> شما
        را روایت می‌کنند
      </H2>
      <BodyXs className="mt-2">
        هر لباس با دقت و عشق طراحی شده تا به شما احساس زیبایی و اعتماد به نفس
        بدهد.
      </BodyXs>
      <HeroBadges className="mt-3" />

      <Button className="w-65 mt-6">
        <span>مشاهده کالکشن ها</span>
      </Button>

      <HeroBanners className="mt-8" />
    </div>
  );
}
