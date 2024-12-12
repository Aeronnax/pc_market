import { Product } from 'src/shared/api/products/types';

export interface ProductWithQuantity extends Product {
  quantity: number;
}
