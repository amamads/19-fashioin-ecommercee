import db from "@/db";
import seedCategories from "./seed/categories";
import seedSettings from "./seed/settings";
import seedAttributes from "./seed/attributes";
import seedBanners from "./seed/banners";
import seedColors from "./seed/colors";
import seedProducts from "./seed/products";
import deleteSeeds from "./seed/deleteSeeds";

async function main() {
  await deleteSeeds();
  
  await seedSettings();
  await seedCategories();
  await seedColors();
  await seedAttributes();
  await seedBanners();
  await seedProducts();
}
main()
  .catch(console.error)
  .finally(async () => {
    await db.$disconnect();
  });
