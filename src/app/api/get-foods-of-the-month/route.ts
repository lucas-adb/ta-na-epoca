import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

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
