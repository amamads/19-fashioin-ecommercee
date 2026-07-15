import { create } from "zustand";

type NavbarStoreState = {
  mainMenuOpen: boolean;
  searchMenuOpen: boolean;
  categoriesMenuOpen: boolean;
  toggleMainMenuOpen: () => void;
  toggleSearchMenuOpen: () => void;
  toggleCategoriesMenuOpen: (bool:boolean|null) => void;
  closeMenus: () => void;
};

export const useNavbarStore = create<NavbarStoreState>((set) => ({
  mainMenuOpen: false,
  searchMenuOpen: false,
  categoriesMenuOpen: false,
  toggleMainMenuOpen: () =>
    set((state) => ({
      mainMenuOpen: !state.mainMenuOpen,
      searchMenuOpen:
        state.searchMenuOpen && !state.mainMenuOpen
          ? false
          : state.searchMenuOpen,
    })),
  toggleSearchMenuOpen: () =>
    set((state) => ({
      searchMenuOpen: !state.searchMenuOpen,
      mainMenuOpen:
        !state.searchMenuOpen && state.mainMenuOpen
          ? false
          : state.mainMenuOpen,
    })),
  toggleCategoriesMenuOpen: (bool = null) =>
    set((state) => ({
      categoriesMenuOpen: bool === null ? !state.categoriesMenuOpen : bool,
    })),
  closeMenus: () => set({ mainMenuOpen: false, searchMenuOpen: false }),
}));

export const selectMainMenuOpen = (s: NavbarStoreState) => s.mainMenuOpen;
export const selectSearchMenuOpen = (s: NavbarStoreState) => s.searchMenuOpen;
export const selectCategoriesMenuOpen = (s: NavbarStoreState) =>
  s.categoriesMenuOpen;
export const selectToggleMainMenuOpen = (s: NavbarStoreState) =>
  s.toggleMainMenuOpen;
export const selectToggleSearchMenuOpen = (s: NavbarStoreState) =>
  s.toggleSearchMenuOpen;
export const selectToggleCategoriesMenuOpen = (s: NavbarStoreState) =>
  s.toggleCategoriesMenuOpen;
export const selectCloseMenus = (s: NavbarStoreState) => s.closeMenus;
