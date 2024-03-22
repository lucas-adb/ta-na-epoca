import { getFoodsWithMonths } from "@/services/foodService";
import { FramerMotionVariant } from "./framer/FramerMotionVariant";

export default async function CalendarTable(): Promise<JSX.Element> {
  // const rows = await getFoods();
  const rows = await getFoodsWithMonths();

  // console.log(rows[0])

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
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

{
  /* <div className="overflow-x-auto">
<table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
  <thead className="ltr:text-left rtl:text-right">
    <tr>
      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Date of Birth</th>
      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Role</th>
      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Salary</th>
    </tr>
  </thead>

  <tbody className="divide-y divide-gray-200">
    <tr>
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">John Doe</td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">Web Developer</td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">$120,000</td>
    </tr>

    <tr>
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Jane Doe</td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">04/11/1980</td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">Web Designer</td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">$100,000</td>
    </tr>

    <tr>
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Gary Barlow</td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">Singer</td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">$20,000</td>
    </tr>
  </tbody>
</table>
</div> */
}
