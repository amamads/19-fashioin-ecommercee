import { SearchIcon } from "lucide-react";
import LabeledInput from "../../atoms/LabeledInput";

export default function SearchInput() {
  return (
    <form className="relative">
      <LabeledInput
        floatingLabel="جستوجو"
        className="pr-10"
        placeholder="محصول مورد نظر خود را جستجو کنید..."
      />
      <button
        type="submit"
        className="absolute top-1/2 -translate-y-1/2 right-4 text-neutral-7"
      >
        <SearchIcon className="size-4" />
      </button>
    </form>
  );
}
