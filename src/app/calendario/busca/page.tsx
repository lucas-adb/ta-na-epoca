import CalendarTableSearch from "@/components/CalendarTableSearch";
import SearchForm from "@/components/SearchForm";
import { CalendarSearchProps, SearchParams } from "@/types/types";
import { NextPageContext } from "next";

const CalendarSearch = (props: CalendarSearchProps) => {
  // console.log('props', props);

  const searchParams = props.searchParams;
  const { food, type, month } = searchParams;

  return (
    <main className="px-8 flex-grow flex flex-col sm:justify-center gap-4 sm:gap-8">
      <h1 className="font-serif text-lg sm:text-4xl md:text-6xl text-green-900 text-center">
        Sazonalidade de produtos
      </h1>

      <div>
        <SearchForm />
      </div>

      <div>
        <CalendarTableSearch food={food} type={type} month={month}/>
      </div>
    </main>
  );
}

CalendarSearch.getInitialProps = async (ctx: NextPageContext) => {
  const { query } = ctx;
  const { food, type, month } = query as SearchParams;

  return {
    food,
    type,
    month
  };
}

export default CalendarSearch;
