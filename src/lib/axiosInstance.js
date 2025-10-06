// src/api/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      console.error(
        "❌ Response error:",
        error.response.status,
        error.response.data
      );

      // 인증 실패 처리
      if (error.response.status === 401) {
        localStorage.removeItem("accessToken");
        window.location.href = "/login";
      }
    } else if (error.request) {
      console.error("⚠️ No response received:", error.request);
    } else {
      console.error("🚨 Request setup error:", error.message);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;