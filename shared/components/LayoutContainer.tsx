import { PropsWithChildren } from "react";
import { PropsWithClassName } from "../types";
import { cn } from "@/lib/utils";

export default function LayoutContainer({
  children,
  className,
}: PropsWithChildren & PropsWithClassName) {
  return (
    <div className={cn(className, "px-default")}>{children}</div>
  );
}
