import { PropsWithChildren } from "react";
import DirectionProvider from "./DirectionProvider";
import ThemeProvider from "./ThemeProvider";

export default function MainProvider({ children }: PropsWithChildren) {
  return (
    <DirectionProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </DirectionProvider>
  );
}
