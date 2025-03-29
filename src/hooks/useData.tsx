import apiClient from "@/services/apiClient";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

const useData = <T,>({ endpoint }: { endpoint: string }) => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    apiClient
      .get<T[]>(endpoint)
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        if (err instanceof CanceledError) {
          return;
        }
        setError("some issue with apiClient");
      });
  }, []);
  return { isLoading, error, data, setData };
};
export default useData;
