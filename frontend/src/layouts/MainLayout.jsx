import { Link, NavLink, Outlet } from 'react-router-dom';
import { History, ShieldCheck } from 'lucide-react';

function MainLayout() {
  const navLinkClass = ({ isActive }) =>
    `inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition ${
      isActive
        ? 'bg-slate-900 text-white'
        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
    }`;

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-900 text-white">
              <ShieldCheck size={22} />
            </span>
            <div className="min-w-0">
              <h1 className="text-lg font-semibold text-slate-950">AI Security Recommendations</h1>
              <p className="text-sm text-slate-500">Analyze findings and view past decisions</p>
            </div>
          </Link>

          <nav className="flex flex-wrap gap-2">
            <NavLink to="/" className={navLinkClass} end>
              <ShieldCheck size={16} />
              Dashboard
            </NavLink>
            <NavLink to="/history" className={navLinkClass}>
              <History size={16} />
              History
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-6 sm:py-8">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
