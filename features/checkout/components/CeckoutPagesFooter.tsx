"use client";

import { CaptionSm, H6 } from "@/shared/components/atoms/Typography";
import { Button } from "@/shared/components/ui/button";
import paths from "@/shared/paths";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CheckoutPagesFooter({
  route,
  btnLabel,
}: {
  route: string;
  btnLabel: string;
}) {
  const router = useRouter();
  const num = 8_260_000;
  return (
    <div className="border rounded-lg col-flex p-5 gap-4">
      <span className="flex gap-2 items-center">
        <CaptionSm>مبلغ پرداخت:</CaptionSm>
        <H6>{num.toLocaleString()}</H6>
      </span>
      <Button onClick={() => router.push(route)}>{btnLabel}</Button>
    </div>
  );
}
