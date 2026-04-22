import axios, { AxiosError } from 'axios';
import { env } from '@/lib/env';

const apiClient = axios.create({
  baseURL: env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

apiClient.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error instanceof AxiosError) {
      if (error.response?.status === 401) {
        console.warn('Unauthorized request:', error.config?.url);
      }
      return Promise.reject(error);
    }

    return Promise.reject(new Error('An unexpected API error occurred.'));
  }
);

export default apiClient;
