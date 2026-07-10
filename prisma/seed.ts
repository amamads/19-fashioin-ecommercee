import db from "@/db";
import seedCategories from "./seed/categories";
import seedSetting from "./seed/settings";
import seedColors from "./seed/Colors";
import seedAttributes from "./seed/attributes";

async function main() {
  await seedSetting();
  await seedCategories();
  await seedColors();
  await seedAttributes();
}
main()
  .catch(console.error)
  .finally(async () => {
    await db.$disconnect();
  });
