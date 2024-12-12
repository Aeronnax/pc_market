import { GetProductsRequest } from 'src/shared/api/products/types';
import { Filters } from './types';

export const transformFilters = (store: Filters): GetProductsRequest => {
  return {
    category: store.category ?? undefined,
    priceFrom: store.priceRange?.[0],
    priceTo: store.priceRange?.[1],
  };
};
