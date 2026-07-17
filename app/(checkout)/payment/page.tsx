import CartFooter from "@/features/checkout/components/CartFooter";
import CartPaymentDetails from "@/features/checkout/components/CartPaymentDetails";
import CheckoutPagesFooter from "@/features/checkout/components/CeckoutPagesFooter";
import GiftCard from "@/features/checkout/components/GiftCard";
import RadioGroupWidhTitle from "@/features/checkout/components/RadioGroupWidhTitle";
import SharedCheckoutHead from "@/features/checkout/components/SharedCheckoutHead";
import Stepper from "@/features/checkout/components/Stepper";
import paths from "@/shared/paths";

export default function PaymentPage() {
  const radioGroupValues = [
    {
      value: "net-payment",
      label: "پرداخت اینترنتی",
    },
    {
      value: "in-store",
      label: "پرداخت در محل فروشگاه",
    },
  ];
  return (
    <div className="space-y-4">
      <SharedCheckoutHead title="پرداخت" />
      <Stepper step={3} />
      <GiftCard />
      <RadioGroupWidhTitle title="روش پرداخت" values={radioGroupValues} />

      <CartPaymentDetails />
      <CheckoutPagesFooter route={paths.home} btnLabel="پرداخت"/>
      {/* <CartFooter /> */}
      {/* <DisplayLg className="">پرداخت</DisplayLg> */}
      {/* - payment section
		- orders summary */}
    </div>
  );
}

