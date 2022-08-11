import axios from "axios";

export const axiosInstance = axios.create({
  headers: { "Content-Type": "application/json" },
  responseType: "json",
});

/**
 * Interceptor adds basic authentication to every axios request.
 */
axiosInstance.interceptors.request.use(
  (config) => {
    config.baseURL = localStorage.getItem("asd") || "";

    config.headers.Authorization = "Basic";
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
