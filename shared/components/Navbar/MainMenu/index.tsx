"use client";

import paths from "@/shared/paths";
import {
  selectCategoriesMenuOpen,
  selectCloseMenus,
  selectMainMenuOpen,
  selectToggleCategoriesMenuOpen,
  useNavbarStore,
} from "@/shared/stores/navbarStore";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { BodyXs } from "../../atoms/Typography";
import { Button } from "../../ui/button";
import { Separator } from "../../ui/separator";
import CollapsibleMenu from "../CollapsibleMenu";
import CategoryMenu from "./CategoryMenu";

const items = [
  {
    title: "صفحه اصلی",
    href: paths.home,
  },
  {
    title: "دسته بندی ها",
    href: paths.store.products,
  },
  {
    title: "تخفیف دار ها",
    href: paths.store.products,
  },
  {
    title: "درباره ما",
    href: paths.info.about,
  },
];

export default function MainMenu() {
  const mainMenuOpen = useNavbarStore(selectMainMenuOpen);
  const closeMenus = useNavbarStore(selectCloseMenus);
  const categoriesMenuOpen = useNavbarStore(selectCategoriesMenuOpen);
  const toggleCategoriesMenuOpen = useNavbarStore(
    selectToggleCategoriesMenuOpen,
  );
  const router = useRouter();

  function btnOnClick(href: string) {
    if (href === paths.store.products) return toggleCategoriesMenuOpen(true);
    router.push(href);
    closeMenus();
  }

  useEffect(() => {
    if (!mainMenuOpen) toggleCategoriesMenuOpen(false);
  }, [mainMenuOpen, toggleCategoriesMenuOpen]);

  return (
    <CollapsibleMenu open={mainMenuOpen}>
      {categoriesMenuOpen ? (
        <CategoryMenu />
      ) : (
        <div className="col-flex">
          {items.map(({ title, href }, i) => (
            <React.Fragment key={i}>
              <Button
                className="w-full flex justify-between py-4"
                variant="ghost"
                onClick={() => btnOnClick(href)}
              >
                <BodyXs className="text-neutral-13">{title}</BodyXs>
                <ChevronLeft className="size-5 text-neutral-10" />
              </Button>
              <Separator className="last:hidden " />
            </React.Fragment>
          ))}
        </div>
      )}
    </CollapsibleMenu>
  );
}
