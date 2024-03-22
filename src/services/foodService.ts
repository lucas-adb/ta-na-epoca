import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function getFoods() {
  const foods = await prisma.food.findMany();
  return foods;
}

export async function getFoodsOfCurrentMonth() {
  const currentMonth = new Date().getMonth();

    const foods = await prisma.food.findMany({
      where: {
        months: {
          some: {
            monthId: {
              equals: currentMonth + 1,
            },
          },
        },
      },
      include: {
        months: true,
      },
    });
  
    return foods
}