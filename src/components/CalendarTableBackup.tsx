import { getFoodsWithMonths } from "@/services/foodService";
import { FramerMotionVariant } from "./framer/FramerMotionVariant";

export default async function CalendarTableBackup(): Promise<JSX.Element> {
  // const rows = await getFoods();
  const rows = await getFoodsWithMonths();

  // console.log(rows[0])

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-800 text-sm">
        <thead className="text-left">
          <tr>
            <th className="text-left whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Nome
            </th>
            <th className="text-left whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Janeiro
            </th>
            <th className="text-left whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Fevereiro
            </th>
            <th className="text-left whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Março
            </th>
            <th className="text-left whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Abril
            </th>
            <th className="text-left whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Maio
            </th>
            <th className="text-left whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Junho
            </th>
            <th className="text-left whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Julho
            </th>
            <th className="text-left whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Agosto
            </th>
            <th className="text-left whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Setembro
            </th>
            <th className="text-left whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Outubro
            </th>
            <th className="text-left whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Novembro
            </th>
            <th className="text-left whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Dezembro
            </th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
          <td>Fruta</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
        </tr> */}
          {rows.map((row) => (
            <tr key={row.id}>
              <td>{row.name}</td>
              <td>{row.months.some((m) => m.monthId === 1) ? "x" : ""}</td>
              <td>{row.months.some((m) => m.monthId === 2) ? "x" : ""}</td>
              <td>{row.months.some((m) => m.monthId === 3) ? "x" : ""}</td>
              <td>{row.months.some((m) => m.monthId === 4) ? "x" : ""}</td>
              <td>{row.months.some((m) => m.monthId === 5) ? "x" : ""}</td>
              <td>{row.months.some((m) => m.monthId === 6) ? "x" : ""}</td>
              <td>{row.months.some((m) => m.monthId === 7) ? "x" : ""}</td>
              <td>{row.months.some((m) => m.monthId === 8) ? "x" : ""}</td>
              <td>{row.months.some((m) => m.monthId === 9) ? "x" : ""}</td>
              <td>{row.months.some((m) => m.monthId === 10) ? "x" : ""}</td>
              <td>{row.months.some((m) => m.monthId === 11) ? "x" : ""}</td>
              <td>{row.months.some((m) => m.monthId === 12) ? "x" : ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
