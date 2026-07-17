import AddressesList from "@/features/checkout/components/AddressesList";
import CartPaymentDetails from "@/features/checkout/components/CartPaymentDetails";
import CheckoutPagesFooter from "@/features/checkout/components/CeckoutPagesFooter";
import DeliveryTime from "@/features/checkout/components/DeliveryTime";
import OrderNote from "@/features/checkout/components/OrderNote";
import RadioGroupWidhTitle from "@/features/checkout/components/RadioGroupWidhTitle";
import SharedCheckoutHead from "@/features/checkout/components/SharedCheckoutHead";
import Stepper from "@/features/checkout/components/Stepper";
import paths from "@/shared/paths";

export default function CheckoutPage() {
  const radioGroupValues = [
    {
      value: "coureir",
      label: "ارسال توسط پیک",
    },
    {
      value: "in-person",
      label: "تحویل حضوری",
    },
  ];
  return (
    <div className="space-y-8">
      <SharedCheckoutHead title="تکمیل اطلاعات" />
      <Stepper step={2} />
      {/* <OrderMethod /> */}
      <RadioGroupWidhTitle title="روش تحویل سفارش" values={radioGroupValues} />
      <AddressesList />
      <DeliveryTime />
      <OrderNote />
      <CartPaymentDetails />
      {/* <CheckoutFooter /> */}
            <CheckoutPagesFooter route={paths.checkout.payment} btnLabel="تایید و ادامه"/>
      
    </div>
  );
}
