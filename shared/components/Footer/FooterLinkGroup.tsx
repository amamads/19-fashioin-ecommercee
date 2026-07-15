import Link from "next/link";
import { H5 } from "../atoms/Typography";
import { Button } from "../ui/button";

export default function FooterLinkGroup({
  title,
  items,
}: {
  title: string;
  items: { name: string; href: string }[];
}) {
  
  return (
    <div>
      <div className="flex items-center gap-2.5">
        <div className="rounded-full bg-background size-1.5" />
        <H5 className="text-inherit">{title}</H5>
      </div>
      <ul className="grid">
        {items.map(({ name, href }) => (
          <Link key={name} href={href}>
            <Button size="sm" variant="linkForeground">
              {name}
            </Button>
          </Link>
        ))}
      </ul>
    </div>
  );
}
