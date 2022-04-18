/*
  Warnings:

  - A unique constraint covering the columns `[cardNo]` on the table `Card` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Card_cardNo_key" ON "Card"("cardNo");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
