import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { Button } from "../ui/button";
import { BodyXs } from "../atoms/Typography";

export default function SocialMedia() {
  const icons = [FaInstagram, FaWhatsapp, FaTelegram];
  return (
    <div className="col-flex gap-4">
      <BodyXs>ما را در شبکه های اجتماعی دنبال کنید:</BodyXs>
      <div className="space-x-2  mr-auto">
        {icons.map((Icon, i) => (
          <Button key={i} variant="outlineForeground" size="icon">
            <Icon className="size-5" />
          </Button>
        ))}
      </div>
    </div>
  );
}
