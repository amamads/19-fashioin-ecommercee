import { Checkbox } from "@/shared/components/ui/checkbox";
import { Label } from "@/shared/components/ui/label";

export default function FilterCheckboxGroup({options}: {options: string[]}) {
    return (
        <div className="space-y-4">
            {options.map(option => (
                <div key={option} className="flex items-center gap-2">
                    <Checkbox id={option}/>
                    <Label htmlFor={option}>{option}</Label>
                </div>
            ))}
        </div>
    );
}