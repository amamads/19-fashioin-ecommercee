"use client";

import { LogIn, User } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { BodyXs } from "../atoms/Typography";
import { useRouter } from "next/navigation";
import paths from "@/shared/paths";

export default function UserDropdown() {
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="none">
          <User className="h-5 p-3.5 box-content text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          className="px-1 py-2"
          onSelect={() => router.push(paths.account.index)}
        >
          <User className="text-muted-foreground" />
          <BodyXs>اکانت</BodyXs>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="px-1 py-2"
          onSelect={() => router.push(paths.auth.index)}
        >
          <LogIn className="text-muted-foreground" />
          <BodyXs>ورود / ثبت نام</BodyXs>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
