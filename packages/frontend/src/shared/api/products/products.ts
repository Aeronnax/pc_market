import { instance } from '../instance';
import { AxiosResponse } from 'axios';

export const getCategories = (): Promise<
  AxiosResponse<Paths.GetCategories.Responses.$200>
> => {
  return instance.get('/categories');
};

export const getProducts = (
  request?: Paths.GetProducts.RequestBody
): Promise<AxiosResponse<Paths.GetProducts.Responses.$200>> => {
  return instance.post('/products', request);
};
