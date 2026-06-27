import { useState } from 'react';
import toast from 'react-hot-toast';
import { analyzeFinding } from '../services/securityService';
import { getErrorMessage } from '../utils/errorHandler';

export function useAnalyze() {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function submitAnalysis(payload) {
    setIsLoading(true);

    try {
      const data = await analyzeFinding(payload);
      setResult(data);
      toast.success('Analysis completed successfully.');
    } catch (error) {
      toast.error(getErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  }

  return {
    result,
    isLoading,
    submitAnalysis,
  };
}
