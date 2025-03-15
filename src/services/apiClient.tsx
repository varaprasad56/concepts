import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const controller = new AbortController();
export default apiClient;
