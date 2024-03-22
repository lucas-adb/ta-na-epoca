import { NextResponse } from 'next/server';
import { MonthName, PrismaClient } from '@prisma/client';
import { monthNames } from '@/app/utils/utils';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const currentMonth = new Date().getMonth();

    const result = await prisma.food.findMany({
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

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
