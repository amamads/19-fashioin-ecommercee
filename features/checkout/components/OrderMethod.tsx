import { H5 } from "@/shared/components/atoms/Typography";
import { Label } from "@/shared/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/shared/components/ui/radio-group";

export default function OrderMethod() {
  return (
    <div className="space-y-4">
      <H5>روش تحویل سفارش</H5>
      <RadioGroup
        className="border rounded-md flex gap-6 p-4"
        defaultValue="courier"
      >
        <div className="flex gap-1">
          <RadioGroupItem value="courier" id="courier-option" />
          <Label htmlFor="courier-option">ارسال توسط پیک</Label>
        </div>
        <div className="flex gap-1">
          <RadioGroupItem value="in-person" id="in-person-option" />
          <Label htmlFor="in-person-option">تحویل حضوری</Label>
        </div>
      </RadioGroup>
    </div>
  );
}
