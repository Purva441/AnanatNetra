import ResponseCard from './ResponseCard';
import { RESPONSE_FIELDS } from '../../utils/constants';

function AnalysisResult({ result }) {
  if (!result) {
    return null;
  }

  return (
    <section className="mt-6">
      <h2 className="mb-3 text-lg font-semibold text-slate-950">AI Recommendation</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {RESPONSE_FIELDS.map((field) => (
          <ResponseCard
            key={field.key}
            title={field.title}
            description={field.description}
            value={result[field.key]}
          />
        ))}
      </div>
    </section>
  );
}

export default AnalysisResult;
