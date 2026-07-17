import { cn } from "@/lib/utils";
import { PropsWithOpen } from "@/shared/types";
import { LucideIcon, XIcon } from "lucide-react";
import { Button } from "../ui/button";

export default function MenuBtn({
  open,
  toggleOpen,
  icon: Icon,
}: PropsWithOpen & {
  toggleOpen: () => void;
  icon: LucideIcon;
}) {
  return (
    <Button variant="ghost" size="none" onClick={() => toggleOpen()}>
      <XIcon
        className={cn(
          "h-5 p-3.5 box-content text-muted-foreground absolute",
          open ? "transition-show" : "transition-hide",
        )}
      />
      <Icon
        className={cn(
          "h-5 p-3.5 box-content text-muted-foreground",
          open ? "transition-hide" : "transition-show",
        )}
      />
    </Button>
  );
}
