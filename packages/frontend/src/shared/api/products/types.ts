export const categories = [
  'Видеокарты',
  'Процессоры',
  'Материнские платы',
] as const;
export type ProductCategory = (typeof categories)[number];

export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  category: ProductCategory;
}
export interface GetProductsRequest {
  category?: ProductCategory;
  priceFrom?: number;
  priceTo?: number;
}
export type GetProductsResponse = Product[];
