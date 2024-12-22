import { instance } from '../instance';
import { AxiosResponse } from 'axios';

export const getCategories = (): Promise<
  AxiosResponse<Components.Schemas.CategoriesDTO[]>
> => {
  return instance.get('/categories');
};

export const getProducts = (
  request?: Components.Schemas.ProductListRequestDTO
): Promise<AxiosResponse<Components.Schemas.ProductDTO[]>> => {
  return instance.post('/products', request);
};
