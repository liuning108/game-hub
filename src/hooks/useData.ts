import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


interface FetchResponse<T> {
   count:number
   results:T[]
}

const useData = <T>(endpoint :string) => {
  const [data, setData ] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setError("");
    setData([]);
    setLoading(true);
    const controller = new AbortController();
    apiClient
      .get< FetchResponse<T> >(endpoint, {
        signal: controller.signal,
      })
      .then((res) => {
        setData(res.data.results);
        setTimeout(() => {
          setLoading(false);
        }, 200);
      })
      .catch((err) => {
        setError(err instanceof CanceledError ? "" : err.message);
        setTimeout(() => {
          setLoading(false);
        }, 200);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return { data, error, isLoading };
};

export default useData;
