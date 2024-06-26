import CalendarTable from "@/components/CalendarTable";
import SearchForm from "@/components/SearchForm";

export default function Calendar() {
  return (
    <main className="px-8 pb-4 flex-grow flex flex-col sm:justify-center gap-4 sm:gap-8">
      <h1 className="font-serif text-lg sm:text-4xl md:text-6xl text-green-900 text-center">
        Sazonalidade de produtos
      </h1>

      <div>
        <SearchForm />
      </div>

      <div>
        <CalendarTable />
      </div>
    </main>
  );
}
