'use client'
import { ThemeProvider as Theme_provider } from "next-themes";
import { PropsWithChildren } from "react";

export default function ThemeProvider({ children }: PropsWithChildren) {
  return (
    <Theme_provider
      attribute="class"
      defaultTheme="light"
      disableTransitionOnChange
    >
      {children}
    </Theme_provider>
  );
}
