"use client";
import { H3 } from "@/shared/components/atoms/Typography";
import { Button } from "@/shared/components/ui/button";
import { ArrowRight, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SharedCheckoutHead({
  title,
  inCart,
}: {
  title: string;
  inCart?: boolean;
}) {
  const router = useRouter();
  return (
    <div className="grid grid-cols-3 items-center">
      <Button
        onClick={() => router.back()}
        variant="ghost"
        size="none"
        className="justify-self-start"
      >
        <ArrowRight className="size-6" />
      </Button>

      <H3 className="text-nowrap justify-self-center">{title}</H3>

      <div className="justify-self-end">
        {inCart && (
          <Button variant="ghost" size="none">
            <Trash2 className="size-6 text-primary" />
          </Button>
        )}
      </div>
    </div>
  );
}
