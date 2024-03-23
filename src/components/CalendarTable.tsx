import CalendarTableRows from "./CalendarTableRows";

export default function CalendarTable() {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md bg-gray-50 max-w-screen-xl mx-auto">
      <table className="w-full divide-y-2 divide-gray-200 text-sm">
        <thead className="text-center bg-gray-100">
          <tr className="text-green-900">
            <th className="whitespace-nowrap px-4 py-2 font-medium text-left">
              Nome
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium">Jan</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium">Fev</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium">Mar</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium">Abr</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium">Mai</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium">Jun</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium">Jul</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium">Ago</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium">Set</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium">Out</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium">Nov</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium">Dez</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          <CalendarTableRows />
        </tbody>
      </table>
    </div>
  );
}
