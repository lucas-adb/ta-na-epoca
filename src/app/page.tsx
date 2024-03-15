import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-grow max-w-4xl mx-auto flex flex-col lg:justify-center">
      <section className="flex flex-col items-center gap-8">
        <h1 className="font-serif text-5xl lg:text-8xl text-green-900">
          Tá na época de:
        </h1>

        <div className="flex flex-wrap justify-between gap-2">
          <div className="border-gray-800 p-2 border-2 lg:border-4 lg:p-4 rounded-full bg-yellow-400">
            <p className="font-semibold text-1xl lg:text-3xl">Maracujá</p>
          </div>

          <div className="border-gray-800 p-2 border-2 lg:border-4 lg:p-4 rounded-full bg-purple-400">
            <p className="font-semibold text-1xl lg:text-3xl">Cebola</p>
          </div>

          <div className="border-gray-800 p-2 border-2 lg:border-4 lg:p-4 rounded-full bg-green-400">
            <p className="font-semibold text-1xl lg:text-3xl">Alface</p>
          </div>

          <div className="border-gray-800 p-2 border-2 lg:border-4 lg:p-4 rounded-full bg-red-400">
            <p className="font-semibold text-1xl lg:text-3xl">Maçã</p>
          </div>

          <div className="border-gray-800 p-2 border-2 lg:border-4 lg:p-4 rounded-full bg-yellow-400">
            <p className="font-semibold text-1xl lg:text-3xl">Banana</p>
          </div>

          <div className="border-gray-800 p-2 border-2 lg:border-4 lg:p-4 rounded-full bg-blue-400">
            <p className="font-semibold text-1xl lg:text-3xl">Mirtilo</p>
          </div>

          <div className="border-gray-800 p-2 border-2 lg:border-4 lg:p-4 rounded-full bg-yellow-400">
            <p className="font-semibold text-1xl lg:text-3xl">Maracujá</p>
          </div>

          <div className="border-gray-800 p-2 border-2 lg:border-4 lg:p-4 rounded-full bg-purple-400">
            <p className="font-semibold text-1xl lg:text-3xl">Cebola</p>
          </div>

          <div className="border-gray-800 p-2 border-2 lg:border-4 lg:p-4 rounded-full bg-green-400">
            <p className="font-semibold text-1xl lg:text-3xl">Alface</p>
          </div>

          <div className="border-gray-800 p-2 border-2 lg:border-4 lg:p-4 rounded-full bg-red-400">
            <p className="font-semibold text-1xl lg:text-3xl">Maçã</p>
          </div>

          <div className="border-gray-800 p-2 border-2 lg:border-4 lg:p-4 rounded-full bg-yellow-400">
            <p className="font-semibold text-1xl lg:text-3xl">Banana</p>
          </div>

          <div className="border-gray-800 p-2 border-2 lg:border-4 lg:p-4 rounded-full bg-blue-400">
            <p className="font-semibold text-1xl lg:text-3xl">Mirtilo</p>
          </div>
        </div>

        <section>
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
        </section>
      </section>
    </main>
  );
}
