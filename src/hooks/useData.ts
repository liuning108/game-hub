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
    setLoading(true);
    const controller = new AbortController();
    apiClient
      .get< FetchResponse<T> >(endpoint, {
        signal: controller.signal,
      })
      .then((res) => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
        setData(res.data.results);
        
      })
      .catch((err :any) => {
        console.log(err)
        setError(err instanceof CanceledError ? "" : err.message);
        setTimeout(() => {
          setLoading(false);
        }, 5000);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return { data, error, isLoading };
};

export default useData;
