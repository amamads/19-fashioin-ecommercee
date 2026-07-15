"use client";

import { cn } from "@/lib/utils";
import paths from "@/shared/paths";
import {
  selectCloseMenus,
  selectMainMenuOpen,
  selectSearchMenuOpen,
  selectToggleMainMenuOpen,
  selectToggleSearchMenuOpen,
  useNavbarStore,
} from "@/shared/stores/navbarStore";
import { MenuIcon, Search, User } from "lucide-react";
import Link from "next/link";
import Logo from "../atoms/Logo";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import MainMenu from "./MainMenu";
import MenuBtn from "./MenuBtn";
import SearchMenu from "./SearchMenu";

export default function Navbar() {
  const searchMenuOpen = useNavbarStore(selectSearchMenuOpen);
  const mainMenuOpen = useNavbarStore(selectMainMenuOpen);
  const toggleSearchMenuOpen = useNavbarStore(selectToggleSearchMenuOpen);
  const toggleMainMenuOpen = useNavbarStore(selectToggleMainMenuOpen);
  const closeMenus = useNavbarStore(selectCloseMenus)

  return (
    <>
      <div
        className={cn(
          "sticky top-0 z-50 bg-background transition-transform duration-300",
        )}
      >
        <nav className="flex justify-between items-center py-4 px-default z-20">
          <Logo />
          <div className="flex">
            <Button variant="ghost" size="none" asChild>
              <Link href={paths.main.account.index}>
                <User className="h-5 p-3.5 box-content text-muted-foreground" />
              </Link>
            </Button>

            <MenuBtn
              open={searchMenuOpen}
              toggleOpen={toggleSearchMenuOpen}
              icon={Search}
            />
            <MenuBtn
              open={mainMenuOpen}
              toggleOpen={toggleMainMenuOpen}
              icon={MenuIcon}
            />
          </div>
        </nav>
        <Separator />
        <MainMenu/>
        <SearchMenu/>
      </div>
      {(mainMenuOpen || searchMenuOpen) && (
        <div
          onClick={closeMenus}
          className="fixed z-40 inset-0 duration-300  bg-foreground/40 transition-opacity"
        />
      )}
    </>
  );
}