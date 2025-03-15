import apiClient from "@/services/apiClient";
import { useEffect, useState } from "react";
import { controller } from "@/services/apiClient";
import { CanceledError } from "axios";
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}
const useUsers = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState<User[]>([]);
  useEffect(() => {
    setLoading(true);
    apiClient
      .get<User[]>("/users", { signal: controller.signal })
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        if (err instanceof CanceledError) {
          return;
        }
        setError("some issue with users api");
      });
  }, []);
  return { isLoading, error, data };
};
export default useUsers;
