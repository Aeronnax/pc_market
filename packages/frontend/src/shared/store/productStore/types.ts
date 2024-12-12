import { ProductCategory } from 'src/shared/api/products/types';

export interface Filters {
  category?: ProductCategory;
  priceRange?: [number | undefined, number | undefined];
}
