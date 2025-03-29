import apiClient, { controller } from "@/services/apiClient";
import { queryOptions } from "@tanstack/react-query";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}
const fetchUserDetails = async (): Promise<User[]> => {
  const users = await apiClient.get<User[]>(
    "https://jsonplaceholder.typicode.com/users",
    {
      signal: controller.signal,
    }
  );
  return users.data;
};

const userDetailsQueryOption = () => {
  return queryOptions({
    queryFn: fetchUserDetails,
    queryKey: ["users"],
  });
};

export default userDetailsQueryOption;
