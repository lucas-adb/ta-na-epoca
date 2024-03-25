import {
  getFoodByParams,
  prepareSearchParams,
  validateSearchParams,
} from "@/services/foodService";
import { FoodWithMonths } from "@/types/types";

// const only created so that the correct bg colors are loaded
const tailwindDynamicColorsFix: { [key: string]: string } = {
  brown: "text-yellow-700",
  red: "text-red-400",
  yellow: "text-yellow-400",
  green: "text-green-400",
  blue: "text-blue-400",
  purple: "text-purple-400",
  orange: "text-orange-400",
};

export default async function CalendarTableRowsSearch({
  food,
  type,
  month,
}: {
  food: any;
  type: any;
  month: any;
}): Promise<JSX.Element> {
  let rows: FoodWithMonths[] = [];

  if (validateSearchParams(food, type, month)) {
    const params = prepareSearchParams(food, type, month);
    const result = await getFoodByParams(params);
    rows = Array.isArray(result) ? result : [result];
  }

  const monthsNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      {(!rows || rows.length === 0) && (
        <tr className="hover:bg-gray-100">
          <td className="px-4 py-4 text-center" colSpan={13}>
            Nenhum resultado encontrado
          </td>
        </tr>
      )}

      {rows &&
        rows.map((row) => {
          const fontColor = tailwindDynamicColorsFix[row.color];

          return (
            <tr key={row.id} className="hover:bg-gray-100">
              <td className="px-4 py-2">{row.name}</td>
              {monthsNumbers.map((monthId) => (
                <td key={monthId} className="px-4 py-2 text-center">
                  {row.months.some((m) => m.monthId === monthId) ? (
                    <p className={`text-4xl font-bold ${fontColor}`}>·</p>
                  ) : (
                    ""
                  )}
                </td>
              ))}
            </tr>
          );
        })}
    </>
  );
}
