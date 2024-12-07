/*
  Warnings:

  - Added the required column `day` to the `Lesson` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Lesson" ADD COLUMN     "day" "Day" NOT NULL;
