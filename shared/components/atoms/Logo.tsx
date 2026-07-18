import { cn } from "@/lib/utils";
import paths from "@/shared/paths";
import { PropsWithClassName } from "@/shared/types";
import Image from "next/image";
import Link from "next/link";

export default function Logo({className}:PropsWithClassName) {
  return (
    <Link href={paths.home}>
      <div className={cn("relative size-10", className)}>
        <Image
          src="/logo4.png"
          alt="ams logo"
          fill
          className="object-contain"
        />
      </div>
    </Link>
  );
}
