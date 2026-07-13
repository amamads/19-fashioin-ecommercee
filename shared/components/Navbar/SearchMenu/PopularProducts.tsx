import { PropsWithClassName } from "@/shared/types";
import { BodySm, BodyXs } from "../../atoms/Typography";
import { Button } from "../../ui/button";
import { cn } from "@/lib/utils";
import Product from "../../Product";

export default function PopularProducts({ className }: PropsWithClassName) {
  return (
    <div className={cn(className)}>
      <header className="flex justify-between items-center">
        <BodyXs>محبوب ترین ها</BodyXs>
        <Button className="px-0" size="sm" variant="ghost">
          مشاهده همه
        </Button>
      </header>
      <div className="flex gap-3 overflow-x-auto">
        {[1, 2, 3, 4].map((i) => (
          <Product key={i} />
        ))}
      </div>
    </div>
  );
}
