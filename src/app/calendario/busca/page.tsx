import CalendarSearchedTable from "@/components/CalendarSearchedTable";
import { CalendarSearchProps, SearchParams } from "@/types/types";
import { NextPageContext } from "next";
import Link from "next/link";

const CalendarSearch = (props: CalendarSearchProps) => {
  // console.log('props', props);

  const searchParams = props.searchParams;
  const { food, type, month } = searchParams;

  return (
    <main className="px-8 pb-4 flex-grow flex flex-col sm:justify-center gap-4 sm:gap-8">
      <h1 className="font-serif text-lg sm:text-4xl md:text-6xl text-green-900 text-center">
        Sazonalidade de produtos
      </h1>

      <Link
        href="/calendario"
        className="mx-auto px-4 py-2 bg-green-900 text-white rounded-lg shadow-md hover:scale-105 transition-transform"
      >
        Limpar Pesquisa
      </Link>

      <div>
        <CalendarSearchedTable food={food} type={type} month={month} />
      </div>
    </main>
  );
};

CalendarSearch.getInitialProps = async (ctx: NextPageContext) => {
  const { query } = ctx;
  const { food, type, month } = query as SearchParams;

  return {
    food,
    type,
    month,
  };
};

export default CalendarSearch;
