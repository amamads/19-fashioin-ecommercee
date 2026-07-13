import { Copyright } from "lucide-react";
import Logo from "../atoms/Logo";
import { BodyXs, CaptionSm } from "../atoms/Typography";
import { Separator } from "../ui/separator";
import { helpfulLinksData, productCategoriesData } from "./consts";
import ContactInfo from "./ContactInfo";
import FooterLinkGroup from "./FooterLinkGroup";
import MemberShipForm from "./MemberShipForm";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <footer className="bg-foreground col-flex px-default py-5 text-neutral-3">
      <div className="col-flex gap-3">
        <Logo />

        <BodyXs className="text-justify text-inherit">
          به فروشگاه رگال خوش آمدید، جایی که استایل و شیک بودن به شما هدیه داده
          می‌شود. با خبرنامه رگال همراه باشید و اولین نفر باشید که اخبار،
          پیشنهادات و توصیه‌های دنیای مد و فشن را می شنوید.
        </BodyXs>

        <MemberShipForm />
      </div>
      
      <div className="mt-8 flex gap-13.75">
        <FooterLinkGroup
          title={helpfulLinksData.title}
          items={helpfulLinksData.items}
        />
        <FooterLinkGroup
          title={productCategoriesData.title}
          items={productCategoriesData.items}
        />
      </div>

      <ContactInfo className="mt-4" />

      <Separator className="my-4 bg-neutral-12" />

      <SocialMedia />

      <Separator className="my-4 bg-neutral-12" />

      <CaptionSm className="flex gap-2">
        <Copyright className="size-4" />
        <span>تمامی حقوق مادی و معنوی برای مجموعه AMS محفوظ است.</span>
      </CaptionSm>
    </footer>
  );
}
