import axios from 'axios';
import { ROUTES } from './routes.js';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

userRequest.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('pear-token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

userRequest.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      (error.response.status === 401 && !originalRequest._retry) ||
      error.response.data.message === 'Token Expired!'
    ) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem('pear-refreshToken');
        const response = await axios.post(`${BASE_URL}/auth/refresh`, {
          refreshToken,
        });

        localStorage.setItem('pear-token', response.data.token);

        userRequest.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${response.data.token}`;
        originalRequest.headers[
          'Authorization'
        ] = `Bearer ${response.data.token}`;

        return userRequest(originalRequest);
      } catch (error) {
        localStorage.removeItem('pear-token');
        localStorage.removeItem('pear-refreshToken');
        window.location.href = [ROUTES.login];
      }
    }

    return Promise.reject(error); // Re-throwing error for custom handling by calling code.
  }
);
