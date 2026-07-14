import Badges from "@/features/home/components/Hero/Badges";
import { cn } from "@/lib/utils";
import { BodyXs, H2 } from "@/shared/components/atoms/Typography";
import { Button } from "@/shared/components/ui/button";
import { PropsWithClassName } from "@/shared/types";
import Banners from "./Banners";

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
      <Badges className="mt-3" />

      <Button className="w-65 mt-6">
        <span>مشاهده کالکشن ها</span>
      </Button>

      <Banners className="mt-8" />
    </div>
  );
}
