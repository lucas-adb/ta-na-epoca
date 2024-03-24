import { PrismaClient } from "@prisma/client";
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

export async function getFoodWithMonthsFiltered(params: {
  food?: string,
  type?:"FRUIT" | "VEGETABLE",
  month?: string
}) {
  if (!params) {
    return await getFoodsWithMonths();
  }

  if (params.food && params.type && params.month) {
    const monthNumber = parseInt(params.month);

    const foods = await prisma.food.findMany({
      where: {
        name: {
          contains: params.food,
          mode: "insensitive",
        },
        type: params.type,
        months: {
          some: {
            monthId: {
              equals: monthNumber,
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

  if (params.type && params.month) {
    const monthNumber = parseInt(params.month);

    const foods = await prisma.food.findMany({
      where: {
        type: params.type,
        months: {
          some: {
            monthId: {
              equals: monthNumber,
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

  if (params.type) {
    const foods = await prisma.food.findMany({
      where: {
        type: params.type,
      },
      include: {
        months: true,
      },
    });

    return foods;
  }
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
