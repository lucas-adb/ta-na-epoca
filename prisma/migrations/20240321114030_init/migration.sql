-- CreateTable
CREATE TABLE "Fruit" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Fruit_pkey" PRIMARY KEY ("id")
);
