/*
  Warnings:

  - You are about to drop the `Fruit` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "FoodType" AS ENUM ('FRUIT', 'VEGETABLE');

-- CreateEnum
CREATE TYPE "MonthName" AS ENUM ('JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER');

-- DropTable
DROP TABLE "Fruit";

-- CreateTable
CREATE TABLE "Food" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "type" "FoodType" NOT NULL,

    CONSTRAINT "Food_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Month" (
    "id" SERIAL NOT NULL,
    "name" "MonthName" NOT NULL,

    CONSTRAINT "Month_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FoodsMonths" (
    "id" SERIAL NOT NULL,
    "foodId" INTEGER NOT NULL,
    "monthId" INTEGER NOT NULL,

    CONSTRAINT "FoodsMonths_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FoodsMonths_foodId_monthId_key" ON "FoodsMonths"("foodId", "monthId");

-- AddForeignKey
ALTER TABLE "FoodsMonths" ADD CONSTRAINT "FoodsMonths_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Food"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodsMonths" ADD CONSTRAINT "FoodsMonths_monthId_fkey" FOREIGN KEY ("monthId") REFERENCES "Month"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
