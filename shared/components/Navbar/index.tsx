"use client";

import { cn } from "@/lib/utils";
import { MenuIcon, Search, User } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "../atoms/Logo";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import MainMenu from "./MainMenu";
import MenuBtn from "./MenuBtn";
import SearchMenu from "./SearchMenu";
import Link from "next/link";
import paths from "@/shared/paths";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchMenuOpen, setSearchMenuOpen] = useState(false);

  function toggleMenuOpen() {
    if (searchMenuOpen && !menuOpen) setSearchMenuOpen(false);
    setMenuOpen((i) => !i);
  }
  function toggleSearchMenuOpen() {
    if (!searchMenuOpen && menuOpen) setMenuOpen(false);
    setSearchMenuOpen((i) => !i);
  }
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const current = window.scrollY;

      if (current > lastScrollY && current > 100) setHidden(true);
      else setHidden(false);

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
          hidden ? "-translate-y-full" : "translate-y-0",
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
              open={menuOpen}
              toggleOpen={toggleMenuOpen}
              icon={MenuIcon}
            />
          </div>
        </nav>
        <Separator />
        <MainMenu open={menuOpen} />
        <SearchMenu open={searchMenuOpen} />
      </div>
      {(menuOpen || searchMenuOpen) && (
        <div
          onClick={() => setMenuOpen(false)}
          className="absolute inset-0 duration-300  bg-foreground/40 transition-opacity"
        />
      )}
    </>
  );
}
