// "use client";
import axios from "axios";

const ApiClient = () => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const token = process.env.NEXT_PUBLIC_TOKEN;
  const instance = axios.create({
    baseURL,
  });

  instance.interceptors.request.use(async (request) => {
    request.headers["token"] = token || "";

    return request;
  });

  instance.interceptors.response.use(
    (response) => {
      return response.data.data;
    },
    (error) => {
      return Promise.reject(error.response.data.message);
    }
  );

  return instance;
};

export default ApiClient();
