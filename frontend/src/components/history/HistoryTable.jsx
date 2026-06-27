import { formatDate } from '../../utils/formatDate';

function HistoryTable({ items }) {
  return (
    <div className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
                Organization
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
                Asset
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
                Finding
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
                Priority
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            {items.map((item, index) => {
              const priority = item.priority || item.result?.priority || item.analysis?.priority || 'Not available';
              const date = item.createdAt || item.updatedAt || item.date || item.timestamp;

              return (
                <tr key={item.id || item._id || index} className="hover:bg-slate-50">
                  <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-slate-900">
                    {item.organization || 'Not available'}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-slate-700">
                    {item.asset || 'Not available'}
                  </td>
                  <td className="max-w-md px-4 py-3 text-sm text-slate-700">
                    <p className="line-clamp-2">{item.finding || 'Not available'}</p>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm">
                    <span className="rounded-md bg-slate-100 px-2.5 py-1 font-medium text-slate-800">
                      {priority}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-slate-700">{formatDate(date)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HistoryTable;
