import { cn } from "@/lib/utils";
import { PropsWithClassName } from "@/shared/types";
import Image from "next/image";

export default function Banners({ className }: PropsWithClassName) {
  const _banners = [
    {
      title: "banner-3",
      imageUrl: "/banner-3.png",
      order: 1,
    },
    {
      title: "banner-2",
      imageUrl: "/banner-2.png",
      order: 2,
    },
    {
      title: "banner-4",
      imageUrl: "/banner-4.png",
      order: 4,
    },
    {
      title: "banner-1",
      imageUrl: "/banner-1.png",
      order: 3,
    },
  ];
  const banners = _banners.sort((a, b) => a.order - b.order);

  return (
    <div className={cn(className, "flex gap-3 overflow-x-auto no-scrollbar")}>
      {banners.map(({ title, imageUrl }) => (
        <div
          key={title}
          className="size-37.5 shrink-0  relative rounded-md overflow-hidden"
        >
          <Image
            alt={title}
            src={imageUrl}
            className="object-cover"
            fill
          />
        </div>
      ))}
    </div>
  );
}
