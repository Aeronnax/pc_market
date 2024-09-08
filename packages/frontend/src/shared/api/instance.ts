import axios from 'axios';

const backendHost = process.env.NEXT_PUBLIC_BACKEND_APP_HOST;

if (!backendHost) {
  throw new Error('В .env файле не найден NEXT_PUBLIC_BACKEND_APP_HOST');
}

export const instance = axios.create({
  baseURL: backendHost,
});
