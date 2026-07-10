import db from "@/db";

export default async function deleteSeeds() {
  await db.category.deleteMany();
  await db.setting.deleteMany();
  await db.attribute.deleteMany();
  await db.banner.deleteMany();
  await db.color.deleteMany();
  await db.product.deleteMany();
}
