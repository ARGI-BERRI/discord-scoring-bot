-- DropForeignKey
ALTER TABLE "Score" DROP CONSTRAINT "Score_discordId_fkey";

-- AlterTable
ALTER TABLE "Score" ALTER COLUMN "discordId" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "discordId" SET DATA TYPE BIGINT;

-- AddForeignKey
ALTER TABLE "Score" ADD CONSTRAINT "Score_discordId_fkey" FOREIGN KEY ("discordId") REFERENCES "User"("discordId") ON DELETE RESTRICT ON UPDATE CASCADE;
