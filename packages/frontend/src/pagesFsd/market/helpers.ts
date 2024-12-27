import { MarketFilters } from '../../widgets/market/FiltersPanel/types';

export const transformFiltersToApi = (
  filters: MarketFilters
): Omit<Components.Schemas.ProductListRequestDTO, 'skip' | 'take'> => {
  return {
    minPrice: filters.priceRange?.[0],
    maxPrice: filters.priceRange?.[1],
    categoryId: filters.categoryId,
  };
};
