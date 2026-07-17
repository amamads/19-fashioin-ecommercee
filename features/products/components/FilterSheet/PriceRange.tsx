import { Caption } from "@/shared/components/atoms/Typography";
import { Button } from "@/shared/components/ui/button";
import { ButtonGroup } from "@/shared/components/ui/button-group";
import { Input } from "@/shared/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/shared/components/ui/input-group";
import { Slider } from "@/shared/components/ui/slider";
import { useState } from "react";

export default function PriceRange() {
    const [minPrice, setMinPrice] = useState(1_000_000);
    const [maxPrice, setMaxPrice] = useState(5_000_000);

    return (
        <div className="pt-6">
            <Slider
                value={[minPrice, maxPrice]}
                onValueChange={([min, max]) => {
                    setMinPrice(min);
                    setMaxPrice(max);
                }}
                max={10_000_000}
                step={500_000}
            />

            <div className="flex items-center justify-between gap-2 mt-4">
                <InputGroup className='w-40 rounded-sm flex px-3 h-10'>
                    <InputGroupInput
                        type="number"
                        value={minPrice}
                        onChange={(e) => setMinPrice(Number(e.target.value))}
                        className=""
                    />
                    <InputGroupAddon align='inline-end' className='text-foreground font-normal p-0!'>
                        تومان
                    </InputGroupAddon>
                </InputGroup>

                <Caption>تا</Caption>

                <InputGroup className='w-40 rounded-sm flex px-3 h-10'>
                    <InputGroupInput

                        type="number"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                    />
                    <InputGroupAddon align='inline-end' className='text-foreground font-normal p-0!'>
                        تومان
                    </InputGroupAddon>
                </InputGroup>
            </div>
        </div>
    );
}