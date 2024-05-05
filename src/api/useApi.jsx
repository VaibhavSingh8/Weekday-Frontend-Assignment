import { useState, useEffect } from "react";

//custom hook to fetch data from an A

const useApi = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, {
          method: options.method,
          headers: options.headers,
          body: options.body,
        });
        const jsonData = await response.json();

        setData(jsonData);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [url, JSON.stringify(options)]);
  return { data, loading, error };
};

export default useApi;
