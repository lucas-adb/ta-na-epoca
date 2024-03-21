import { FoodType, MonthName, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

  // month: 
  const january = await prisma.month.create({
    data: {
      name: MonthName.JANUARY,
    },
  })

  const february = await prisma.month.create({
    data: {
      name: MonthName.FEBRUARY,
    },
  })

  const march = await prisma.month.create({
    data: {
      name: MonthName.MARCH,
    },
  })

  const april = await prisma.month.create({
    data: {
      name: MonthName.APRIL,
    },
  })

  const may = await prisma.month.create({
    data: {
      name: MonthName.MAY,
    },
  })

  const june = await prisma.month.create({
    data: {
      name: MonthName.JUNE,
    },
  })

  const july = await prisma.month.create({
    data: {
      name: MonthName.JULY,
    },
  })

  const august = await prisma.month.create({
    data: {
      name: MonthName.AUGUST,
    },
  })

  const september = await prisma.month.create({
    data: {
      name: MonthName.SEPTEMBER,
    },
  })

  const october = await prisma.month.create({
    data: {
      name: MonthName.OCTOBER,
    },
  })

  const november = await prisma.month.create({
    data: {
      name: MonthName.NOVEMBER,
    },
  })

  const december = await prisma.month.create({
    data: {
      name: MonthName.DECEMBER,
    },
  })

  // food:
  const bananaMaca = await prisma.food.create({
    data: {
      name: 'Banana Maçã',
      color: 'yellow',
      type: FoodType.FRUIT,
    }
  })

  const laranjaPera = await prisma.food.create({
    data: {
      name: 'Laranja Pera',
      color: 'orange',
      type: FoodType.FRUIT,
    }
  })

  const melancia = await prisma.food.create({
    data: {
      name: 'Melancia',
      color: 'green',
      type: FoodType.FRUIT,
    }
  })

  const macaFuji = await prisma.food.create({
    data: {
      name: 'Maçã Fuji',
      color: 'red',
      type: FoodType.FRUIT,
    }
  })

  const mamaoHavai = await prisma.food.create({
    data: {
      name: 'Mamão Havaí',
      color: 'orange',
      type: FoodType.FRUIT,
    }
  })

  const tomateItaliano = await prisma.food.create({
    data: {
      name: 'Tomate Italiano',
      color: 'red',
      type: FoodType.VEGETABLE,
    }
  })

  const batataLavada = await prisma.food.create({
    data: {
      name: 'Batata Lavada',
      color: 'yellow',
      type: FoodType.VEGETABLE,
    }
  })

  const cebolaNacional = await prisma.food.create({
    data: {
      name: 'Cebola Nacional',
      color: 'purple',
      type: FoodType.VEGETABLE,
    }
  })

  const cenoura = await prisma.food.create({
    data: {
      name: 'Cenoura',
      color: 'orange',
      type: FoodType.VEGETABLE,
    }
  })

  const batataDoceRoxa = await prisma.food.create({
    data: {
      name: 'Batata Doce Roxa',
      color: 'purple',
      type: FoodType.VEGETABLE,
    }
  })

  // foodsMonths: 
  await prisma.foodsMonths.createMany({
    data: [
      {
        foodId: bananaMaca.id,
        monthId: august.id,
      },
      {
        foodId: bananaMaca.id,
        monthId: september.id,
      },
      {
        foodId: bananaMaca.id,
        monthId: october.id,
      },
      {
        foodId: bananaMaca.id,
        monthId: november.id,
      },
      {
        foodId: laranjaPera.id,
        monthId: january.id,
      },
      {
        foodId: melancia.id,
        monthId: january.id,
      },
      {
        foodId: macaFuji.id,
        monthId: june.id,
      },
      {
        foodId: macaFuji.id,
        monthId: july.id,
      },
      {
        foodId: macaFuji.id,
        monthId: august.id,
      },
      {
        foodId: macaFuji.id,
        monthId: september.id,
      },
      {
        foodId: macaFuji.id,
        monthId: october.id,
      },
      {
        foodId: macaFuji.id,
        monthId: november.id,
      },
      {
        foodId: macaFuji.id,
        monthId: december.id,
      },
      {
        foodId: mamaoHavai.id,
        monthId: october.id,
      },
      {
        foodId: mamaoHavai.id,
        monthId: november.id,
      },
      {
        foodId: tomateItaliano.id,
        monthId: january.id,
      },
      {
        foodId: tomateItaliano.id,
        monthId: november.id,
      },
      {
        foodId: tomateItaliano.id,
        monthId: december.id,
      },
      {
        foodId: batataLavada.id,
        monthId: december.id,
      },
      {
        foodId: cebolaNacional.id,
        monthId: january.id,
      },
      {
        foodId: cebolaNacional.id,
        monthId: july.id,
      },
      {
        foodId: cebolaNacional.id,
        monthId: august.id,
      },
      {
        foodId: cebolaNacional.id,
        monthId: september.id,
      },
      {
        foodId: cebolaNacional.id,
        monthId: october.id,
      },
      {
        foodId: cebolaNacional.id,
        monthId: november.id,
      },
      {
        foodId: cebolaNacional.id,
        monthId: december.id,
      },
      {
        foodId: cenoura.id,
        monthId: january.id,
      },
      {
        foodId: cenoura.id,
        monthId: december.id,
      },
      {
        foodId: batataDoceRoxa.id,
        monthId: may.id,
      },
      {
        foodId: batataDoceRoxa.id,
        monthId: june.id,
      },
      {
        foodId: batataDoceRoxa.id,
        monthId: july.id,
      },
    ],
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })