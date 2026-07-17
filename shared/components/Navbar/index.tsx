"use client";

import { cn } from "@/lib/utils";
import paths from "@/shared/paths";
import {
  selectCloseMenus,
  selectHiddenNavbar,
  selectMainMenuOpen,
  selectSearchMenuOpen,
  selectSetHiddenNavbar,
  selectToggleMainMenuOpen,
  selectToggleSearchMenuOpen,
  useNavbarStore,
} from "@/shared/stores/navbarStore";
import { MenuIcon, Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
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
  const hiddenNavbar = useNavbarStore(selectHiddenNavbar)
  const setHiddenNavbar = useNavbarStore(selectSetHiddenNavbar)


  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const current = window.scrollY;

      if (current > lastScrollY && current > 100) setHiddenNavbar(true);
      else setHiddenNavbar(false);

      lastScrollY = current;
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
    <>
      <div
        className={cn(
          "sticky top-0 z-50 bg-background transition-transform duration-300",
          hiddenNavbar ? "-translate-y-full" : "translate-y-0",
        )}>
        <nav className="flex justify-between items-center py-4 px-default z-20">
          <Logo />
          <div className="flex">
            <Button variant="ghost" size="none" asChild>
              <Link href={paths.account.index}>
                <User className="h-5 p-3.5 box-content text-muted-foreground" />
              </Link>
            </Button>

            <Button variant="ghost" size="none" asChild>
              <Link href={paths.checkout.cart}>
                <ShoppingCart className="h-5 p-3.5 box-content text-muted-foreground" />
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
        <MainMenu />
        <SearchMenu />
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
