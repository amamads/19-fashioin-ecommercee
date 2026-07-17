"use client";

import Comment from "@/shared/components/Comment";
import { H5 } from "@/shared/components/atoms/Typography";
import ScrollXAreaWithBtns from "@/shared/components/ScrollXAreaWithBtns";
import { PropsWithClassName } from "@/shared/types";

export default function Comments({ className }: PropsWithClassName) {

  return (
    <ScrollXAreaWithBtns className={className}
      header={
        <H5 className="flex gap-2">
          رضایت شما
          <br />
          ارزشمند ترین دارایی ماست
        </H5>
      }
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
        <Comment key={i} />
      ))}
    </ScrollXAreaWithBtns>
  )
}
