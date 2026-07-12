import { PropsWithChildren } from "react";
import DirectionProvider from "./DirectionProvider";
import ThemeProvider from "./ThemeProvider";
import { Toaster } from "@/shared/components/ui/sonner";

export default function MainProvider({ children }: PropsWithChildren) {
  return (
    <DirectionProvider>
      <ThemeProvider>
        {children}
        <Toaster />
      </ThemeProvider>
    </DirectionProvider>
  );
}
