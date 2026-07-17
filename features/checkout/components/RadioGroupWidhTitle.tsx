import { H5 } from "@/shared/components/atoms/Typography";
import { Label } from "@/shared/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/shared/components/ui/radio-group";

export default function RadioGroupWidhTitle({
  title,
  values,
}: {
  title: string;
  values: { value: string; label: string }[];
}) {
  return (
    <div className="space-y-4">
      <H5>{title}</H5>
      <RadioGroup
        className="border rounded-md flex gap-6 p-4"
        defaultValue="courier"
      >
        {values.map(({ value, label }) => (
          <div className="flex gap-1" key={value}>
            <RadioGroupItem value={value} id={`${value}-option`} />
            <Label htmlFor={`${value}-option`}>{label}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
