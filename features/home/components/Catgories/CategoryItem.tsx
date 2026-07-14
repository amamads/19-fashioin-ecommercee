import { Category, Prisma } from "@/generated/prisma/client";
import { H5 } from "@/shared/components/atoms/Typography";
import { Badge } from "@/shared/components/ui/badge";
import Image from "next/image";

export default function CategoryItem({
  category,
}: {
  category: Prisma.CategoryGetPayload<{ include: { badges: true } }>;
}) {
  const { order, imageUrl, name, badges } = category;
  return (
    <div key={order} className="relative">
      <Image
        className="border-primary border rounded-md"
        src={imageUrl as string}
        alt={name}
        height={920}
        width={640}
      />
      <div className="absolute z-10 bottom-2 right-2 space-y-1">
        <H5>{name}</H5>
        <div className="space-x-1">
          {badges.map(({ title, id }) => (
            <Badge
              key={id}
              variant="outline"
              className="relative border-background/40 border-2"
            >
              <span className="z-10 text-background font-light">{title}</span>
              <div className="absolute inset-0 bg-background/15 backdrop-blur-lg" />
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
