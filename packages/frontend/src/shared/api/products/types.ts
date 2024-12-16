import { AxiosResponse } from 'axios';

export const categories = [
  'Видеокарты',
  'Процессоры',
  'Материнские платы',
] as const;
export type ProductCategory = (typeof categories)[number];

export type Product = Components.Schemas.ProductDTO;

export interface GetProductsRequest {
  category?: ProductCategory;
  priceFrom?: number;
  priceTo?: number;
}
export type GetProductsResponse = AxiosResponse<Product[]>;
