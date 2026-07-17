import { cn } from "@/lib/utils";
import { CaptionSm, H5, H6 } from "@/shared/components/atoms/Typography";
import { PropsWithClassName } from "@/shared/types";
import { Headphones, Ruler, Sparkles, ThumbsUp } from "lucide-react";
import Image from "next/image";

export default function WhyUsSection({ className }: PropsWithClassName) {
  const items = [
    {
      icon: Ruler,
      title: "طراحی منحصر به‌فرد",
      description:
        "هر لباس با طراحی سفارشی برای شما آماده می‌شود. ما با الهام از استایل شما، بهترین لباس‌ها را خلق می‌کنیم.",
    },
    {
      icon: ThumbsUp,
      title: "دوخت حرفه‌ای و اختصاصی",
      description:
        "تیم خیاطی ما هر لباس را با دقت و تخصص کامل می‌دوزد، تا لباسی با بالاترین استانداردهای دوخت داشته باشید.",
    },
    {
      icon: Sparkles,
      title: "تعهد به کیفیت",
      description:
        "ما به ارائه لباس‌هایی با بالاترین کیفیت پارچه و دوخت افتخار می‌کنیم، تمام مراحل تولید با دقت تمام انجام می‌شود.",
    },
    {
      icon: Headphones,
      title: "پشتیبانی آنلاین و حضوری",
      description:
        "تیم ما همیشه آماده است تا به سوالات شما پاسخ دهد و در انتخاب و خرید لباس مورد نظرتان به شما کمک کند.",
    },
  ];
  return (
    <div className={cn(className, "bg-neutral-1 space-y-6")}>
      <header className="space-y-2">
        <H5>
          کشف شیک پوشی با
          <span className="text-primary"> رگال</span>
        </H5>
        <CaptionSm className="text-justify! text-neutral-11!" as="p">
          رگال جایی است که مد سلطنتی با ظرافت مدرن پیوند می‌خورد. ما مجموعه‌ای
          از لباس‌های بی‌نظیر و منحصر به فرد را برای بانوان باوقار و شیک‌پوش
          ارائه می‌دهیم که با انتخاب آن‌ها، اعتماد به نفس و زیبایی شما بیش از
          پیش نمایان خواهد شد.
        </CaptionSm>
      </header>
      <main className="grid grid-cols-2 gap-4">
        {items.map(({ icon: Icon, title, description }, i) => (
          <div key={i}>
            <Icon className="size-5 text-neutral-8" />
            <H6 className="mt-4">{title}</H6>
            <CaptionSm className="mt-2 text-justify text-neutral-11!" as="p">
              {description}
            </CaptionSm>
          </div>
        ))}
      </main>
      <footer className="grid grid-cols-2 gap-3">
        {[1, 2, 3].map((i) => (
          <Image
            key={i}
            src="/category.jpg"
            alt="sample"
            width={640}
            height={920}
            className={cn(
              i === 1 && "row-span-2",
              "size-full object-cover rounded-md",
            )}
          />
        ))}
      </footer>
    </div>
  );
}
