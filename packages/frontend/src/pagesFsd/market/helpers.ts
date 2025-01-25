import { MarketFilters } from '../../widgets/market/FiltersPanel/types';

export const transformFiltersToApi = (
  filters: MarketFilters
): Omit<Components.Schemas.ProductListRequestDTO, 'skip' | 'take'> => {
  return {
    minPrice: filters.priceRange?.[0] ?? undefined,
    maxPrice: filters.priceRange?.[1] ?? undefined,
    categoryId: filters.categoryId,
  };
};
