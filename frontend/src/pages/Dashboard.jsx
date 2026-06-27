import AnalysisResult from '../components/dashboard/AnalysisResult';
import AnalyzeForm from '../components/dashboard/AnalyzeForm';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import { useAnalyze } from '../hooks/useAnalyze';

function Dashboard() {
  const { result, isLoading, submitAnalysis } = useAnalyze();

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-slate-950">Dashboard</h2>
        <p className="mt-1 text-sm text-slate-500">
          Submit a security finding and receive a practical AI recommendation.
        </p>
      </div>

      <AnalyzeForm onSubmit={submitAnalysis} isLoading={isLoading} />

      {isLoading && (
        <div className="mt-6">
          <LoadingSpinner text="Generating AI recommendation..." />
        </div>
      )}

      <AnalysisResult result={result} />
    </div>
  );
}

export default Dashboard;
