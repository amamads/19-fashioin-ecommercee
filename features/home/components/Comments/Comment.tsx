import {
    BodySm,
    Caption,
    CaptionSm,
} from "@/shared/components/atoms/Typography";
import { Avatar, AvatarImage } from "@/shared/components/ui/avatar";
import { Ampersands } from "lucide-react";
import { FaStar } from "react-icons/fa";

export default function Comment() {
  return (
    <div className="min-w-64.5">
      <header className="flex justify-between">
        <div className="flex gap-2">
          <Avatar className="size-12">
            <AvatarImage src="/sample2.png" className="rounded-md" />
          </Avatar>
          <div>
            <BodySm>علی راد</BodySm>
            <CaptionSm className="text-neutral-11!">تهران</CaptionSm>
          </div>
        </div>

        <Ampersands className="size-8 rotate-180 text-neutral-5" />
      </header>
      <main className="mt-4">
        <Caption>سفارش راحت و بی‌دردسر</Caption>
        <CaptionSm className="text-neutral-11! text-justify" as='p'>
          همه‌چیز دقیقاً همون‌طوری بود که تصور می‌کردم! از انتخاب پارچه گرفته تا
          جزئیات مدل، می‌شد همه چیز رو طبق سلیقه شخصی تنظیم کنم، خرید راحت و
          بدون استرسی بود.
        </CaptionSm>
      </main>
      <footer className="flex gap-1 mt-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <FaStar key={i} className="text-primary" />
        ))}
      </footer>
    </div>
  );
}
