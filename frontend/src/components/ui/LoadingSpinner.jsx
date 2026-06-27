import { LoaderCircle } from 'lucide-react';

function LoadingSpinner({ text = 'Loading...' }) {
  return (
    <div className="flex items-center justify-center gap-2 rounded-md border border-slate-200 bg-white p-6 text-sm text-slate-600">
      <LoaderCircle size={18} className="animate-spin" />
      {text}
    </div>
  );
}

export default LoadingSpinner;
