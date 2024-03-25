import { CalendarSearchParams, TypeOfFood } from "@/types/types";
import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getFoods() {
  const foods = await prisma.food.findMany();
  return foods;
}

export async function getFoodsWithMonths() {
  const foods = await prisma.food.findMany({
    include: {
      months: true,
    },
  });

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

  return foods;
}

export async function calendarSearchParamsValidation(food: string, type: TypeOfFood, month: string) {
  const params: CalendarSearchParams = {};

  if (food) params.food = food;
  if (type) params.type = type;
  if (month) params.month = parseInt(month);

  return await getFoodByParams(params);
}

export async function getFoodByParams(params: { food?: string, type?: TypeOfFood, month?: number }) {
  const whereClause: Prisma.FoodWhereInput = {};

  if (params.food) {
    whereClause.name = {
      startsWith: params.food,
      mode: "insensitive",
    };
  }

  if (params.type) {
    whereClause.type = params.type;
  }

  if (params.month) {
    whereClause.months = {
      some: {
        monthId: {
          equals: params.month,
        },
      },
    };
  }

  const foods = await prisma.food.findMany({
    where: whereClause,
    include: {
      months: true,
    },
  });

  return foods;
}
