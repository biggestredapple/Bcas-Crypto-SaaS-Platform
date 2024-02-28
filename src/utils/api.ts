import axios from "axios";

export const api = () => {
  const instance = axios.create({
    headers: {
      "Content-Type": "application/json",
    },
    baseURL: "https://bcas-crypto-saa-s-platform.vercel.app/api/",
    timeout: 60000,
  });
  instance.interceptors.request.use(
    function (response) {
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  return instance;
};

export default api;
