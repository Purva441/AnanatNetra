import EmptyState from '../components/ui/EmptyState';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import HistoryTable from '../components/history/HistoryTable';
import { useHistory } from '../hooks/useHistory';

function History() {
  const { history, isLoading } = useHistory();

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-slate-950">History</h2>
        <p className="mt-1 text-sm text-slate-500">Review previous security analyses.</p>
      </div>

      {isLoading ? (
        <LoadingSpinner text="Loading history..." />
      ) : history.length > 0 ? (
        <HistoryTable items={history} />
      ) : (
        <EmptyState title="No history found" message="Previous analyses will appear here after you run them." />
      )}
    </div>
  );
}

export default History;
