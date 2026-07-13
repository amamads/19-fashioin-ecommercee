import { cn } from "@/lib/utils";
import { Badge } from "@/shared/components/ui/badge";
import { PropsWithClassName } from "@/shared/types";

export default function HeroBadges({ className }: PropsWithClassName) {
  const badgesName = [
    "کالکشن های متنوع",
    "مد و فشن",
    "استایل های خاص",
    "رنگ بندی های جذاب",
  ];
  return (
    <div className={cn(className, "flex overflow-x-auto pb-1")}>
      {badgesName.map((name, i) => (
        <Badge variant="secondary" key={i} className="border-neutral-4">
          {name}
        </Badge>
      ))}
    </div>
  );
}
