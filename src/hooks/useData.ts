import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";


interface FetchResponse<T> {
   count:number
   results:T[]
}

const useData = <T>(endpoint :string,requestConfig?:AxiosRequestConfig, deps?:any[]) => {
  const [data, setData ] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
    console.log("qqq",requestConfig?.params)
  useEffect(() => {
    setData([])
    setLoading(true);
    const controller = new AbortController();
    apiClient
      .get< FetchResponse<T> >(endpoint, {
        signal: controller.signal,
        ...requestConfig
      })
      .then((res) => {
        setTimeout(() => {
          setLoading(false);
        }, 5000);
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
  }, deps ? [...deps]:[]); 

  return { data, error, isLoading };
};

export default useData;
