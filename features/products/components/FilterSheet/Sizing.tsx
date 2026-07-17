import { SizeCheckbox } from "@/features/products/atoms/SizeCheckbox";
import { Size } from "@/generated/prisma/enums";

export default function Sizing() {
    return (
        <div className="flex gap-3.5">
            {Object.keys(Size).map((size) => (
                <SizeCheckbox
                    key={size}
                    size={size}
                />
            ))}
        </div>
    );
}