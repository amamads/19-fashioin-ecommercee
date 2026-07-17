
import { bodyShapeOptions, clothingDesignOptions, fabricMaterialOpions, typeOfClothingOptions } from "@/features/products/consts";
import { BodySm } from "@/shared/components/atoms/Typography";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/shared/components/ui/accordion";
import { Button } from "@/shared/components/ui/button";
import { Separator } from "@/shared/components/ui/separator";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/shared/components/ui/sheet";
import { Funnel, XIcon } from "lucide-react";
import React from "react";
import FilterCheckboxGroup from "../FilterCheckboxGroup";
import Coloring from "./Coloring";
import Sizing from "./Sizing";
import PriceRange from "./PriceRange";


export default function FiltersSheet() {
    const values = [
        {
            title: 'نوع لباس',
            content: <FilterCheckboxGroup options={typeOfClothingOptions} />
        },
        {
            title: 'رنگ بندی',
            content: <Coloring />
        },
        {
            title: 'سایز بندی',
            content: <Sizing />
        },
        {
            title: 'جنس پارچه',
            content: <FilterCheckboxGroup options={fabricMaterialOpions} />
        },
        {
            title: 'فرم بدن',
            content: <FilterCheckboxGroup options={bodyShapeOptions} />
        },
        {
            title: 'طرح لباس',
            content: <FilterCheckboxGroup options={clothingDesignOptions} />
        },
        {
            title: 'قیمت',
            content: <PriceRange />
        }
    ]
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant='outline' size='icon' className="border-neutral-11">
                    <Funnel className="text-neutral-11" />
                </Button>
            </SheetTrigger>
            <SheetContent side="bottom" showCloseButton={false} className="min-h-screen px-default gap-0 pb-6">
                <header className="flex gap-2 items-center py-4">
                    <SheetClose>
                        <XIcon className="text-neutral-11 size-5" />
                    </SheetClose>
                    <BodySm>فیلتر ها</BodySm>
                </header>
                <Separator />
                <Accordion type="multiple" className="flex-1">
                    {values.map(({ title, content }) => (
                        <React.Fragment key={title}>
                            <AccordionItem value={title} key={title}>
                                <AccordionTrigger className="pb-4 pt-6">{title}</AccordionTrigger>
                                <AccordionContent className="max-h-screen!">
                                    {content}
                                </AccordionContent>
                            </AccordionItem>
                            <Separator className="invisible last:visible" />
                        </React.Fragment>
                    ))}
                </Accordion>
                <footer className="flex gap-4">
                    <Button className="flex-1" variant='outline'>حذف فیلتر ها</Button>
                    <Button className="flex-1">اعمال کنید</Button>
                </footer>
            </SheetContent>
        </Sheet>
    );
}
