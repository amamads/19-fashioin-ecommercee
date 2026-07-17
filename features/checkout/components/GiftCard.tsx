import LabeledInput from "@/shared/components/atoms/LabeledInput";
import { H5 } from "@/shared/components/atoms/Typography";
import { Button } from "@/shared/components/ui/button";

export default function GiftCard() {
    return (
        <div className="space-y-4">
            <H5>کد تخفیف یا کارت هدیه</H5>
            <div className="flex gap-2">
                <LabeledInput floatingLabel="کد تخفیف" placeholder="کد تخفیف"/>
                <Button variant='outline'>اعمال کد</Button>
            </div>
        </div>
    );
}