import { PropsWithClassName } from "@/shared/types";
import { BodyXs } from "../../atoms/Typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import CollapsibleMenu from "../CollapsibleMenu";

export default function MainMenu({
  open,
}: PropsWithClassName & { open: boolean }) {
  const items = ["صفحه اصلی", "دسته بندی ها", "تخفیف دار ها", "درباره ما"];
  return (
    <CollapsibleMenu open={open}>
      <Accordion type="single" collapsible>
        {items.map((item) => (
          <AccordionItem value={item} key={item}>
            <AccordionTrigger className="cursor-pointer">
              <BodyXs className="text-neutral-13">{item}</BodyXs>
            </AccordionTrigger>
            <AccordionContent>{item}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </CollapsibleMenu>
  );
}
