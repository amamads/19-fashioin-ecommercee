import CartPaymentDetails from "@/features/checkout/components/CartPaymentDetails";
import CheckoutPagesFooter from "@/features/checkout/components/CeckoutPagesFooter";
import PorchasedProduct from "@/features/checkout/components/PorchasedProduct";
import SharedCheckoutHead from "@/features/checkout/components/SharedCheckoutHead";
import Stepper from "@/features/checkout/components/Stepper";
import { Separator } from "@/shared/components/ui/separator";
import paths from "@/shared/paths";
import React from "react";

export default function CartPage() {
  return (
    <div className="space-y-4">
      <SharedCheckoutHead title="سبد خرید" inCart />
      <Stepper step={1} />
      <main className="space-y-4">
        {[1, 2, 3].map((num) => (
          <React.Fragment key={num}>
            <PorchasedProduct />
            <Separator className="last:hidden" />
          </React.Fragment>
        ))}
      </main>
      <CartPaymentDetails />
      {/* <CartFooter /> */}
            <CheckoutPagesFooter route={paths.checkout.checkout} btnLabel="ثبت سفارش"/>
      
      {/* - cart items
            - orders summary */}
    </div>
  );
}
