import { useState, useEffect, useCallback } from "react";

function useGetData(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Something went wrong!");

      const data = await response.json();
      if (data.errorMessage) throw new Error(data.errorMessage);
      setData(data.items || data.results || data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [url]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { data, isLoading, error, setError };
}

export default useGetData;
