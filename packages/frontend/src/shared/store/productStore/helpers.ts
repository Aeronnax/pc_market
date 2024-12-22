import { Filters } from './types';

export const transformFilters = (
  store: Filters
): Omit<Components.Schemas.ProductListRequestDTO, 'skip' | 'take'> => {
  return {
    categoryId: store.categoryId ?? undefined,
    minPrice: store.priceRange?.[0],
    maxPrice: store.priceRange?.[1],
  };
};
