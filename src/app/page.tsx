import Link from "next/link";
import FramerFadeIn from "@/components/framer/FramerFadeIn";
import FoodCards from "@/components/FoodCards";

export default function Home() {
  return (
    <main className="flex-grow max-w-4xl mx-auto flex flex-col sm:justify-center">
      <FramerFadeIn>
        <section className="flex flex-col items-center gap-10 sm:gap-8 px-6 sm:px-4 mx-auto py-8">
          <h1 className="font-serif text-6xl md:text-8xl text-green-900 text-center">
            Tá na época de:
          </h1>

          <div className="flex flex-wrap justify-between gap-2">
            <FoodCards />
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
      </FramerFadeIn>
    </main>
  );
}
