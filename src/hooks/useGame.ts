import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setError("");
    setGames([]);
    setLoading(true);
    const controller = new AbortController();
    apiClient
      .get<FetchGamesResponse>("/games", {
        signal: controller.signal,
        params: { page_size: 30 },
      })
      .then((res) => {
        setGames(res.data.results);
        setTimeout(()=>{
          setLoading(false);
        },600)
        
      })
      .catch((err) => {
        setError(err instanceof CanceledError ? "" : err.message);
        setTimeout(()=>{
          setLoading(false);
        },600)
      });

    return () => {
      controller.abort();
    };
  }, []);

  return { games, error,isLoading };
};
export default useGames;
