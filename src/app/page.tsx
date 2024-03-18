import Link from "next/link";
import SimpleFadeIn from "@/components/framer/SimpleFadeIn";
import { SimpleVariant } from "@/components/framer/SimpleVariant";
import { filterFoodsByCurrentMonth } from "./utils/utils";
import { fruitsAndVegetables } from "@/data/fruitsAndVegetables";

export default function Home() {
  const filteredFoods = filterFoodsByCurrentMonth(fruitsAndVegetables);

  return (
    <main className="flex-grow max-w-4xl mx-auto flex flex-col lg:justify-center">
      <SimpleFadeIn>
        <section className="flex flex-col items-center gap-8">
          <h1 className="font-serif text-5xl lg:text-8xl text-green-900">
            Tá na época de:
          </h1>

          <div className="flex flex-wrap justify-between gap-2">
            <SimpleVariant filteredFoods={filteredFoods} />
          </div>

          <div>
            <p>
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
