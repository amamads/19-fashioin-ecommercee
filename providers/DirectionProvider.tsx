import { PropsWithChildren } from "react";
import { DirectionProvider as Direction_provider } from "@/shared/components/ui/direction";

export default function DirectionProvider({ children }: PropsWithChildren) {
  return (
    <Direction_provider direction="rtl" dir="rtl">
      {children}
    </Direction_provider>
  );
}
