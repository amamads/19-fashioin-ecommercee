import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { BodyXs } from "../atoms/Typography";
import { PropsWithClassName } from "@/shared/types";

export default function ContactInfo({ className }: PropsWithClassName) {
  const contactInfoItems = [
    {
      icon: MapPin,
      text: "ابهر ، خ تست نرسیده به کوچه تست",
    },
    {
      icon: Clock,
      text: "شنبه تا چهارشنبه ۹ صبح الی ۱۸",
    },
    {
      icon: Phone,
      text: "5564 - 3522 - 021 | 7845 - 1234 - 024",
    },
    {
      icon: Mail,
      text: "info@amamads.com",
    },
  ];

  return (
    <div className={className}>
      {contactInfoItems.map(({ icon: Icon, text }) => (
        <div key={text} className="flex gap-2 py-2 items-center">
          <Icon className="size-4"/>
          <BodyXs className="text-inherit">{text}</BodyXs>
        </div>
      ))}
    </div>
  );
}
