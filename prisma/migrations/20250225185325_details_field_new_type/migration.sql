/*
  Warnings:

  - Changed the type of `details` on the `File` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "File" DROP COLUMN "details",
ADD COLUMN     "details" JSONB NOT NULL;
