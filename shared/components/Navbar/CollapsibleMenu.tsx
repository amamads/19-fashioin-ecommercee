import { cn } from "@/lib/utils";
import { PropsWithClassName, PropsWithOpen } from "@/shared/types";
import { PropsWithChildren } from "react";
export default function CollapsibleMenu({
  children,
  className,
  open,
}: PropsWithClassName & PropsWithChildren & PropsWithOpen) {
  return (
    <menu
      className={cn(
        className,
        "w-full px-default py-6 absolute top-full bg-background z-10",
        open ? "max-h-8000 transition-show" : "max-h-0 transition-hide",
      )}
    >
      {children}
    </menu>
  );
}
