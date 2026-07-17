import { cn } from "@/lib/utils";
import { Checkbox } from "@/shared/components/ui/checkbox";
import { PropsWithClassName } from "@/shared/types";

export default function ColorCheckbox({ hex, className }: { hex: string } & PropsWithClassName) {
    return (
        <Checkbox
            key={hex}
            style={{
                "--local-color": hex
            } as React.CSSProperties}
            className={
                cn(className, "size-8 border-0 transition-all bg-(--local-color)! data-checked:outline-(--local-color)! data-checked:brightness-90! ")
            }
            childClassName="[&>svg]:size-2.5"
        />
    );
}