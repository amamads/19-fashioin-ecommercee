import { H5 } from "@/shared/components/atoms/Typography";
import { Textarea } from "@/shared/components/ui/textarea";

export default function OrderNote() {
  return (
    <div className="space-y-4">
      <H5>{"توضیحات سفارش (اختیاری)"}</H5>
      <Textarea placeholder="توضیحات سفارش" className="p-4 min-h-36.5"/>
    </div>
  );
}
