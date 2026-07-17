import {
  selectSearchMenuOpen,
  useNavbarStore,
} from "@/shared/stores/navbarStore";
import { Separator } from "../../ui/separator";
import CollapsibleMenu from "../CollapsibleMenu";
import PopularProducts from "./PopularProducts";
import PopularSearches from "./PopularSearches";
import SearchInput from "./SearchInput";

export default function SearchMenu() {
  const searchMenuOpen = useNavbarStore(selectSearchMenuOpen);

  return (
    <CollapsibleMenu open={searchMenuOpen} className="">
      <SearchInput />
      <PopularSearches className="mt-6" />
      <Separator className="mt-7.5" />
      <PopularProducts className="py-6" />
    </CollapsibleMenu>
  );
}
