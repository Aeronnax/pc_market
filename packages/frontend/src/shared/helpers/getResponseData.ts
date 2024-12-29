import { AxiosResponse } from 'axios';

export const getResponseData = async <T>(
  response: Promise<AxiosResponse<T>>
): Promise<T> => (await response).data;
