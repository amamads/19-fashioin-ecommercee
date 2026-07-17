import { Rating } from "@/shared/components/ui/rating";

export default function ProductRating({ value }: { value: number }) {
    return (
        <Rating
            size={16}
            precision={1}
            value={value}
            className="[&_[data-filled='false']_svg]:fill-primary/60 [&_[data-filled='false']_svg]:stroke-primary/30 [&_[data-filled='false']_svg]:stroke-1 [&_[data-filled='false']_svg]:text-primary/10 [&_[data-filled='true']_svg]:stroke-1 [&_[data-filled='true']_svg]:text-primary"
        />
    );
}