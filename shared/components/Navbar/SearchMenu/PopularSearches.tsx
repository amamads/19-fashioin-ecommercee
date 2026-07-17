import { cn } from "@/lib/utils";
import { PropsWithClassName } from "@/shared/types";
import { ChevronLeft } from "lucide-react";
import { BodyXs } from "../../atoms/Typography";
import { Badge } from "../../ui/badge";

export default function PopularSearches({ className }: PropsWithClassName) {
  const smaple = [1, 2, 3, 4];
  return (
    <div className={cn(className, "space-y-4")}>
      <BodyXs>جستجو های پرطرفدار</BodyXs>

      <div className="space-x-2">
        {smaple.map((s) => (
          <Badge variant="secondary" key={s}>
            <span>دخترانه</span>
            <ChevronLeft className="text-neutral-10" />
          </Badge>
        ))}
      </div>
    </div>
  );
}
