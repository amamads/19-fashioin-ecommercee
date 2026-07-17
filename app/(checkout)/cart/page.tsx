import CartFooter from "@/features/checkout/components/CartFooter";
import CartHead from "@/features/checkout/components/CartHead";
import CartPaymentDetails from "@/features/checkout/components/CartPaymentDetails";
import PorchasedProduct from "@/features/checkout/components/PorchasedProduct";
import Stepper from "@/features/checkout/components/Stepper";
import { Separator } from "@/shared/components/ui/separator";
import React from "react";

export default function CartPage() {
  return (
    <div className="space-y-4">
      <CartHead />
      <Stepper step={1} />
      <main className="space-y-4">
        {[1, 2, 3].map((num) => (
          <React.Fragment key={num}>
            <PorchasedProduct />
            <Separator className="last:hidden" />
          </React.Fragment>
        ))}
      </main>
      <CartPaymentDetails/>
      <CartFooter />
      {/* - cart items
            - orders summary */}
    </div>
  );
}
