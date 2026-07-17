import { BodySm } from "@/shared/components/atoms/Typography";
import { Button } from "@/shared/components/ui/button";
import { Separator } from "@/shared/components/ui/separator";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "@/shared/components/ui/sheet";
import { ArrowDownNarrowWide, XIcon } from "lucide-react";

export default function SortSheet() {
    const values = [
        'پرفروش ترین',
        'پر بازدید ترین',
        'محبوب ترین',
        'جدید ترین',
        'قیمت از کم به زیاد',
        'قیمت از زیاد به کم',
    ]
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant='outline' size='icon' className="border-neutral-11">
                    <ArrowDownNarrowWide className="text-neutral-11" />
                </Button>
            </SheetTrigger>
            <SheetContent side="bottom" showCloseButton={false}>
                <div className="col-flex gap-4">
                    <SheetHeader className="flex-row justify-between">
                        <BodySm>مرتب سازی بر اساس</BodySm>
                        <SheetClose >
                            <XIcon className="text-neutral-11"/>
                        </SheetClose>
                    </SheetHeader>
                    <Separator />
                    <main className="col-flex">
                        {values.map(value => (
                            <Button key={value} className="text-right p-2!" variant='ghost'>{value}</Button>
                        ))}
                    </main>
                </div>
            </SheetContent>
        </Sheet>
    );
}
