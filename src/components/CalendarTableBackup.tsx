import { getFoodsWithMonths } from "@/services/foodService";
import { FramerMotionVariant } from "./framer/FramerMotionVariant";

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

export default async function CalendarTable(): Promise<JSX.Element> {
  // const rows = await getFoods();
  const rows = await getFoodsWithMonths();

  // const fontColor = tailwindDynamicColorsFix[food.color];

  // console.log(rows[0])

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Nome
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Jan
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Fev
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Abr
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Jan
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Fev
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Abr
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Jan
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Fev
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Abr
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Jan
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Fev
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Abr
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {rows.map((row) => {
            const fontColor = tailwindDynamicColorsFix[row.color];
            const monthsNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

            return (
              <tr key={row.id} className="text-center">
                <td>{row.name}</td>
                {monthsNumbers.map((monthId) => (
                  <td key={monthId}>
                    {row.months.some((m) => m.monthId === monthId) ? (
                      <p
                        className={`text-yellow-400 text-3xl font-bold ${fontColor}`}
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
        </tbody>
      </table>
    </div>
  );
}

{/* {rows.map((row) => {
  const fontColor = tailwindDynamicColorsFix[row.color];

  return (
    <tr key={row.id} className="text-center">
      <td>{row.name}</td>
      {Array.from({ length: 12 }, (_, i) => i + 1).map((monthId) => (
        <td key={monthId}>
          {row.months.some((m) => m.monthId === monthId) ? (
            <p
              className={`text-yellow-400 text-3xl font-bold ${fontColor}`}
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
})} */}