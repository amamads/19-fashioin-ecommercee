import { BodySm } from "@/shared/components/atoms/Typography";
import IncreaseProductCountBtn from "./IncreaseProductCountBtn";
import DecreaseProductCountBtn from "./DecreaseProductCountBtn";
import DeleteProductBtn from "./DeleteProductBtn";

export default function ProductBtns({ count }: { count: number }) {
  return (
    <div className="flex gap-4 items-center">
      <IncreaseProductCountBtn />
      <BodySm>{count}</BodySm>
      {count >= 1 ? <DeleteProductBtn /> : <DecreaseProductCountBtn />}
    </div>
  );
}
