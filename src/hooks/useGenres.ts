import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
  id: number;
  name: string;
}

interface FetchGenresResponse {
   count:number
   results:Genre[]
}

const useGenres = () => {
  const [genres, setGenre ] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setError("");
    setGenre([]);
    setLoading(true);
    const controller = new AbortController();
    apiClient
      .get<FetchGenresResponse>("/genres", {
        signal: controller.signal,
        params: { page_size: 30 },
      })
      .then((res) => {
        setGenre(res.data.results);
        setTimeout(() => {
          setLoading(false);
        }, 600);
      })
      .catch((err) => {
        setError(err instanceof CanceledError ? "" : err.message);
        setTimeout(() => {
          setLoading(false);
        }, 600);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
