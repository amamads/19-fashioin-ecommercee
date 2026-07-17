import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { FieldLabel } from "../ui/field";

type Props = {
  floatingLabel: string;
  children?: React.ReactNode;
} & React.ComponentProps<typeof Button>;

export default function LabeledButton({
  floatingLabel,
  children,
  className,
  ...props
}: Props) {
  return (
    <Button
      className={cn(className, "relative w-full p-4")}
      variant="outline"
      size='none'
      {...props}
    >
      <FieldLabel className="absolute text-neutral-10 right-5 -translate-y-1/2 bg-background px-1 transition-all opacity-100 top-0 text-xs max-w-fit">
        {floatingLabel}
      </FieldLabel>
      {children}
    </Button>
  );
}
