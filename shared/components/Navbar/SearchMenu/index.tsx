import { PropsWithOpen } from "@/shared/types";
import { Separator } from "../../ui/separator";
import CollapsibleMenu from "../CollapsibleMenu";
import PopularSearches from "./PopularSearches";
import SearchInput from "./SearchInput";
import PopularProducts from "./PopularProducts";

export default function SearchMenu({ open }: PropsWithOpen) {
  return (
    <CollapsibleMenu open={open} className="">
      <SearchInput />
      <PopularSearches className="mt-6" />
      <Separator className="mt-7.5"/>
      <PopularProducts className="py-6"/>
    </CollapsibleMenu >
  );
}
