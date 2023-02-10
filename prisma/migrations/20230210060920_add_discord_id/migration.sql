/*
  Warnings:

  - You are about to drop the column `username` on the `Score` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[discordId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `discordId` to the `Score` table without a default value. This is not possible if the table is not empty.
  - Added the required column `discordId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Score" DROP CONSTRAINT "Score_username_fkey";

-- DropIndex
DROP INDEX "User_username_key";

-- AlterTable
ALTER TABLE "Score" DROP COLUMN "username",
ADD COLUMN     "discordId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "discordId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_discordId_key" ON "User"("discordId");

-- AddForeignKey
ALTER TABLE "Score" ADD CONSTRAINT "Score_discordId_fkey" FOREIGN KEY ("discordId") REFERENCES "User"("discordId") ON DELETE RESTRICT ON UPDATE CASCADE;
