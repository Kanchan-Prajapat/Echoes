import axios from "axios";

import { useAuthStore } from "@/auth/stores/authStore";
import "./env";
const api = axios.create({

  baseURL:
    const API_URL = import.meta.env.VITE_API_URL;

  headers: {

    "Content-Type":
      "application/json",

  },

});



/* -------------------------------
   Request Interceptor
-------------------------------- */

api.interceptors.request.use(

  (config) => {

    const token =
      useAuthStore
        .getState()
        .token;

    if (token) {

      config.headers.Authorization =
        `Bearer ${token}`;

    }

    return config;

  },

  (error) =>

    Promise.reject(error)

);



/* -------------------------------
   Response Interceptor
-------------------------------- */

api.interceptors.response.use(

  (response) => response,

  (error) => {

    if (

      error.response?.status === 401

    ) {

      useAuthStore
        .getState()
        .logout();

    }

    return Promise.reject(error);

  }

);

export default api;