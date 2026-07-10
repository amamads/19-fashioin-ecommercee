import db from "@/db";

const banners = [
  {
    title:"banner-1",
    imageUrl:'/banner-1.png',
    order:1
  },
  {
    title:"banner-2",
    imageUrl:'/banner-2.png',
    order:2
  },
  {
    title:"banner-3",
    imageUrl:'/banner-3.png',
    order:3
  },
  {
    title:"banner-4",
    imageUrl:'/banner-4.png',
    order:4
  },
];

export default async function seedBanners() {
    await db.banner.createMany({
      data:banners
    })
}
