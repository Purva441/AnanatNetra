import { Inbox } from 'lucide-react';

function EmptyState({ title, message }) {
  return (
    <div className="rounded-md border border-dashed border-slate-300 bg-white p-8 text-center">
      <Inbox className="mx-auto mb-3 text-slate-400" size={34} />
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 text-sm text-slate-500">{message}</p>
    </div>
  );
}

export default EmptyState;
