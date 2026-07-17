import { cn } from "@/lib/utils";
import { PropsWithClassName } from "./types";

export default function ColoredSquare({ hex, className }: { hex: string } & PropsWithClassName) {
    return (
        <div
            className={cn(className, "size-5 rounded-xs")}
            style={{ backgroundColor: hex }}
        />
    );
}