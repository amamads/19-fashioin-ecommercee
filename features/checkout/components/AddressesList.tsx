import { BodyXs, H5 } from "@/shared/components/atoms/Typography";
import { Button } from "@/shared/components/ui/button";
import { Card } from "@/shared/components/ui/card";

export default function AddressesList() {
    return (
        <div className="space-y-4">
            <H5>لیست آدرس ها</H5>
            <Card className="items-center gap-6">
                <BodyXs>شما در حال خاظر هیچ آدرسی ثبت نکرده اید!</BodyXs>
                <Button>افزدون آدرس</Button>
            </Card>
        </div>
    );
}