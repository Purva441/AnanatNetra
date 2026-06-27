import { LoaderCircle } from 'lucide-react';

function Button({ children, isLoading = false, className = '', ...props }) {
  return (
    <button
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400 ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && <LoaderCircle size={18} className="animate-spin" />}
      {children}
    </button>
  );
}

export default Button;
