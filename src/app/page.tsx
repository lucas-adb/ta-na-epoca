import Link from "next/link";
import SimpleFadeIn from "@/components/framer/SimpleFadeIn";
import { SimpleVariant } from "@/components/framer/SimpleVariant";
import { filterFoodsByCurrentMonth } from "./utils/utils";
import { fruitsAndVegetables } from "@/data/fruitsAndVegetables";

import { sql } from "@vercel/postgres";

import { PrismaClient } from '@prisma/client';
import { NewFoodItem } from "@/components/NewFoodItem";
import { NewSimpleVariant } from "@/components/framer/NewSimpleVariant";
const prisma = new PrismaClient();

async function Test(): Promise<JSX.Element> {
  const rows = await prisma.food.findMany();

  // console.log(rows);

  // return (
  //   <div>
  //     {rows.map((row) => (
  //       <NewFoodItem key={row.id} food={row} />
  //     ))}
  //   </div>
  // );

  return (
    <NewSimpleVariant filteredFoods={rows} />
  )
}


export default function Home() {
  const filteredFoods = filterFoodsByCurrentMonth(fruitsAndVegetables);

  return (
    <main className="flex-grow max-w-4xl mx-auto flex flex-col sm:justify-center">
      <SimpleFadeIn>
        <section className="flex flex-col items-center gap-10 sm:gap-8 px-6 sm:px-4 mx-auto py-8">
          <h1 className="font-serif text-6xl md:text-8xl text-green-900 text-center">
            Tá na época de:
          </h1>

          <div className="flex flex-wrap justify-between gap-2">
            <SimpleVariant filteredFoods={filteredFoods} />
          </div>

          <div>
            <Test />
          </div>

          <div>
            <p className="text-center">
              Confira o{" "}
              <Link
                href="/calendario"
                className="text-green-900 font-bold hover:text-green-700"
              >
                calendário
              </Link>{" "}
              completo das safras
            </p>
          </div>

        </section>
      </SimpleFadeIn>
    </main>
  );
}
