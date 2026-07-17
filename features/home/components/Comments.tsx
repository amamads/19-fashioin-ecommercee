"use client";

import Comment from "@/shared/Comment";
import ScrollXAreaWithBtns from "@/shared/components/ScrollXAreaWithBtns";
import { PropsWithClassName } from "@/shared/types";

export default function Comments({ className }: PropsWithClassName) {

  return (
    <ScrollXAreaWithBtns className={className}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
        <Comment key={i} />
      ))}
    </ScrollXAreaWithBtns>
  )
}
