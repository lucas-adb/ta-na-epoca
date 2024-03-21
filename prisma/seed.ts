import { FoodType, MonthName, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

  const january = await prisma.month.upsert({
    where: {
      name: MonthName.JANUARY,
    },
    update: {},
    create: {
      name: MonthName.JANUARY,
    },
  
  })

  const february = await prisma.month.upsert({
    where: {
      name: MonthName.FEBRUARY,
    },
    update: {},
    create: {
      name: MonthName.FEBRUARY,
    },
  })
  
  const march = await prisma.month.upsert({
    where: {
      name: MonthName.MARCH,
    },
    update: {},
    create: {
      name: MonthName.MARCH,
    },
  })

  const april = await prisma.month.upsert({
    where: {
      name: MonthName.APRIL,
    },
    update: {},
    create: {
      name: MonthName.APRIL,
    },
  })

  const may = await prisma.month.upsert({
    where: {
      name: MonthName.MAY,
    },
    update: {},
    create: {
      name: MonthName.MAY,
    },
  })

  const june = await prisma.month.upsert({
    where: {
      name: MonthName.JUNE,
    },
    update: {},
    create: {
      name: MonthName.JUNE,
    },
  })

  const july = await prisma.month.upsert({
    where: {
      name: MonthName.JULY,
    },
    update: {},
    create: {
      name: MonthName.JULY,
    },
  })

  const august = await prisma.month.upsert({
    where: {
      name: MonthName.AUGUST,
    },
    update: {},
    create: {
      name: MonthName.AUGUST,
    },
  })

  const september = await prisma.month.upsert({
    where: {
      name: MonthName.SEPTEMBER,
    },
    update: {},
    create: {
      name: MonthName.SEPTEMBER,
    },
  })

  const october = await prisma.month.upsert({
    where: {
      name: MonthName.OCTOBER,
    },
    update: {},
    create: {
      name: MonthName.OCTOBER,
    },
  })

  const november = await prisma.month.upsert({
    where: {
      name: MonthName.NOVEMBER,
    },
    update: {},
    create: {
      name: MonthName.NOVEMBER,
    },
  })

  const december = await prisma.month.upsert({
    where: {
      name: MonthName.DECEMBER,
    },
    update: {},
    create: {
      name: MonthName.DECEMBER,
    },
  })

  const bananaMaca = await prisma.food.upsert({
    where: {
      name: 'Banana Maçã',
    },
    update: {},
    create: {
      name: 'Banana Maçã',
      color: 'yellow',
      type: FoodType.FRUIT,
    },
  })
  
  const laranjaPera = await prisma.food.upsert({
    where: {
      name: 'Laranja Pera',
    },
    update: {},
    create: {
      name: 'Laranja Pera',
      color: 'orange',
      type: FoodType.FRUIT,
    },
  
  })

  const melancia = await prisma.food.upsert({
    where: {
      name: 'Melancia',
    },
    update: {},
    create: {
      name: 'Melancia',
      color: 'green',
      type: FoodType.FRUIT,
    },
  })

  const macaFuji = await prisma.food.upsert({
    where: {
      name: 'Maçã Fuji',
    },
    update: {},
    create: {
      name: 'Maçã Fuji',
      color: 'red',
      type: FoodType.FRUIT,
    },
  })

  const mamaoHavai = await prisma.food.upsert({
    where: {
      name: 'Mamão Havaí',
    },
    update: {},
    create: {
      name: 'Mamão Havaí',
      color: 'orange',
      type: FoodType.FRUIT,
    },
  })

  const tomateItaliano = await prisma.food.upsert({
    where: {
      name: 'Tomate Italiano',
    },
    update: {},
    create: {
      name: 'Tomate Italiano',
      color: 'red',
      type: FoodType.VEGETABLE,
    },
  })

  const batataLavada = await prisma.food.upsert({
    where: {
      name: 'Batata Lavada',
    },
    update: {},
    create: {
      name: 'Batata Lavada',
      color: 'yellow',
      type: FoodType.VEGETABLE,
    },
  })

  const cebolaNacional = await prisma.food.upsert({
    where: {
      name: 'Cebola Nacional',
    },
    update: {},
    create: {
      name: 'Cebola Nacional',
      color: 'purple',
      type: FoodType.VEGETABLE,
    },
  })

  const cenoura = await prisma.food.upsert({
    where: {
      name: 'Cenoura',
    },
    update: {},
    create: {
      name: 'Cenoura',
      color: 'orange',
      type: FoodType.VEGETABLE,
    },
  })

  const batataDoceRoxa = await prisma.food.upsert({
    where: {
      name: 'Batata Doce Roxa',
    },
    update: {},
    create: {
      name: 'Batata Doce Roxa',
      color: 'purple',
      type: FoodType.VEGETABLE,
    },
  })

  // foodsMonths: 
  async function upsertFoodMonth(foodId: number, monthId: number) {
    return prisma.foodsMonths.upsert({
      where: {
        foodId_monthId: {
          foodId: foodId,
          monthId: monthId,
        },
      },
      update: {},
      create: {
        foodId: foodId,
        monthId: monthId,
      },
    })
  }
  
  const foodMonthPairs = [
    { foodId: bananaMaca.id, monthId: august.id },
    { foodId: bananaMaca.id, monthId: september.id },
    { foodId: bananaMaca.id, monthId: october.id },
    { foodId: bananaMaca.id, monthId: november.id },
    { foodId: laranjaPera.id, monthId: january.id },
    { foodId: melancia.id, monthId: january.id },
    { foodId: macaFuji.id, monthId: june.id },
    { foodId: macaFuji.id, monthId: july.id },
    { foodId: macaFuji.id, monthId: august.id },
    { foodId: macaFuji.id, monthId: september.id },
    { foodId: macaFuji.id, monthId: october.id },
    { foodId: macaFuji.id, monthId: november.id },
    { foodId: macaFuji.id, monthId: december.id },
    { foodId: mamaoHavai.id, monthId: october.id },
    { foodId: mamaoHavai.id, monthId: november.id },
    { foodId: tomateItaliano.id, monthId: january.id },
    { foodId: tomateItaliano.id, monthId: november.id },
    { foodId: tomateItaliano.id, monthId: december.id },
    { foodId: batataLavada.id, monthId: december.id },
    { foodId: cebolaNacional.id, monthId: january.id },
    { foodId: cebolaNacional.id, monthId: july.id },
    { foodId: cebolaNacional.id, monthId: august.id },
    { foodId: cebolaNacional.id, monthId: september.id },
    { foodId: cebolaNacional.id, monthId: october.id },
    { foodId: cebolaNacional.id, monthId: november.id },
    { foodId: cebolaNacional.id, monthId: december.id },
    { foodId: cenoura.id, monthId: january.id },
    { foodId: cenoura.id, monthId: december.id },
    { foodId: batataDoceRoxa.id, monthId: may.id },
    { foodId: batataDoceRoxa.id, monthId: june.id },
    { foodId: batataDoceRoxa.id, monthId: july.id }
  ]
  
  await Promise.all(
    foodMonthPairs.map(({ foodId, monthId }) => upsertFoodMonth(foodId, monthId))
  )
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