import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetTrigger } from "../ui/sheet";

export default function MenuSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="none">
          <Menu className="h-5 p-3.5 box-content text-muted-foreground" />
        </Button>
      </SheetTrigger>
    </Sheet>
  );
}
