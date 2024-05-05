import { useState, useEffect } from "react";

//custom hook to fetch data from an API

const useAPI = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    // Check if the URL or options have changed before calling the API
    const shouldFetch = !data && !error;

    if (shouldFetch) {
      fetchData();
    }
  }, [url, options]);

  return { data, loading, error };
};

export default useAPI;
