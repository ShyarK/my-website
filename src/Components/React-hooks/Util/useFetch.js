import { useEffect, useState } from 'react';

export const useFetch = url => {
  const [state, setState] = useState({ data: null, loading: true });
  useEffect(() => {
    const fetchData = async () => {
      await fetch(url)
        .then(res => res.json())
        .then(res => setState({ data: res, loading: false }));
    };
    fetchData();
  }, [url]);
  return state;
};
