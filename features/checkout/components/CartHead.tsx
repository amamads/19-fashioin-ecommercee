"use client";
import { H3 } from "@/shared/components/atoms/Typography";
import { Button } from "@/shared/components/ui/button";
import { ArrowRight, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CheckoutSharedHead({
  title,
  inCart,
}: {
  title: string;
  inCart: boolean;
}) {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between">
      <Button onClick={() => router.back()} variant="ghost" size="none">
        <ArrowRight className="size-6" />
      </Button>
      <H3>سبد خرید</H3>
      {inCart && (
        <Button variant="ghost" size="none">
          <Trash2 className="size-6 text-primary" />
        </Button>
      )}
    </div>
  );
}
