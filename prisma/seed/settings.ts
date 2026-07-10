import db from "@/db";

const setting = {
  id: "main",
  siteName: "AMS    ",
  //   siteDescription:
  //     "فروشگاه اینترنتی پوشاک، کیف، کفش و اکسسوری با ارسال سریع به سراسر کشور.",
  //   logoUrl: "https://example.com/images/logo.png",
  //   faviconUrl: "https://example.com/images/favicon.ico",
  //   email: "info@modernshop.ir",
  //   phone: "+989121234567",
  //   address: "تهران، خیابان ولیعصر، پلاک ۱۲۳",
  //   instagram: "https://instagram.com/modernshop",
  //   telegram: "https://t.me/modernshop",
  //   whatsapp: "https://wa.me/989121234567",
};
export default async function seedSettings() {
  await db.setting.upsert({
    where: { id: setting.id },
    update: setting,
    create: setting,
  });
}
