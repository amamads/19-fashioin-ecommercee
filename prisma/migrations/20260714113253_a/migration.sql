/*
  Warnings:

  - You are about to drop the column `badges` on the `Category` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "CategoryBadge" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    CONSTRAINT "CategoryBadge_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Category" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "order" INTEGER DEFAULT 0,
    "imageUrl" TEXT,
    "parentId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Category_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Category" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Category" ("createdAt", "id", "imageUrl", "name", "order", "parentId", "slug", "updatedAt") SELECT "createdAt", "id", "imageUrl", "name", "order", "parentId", "slug", "updatedAt" FROM "Category";
DROP TABLE "Category";
ALTER TABLE "new_Category" RENAME TO "Category";
CREATE UNIQUE INDEX "Category_slug_key" ON "Category"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
