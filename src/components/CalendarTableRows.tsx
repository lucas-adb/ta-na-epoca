import { getFoodWithMonthsFiltered, getFoodsWithMonths } from "@/services/foodService";

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

export default async function CalendarTableRows(): Promise<JSX.Element> {
  const test = await getFoodWithMonthsFiltered({ type: "FRUIT" });
  const rows = await getFoodsWithMonths();
  const monthsNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  console.log(test);

  return (
    <>
      {rows.map((row) => {
        const fontColor = tailwindDynamicColorsFix[row.color];

        return (
          <tr key={row.id} className="hover:bg-gray-100">
            <td className="px-4 py-2">{row.name}</td>
            {monthsNumbers.map((monthId) => (
              <td key={monthId} className="px-4 py-2 text-center">
                {row.months.some((m) => m.monthId === monthId) ? (
                  <p
                    className={`text-4xl font-bold ${fontColor}`}
                  >
                    ·
                  </p>
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
