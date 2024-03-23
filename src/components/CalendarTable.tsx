import CalendarTableRows from "./CalendarTableRows";

export default function CalendarTable() {
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
          <CalendarTableRows />
        </tbody>
      </table>
    </div>
  );
}
