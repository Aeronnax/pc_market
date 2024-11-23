export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string | null;
}
export interface GetProductsRequest {
  category?: string;
  priceFrom?: number;
  priceTo?: number;
}
export type GetProductsResponse = Product[];
