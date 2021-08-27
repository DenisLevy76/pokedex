import axios from 'axios';
import { useEffect, useState } from 'react';
import { getData } from '../services/api';

export const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setResponse(null);
    setLoading(true);
    setError(null);

    const source = axios.CancelToken.source();

    (async () => {
      try {
        const responsePokemon = await getData(url, {
          cancelToken: source.token,
        });

        setLoading(false);
        setResponse(responsePokemon);
      } catch (error) {
        setLoading(false);
      }
    })();

    return () => {
      source.cancel();
    };
  }, [url]);

  return [response, loading, error];
};
