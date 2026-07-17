import LabeledButton from "@/shared/components/atoms/LabeldButton";
import { CaptionSm, H5 } from "@/shared/components/atoms/Typography";
import { ChevronDown } from "lucide-react";

export default function DeliveryTime() {
  return (
    <div className="col-flex gap-4">
      <H5>انتخاب زمان ارسال</H5>
      <LabeledButton floatingLabel="تاریخ" className="flex justify-between">
        <CaptionSm>شنبه ۲۱ آبان ۱۴۰۳</CaptionSm>
        <ChevronDown className="text-neutral-8" />
      </LabeledButton>
      <LabeledButton
        floatingLabel="بازه زمانی"
        className="flex justify-between"
      >
        <CaptionSm>ساعت ۹ تا ۱۲</CaptionSm>
        <ChevronDown className="text-neutral-8" />
      </LabeledButton>
    </div>
  );
}
