import axios from 'axios';
import { useEffect, useState } from 'react';
import { getData } from '../services/api';

export const useGetData = (url) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setResponse(null);
    setLoading(true);
    setError(null);

    const source = axios.CancelToken.source();

    try {
      (async () => {
        const response = await getData(url, {
          cancelToken: source.token,
        });

        setLoading(false);
        setResponse(response);
      })();
    } catch (error) {
      setLoading(false);
      setError(error);
    }
    return () => {
      source.cancel();
    };
  }, [url]);

  return { response, loading, error };
};
