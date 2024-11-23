import { Product } from '../../api/products/types';

export interface ProductWithQuantity extends Product {
  quantity: number;
}
