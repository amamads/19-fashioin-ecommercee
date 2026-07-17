import { cn } from "@/lib/utils";
import { BodyXs, CaptionSm, H5 } from "@/shared/components/atoms/Typography";
import { Separator } from "@/shared/components/ui/separator";
import { OctagonAlert } from "lucide-react";

export default function CartPaymentDetails() {
  const items = [
    {
      title: "تعداد",
      value: 4,
      suffix: "عدد",
    },
    {
      title: "قیمت کالا",
      value: 9496000,
      suffix: "تومان",
    },
    {
      title: "تخفیف",
      value: 670000,
      suffix: "تومان",
    },
    {
      title: "هزینه ارسال",
      value: 0,
      suffix: "تومان",
    },
    {
      title:
        "هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی شما محاسبه و به این مبلغ اضافه خواهد شد.",
      value: 0,
      suffix: "tip",
    },
    {
      title: "مبلغ پرداخت",
      value: 8826000,
      suffix: "تومان",
    },
  ];
  return (
    <div className="space-y-4">
      <H5>جزئیات پرداخت</H5>
      <Separator />
      <div className="space-y-4">
        {items.map(({ title, value, suffix }, i) =>
          suffix === "tip" ? (
            <CaptionSm key={i} className="flex gap-1 items-center">
              <OctagonAlert className="text-warning-shade-1"/>
              <span className="text-warning-shade-1">{title}</span>
            </CaptionSm>
          ) : (
            <BodyXs
              key={i}
              className={cn(
                "flex justify-between",
                title === "تخفیف" && "text-primary",
              )}
            >
              <span>{title}</span>
              <span>
                {value} {suffix}
              </span>
            </BodyXs>
          ),
        )}
      </div>
      <Separator />
      <CaptionSm>
        کالاهای موجود در سبد شما رزرو و ثبت نشده اند. برای ثبت سفارش مراحل بعدی
        را تکمیل کنید.
      </CaptionSm>
    </div>
  );
}
