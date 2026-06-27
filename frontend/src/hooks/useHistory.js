import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { getHistory } from '../services/securityService';
import { getErrorMessage } from '../utils/errorHandler';

export function useHistory() {
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadHistory() {
      try {
        const data = await getHistory();
        setHistory(Array.isArray(data) ? data : []);
      } catch (error) {
        toast.error(getErrorMessage(error));
      } finally {
        setIsLoading(false);
      }
    }

    loadHistory();
  }, []);

  return {
    history,
    isLoading,
  };
}
