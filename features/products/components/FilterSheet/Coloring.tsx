import ColorCheckbox from "@/features/products/atoms/ColorCheckbox";

export default function Coloring() {
    const colors = [
        { name: "سبز یشمی", hex: "#4B5335" },
        { name: "بادمجانی دیره", hex: "#7E1F5A" },
        { name: "طوسی تیره", hex: "#6F6262" },
        { name: "قهوه‌ای توسی روشن", hex: "#A58080" },
        { name: "گلبهی (نارنجی ملایم)", hex: "#F6A68B" },
        { name: "بژ صورتی", hex: "#C6B2A8" },
        { name: "طوسی مایل به صورتی", hex: "#A8969D" },
        { name: "صورتی خامه ای خیلی روشن", hex: "#EBE0DF" },
        { name: "صورتی روشن (چرک)", hex: "#D19C9C" },
        { name: "آبی فیروزه‌ای (مات)", hex: "#6E9CA6" },
        { name: "مرجانی (قرمز ملایم)", hex: "#E86A6A" },
        { name: "یاسی (بنفش ملایم)", hex: "#9A8BAA" },
        { name: "آجری (خردلی تیره)", hex: "#C19277" },
        { name: "نارنجی روشن", hex: "#DD956D" },
        { name: "زرشکی", hex: "#6E0B14" },
        { name: "سالمونی", hex: "#D49078" },
    ];

    return (
        <div className="grid grid-cols-8 gap-y-2.5 w-full">
            {colors.map(({ hex }) => (
                <ColorCheckbox hex={hex} key={hex} />
            ))}
        </div>
    );
}