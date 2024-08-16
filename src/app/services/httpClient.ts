import axios from 'axios';

import { localStorageKeys } from '../config/localStorageKeys';

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

httpClient.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);
  const currentCompanyId = localStorage.getItem(
    localStorageKeys.CURRENT_COMPANY,
  );

  if (accessToken) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  if (currentCompanyId) {
    // eslint-disable-next-line no-param-reassign
    config.headers['X-Company-Id'] = currentCompanyId;
  }

  return config;
});
