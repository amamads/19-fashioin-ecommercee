"use client";

import { Menu, Search, User } from "lucide-react";
import Logo from "../atoms/Logo";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);

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
    <div
      className={cn(
        "sticky top-0 z-50 bg-background transition-transform duration-300",
        hidden ? "-translate-y-full" : "translate-y-0",
      )}
    >
      <nav className="flex justify-between items-center py-4 px-default">
        <Logo />
        <div className="flex">
          <Button variant="ghost" size="none">
            <User className="h-5 p-3.5 box-content text-muted-foreground" />
          </Button>
          <Button variant="ghost" size="none">
            <Search className="h-5 p-3.5 box-content text-muted-foreground" />
          </Button>
         
        </div>
      </nav>
      <Separator />
    </div>
  );
}
