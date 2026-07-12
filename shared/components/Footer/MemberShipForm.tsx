import { Button } from "../ui/button";
import { Field, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";

export default function MemberShipForm() {
  return (
    <form className="flex items-center gap-3.5">
      <Field>
        <Input className="border-neutral-6" placeholder="ایمیل خود را وارد کنید ..." />
      </Field>
      <Button variant="outlineForeground">عضویت</Button>
    </form>
  );
}
