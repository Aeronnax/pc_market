import { GetProductsRequest, GetProductsResponse } from './types';
import { instance } from '../instance';

export const getProducts = (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  request?: GetProductsRequest
): Promise<GetProductsResponse> => {
  return instance.get('/products');
};
